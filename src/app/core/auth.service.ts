import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

import { NotificationService } from './notification.service';

@Injectable()
export class AuthService {

  authState: any = null;

  constructor(public notification: NotificationService, private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router) {

    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth;
    });
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }

  // Returns
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Anonymous User
  get currentUserAnonymous(): boolean {
    return this.authenticated ? this.authState.isAnonymous : false;
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (!this.authState) {
      return 'Guest';
    } else if (this.currentUserAnonymous) {
      return 'Anonymous';
    } else {
      return this.authState['displayName'] || this.authState['email'];
    }
  }
  // Returns current user display img or Guest
  get currentUserDisplayImg(): string {
    if (!this.authState) {
      return '../../assets/images/default_photo.jpg';
    } else if (this.currentUserAnonymous) {
      return '../../assets/images/default_photo.jpg';
    } else {
      return this.authState['photoURL'] || '../../assets/images/default_photo.jpg';
    }
  }
  //// Social Auth ////

// this.notification.showSuccess('Your are logged in!');
// this.notification.showError(err.message)
  githubLogin() {
    const provider = new firebase.auth.GithubAuthProvider();
    return this.socialSignIn(provider);
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  facebookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider();
    return this.socialSignIn(provider);
  }

  twitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider();
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.authState = credential.user;
        this.notification.showSuccess('Your are logged in!');
        this.updateUserData();
      })
      .catch(error => this.notification.showError(error));
  }


  //// Anonymous Auth ////

  anonymousLogin() {
    return this.afAuth.auth.signInAnonymously()
      .then((user) => {
        this.authState = user;
        this.notification.showSuccess('Your are logged in Anonymously!');
      })
      .catch(error => this.notification.showError(error));
  }

  //// Email/Password Auth ////

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.notification.showSuccess('Your are logged in!');
        this.authState = user;
        this.updateUserData();
      })
      .catch(error => this.notification.showError(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.notification.showSuccess('Your are logged in!');
        this.authState = user;
        this.updateUserData();
      })
      .catch(error => this.notification.showError(error));
  }

  // Sends email allowing user to reset password
  resetPassword(email: string) {
    const fbAuth = firebase.auth();

    return fbAuth.sendPasswordResetEmail(email)
      .then(() => console.log('email sent'))
      .catch(error => this.notification.showError(error));
  }


  //// Sign Out ////

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }


  //// Helpers ////

  private updateUserData(): void {
    // Writes user name and email to realtime db
    // useful if your app displays information about users or for admin features

    const path = `users/${this.currentUserId}`; // Endpoint on firebase
    const data = {
      email: this.authState.email,
      name: this.authState.displayName
    };
    this.db.object(path).update(data)
    .catch(error => this.notification.showError(error));

  }
}

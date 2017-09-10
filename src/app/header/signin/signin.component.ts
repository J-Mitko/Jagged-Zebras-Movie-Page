import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/ng2-bootstrap';
import { AuthService } from '../../core/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../core/notification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userSignInFrom: FormGroup;
  @ViewChild('signinModal') public signinModal: ModalDirective;

  formErrors = {
    'email': '',
    'password': ''
  };

  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email must be a valid email'
    },
    'password': {
      'required': 'Password is required.',
      'pattern': 'Password must include at least one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 40 characters long.',
    }
  };

  constructor(public notification: NotificationService,
    private fb: FormBuilder, private auth: AuthService) {
    this.buildForm();
  }

  ngOnInit() {
  }

  buildForm(): void {
    this.userSignInFrom = this.fb.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(3),
        Validators.maxLength(25)
      ]
      ],
    });

    this.userSignInFrom.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // reset validation messages
  }

  show() {
    this.signinModal.show();
  }
  hide() {
    this.signinModal.hide();
  }

  signInWithGoogle(): void {
    this.auth.googleLogin()
    .then(() => { this.hide(); this.notification.showSuccess('Your are logged in!'); })
    .catch((err) => this.notification.showError(err.message));
  }

  signInWithFacebook(): void {
    this.auth.facebookLogin()
    .then(() => { this.hide(); this.notification.showSuccess('Your are logged in!'); })
    .catch((err) => this.notification.showError(err.message));
  }

  login(): void {
    this.auth.emailLogin(this.userSignInFrom.value['email'], this.userSignInFrom.value['password'])
    .then(() => { this.hide(); this.notification.showSuccess('Your are logged in!'); })
    .catch((err) => this.notification.showError(err.message));
  }

  onValueChanged(data?: any) {
    if (!this.userSignInFrom) {
      return;
    }
    const form = this.userSignInFrom;

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (this.formErrors.hasOwnProperty(field)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
}

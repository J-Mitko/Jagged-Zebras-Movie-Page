import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { DocumentRef } from '../shared/document.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: '';

  constructor(public auth: AuthService, private docRef: DocumentRef) { }

  ngOnInit() {
  }

  close() {
    const container = this.docRef.nativeDocument.getElementsByClassName('fb-profile-container')[0];
    container.classList.remove('fb-profile-container');
    container.classList.add('fb-profile-container-hidden');
  }

}

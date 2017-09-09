import { Component, OnInit, ViewChild, NgModule, ViewContainerRef } from '@angular/core';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/ng2-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('signupModal') signupModal: SignupComponent;

  @ViewChild('signinModal') signinModal: SigninComponent;
  constructor(private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
  }
}

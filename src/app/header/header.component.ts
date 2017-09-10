import { Component, OnInit, ViewChild, NgModule, ViewContainerRef } from '@angular/core';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/ng2-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthService } from '../core/auth.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('signupModal') signupModal: SignupComponent;
  @ViewChild('signinModal') signinModal: SigninComponent;
  constructor(public toastr: ToastsManager, public auth: AuthService, private viewContainerRef: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(viewContainerRef);
  }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut();
    this.toastr.info('Logged out', 'Info');
  }
}

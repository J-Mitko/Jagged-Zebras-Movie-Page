import { NgModule, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/ng2-bootstrap';

import { HeaderComponent } from './header.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { routes } from './header.router';
import { AuthGuard } from '../core/auth.guard';

@NgModule({
  declarations: [
    HeaderComponent,
    SigninComponent,
    SignupComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routes,
    ModalModule
  ],
  providers: [AuthGuard]
})
export class HeaderModule { }

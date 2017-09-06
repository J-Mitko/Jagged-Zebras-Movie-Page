import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { routes } from './header.router';

@NgModule({
  declarations: [
    HeaderComponent,
    SigninComponent,
    SignupComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routes
  ]
})
export class HeaderModule { }

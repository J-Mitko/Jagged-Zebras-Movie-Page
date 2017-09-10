import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/ng2-bootstrap';
import { routes } from './header/header.router';

import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './header/signup/signup.component';
import { SigninComponent } from './header/signin/signin.component';
import { FooterComponent } from './footer/footer.component';

import { WindowRef } from './shared/window.service';
import { MoviesService } from './movies/movies.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        FooterComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        routes
      ],
      providers: [
        {
          provide: APP_BASE_HREF, useValue: '/'
        },
        HttpClient,
        HttpHandler,
        MoviesService,
        WindowRef,
        AngularFireDatabase
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});

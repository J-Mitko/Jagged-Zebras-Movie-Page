import { MoviesModule } from './movies/movies.module';
import { HeaderModule } from './header/header.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/ng2-bootstrap';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

///// Start FireStarter
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
export const firebase = environment.firebase;

// Core
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

import { routes } from './app.router';

import { MoviesService } from './movies/movies.service';
import { NotificationService } from './core/notification.service';
import { DocumentRef } from './document.service';
import { WindowRef } from './shared/window.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutComponent,
    ProfileComponent,

    HomeComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    routes,
    AngularFireModule.initializeApp(firebase),
    HeaderModule,
    ModalModule.forRoot(),
    MoviesModule,
    SharedModule.forRoot(),
    ToastModule.forRoot()
  ],
  providers: [
    MoviesService,
    NotificationService,
    DocumentRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

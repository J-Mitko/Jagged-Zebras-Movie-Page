import { MoviesModule } from './movies/movies.module';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/ng2-bootstrap';

///// Start FireStarter
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
export const firebase = environment.firebase;

// Core
import { CoreModule } from './core/core.module';

import { HeaderModule } from './header/header.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';


import { routes } from './app.router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    CoreModule,
    routes,
    AngularFireModule.initializeApp(firebase),
    HeaderModule,
    ModalModule.forRoot(),
    MoviesModule,
    SharedModule.forRoot(),
    routes
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

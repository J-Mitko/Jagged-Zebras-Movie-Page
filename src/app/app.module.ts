import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/ng2-bootstrap';

///// Start FireStarter
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = environment.firebaseConfig;

// Core
import { CoreModule } from './core/core.module';

import { HeaderModule } from './header/header.module';
import { SafePipe } from './shared/safe.pipe';
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { AboutComponent } from './about/about.component';
import { SelectComponent } from './select/select.component';


import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    AboutComponent,
    SelectComponent,
    SafePipe,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    routes,
    AngularFireModule.initializeApp(firebaseConfig),
    HeaderModule,
    ModalModule.forRoot()
  ],
  providers: [
    SafePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

///// Start FireStarter
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = environment.firebaseConfig;

// Core
import { CoreModule } from './core/core.module';

import { SafePipe } from './shared/safe.pipe';
import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { AboutComponent } from './about/about.component';
import { SelectComponent } from './select/select.component';
import { UserLoginComponent} from './user-login/user-login.component';

import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    AboutComponent,
    SelectComponent,
    SafePipe,
    UserLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    routes,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [
    SafePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

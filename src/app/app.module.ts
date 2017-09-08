import { MoviesModule } from './movies/movies.module';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderModule } from './header/header.module';
import { SafePipe } from './shared/safe.pipe';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    MoviesModule,
    routes
  ],
  providers: [
    SafePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

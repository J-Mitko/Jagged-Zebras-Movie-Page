import { MoviesModule } from './movies/movies.module';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderModule } from './header/header.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import { routes } from './app.router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    MoviesModule,
    SharedModule.forRoot(),
    routes
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

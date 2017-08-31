import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    SafePipe
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [
    SafePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

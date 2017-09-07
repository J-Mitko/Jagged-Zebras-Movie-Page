import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ScreenComponent } from './screen/screen.component';
import { SelectComponent } from './select/select.component';

export const router: Routes = [
    { path: '', component: SelectComponent },
    { path: 'about', component: AboutComponent },
    { path: 'video/:id', component: ScreenComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

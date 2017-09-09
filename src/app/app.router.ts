import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieGridComponent } from './movies/movie-grid/movie-grid.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const router: Routes = [
    { path: '', component: MovieGridComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '404' },
    { path: '404', component: NotFoundComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

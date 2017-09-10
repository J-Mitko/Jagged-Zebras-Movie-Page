import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MoviesGridResolverService } from './movies/movie-resolvers/movies-grid-resolver.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

export const router: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'home', component: HomeComponent, resolve: {
            movies: MoviesGridResolverService
        }
    },
    { path: 'profile', component: ProfileComponent, resolve: {
        movies: MoviesGridResolverService
        }
    },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '404' },
    { path: '404', component: NotFoundComponent }
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);

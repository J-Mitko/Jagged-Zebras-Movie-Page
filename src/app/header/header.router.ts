import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { AuthGuard } from '../core/auth.guard';
import { MoviesGridResolverService } from '../movies/movie-resolvers/movies-grid-resolver.service';

export const router: Routes = [
    {
        path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], resolve: {
        movies: MoviesGridResolverService
        }
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

import { FavouritesResolverService } from './../movies/movie-resolvers/favourites-resolver.service';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { AuthGuard } from '../core/auth.guard';

export const router: Routes = [
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        resolve: {
            movies: FavouritesResolverService
        }
    }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

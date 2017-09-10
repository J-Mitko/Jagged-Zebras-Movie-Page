import { ExplorerComponent } from './explorer/explorer.component';
import { SearchComponent } from './search/search.component';
import { SearchMovieResolverService } from './movie-resolvers/search-movie-resolver.service';
import { MoviesGridResolverService } from './movie-resolvers/movies-grid-resolver.service';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailResolverService } from './movie-resolvers/movie-detail-resolver.service';

const routes: Routes = [
  {
    path: 'movies',
    component: ExplorerComponent,
    resolve: {
      movies: MoviesGridResolverService
    }
  },
  {
    path: 'movies/search/:name',
    component: SearchComponent,
    resolve: {
      movies: SearchMovieResolverService
    }
  },
  {
    path: 'movie/details/:id',
    component: MovieDetailsComponent,
    resolve: {
      movie: MovieDetailResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    MovieDetailResolverService,
    MoviesGridResolverService,
    SearchMovieResolverService
  ]
})
export class MoviesRoutingModule { }

import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailResolverService } from './movie-detail-resolver.service';

const routes: Routes = [
  { path: '', component: MovieGridComponent },
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
  providers: [MovieDetailResolverService]
})
export class MoviesRoutingModule { }

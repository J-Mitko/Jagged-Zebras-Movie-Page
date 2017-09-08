import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: MovieGridComponent },
  { path: 'video/:id', component: MovieThumbnailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }

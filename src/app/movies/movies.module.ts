import { MoviesService } from './movies.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  declarations: [MovieGridComponent, MovieThumbnailComponent, MovieDetailsComponent],
  providers: [MoviesService]
})
export class MoviesModule { }

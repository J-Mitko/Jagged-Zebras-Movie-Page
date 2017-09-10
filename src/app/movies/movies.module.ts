import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './movies.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieGridComponent } from './movie-grid/movie-grid.component';
import { MovieThumbnailComponent } from './movie-thumbnail/movie-thumbnail.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { RouterModule } from '@angular/router';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from './../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { SearchComponent } from './search/search.component';
import { ExplorerComponent } from './explorer/explorer.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    HttpClientModule,
    SharedModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule.forRoot()
  ],
  declarations: [
    MovieGridComponent,
    MovieThumbnailComponent,
    MovieDetailsComponent,
    SearchComponent,
    ExplorerComponent
  ],
  exports: [MovieGridComponent, MovieThumbnailComponent ],
  providers: []
})
export class MoviesModule { }


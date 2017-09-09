import { IMovie } from './../movie.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { SafePipe } from '../../shared/safe.pipe';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MovieThumbnailComponent implements OnInit {
  private poster = 'http://image.tmdb.org/t/p/w300';
  @Input() movie: IMovie;

  constructor(private route: ActivatedRoute, public sanitizer: SafePipe) { }

  ngOnInit() {
    console.log(this.movie.videos);
  }

  posterUrl() {
    return this.poster + this.movie.poster_path;
  }
}

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

  private key: string;
  private poster: string;
  @Input() movie: IMovie;

  constructor(private route: ActivatedRoute, public sanitizer: SafePipe) { }

  ngOnInit() {
    this.key = this.movie.key;
    this.poster = `http://i3.ytimg.com/vi/${this.key}/maxresdefault.jpg`;
  }

  posterUrl() {
    return this.poster;
  }
}

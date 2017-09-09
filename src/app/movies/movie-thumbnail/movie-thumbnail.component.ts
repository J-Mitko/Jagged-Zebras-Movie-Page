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
    // this.key = this.movie.key;
    // this.poster = `http://i3.ytimg.com/vi/${this.key}/maxresdefault.jpg`;
    const path_url = this.movie['backdrop_path'];
    if (path_url) {
      this.poster = 'http://image.tmdb.org/t/p/w1280/' + path_url;
    } else {
      this.poster = 'https://www.jetcharters.com/bundles/jetcharterspublic/images/image-not-found.jpg';
    }

  }

  posterUrl() {
    return this.poster;
  }
}

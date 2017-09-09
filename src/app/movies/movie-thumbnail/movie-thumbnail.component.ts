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
    console.log(path_url);
    if (path_url) {
      this.poster = 'http://image.tmdb.org/t/p/w500/' + path_url;
    } else {
      this.poster = 'https://lh3.googleusercontent.com/proxy/oPyemWAvacmNyseQ8RbH4_RXs6EFt5Wf8_OVUN-bhwb1jrPrJyVGvhavJkBNrpHaKyUYnvLf66h9fCITOfk_fhQ=w500-h281-p';
    }

  }

  posterUrl() {
    return this.poster;
  }
}

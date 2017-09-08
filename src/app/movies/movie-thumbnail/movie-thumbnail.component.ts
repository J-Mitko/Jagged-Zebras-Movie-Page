import { MoviesService } from './../movies.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { SafePipe } from '../../shared/safe.pipe';

@Component({
  selector: 'app-movie-thumbnail',
  templateUrl: './movie-thumbnail.component.html',
  styleUrls: ['./movie-thumbnail.component.css']
})
export class MovieThumbnailComponent implements OnInit {
  private poster: string;
  @Input() movie;
  constructor(private route: ActivatedRoute, public sanitizer: SafePipe, private movieService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      const movieId = this.movie.id;
      this.movieService.getDetailsForMovie(movieId).subscribe(mov => {
        this.movie = mov;
        const key = this.movie.videos['results'][0].key;
        this.poster = `http://i3.ytimg.com/vi/${key}/maxresdefault.jpg`;
      });
    });
  }

  posterUrl() {
    return this.poster;
  }
}

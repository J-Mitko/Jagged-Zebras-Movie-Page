import { Observable } from 'rxjs/Observable';
import { MoviesService } from './../movies.service';
import { IMovie } from './../movie.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { SafePipe } from './../../shared/safe.pipe';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovie;
  youtubeUrl: string;
  backgroundUrl: string;

  constructor(
    private route: ActivatedRoute,
    public sanitizer: SafePipe,
    private movieService: MoviesService
  ) { }

  ngOnInit() {
    // Add from data guard
    this.route.data.subscribe((data: { movie: IMovie }) => {
      this.movie = data.movie;
      const key = this.movie.videos['results'][0].key;
      this.youtubeUrl = `https://www.youtube.com/embed/${key}?showinfo=0&modestbranding=0&rel=0`;
      this.backgroundUrl = `http://i3.ytimg.com/vi/${key}/maxresdefault.jpg`;
    }, (err: Response) => {
      console.log('error in movie detals component');
      console.log(err.statusText);
    });
  }

  movieUrl() {
    return this.sanitizer.transform(this.youtubeUrl);
  }
}

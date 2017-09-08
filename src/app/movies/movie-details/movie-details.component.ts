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

  constructor(private route: ActivatedRoute, public sanitizer: SafePipe, private movieService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(res => {
      const movieId = res['id'];
      this.movieService.getDetailsForMovie(movieId).subscribe(mov => {
        this.movie = mov;
        const key = this.movie.videos['results'][0].key;
        this.youtubeUrl = `https://www.youtube.com/embed/${key}?showinfo=0&modestbranding=0&rel=0`;
      });
    });
  }

  movieUrl() {
    return this.sanitizer.transform(this.youtubeUrl);
  }
}

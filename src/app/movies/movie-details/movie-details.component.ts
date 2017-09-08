import { Subscriber } from 'rxjs/Rx';
import { MoviesService } from './../movies.service';
import { MovieResponse } from './../movie.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, UrlSegment } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SafePipe } from './../../shared/safe.pipe';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {


  url: string;
  src: string;
  movie;
  constructor(private route: ActivatedRoute, public sanitizer: SafePipe, private movieService: MoviesService) { }

  ngOnInit() {
    this.movieService.getObservable()
      .subscribe(res => this.movie = res)
      .add(() => {
        console.log(this.movie);
        const youtube = this.movie.videos.results[0].key;
        this.src = `https://www.youtube.com/embed/${youtube}?showinfo=0&modestbranding=0&rel=0`;
      });

  }

  movieUrl() {
    return this.sanitizer.transform(this.src);
  }

}

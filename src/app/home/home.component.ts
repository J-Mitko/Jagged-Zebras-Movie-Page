import { IMovie } from './../movies/movie.model';
import { Component, OnInit} from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { ActivatedRoute } from '@angular/router';
import { WindowRef } from '../shared/window.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  popularMovies: IMovie[];

  constructor(private movieService: MoviesService,
    private route: ActivatedRoute) {
    this.title = 'The Jagged Zebras Movie Page';
  }

  ngOnInit() {

  }

  getMovies() {
    return this.route.data.subscribe((data: { movies: IMovie[] }) => {
      return data.movies.splice(0, 12);
    }, (err: Response) => {
      console.log('error in movies grid component');
      console.log(err.statusText);
    });
  }
}

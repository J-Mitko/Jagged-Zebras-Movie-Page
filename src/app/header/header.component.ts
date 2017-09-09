import { Router } from '@angular/router';
import { MoviesService } from './../movies/movies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private movieService: MoviesService, private router: Router) {
  }

  getMovies(query: string) {
    this.router.navigateByUrl('/movies/search/' + query);
  }

  ngOnInit() {
  }
}

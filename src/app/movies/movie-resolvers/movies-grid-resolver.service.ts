import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { MoviesService } from './../movies.service';
import { IMovie } from './../movie.model';

@Injectable()
export class MoviesGridResolverService implements Resolve<IMovie[]> {

  constructor(private movieService: MoviesService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovie[]> {
    return this.movieService.getMoviesByPopularity()
      .take(1)
      .map(res => {
        if (res) {
          return res;
        } else {
          this.router.navigate(['/']);
          return null;
        }
      });
  }
}

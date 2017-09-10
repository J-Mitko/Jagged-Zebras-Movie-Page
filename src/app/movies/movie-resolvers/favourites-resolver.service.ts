import { AuthService } from './../../core/auth.service';
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
export class FavouritesResolverService implements Resolve<IMovie[]> {

  constructor(private movieService: MoviesService,
    private router: Router,
    private auth: AuthService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovie[]> | Observable<Object> {
    const userId = this.auth.currentUserId;

    return this.movieService.getFavourites(userId).take(1)
      .map(res => {
        if (res) {
          return { results: Object.values(res['results']) };
        } else {
          this.router.navigate(['/']);
          return null;
        }
      });
  }
}


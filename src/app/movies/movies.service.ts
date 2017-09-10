import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { IMovie } from './movie.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MoviesService {

  private apiUrl = 'http://localhost:3000/results';
  private api_key = '28c57aa94fd0201c8fa6edc867cd6815';

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  getDetailsForMovie(movieId: string) {
    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.api_key}&append_to_response=videos`;
    return this.http
      .get<IMovie>(movieDetailsUrl)
      .map(res => {
        return res;
      });
  }
  getMoviesByPopularity(): Observable<IMovie[]> | FirebaseListObservable<IMovie[]> {
    // Use this for internet and local json
    // return this.http
    //   .get<IMovie[]>(this.apiUrl)
    //   .map(res => {
    //     return res;
    //   });


    // Use this for firebase
    return this.db.list('/results', {
      query: {
        limitToLast: 12
      }
    });
  }
}


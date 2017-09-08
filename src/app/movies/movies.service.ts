import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { IMovie } from './movie.model';

@Injectable()
export class MoviesService {
  private apiUrl = 'http://localhost:3000/results';
  private api_key = '28c57aa94fd0201c8fa6edc867cd6815';
  constructor(private http: HttpClient) { }

  getDetailsForMovie(movieId: string) {
    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.api_key}&append_to_response=videos`;
    return this.http
      .get<IMovie>(movieDetailsUrl)
      .map(res => {
        return res;
      });
  }
  getMoviesByPopularity(): Observable<IMovie[]> {
    return this.http
      .get<IMovie[]>(this.apiUrl)
      .map(res => {
        return res;
      });
    // .catch((err: Response) => {
    //   Observable.throw(err.statusText);
    // });
  }
  getAll() {
    return [
      { title: 'Honest Trailers - Guardians of the Galaxy 2', id: 'z_p3OEpeviM' },
      { title: 'Marvel\'s Inhumans - Official Trailer 1', id: '1sYF1SXcWqQ' },
      { title: 'Justice League Comic-Con Trailer (2017)', id: 'DblEwHkde8U' },
      { title: 'IT Trailer 2 (Extended) 2017', id: 'xE0kRwDXn7o' },
      { title: '"Thor: Ragnarok" Official Trailer', id: 'ue80QwXMRHg' },
      { title: 'Logan Trailer #2 (2017) | Movieclips Trailers', id: 'DekuSxJgpbY' }
    ];
  }
}


import { MovieResponse } from './movie.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class MoviesService {
  apiUrl = 'http://localhost:3000/results';
  constructor(private http: HttpClient) { }

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


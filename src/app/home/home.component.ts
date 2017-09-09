import { IMovie } from './../movies/movie.model';
import { Component, OnInit, HostListener } from '@angular/core';
import { MoviesService } from '../movies/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string;
  document: Document;
  window: Window;
  popularMovies: IMovie[];

  constructor(private movieService: MoviesService,
    private route: ActivatedRoute) {
    this.document = document;
    this.window = window;
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

  @HostListener('window:scroll', ['$event'])

  onScroll(ev) {
    this.window.requestAnimationFrame(this.scrollHandler);
  }

  private scrollHandler = () => {
    if (!this.document.getElementsByClassName('hidden-btn')) {
      return;
    }
    const scrollY = this.window.pageYOffset;
    let btns: any;
    let btnsArr = Array<any>();
    if (scrollY >= 1960) {
      btns = this.document.getElementsByClassName('hidden-btn');
      btnsArr = Array.from(btns);
      btnsArr.forEach((btn) => {
        setTimeout(() => {
          btn.classList.remove('hidden-btn');
          btn.classList.add('is-showing');
        }, 0);
      });
    }
  }
}

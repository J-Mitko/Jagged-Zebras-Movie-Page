import { IMovie } from './../movie.model';
import { MoviesService } from './../movies.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { WindowRef } from '../../shared/window.service';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit {

  movies: FirebaseListObservable<IMovie[]> | IMovie[];
  document: Document;

  constructor(private movieService: MoviesService,
    private route: ActivatedRoute,
    private winRef: WindowRef) {
    this.document = document;
  }

  ngOnInit() {
    this.route.data.subscribe((data: { movies: IMovie[] }) => {
      this.movies = data.movies.splice(0, 12);
    }, (err: Response) => {
      console.log('error in movies grid component');
      console.log(err.statusText);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(ev) {
    this.winRef.nativeWindow.requestAnimationFrame(this.scrollHandler);
  }

  private scrollHandler = () => {
    if (!this.document.getElementsByClassName('hidden-img')) {
      return;
    }
    const scrollY = this.winRef.nativeWindow.pageYOffset;
    let imgs: any;
    let imgsArr: Array<any>;
    let spans: any;
    let spansArr: Array<any>;

    if (scrollY >= 360) {
      imgs = this.document.getElementsByClassName('hidden-img');
      imgsArr = Array.from(imgs);
      imgsArr.forEach((img, i) => {
        setTimeout(() => {
          img.classList.remove('hidden-img');
          img.classList.add('is-showing');
        }, 100 * ((i + 1) * 2));

        spans = this.document.getElementsByClassName('hidden-title');
        spansArr = Array.from(spans);
        spansArr.forEach((span, j) => {
          setTimeout(() => {
            span.classList.remove('hidden-title');
            span.classList.add('title');
          }, 120 * ((j + 1) * 2));
        });
      });
    }
  }

}

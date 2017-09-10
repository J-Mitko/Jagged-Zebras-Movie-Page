import { IMovie } from '../movie.model';
import { MoviesService } from '../movies.service';
import { DocumentRef } from '../../shared/document.service';
import { WindowRef } from '../../shared/window.service';
import { Component, OnInit, HostListener, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-movie-grid',
  templateUrl: './movie-grid.component.html',
  styleUrls: ['./movie-grid.component.css']
})
export class MovieGridComponent implements OnInit {
  @Input() numberOfMoviesToShow = 9;
  @Input() showPagination = true;
  @Input() imageRotation = false;
  @Input() scrollOffset = -1;
  @Input() scrollDelay = 100;

  collSize: number;
  page = 1;
  start: number;
  end: number;

  @Input() showAllFlag = false;
  movies: FirebaseListObservable<IMovie[]> | IMovie[];

  allMovies: IMovie[];

  constructor(private movieService: MoviesService,
    private route: ActivatedRoute,
    private winRef: WindowRef,
    private docRef: DocumentRef) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: { movies: IMovie[] }) => {
      this.allMovies = data.movies;
      this.initializePagination();
    }, (err: Response) => {
      console.log('error in movies grid component');
      console.log(err.statusText);
    });
    if (!this.imageRotation) {
      this.winRef.nativeWindow.requestAnimationFrame(this.scrollHandler);
    }
  }

  initializePagination() {
    this.collSize = this.allMovies.length;
    this.start = 0;
    if (this.numberOfMoviesToShow > this.allMovies.length) {
      this.end = this.allMovies.length;
    } else {
      this.end = this.numberOfMoviesToShow;
    }
    this.movies = this.allMovies.slice(this.start, this.end);
  }

  setPagination(page: number) {
    this.start = (page - 1) * this.numberOfMoviesToShow;
    this.end = Math.min(this.start + this.numberOfMoviesToShow, this.collSize);
    this.movies = this.allMovies.slice(this.start, this.end);
    if (!this.imageRotation) {
      this.winRef.nativeWindow.requestAnimationFrame(this.scrollHandler);
    }
  }


  @HostListener('window:scroll', ['$event'])
  onScroll(ev) {
    if (this.imageRotation) {
      this.winRef.nativeWindow.requestAnimationFrame(this.scrollHandler);
    }
  }

  private scrollHandler = () => {
    if (!this.docRef.nativeDocument.getElementsByClassName('hidden-img')) {
      return;
    }
    const scrollY = this.winRef.nativeWindow.pageYOffset;
    let imgs: any;
    let imgsArr: Array<any>;
    let spans: any;
    let spansArr: Array<any>;

    if (scrollY >= this.scrollOffset) {
      imgs = this.docRef.nativeDocument.getElementsByClassName('hidden-img');
      imgsArr = Array.from(imgs);
      imgsArr.forEach((img, i) => {
        setTimeout(() => {
          img.classList.remove('hidden-img');
          img.classList.add('is-showing');
        }, this.scrollDelay * ((i + 1) * 2));

        spans = this.docRef.nativeDocument.getElementsByClassName('hidden-title');
        spansArr = Array.from(spans);
        spansArr.forEach((span, j) => {
          setTimeout(() => {
            span.classList.remove('hidden-title');
            span.classList.add('title');
          }, this.scrollDelay * ((j + 1) * 2));
        });
      });
    }
  }

}

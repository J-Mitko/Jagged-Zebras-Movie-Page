import { IMovie } from './../movie.model';
import { MoviesService } from '../movies.service';
import { DocumentRef } from '../../shared/document.service';
import { WindowRef } from '../../shared/window.service';
import { Component, OnInit, HostListener, Input } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
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
  @Input() showMore = false;

  collSize = 0;
  page = 1;
  start: number;
  end: number;
  showMoreButton = false;

  movies: FirebaseListObservable<IMovie[]> | IMovie[];

  allMovies: IMovie[];

  constructor(private movieService: MoviesService,
    private route: ActivatedRoute,
    private winRef: WindowRef,
    private docRef: DocumentRef,
    private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.page = 1;
        this.ngOnInit();
      }
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data: { movies: Object }) => {
      this.allMovies = data.movies['results'] || data.movies[1];
      this.initializePagination();
      if (this.showMore) {
        this.collSize++;
      }
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

  setPagination(pageEvent: number) {
    this.start = (pageEvent - 1) * this.numberOfMoviesToShow;
    this.end = Math.min(this.start + this.numberOfMoviesToShow, this.collSize);
    this.movies = this.allMovies.slice(this.start, this.end);
    if (this.start >= this.collSize - this.numberOfMoviesToShow && this.showMore) {
      this.showMoreButton = true;
    } else {
      this.showMoreButton = false;
    }
    if (!this.imageRotation) {
      this.winRef.nativeWindow.requestAnimationFrame(this.scrollHandler);
    }
  }
  scrollToTop() {
    this.winRef.nativeWindow.scrollTo(0, 0);
  }

  loadMore() {
    const additionalMovies = this.movieService.getMoviesByPopularity(this.page++)
      .take(1).map(res => {
        return res;
      }).subscribe(res => {
        this.page = +res['page'] || +res[0];
        const toAdd = res['results'] || res[1];
        this.allMovies.push(...toAdd);
        this.initializePagination();
        this.setPagination(this.page);
      });
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

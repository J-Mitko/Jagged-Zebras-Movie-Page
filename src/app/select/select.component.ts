import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  movies;
  document: Document;
  window: Window;

  constructor() {
      this.movies = _movies;
      this.movies.forEach((movie) => {
        movie.url = `http://i3.ytimg.com/vi/${movie.id}/maxresdefault.jpg`;
      });
      this.document = document;
      this.window = window;
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(ev) {
      const scrollY = Math.round(this.window.pageYOffset);
      if (scrollY >= 360) {
          const imgs = this.document.getElementsByClassName('hidden-img');
          const imgsArr = Array.from(imgs);
          imgsArr.forEach ((img, i) => {
              setTimeout(() => {
                  img.classList.remove('hidden-img');
                  img.classList.add('is-showing');
              }, 100 * ((i + 1) * 2));

          const spans = this.document.getElementsByClassName('hidden-title');
          const spansArr = Array.from(spans);
          spansArr.forEach ((span, j) => {
              setTimeout(() => {
                  span.classList.remove('hidden-title');
                  span.classList.add('title');
            }, 120 * ((j + 1) * 2));
          });
        });
    }
  }

}

const _movies = [
  {title: 'Honest Trailers - Guardians of the Galaxy 2', id: 'z_p3OEpeviM' },
  {title: 'Marvel\'s Inhumans - Official Trailer 1', id: '1sYF1SXcWqQ'},
  {title: 'Justice League Comic-Con Trailer (2017)', id: 'DblEwHkde8U'},
  {title: 'IT Trailer 2 (Extended) 2017', id: 'xE0kRwDXn7o' },
  {title: '"Thor: Ragnarok" Official Trailer', id: 'ue80QwXMRHg'},
  {title: 'Logan Trailer #2 (2017) | Movieclips Trailers', id: 'DekuSxJgpbY'}
];

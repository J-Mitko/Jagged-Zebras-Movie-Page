import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title: string;
  document: Document;
  window: Window;

  constructor() {
    this.title = 'The Jagged Zebras Movie Page';
    this.document = document;
    this.window = window;
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

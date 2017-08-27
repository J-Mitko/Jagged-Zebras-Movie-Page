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

  onscroll(ev) {
    const scrollY = Math.round(this.window.pageYOffset);
    if (scrollY >= 1960) {
      const btns = this.document.getElementsByClassName('hidden-btn');
      const btnsArr = Array.from(btns);
      btnsArr.forEach((btn) => {
          setTimeout(() => {
            btn.classList.remove('hidden-btn');
            btn.classList.add('is-showing');
          }, 0);
      });
    }
  }
}

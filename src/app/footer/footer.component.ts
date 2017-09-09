import { Component, OnInit, HostListener } from '@angular/core';
import { WindowRef } from './../window.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  document: Document;

  constructor(private winRef: WindowRef) {
    this.document = document;
   }

  ngOnInit() {
  }

   @HostListener('window:scroll', ['$event'])

  onScroll(ev) {
    this.winRef.nativeWindow.requestAnimationFrame(this.scrollHandler);
  }

  private scrollHandler = () => {
    if (!this.document.getElementsByClassName('hidden-btn')) {
      return;
    }
    const scrollY = this.winRef.nativeWindow.pageYOffset;
    const pageHeight = this.document.documentElement.scrollHeight;
    let btns: any;
    let btnsArr = Array<any>();
    if (scrollY >= pageHeight * 52 / 100) {
      btns = this.document.getElementsByClassName('hidden-btn');
      btnsArr = Array.from(btns);
      btnsArr.forEach((btn) => {
        setTimeout(() => {
          btn.classList.remove('hidden-btn');
          btn.classList.add('is-showing');
        }, 1000);
      });
    }
  }

}

import { Component, OnInit, HostListener } from '@angular/core';
import { DocumentRef } from '../document.service';
import { WindowRef } from '../window.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private winRef: WindowRef,
  private docRef: DocumentRef) {
   }

  ngOnInit() {
  }

   @HostListener('window:scroll', ['$event'])

  onScroll(ev) {
    this.winRef.nativeWindow.requestAnimationFrame(this.scrollHandler);
  }

  private scrollHandler = () => {
    if (!this.docRef.nativeDocument.getElementsByClassName('hidden-btn')) {
      return;
    }
    const scrollY = this.winRef.nativeWindow.pageYOffset;
    const pageHeight = this.docRef.nativeDocument.documentElement.scrollHeight;
    let btns: any;
    let btnsArr = Array<any>();
    if (scrollY >= pageHeight * 52 / 100) {
      btns = this.docRef.nativeDocument.getElementsByClassName('hidden-btn');
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

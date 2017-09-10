import { Component } from '@angular/core';
import { WindowRef } from './window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private winRef: WindowRef) { }

  onDeactivate() {
    this.winRef.nativeWindow.scrollTo(0, 0);
  }

}

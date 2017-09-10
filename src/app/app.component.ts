import { Component , ViewContainerRef} from '@angular/core';
import { WindowRef } from './shared/window.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private winRef: WindowRef,public toastr: ToastsManager, public vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  onDeactivate() {
    this.winRef.nativeWindow.scrollTo(0, 0);
  }

}

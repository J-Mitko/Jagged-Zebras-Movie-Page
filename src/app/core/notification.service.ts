import { Injectable, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class NotificationService {

  constructor(public toastr: ToastsManager) {
   }

   showSuccess(msg) {
    this.toastr.success(msg, 'Success!');
  }

  showError(msg) {
    this.toastr.error(msg, 'Oops!');
  }

  showWarning(msg) {
    this.toastr.warning(msg, 'Alert!');
  }

  showInfo(msg) {
    this.toastr.info(msg);
  }
}

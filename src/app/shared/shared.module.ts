import { WindowRef } from './window.service';
import { SafePipe } from './safe.pipe';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SafePipe],
  exports: [CommonModule, FormsModule, RouterModule, SafePipe]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      providers: [ SafePipe, WindowRef ],
      ngModule: SharedModule
    };
  }
}

import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  providers: [AuthService , AngularFireDatabase],
  imports:   [AngularFireAuthModule]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { LoginPage } from './login';
import { FirebaseService } from '../../shared/services/firebase.service';

@NgModule({
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  declarations: [
    LoginPage
  ],
  entryComponents: [ ],
  providers: [
    FirebaseService
  ]
})
export class LoginModule {
  constructor() {
    console.log('LoginModule constructor');
  }
}

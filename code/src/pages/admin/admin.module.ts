import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AdminPage } from './admin';

@NgModule({
  imports: [
    IonicPageModule.forChild(AdminPage),
  ],
  declarations: [
      AdminPage
    ],
  entryComponents:[ ],
  providers:[ ]
})
export class AdminModule {
    constructor(){
        console.log('AdminModule constructor');
    }
}

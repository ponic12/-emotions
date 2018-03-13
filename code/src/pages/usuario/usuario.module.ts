import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { UsuarioService } from './usuario.service';
import { UsuarioPage } from './usuario';

@NgModule({
  imports: [
    IonicPageModule.forChild(UsuarioPage),
  ],
  declarations: [
    UsuarioPage
  ],
  entryComponents: [ ],
  providers: [
    UsuarioService
  ]
})
export class UsuarioModule {
  constructor() {
    console.log('UsuarioModule constructor');
  }
}

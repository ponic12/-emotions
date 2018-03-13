import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AdminService } from './admin.service';
import { AdminPage } from './admin';

import { EstadisticasPage } from './estadisticas/estadisticas';
import { InventarioPage } from './inventario/inventario';


@NgModule({
  imports: [
    IonicPageModule.forChild(AdminPage),
  ],
  declarations: [
      AdminPage,
      EstadisticasPage,
      InventarioPage
    ],
  entryComponents:[
    EstadisticasPage,
    InventarioPage
  ],
  providers:[
    AdminService
    ]
})
export class AdminModule {
    constructor(){
        console.log('AdminModule constructor');
    }
}

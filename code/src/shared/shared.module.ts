import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { StorageService } from './services/storage.service'
import { FwkServicesModule, ApplicationService, GlobalService } from 'fwk-services'


@NgModule({
   imports: [
      FwkServicesModule,
      HttpClientModule,
      IonicStorageModule.forRoot()
   ],
   providers: [
      StorageService,
      ApplicationService,
      GlobalService
   ]
})
export class SharedModule {
   static forRoot(): ModuleWithProviders {
      return {
         ngModule: SharedModule,
         providers: [
            ApplicationService,
            StorageService,
            GlobalService
         ]
      }
   }
}

import { NgModule, ModuleWithProviders } from '@angular/core'
import { IonicModule } from 'ionic-angular'
import { IonicStorageModule } from '@ionic/storage'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'

import { StorageService } from './services/storage.service'
import { PushingService } from './services/pushing.service'

import { FwkServicesModule, ApplicationService, GlobalService } from 'fwk-services'
import { FwkAuthModule, AuthService } from 'fwk-auth'
import { AngularFireAuth } from 'angularfire2/auth'

@NgModule({
   imports: [
      FwkAuthModule,
      FwkServicesModule,
      CommonModule,
      IonicModule,
      HttpClientModule,
      IonicStorageModule.forRoot()
   ],
   providers: []   
})
export class SharedModule {
   static forRoot(): ModuleWithProviders {
      return {
         ngModule: SharedModule,
         providers: [
            PushingService,
            AuthService,
            AngularFireAuth,
            ApplicationService,
            GlobalService            
         ]
      }
   }
}

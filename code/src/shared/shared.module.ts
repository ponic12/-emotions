import { NgModule, ModuleWithProviders } from '@angular/core'
import { IonicModule } from 'ionic-angular'
import { IonicStorageModule } from '@ionic/storage'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'

import { StorageService } from './services/storage.service'
import { PushingService } from './services/pushing.service'

import { FwkServicesModule, ApplicationService, GlobalService } from 'fwk-services'
import { FwkAuthModule, AuthService } from 'fwk-auth'
import 'firebase/storage'; 
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { FirebaseService } from './services/firebase.service'
import { FIREBASE_CONFIG } from './services/firebase.config'


@NgModule({
   imports: [
      FwkAuthModule,
      FwkServicesModule,
      CommonModule,
      IonicModule,
      HttpClientModule,
      IonicStorageModule.forRoot(),
      AngularFirestoreModule,
      AngularFireModule.initializeApp(FIREBASE_CONFIG)
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
            FirebaseService,
            ApplicationService,
            GlobalService            
         ]
      }
   }
}

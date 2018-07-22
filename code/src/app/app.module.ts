import { NgModule, ErrorHandler } from '@angular/core'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { CodePush } from '@ionic-native/code-push'

import { EmotionsApp } from './app.component'
import { SharedModule } from '../shared/shared.module'
import { ProgressBarComponent } from '../shared/components/progress-bar/progress-bar'

import 'firebase/storage';
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { FirebaseService } from '../shared/services/firebase.service'
import { FIREBASE_CONFIG } from '../shared/services/firebase.config'


@NgModule({
   declarations: [
      EmotionsApp,
      ProgressBarComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      IonicModule.forRoot(EmotionsApp),
      AngularFirestoreModule,
      AngularFireModule.initializeApp(FIREBASE_CONFIG),
      SharedModule.forRoot()
   ],
   bootstrap: [IonicApp],
   entryComponents: [
      EmotionsApp,
      ProgressBarComponent
   ],
   providers: [
      CodePush,
      FirebaseService,
      StatusBar,
      SplashScreen,
      { provide: ErrorHandler, useClass: IonicErrorHandler }
   ]
})
export class AppModule { }

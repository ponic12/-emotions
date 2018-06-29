import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { EmotionsApp } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { StorageService } from '../shared/services/storage.service';
import { ApplicationService, GlobalService } from 'fwk-services';
import { PushingService } from '../shared/services/pushing.service';

import { CoreModule } from '../shared/core/core.module';

export const firebaseConfig ={
    apiKey: "AIzaSyC9Zh0FNlSD_BqnRCvnoWXMc91fzzAYd0c",
    authDomain: "emotionsdb-f832f.firebaseapp.com",
    databaseURL: "https://emotionsdb-f832f.firebaseio.com",
    projectId: "emotionsdb-f832f",
    storageBucket: "emotionsdb-f832f.appspot.com",
    messagingSenderId: "779781116669" 
};



@NgModule({
    declarations: [
        EmotionsApp
    ],
    imports: [
        CoreModule,
        BrowserModule,
        SharedModule,
        IonicModule.forRoot(EmotionsApp),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule.enablePersistence()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        EmotionsApp
    ],
    providers: [
        PushingService,
        ApplicationService,
        GlobalService,
        StorageService,
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }

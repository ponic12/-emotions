import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ChartsModule } from 'ng2-charts';
import 'hammerjs';
import 'chartjs-plugin-zoom';

import { LoginPage } from '../pages/login/login';
import { MyApp } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { GlobalService } from '../shared/services/global.service';
import { StorageService } from '../shared/services/storage.service';
import { ApplicationService } from '../shared/services/application.service';

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
        MyApp,
        LoginPage
    ],
    imports: [
        BrowserModule,
        SharedModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule.enablePersistence(),
        ChartsModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        LoginPage
    ],
    providers: [
        ApplicationService,
        GlobalService,
        StorageService,
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }

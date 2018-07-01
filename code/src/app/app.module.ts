import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { EmotionsApp } from './app.component'
import { SharedModule } from '../shared/shared.module'


@NgModule({
    declarations: [
        EmotionsApp
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        IonicModule.forRoot(EmotionsApp),
        SharedModule.forRoot()
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        EmotionsApp
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }

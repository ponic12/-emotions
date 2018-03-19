import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
    templateUrl: 'app.html'
})
export class EmotionsApp implements OnInit, OnDestroy {
    title: string = "Emotions";
    version: string = "v1.0";
    networkStatus: boolean;
    rootPage: any = 'LoginPage';

    constructor(
        private platform: Platform,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen
    ) {
        console.log('EmotionsApp constructor');
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    ngOnDestroy() {
        console.log('EmotionsAppPage destroy');
    }
    ngOnInit(): void {
        console.log('EmotionsApp init');
    }
}

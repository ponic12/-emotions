import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GlobalService } from '../shared/services/global.service';
import { LoginPage } from '../pages/login/login';


@Component({
    templateUrl: 'app.html'
})
export class MyApp implements OnInit, OnDestroy {
    rootPage: any = LoginPage;

    constructor(
        platform: Platform,
        statusBar: StatusBar,
        splashScreen: SplashScreen,
        private globalSrv:GlobalService,
    ) {
        console.log('MyApp constructor');
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }

    ngOnDestroy() {
        console.log('ToolboxAppPage destroy');
    }
    ngOnInit(): void {
        console.log('ToolboxApp init');
    }
}

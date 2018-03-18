import { Component, OnInit, OnDestroy } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GlobalService } from '../shared/services/global.service';
import { LoginPage } from '../pages/login/login';
import { ApplicationService } from '../shared/services/application.service';

@Component({
    templateUrl: 'app.html'
})
export class EmotionsApp implements OnInit, OnDestroy {
    title: string = "Emotions";
    version: string = "v1.0";
    networkStatus: boolean;
    rootPage: any = LoginPage;

    constructor(
        private navCtrl: NavController,
        private platform: Platform,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen,
        private globalSrv: GlobalService,
        private appSrv: ApplicationService
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
        this.globalSrv.get('user').subscribe(x => {
            if (x != null)
                this.navCtrl.push('UsuarioPage', {});
        });
        this.globalSrv.get('pushData').subscribe(x => {
            if (x != null)
                this.evalNotification(x);
        })
    }

    private evalNotification(data) {
        if (data.type == "registro") {
            this.appSrv.message('Se ha registrado la llave ' + data.llave);
            this.navCtrl.push('UsuarioPage', data);
        }
        if (data.type == "devolucion") {
            this.appSrv.message('Se ha devuelto la llave ' + data.llave);
            this.navCtrl.push('UsuarioPage', data);
        }
    }
}

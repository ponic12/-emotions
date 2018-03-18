import { Injectable } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { ApplicationService } from './application.service';

declare const FCMPlugin: any;


@Injectable()
export class PushingService {
    constructor(
        private platform: Platform,
        private appSrv: ApplicationService,
        private navCtrl: NavController){
        console.log('PushingService constructor');
    }
    
    initFCM(usr) {
        if (((this.platform.is('mobileweb') == true) || (this.platform.is('core') == true)) == false) {
          var self = this;
          FCMPlugin.getToken(
            function (id) {
              console.log(id);
              //self.registerUser(self.user, id);
            },
            function (err) {
              console.log('error retrieving token: ' + err);
            }
          );
    
          FCMPlugin.subscribeToTopic(usr);
          //FCMPlugin.subscribeToTopic('registrationTopic');
          //FCMPlugin.unsubscribeFromTopic('topicExample');
    
          // FCMPlugin.onTokenRefresh().subscribe(id=>{
          //   alert('token refresh!');
          //   this.registerUser(this.user, id);
          // })
    
          FCMPlugin.onNotification(
            function (data) {
              self.evalNotification(data);
            },
            function (msg) {
              console.log('onNotification callback successfully registered: ' + msg);
            },
            function (err) {
              console.log('Error registering onNotification callback: ' + err);
            }
          );
        }
      }
      private evalNotification(data) {
        if (data.type == "registro") {
          this.appSrv.message('Se ha registrado la llave '+ data.llave);
          this.navCtrl.push('UsuarioPage', data);
        }
        if (data.type == "devolucion") {
          this.appSrv.message('Se ha devuelto la llave '+ data.llave);
          this.navCtrl.push('UsuarioPage', data);
        }
      }
}
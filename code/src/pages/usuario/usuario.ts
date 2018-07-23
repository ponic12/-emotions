import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Platform, IonicPage, ActionSheetController } from 'ionic-angular';

import { Emotion } from '../../shared/interfaces/emotion';

import { AuthService } from 'fwk-auth';
import { ApplicationService, GlobalService } from 'fwk-services';
import { FirebaseService } from '../../shared/services/firebase.service';
import { PushingService } from '../../shared/services/pushing.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
   selector: 'page-usuario',
   templateUrl: 'usuario.html'
})
export class UsuarioPage implements OnInit {
   emotions: any
   user: any
   disableButtons: boolean = false
   lastEmo: any
   photoPath: string
   totals: any = {}

   constructor(
      private authSrv: AuthService,
      private actionCtrl: ActionSheetController,
      private navCtrl: NavController,
      private navParams: NavParams,
      private appSrv: ApplicationService,
      private pushSrv: PushingService,
      private globalSrv: GlobalService,
      private fs: FirebaseService
   ) {
      console.log('UsuarioPage constructor');
      this.emotions = [
         { img: "assets/imgs/happy.png", txt: "Alegria", color: 'yellow' },
         { img: "assets/imgs/angry.png", txt: "Queja", color: '#9d3a9e' },
         { img: "assets/imgs/thanksfull.png", txt: "Agradecimiento", color: 'green' },
         { img: "assets/imgs/sad.png", txt: "Tristeza", color: '#0089ff' },
         { img: "assets/imgs/lover.png", txt: "Amor", color: 'red' },
         { img: "assets/imgs/scared.png", txt: "Miedo", color: '#71687b' }
      ];
      this.user = this.navParams.get('usr')
      this.appSrv.message('Bienvenido: ' + this.user.displayName)
      this.photoPath = (this.user.photoURL)?this.user.photoURL:"assets/imgs/person.png"
      this.pushSrv.initFCM(this.user.uid)
   }

   ngOnInit() {
      console.log('UsuarioPage init');
      this.fs.getTotals(this.user.uid).subscribe(t => {
         if (t != null)
            this.totals = t;
      });
      this.globalSrv.get('lastEmo').then(x => {
         this.lastEmo = x;
      });
      this.globalSrv.get('pushData').then(x => {
         if (x != null)
            this.evalNotification(x);
      })
   }

   openMenuSheet() {
      let actionSheet = this.actionCtrl.create({
         title: 'Opciones',
         cssClass: 'action-sheets-basic-page',
         buttons: [
            {
               text: 'Historial',
               role: 'destructive',
               handler: () => {
                  this.navCtrl.push('AdminPage');
               }
            }, {
               text: 'Salir',
               handler: () => {
                  console.log('Logout!!!');
                  this.logout();
               }
            }, {
               text: 'Cancelar',
               role: 'cancel',
               handler: () => {
                  console.log('Cancel clicked');
               }
            }
         ]
      });
      actionSheet.present();
   }
   tapEmo(ev, emo) {
      var reg = new Emotion();
      reg.emotion = emo.txt;
      reg.user = this.user.uid;
      reg.datetime = new Date().getTime();
      this.disableButtons = true;
      setTimeout(x => {
         this.disableButtons = false;
      }, 10000);

      this.fs.saveEmotion(reg).then(x => {
         this.appSrv.message('Se ha registrado la emocion!');
         this.lastEmo = reg;
         this.globalSrv.save('lastEmo', this.lastEmo);
      }).catch(err => {
         this.appSrv.message('Error: ', 'Ha ocurrido un error al registrar la emocion!');
      })
   }
   pressEmo(ev, emo) {
      this.appSrv.message('Abriendo opciones.....');
   }
   getColor(col) {
      var exp = 'radial-gradient(' + col + ' 63%, #fff 79%)';
      return exp;
   }

   private logout() {
      this.appSrv.message('Saliendo...');
      this.globalSrv.save('user', null);
      this.authSrv.signOutUser();
      this.navCtrl.setRoot('LoginPage');
   }
   private evalNotification(data) {
      if (data.type == "config") {
         this.appSrv.message('Configuracion remota');
      }
      if (data.type == "chat") {
         this.appSrv.message('Mensaje remoto');
      }
   }
}








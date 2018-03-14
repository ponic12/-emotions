import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, IonicPage } from 'ionic-angular';
import { ApplicationService } from '../../shared/services/application.service';
import { FirebaseService } from '../../shared/services/firebase.service';
import { GlobalService } from '../../shared/services/global.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html'
})
export class UsuarioPage implements OnInit {
  emotions:any;

  constructor(
    private navParams: NavParams, 
    private appSrv: ApplicationService,
    private globalSrv: GlobalService,
    private platform: Platform,
    private fs:FirebaseService,
    private zone:NgZone
  ) {
    console.log('UsuarioPage constructor');
    this.emotions= [ 
      { img: "assets/imgs/happyness.png", txt: "Alegria", color:'yellow' },
      { img: "assets/imgs/angry.png", txt: "Furia", color:'orange' }, 
      { img: "assets/imgs/love.png", txt: "Amor", color:'red' },
      { img: "assets/imgs/sad.png", txt: "Tristeza", color:'blue'},
      { img: "assets/imgs/health.png", txt: "Salud", color:'green'},
      { img: "assets/imgs/scared.png", txt: "Miedo", color: 'violet'}
    ];
  }

  ngOnInit() {
    console.log('UsuarioPage init');
  }

  save(emo) {
    this.fs.saveEmotion(emo).then(x=>{
      this.appSrv.message('Aviso', 'Se ha registrado la emocion!');
    }) 

  }
}








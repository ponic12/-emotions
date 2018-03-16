import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Platform, IonicPage } from 'ionic-angular';

import { ApplicationService } from '../../shared/services/application.service';
import { FirebaseService } from '../../shared/services/firebase.service';
import { GlobalService } from '../../shared/services/global.service';
import {PressDirective} from '../../shared/directives/press.gesture.directive';

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
      { img: "assets/imgs/happy.png", txt: "Alegria", color:'yellow' },
      { img: "assets/imgs/angry.png", txt: "Queja", color:'#9d3a9e' }, 
      { img: "assets/imgs/lover.png", txt: "Amor", color:'red' },
      { img: "assets/imgs/sad.png", txt: "Tristeza", color:'#0089ff'},
      { img: "assets/imgs/thanksfull.png", txt: "Agradecimiento", color:'green'},
      { img: "assets/imgs/scared.png", txt: "Miedo", color: '#71687b'}
    ];
  }

  ngOnInit() {
    console.log('UsuarioPage init');
  }
  getColor(col){
    var exp = 'radial-gradient('+col+' 63%, #fff 79%)';
    return exp;
  }

  save(emo) {
    this.fs.saveEmotion(emo).then(x=>{
      this.appSrv.message('Aviso', 'Se ha registrado la emocion!');
    }) 
  }

  tapEmo(ev, emo) {
    this.appSrv.message('Aviso', 'Se ha registrado la emocion!');
  }
  pressEmo(ev, emo) {
    this.appSrv.message('Aviso', 'Abriendo opciones.....');
  }
  
}








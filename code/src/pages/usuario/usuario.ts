import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Platform, IonicPage } from 'ionic-angular';
import { Emotion } from '../../shared/interfaces/emotion';
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
  user:any;
  disableButtons:boolean = false;
  lastEmo:any;

  constructor(
    private navParams: NavParams, 
    private appSrv: ApplicationService,
    private globalSrv: GlobalService,
    private platform: Platform,
    private modalCtrl: ModalController,
    private fs:FirebaseService,
    private zone:NgZone
  ) {
    console.log('UsuarioPage constructor');
    this.emotions= [ 
      { img: "assets/imgs/happy.png", txt: "Alegria", color:'yellow' },
      { img: "assets/imgs/angry.png", txt: "Queja", color:'#9d3a9e' }, 
      { img: "assets/imgs/thanksfull.png", txt: "Agradecimiento", color:'green'},    
      { img: "assets/imgs/sad.png", txt: "Tristeza", color:'#0089ff'},
      { img: "assets/imgs/lover.png", txt: "Amor", color:'red' },
      { img: "assets/imgs/scared.png", txt: "Miedo", color: '#71687b'}
    ];
  }

  ngOnInit() {
    console.log('UsuarioPage init');
    this.globalSrv.get('user').subscribe(x =>{
      this.user = x;
    });
    this.globalSrv.get('lastEmo').subscribe(x =>{
      this.lastEmo = x;
    })    
  }
  getColor(col){
    var exp = 'radial-gradient('+col+' 63%, #fff 79%)';
    return exp;
  }

  tapEmo(ev, emo) {
    var reg = new Emotion();
    reg.emotion = emo.txt;
    reg.user = this.user.username;
    reg.datetime = new Date().getTime();
    this.disableButtons = true;
      setTimeout(x => {
        this.disableButtons = false;
      }, 10000);
      
    this.fs.saveEmotion(reg).then(x=>{
      this.appSrv.message('Aviso', 'Se ha registrado la emocion!');
      this.lastEmo = reg;
      this.globalSrv.save('lastEmo', this.lastEmo);
    }).catch(err=>{
      this.appSrv.message('Error', 'Ha ocurrido un error al registrar la emocion!');
    })
  }
  pressEmo(ev, emo) {
    this.appSrv.message('Aviso', 'Abriendo opciones.....');

  }

  private saveEmotion(){

  }
  
}








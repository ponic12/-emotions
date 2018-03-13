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

  constructor(
    private navParams: NavParams, 
    private appSrv: ApplicationService,
    private globalSrv: GlobalService,
    private platform: Platform,
    private fs:FirebaseService,
    private zone:NgZone
  ) {
    console.log('UsuarioPage constructor');

  }
  ngOnInit() {
    console.log('UsuarioPage init');
  }

  confirm() { 

  }
}








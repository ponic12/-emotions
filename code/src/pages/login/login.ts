import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalService } from '../../shared/services/global.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  userInfo: any = {username:'', password:''};

  constructor(
    private globalSrv: GlobalService,
    private navCtrl: NavController
  ) {
    console.log('LoginPage constructor');
  }
  ngOnInit() {
    console.log('LoginPage init');
    this.globalSrv.get('user').subscribe(x => {
      if (x != null)
          this.navCtrl.push('UsuarioPage', {});
  });
  }
  ///////////////////////////////////////////////////////////////////  
  signin(): void {
    this.userInfo = {username:this.username.toUpperCase()};
    this.globalSrv.save('user', this.userInfo); 
  }
  signup():void {

  }
}







import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GlobalService } from '../../shared/services/global.service';
import { AuthService } from '../../shared/core/auth.service';
import { ApplicationService } from '../../shared/services/application.service';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  userInfo: any = { username: '', password: '' };

  constructor(
    private globalSrv: GlobalService,
    private appSrv: ApplicationService,
    private navCtrl: NavController,
    private authSrv: AuthService
  ) {
    console.log('LoginPage constructor');
  }
  ngOnInit() {
    console.log('LoginPage init');
    this.globalSrv.get('user').subscribe(x => {
      if (x != null)
        this.navCtrl.setRoot('UsuarioPage');
    });
    this.authSrv.verifyLoggedIn().subscribe(data => {
      this.navCtrl.setRoot('UsuarioPage', data);
    });
  }
  ///////////////////////////////////////////////////////////////////  
  signin() {
    this.userInfo = { username: this.username.toUpperCase() };
    this.authSrv.signInUser(this.userInfo.email, this.userInfo.password)
      .then(res => {
        if (res) {
          this.navCtrl.setRoot('UsuarioPage');
        }
      });
    this.globalSrv.save('user', this.userInfo);
  }
  signup(): void {
    this.navCtrl.push('SignUpPage');
  }
  loginGoogle() {
    this.authSrv.loginGoogle().then(res => {
      if (res) {
        this.navCtrl.setRoot('UsuarioPage');
      }
    });
  }

}







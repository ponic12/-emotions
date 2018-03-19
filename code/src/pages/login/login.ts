import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { GlobalService } from '../../shared/services/global.service';
import { AuthService } from '../../shared/core/auth.service';
import { ApplicationService } from '../../shared/services/application.service';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  username: string;
  email: string;
  password: string;

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
    this.globalSrv.get('user').subscribe(data =>
      this.go(data)
    );
    this.authSrv.verifyLoggedIn().subscribe(data =>
      this.go(data)
    );
  }
  signup(): void {
    this.navCtrl.push('SignUpPage');
  }
  signin() {
    this.authSrv.signInUser(this.email, this.password).then(data =>
      this.initUser(data)
    );
  }
  loginGoogle() {
    this.authSrv.loginGoogle().then(data =>
      this.initUser(data)
    );
  }

  private initUser(data){
    var o = {
      username:this.username.toUpperCase(),
      email:this.email
    };
    this.globalSrv.save('user', o);
    this.go(data);
  }
  private go(data) {
    if (data)
      this.navCtrl.setRoot('UsuarioPage', data);
  }

}







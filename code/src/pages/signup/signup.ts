import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../../shared/core/auth.service';
import { ApplicationService, GlobalService } from 'fwk-services';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignUpPage implements OnInit {
  username: string;
  email:string;
  password: string;

  constructor(
    private globalSrv: GlobalService,
    private appSrv: ApplicationService,
    private navCtrl: NavController,
    private authSrv: AuthService
  ) {
    console.log('SignUpPage constructor');
  }
  ngOnInit() {
    console.log('SignUpPage init');
  }

  register(){
    this.authSrv.registerUser(this.email, this.password);

  }
}







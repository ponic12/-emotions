import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { GlobalService } from '../../shared/services/global.service';
import { AuthService } from '../../shared/core/auth.service';

// @IonicPage()
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







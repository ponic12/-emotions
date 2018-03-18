import { Component, OnInit } from '@angular/core';

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
    private globalSrv: GlobalService
  ) {
    console.log('LoginPage constructor');
  }
  ngOnInit() {
    console.log('LoginPage init');
  }
  ///////////////////////////////////////////////////////////////////  
  signin(): void {
    this.userInfo = {username:this.username.toUpperCase()};
    this.globalSrv.save('user', this.userInfo); 
  }
  signup():void {

  }
}







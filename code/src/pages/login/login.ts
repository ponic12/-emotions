import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../../shared/core/auth.service';
import { ApplicationService, GlobalService } from 'fwk-services';
import { FirebaseService } from '../../shared/services/firebase.service';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit {
  username: string;
  email: string;
  password: string;
  todo: FormGroup;

  constructor(
    private globalSrv: GlobalService,
    private appSrv: ApplicationService,
    private navCtrl: NavController,
    private authSrv: AuthService,
    private formBuilder: FormBuilder,
    private fs: FirebaseService
  ) {
    console.log('LoginPage constructor');
    this.todo = this.formBuilder.group({
          fcn_username: ['', [Validators.required]],
          fcn_password: ['', [Validators.required]]
    });
  }
  ngOnInit() {
    console.log('LoginPage init');
    // this.globalSrv.get('user').subscribe(data =>
    //   this.go(data)
    // );
    this.authSrv.verifyLoggedIn().subscribe(data =>{
      if (data){
        var o = {
          username:this.fs.getUserKey(data.displayName),
          email:data.email,
          photoURL:data.photoURL
        };
        this.globalSrv.save('user', o);
        this.go(data);
      }
    });
  }
  signup(): void {
    this.navCtrl.push('SignUpPage');
  }
  signin() {
    // this.authSrv.signInUser(this.email, this.password).then(data =>{
    //   this.initUser(data)
    // });
    var data = {displayName:this.username};
    this.initUser(data);
  }
  loginGoogle() {
    this.authSrv.loginGoogle().then(x=>{
      this.navCtrl.push('UsuarioPage')
    })
    // .then(data =>
    //   this.initUser(data)
    // );
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







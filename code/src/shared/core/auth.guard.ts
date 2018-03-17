import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/route';

import { Observable } from 'rxjs/observable';
import { AuthService } from './auth.service';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router){
    }
    
    CanActivate(
        next:ActivatedRouteSnapshot,
        state:RouterStateSnapshot):Observable<boolean> | boolean {

    }
}
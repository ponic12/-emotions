import { Injectable } from '@angular/core';;
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { StorageService } from './storage.service';
import { Observable } from 'rxjs/observable';

@Injectable()
export class GlobalService {
    private vars:any = {};

    get(alias:string):Observable<any>{
        var obs = this.vars[alias];
        if (!obs){
            this.vars[alias] = this.createObservable(null);
            this.getStorageValue(alias).then(x => {
                if (x) {
                    this.set(alias, x);
                    return this.vars[alias];//.asObservable();
                }
            });
            return this.vars[alias];//.asObservable();
        }
        else{
            return obs;
        }
    }
    set(alias:string, val:any){
        if (!this.vars[alias])
            this.vars[alias] = this.createObservable(null);
        this.vars[alias].next(val);
    }
    save(alias:string, val:any){
        this.set(alias, val);
        this.storageSrv.set(alias, val);
    }

    private async getStorageValue(alias){
        return await this.storageSrv.get(alias);
    }
    private createObservable(val:any):Observable<any>{
        var x = new BehaviorSubject<any>(val);
        return x;
    }

    private net = new BehaviorSubject<any>(true);
    networkStatus = this.net.asObservable();
    changeNetworkStatus(msg: any) {
        this.net.next(msg);
    }

    constructor( private storageSrv: StorageService) { 
        console.log("GlobalService constructor ");
        this.storageSrv.get('networkStatus').then(x =>  (x)? this.net.next(x): this.net.next(true));
    }
}
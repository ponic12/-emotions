import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { ApplicationService, GlobalService } from 'fwk-services';

@Injectable()
export class HttpIntercept implements HttpInterceptor {
    user:any;

    constructor(
        private as: ApplicationService,
        private globalSrv: GlobalService ) {
        console.log('HttpIntercept constructor');
        this.globalSrv.get('user').subscribe(x => 
            this.user = x);
     }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let as = this.as;
        
        // Clone the request to add the new header.
        // const authReq = req.clone({ headers: req.headers.set("headerName", "headerValue") });   
        if (this.user.demoMode == "1")
            req = req.clone({ headers: req.headers.set("demo", this.user.demoMode)});   
            
        req = req.clone({headers: req.headers.set("fecha", new Date().getTime().toString())});
        req = req.clone({headers: req.headers.set("legajo", this.user.username)});
        as.showLoading();
        //send the newly created request
        return next.handle(req)
            .map(resp => {
                console.log("Response:" + JSON.stringify(resp));
                return resp;
            }).do(event => {
                // do something with the response
                // let evt = event.clone({ body: resolveReferences(event.body) })
                if (event instanceof HttpResponse) {
                    as.hideLoading();
                }
            })
            .catch((error, caught) => {
                console.log('Error:', error);
                as.hideLoading();
                //return the error to the method that called it
                return Observable.throw(error);
            }) as any;
    }
}

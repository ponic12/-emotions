webpackJsonp([0],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplicationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApplicationService = (function () {
    function ApplicationService(loadingCtrl, toastCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.imgPath = "../../assets/logo.png";
    }
    ApplicationService.prototype.newAlert = function (data) {
        alert('Muestra alerta Toolbar');
    };
    /**
     * Function displays a message on the screen
     *
     * @param  {string} type type of the message (succes / info / warning / error)
     * @param  {string} message text to display
     * @returns void
     */
    ApplicationService.prototype.message = function (type, message, css) {
        var cl = 'toast-success';
        if (css)
            cl = css;
        var toast = this.toastCtrl.create({
            message: message,
            cssClass: cl,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    ApplicationService.prototype.showLoading = function () {
        this.loader = this.loadingCtrl.create({
            //content: "cargando...",
            content: "\n                <img class=\"logo3D\" style=\"background-color:pink\" width=108 height=100 src=\"assets/spinner.svg\">\n            ",
            cssClass: 'my-loading-class',
            spinner: 'hide',
        });
        return this.loader.present();
    };
    ApplicationService.prototype.hideLoading = function () {
        return this.loader.dismiss();
    };
    ApplicationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ApplicationService);
    return ApplicationService;
}());

//# sourceMappingURL=application.service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 167;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/admin/admin.module": [
		607,
		2
	],
	"../pages/usuario/usuario.module": [
		608,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_application_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_global_service__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, platform, globalSrv, appSrv) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.globalSrv = globalSrv;
        this.appSrv = appSrv;
        console.log('LoginPage constructor');
    }
    LoginPage.prototype.ngOnInit = function () {
        console.log('LoginPage init');
        //this.userInfo = this.globalSrv.user;
    };
    ///////////////////////////////////////////////////////////////////  
    LoginPage.prototype.login = function () {
        this.userInfo.username = this.username.toUpperCase();
        switch (this.userInfo.username) {
            case "U000000":
                this.navCtrl.push('GuardiaPage', {});
                break;
            case "U111111":
                this.navCtrl.push('AdminPage', {});
                break;
            default:
                this.navCtrl.push('UsuarioPage', {});
                break;
        }
        //this.globalSrv.user = this.userInfo = this.globalSrv.user;;
        this.initFCM(this.userInfo.legajo);
    };
    LoginPage.prototype.initFCM = function (usr) {
        if (((this.platform.is('mobileweb') == true) || (this.platform.is('core') == true)) == false) {
            var self = this;
            FCMPlugin.getToken(function (id) {
                console.log(id);
                //self.registerUser(self.user, id);
            }, function (err) {
                console.log('error retrieving token: ' + err);
            });
            FCMPlugin.subscribeToTopic(usr);
            //FCMPlugin.subscribeToTopic('registrationTopic');
            //FCMPlugin.unsubscribeFromTopic('topicExample');
            // FCMPlugin.onTokenRefresh().subscribe(id=>{
            //   alert('token refresh!');
            //   this.registerUser(this.user, id);
            // })
            FCMPlugin.onNotification(function (data) {
                self.evalNotification(data);
            }, function (msg) {
                console.log('onNotification callback successfully registered: ' + msg);
            }, function (err) {
                console.log('Error registering onNotification callback: ' + err);
            });
        }
    };
    LoginPage.prototype.evalNotification = function (data) {
        if (data.type == "registro") {
            this.appSrv.message('Aviso', 'Se ha registrado la llave ' + data.llave);
            this.navCtrl.push('UsuarioPage', data);
        }
        if (data.type == "devolucion") {
            this.appSrv.message('Aviso', 'Se ha devuelto la llave ' + data.llave);
            this.navCtrl.push('UsuarioPage', data);
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/pablomassad/development/projects/-emotions/code/src/pages/login/login.html"*/'<!-- <ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{title}} {{version}}\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content class="backKM">\n  <ion-row class="logoKM">\n    <ion-col col-3></ion-col>\n    <ion-col style="text-align:center">\n      <img src="assets/imgs/emotions.png" style="width:100%; max-width:350px;" >\n    </ion-col>\n    <ion-col col-3></ion-col>\n  </ion-row>\n\n  <div>\n    <form #loginForm="ngForm">\n      <ion-row class="backForm">\n        <ion-col>\n          <ion-item floating style="background:transparent">\n            <ion-label floating>Usuario</ion-label>\n            <ion-input name="usuario" [(ngModel)]="username" telnum></ion-input>\n          </ion-item>\n          <ion-item floating style="background:transparent">\n            <ion-label floating>Contraseña</ion-label>\n            <ion-input name="contrasena" [(ngModel)]="password"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <button ion-button (click)="login()" class="loginBtn" full type="submit" [disabled]="loginForm.form.invalid" round color="primary">\n            Ingresar\n          </button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/pablomassad/development/projects/-emotions/code/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_global_service__["a" /* GlobalService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_application_service__["a" /* ApplicationService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StorageService = (function () {
    function StorageService(storage) {
        this.storage = storage;
    }
    StorageService.prototype.get = function (key) {
        return this.storage.get(key);
    };
    StorageService.prototype.set = function (key, value) {
        this.storage.set(key, value);
    };
    StorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
    ], StorageService);
    return StorageService;
}());

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(409);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_chartjs_plugin_zoom__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_chartjs_plugin_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_chartjs_plugin_zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__ = __webpack_require__(595);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var firebaseConfig = {
    apiKey: "AIzaSyC9Zh0FNlSD_BqnRCvnoWXMc91fzzAYd0c",
    authDomain: "emotionsdb-f832f.firebaseapp.com",
    databaseURL: "https://emotionsdb-f832f.firebaseio.com",
    projectId: "emotionsdb-f832f",
    storageBucket: "emotionsdb-f832f.appspot.com",
    messagingSenderId: "779781116669"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 274,
	"./af.js": 274,
	"./ar": 275,
	"./ar-dz": 276,
	"./ar-dz.js": 276,
	"./ar-kw": 277,
	"./ar-kw.js": 277,
	"./ar-ly": 278,
	"./ar-ly.js": 278,
	"./ar-ma": 279,
	"./ar-ma.js": 279,
	"./ar-sa": 280,
	"./ar-sa.js": 280,
	"./ar-tn": 281,
	"./ar-tn.js": 281,
	"./ar.js": 275,
	"./az": 282,
	"./az.js": 282,
	"./be": 283,
	"./be.js": 283,
	"./bg": 284,
	"./bg.js": 284,
	"./bn": 285,
	"./bn.js": 285,
	"./bo": 286,
	"./bo.js": 286,
	"./br": 287,
	"./br.js": 287,
	"./bs": 288,
	"./bs.js": 288,
	"./ca": 289,
	"./ca.js": 289,
	"./cs": 290,
	"./cs.js": 290,
	"./cv": 291,
	"./cv.js": 291,
	"./cy": 292,
	"./cy.js": 292,
	"./da": 293,
	"./da.js": 293,
	"./de": 294,
	"./de-at": 295,
	"./de-at.js": 295,
	"./de-ch": 296,
	"./de-ch.js": 296,
	"./de.js": 294,
	"./dv": 297,
	"./dv.js": 297,
	"./el": 298,
	"./el.js": 298,
	"./en-au": 299,
	"./en-au.js": 299,
	"./en-ca": 300,
	"./en-ca.js": 300,
	"./en-gb": 301,
	"./en-gb.js": 301,
	"./en-ie": 302,
	"./en-ie.js": 302,
	"./en-nz": 303,
	"./en-nz.js": 303,
	"./eo": 304,
	"./eo.js": 304,
	"./es": 305,
	"./es-do": 306,
	"./es-do.js": 306,
	"./es.js": 305,
	"./et": 307,
	"./et.js": 307,
	"./eu": 308,
	"./eu.js": 308,
	"./fa": 309,
	"./fa.js": 309,
	"./fi": 310,
	"./fi.js": 310,
	"./fo": 311,
	"./fo.js": 311,
	"./fr": 312,
	"./fr-ca": 313,
	"./fr-ca.js": 313,
	"./fr-ch": 314,
	"./fr-ch.js": 314,
	"./fr.js": 312,
	"./fy": 315,
	"./fy.js": 315,
	"./gd": 316,
	"./gd.js": 316,
	"./gl": 317,
	"./gl.js": 317,
	"./gom-latn": 318,
	"./gom-latn.js": 318,
	"./he": 319,
	"./he.js": 319,
	"./hi": 320,
	"./hi.js": 320,
	"./hr": 321,
	"./hr.js": 321,
	"./hu": 322,
	"./hu.js": 322,
	"./hy-am": 323,
	"./hy-am.js": 323,
	"./id": 324,
	"./id.js": 324,
	"./is": 325,
	"./is.js": 325,
	"./it": 326,
	"./it.js": 326,
	"./ja": 327,
	"./ja.js": 327,
	"./jv": 328,
	"./jv.js": 328,
	"./ka": 329,
	"./ka.js": 329,
	"./kk": 330,
	"./kk.js": 330,
	"./km": 331,
	"./km.js": 331,
	"./kn": 332,
	"./kn.js": 332,
	"./ko": 333,
	"./ko.js": 333,
	"./ky": 334,
	"./ky.js": 334,
	"./lb": 335,
	"./lb.js": 335,
	"./lo": 336,
	"./lo.js": 336,
	"./lt": 337,
	"./lt.js": 337,
	"./lv": 338,
	"./lv.js": 338,
	"./me": 339,
	"./me.js": 339,
	"./mi": 340,
	"./mi.js": 340,
	"./mk": 341,
	"./mk.js": 341,
	"./ml": 342,
	"./ml.js": 342,
	"./mr": 343,
	"./mr.js": 343,
	"./ms": 344,
	"./ms-my": 345,
	"./ms-my.js": 345,
	"./ms.js": 344,
	"./my": 346,
	"./my.js": 346,
	"./nb": 347,
	"./nb.js": 347,
	"./ne": 348,
	"./ne.js": 348,
	"./nl": 349,
	"./nl-be": 350,
	"./nl-be.js": 350,
	"./nl.js": 349,
	"./nn": 351,
	"./nn.js": 351,
	"./pa-in": 352,
	"./pa-in.js": 352,
	"./pl": 353,
	"./pl.js": 353,
	"./pt": 354,
	"./pt-br": 355,
	"./pt-br.js": 355,
	"./pt.js": 354,
	"./ro": 356,
	"./ro.js": 356,
	"./ru": 357,
	"./ru.js": 357,
	"./sd": 358,
	"./sd.js": 358,
	"./se": 359,
	"./se.js": 359,
	"./si": 360,
	"./si.js": 360,
	"./sk": 361,
	"./sk.js": 361,
	"./sl": 362,
	"./sl.js": 362,
	"./sq": 363,
	"./sq.js": 363,
	"./sr": 364,
	"./sr-cyrl": 365,
	"./sr-cyrl.js": 365,
	"./sr.js": 364,
	"./ss": 366,
	"./ss.js": 366,
	"./sv": 367,
	"./sv.js": 367,
	"./sw": 368,
	"./sw.js": 368,
	"./ta": 369,
	"./ta.js": 369,
	"./te": 370,
	"./te.js": 370,
	"./tet": 371,
	"./tet.js": 371,
	"./th": 372,
	"./th.js": 372,
	"./tl-ph": 373,
	"./tl-ph.js": 373,
	"./tlh": 374,
	"./tlh.js": 374,
	"./tr": 375,
	"./tr.js": 375,
	"./tzl": 376,
	"./tzl.js": 376,
	"./tzm": 377,
	"./tzm-latn": 378,
	"./tzm-latn.js": 378,
	"./tzm.js": 377,
	"./uk": 379,
	"./uk.js": 379,
	"./ur": 380,
	"./ur.js": 380,
	"./uz": 381,
	"./uz-latn": 382,
	"./uz-latn.js": 382,
	"./uz.js": 381,
	"./vi": 383,
	"./vi.js": 383,
	"./x-pseudo": 384,
	"./x-pseudo.js": 384,
	"./yo": 385,
	"./yo.js": 385,
	"./zh-cn": 386,
	"./zh-cn.js": 386,
	"./zh-hk": 387,
	"./zh-hk.js": 387,
	"./zh-tw": 388,
	"./zh-tw.js": 388
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 572;

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_global_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, globalSrv) {
        this.globalSrv = globalSrv;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        console.log('MyApp constructor');
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngOnDestroy = function () {
        console.log('ToolboxAppPage destroy');
    };
    MyApp.prototype.ngOnInit = function () {
        console.log('ToolboxApp init');
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/pablomassad/development/projects/-emotions/code/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/pablomassad/development/projects/-emotions/code/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_global_service__["a" /* GlobalService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_application_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_global_service__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_interceptor__ = __webpack_require__(599);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_application_service__["a" /* ApplicationService */],
                __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_6__services_http_interceptor__["a" /* HttpIntercept */],
                    multi: true,
                }
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_application_service__["a" /* ApplicationService */],
                __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_5__services_global_service__["a" /* GlobalService */]
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpIntercept; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__application_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__global_service__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HttpIntercept = (function () {
    function HttpIntercept(as, globalSrv) {
        var _this = this;
        this.as = as;
        this.globalSrv = globalSrv;
        console.log('HttpIntercept constructor');
        this.globalSrv.get('user').subscribe(function (x) {
            return _this.user = x;
        });
    }
    HttpIntercept.prototype.intercept = function (req, next) {
        var as = this.as;
        // Clone the request to add the new header.
        // const authReq = req.clone({ headers: req.headers.set("headerName", "headerValue") });   
        if (this.user.demoMode == "1")
            req = req.clone({ headers: req.headers.set("demo", this.user.demoMode) });
        req = req.clone({ headers: req.headers.set("fecha", new Date().getTime().toString()) });
        req = req.clone({ headers: req.headers.set("legajo", this.user.username) });
        as.showLoading();
        //send the newly created request
        return next.handle(req)
            .map(function (resp) {
            console.log("Response:" + JSON.stringify(resp));
            return resp;
        }).do(function (event) {
            // do something with the response
            // let evt = event.clone({ body: resolveReferences(event.body) })
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpResponse */]) {
                as.hideLoading();
            }
        })
            .catch(function (error, caught) {
            console.log('Error:', error);
            as.hideLoading();
            //return the error to the method that called it
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
        });
    };
    HttpIntercept = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__application_service__["a" /* ApplicationService */],
            __WEBPACK_IMPORTED_MODULE_8__global_service__["a" /* GlobalService */]])
    ], HttpIntercept);
    return HttpIntercept;
}());

//# sourceMappingURL=http.interceptor.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

;


var GlobalService = (function () {
    function GlobalService(storageSrv) {
        var _this = this;
        this.storageSrv = storageSrv;
        this.vars = {};
        //private URL:string = "http://dwin0404/apiproxy/api/";
        this.URL = "http://190.225.183.34:8080/apiproxy/api/";
        this.net = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](true);
        this.networkStatus = this.net.asObservable();
        console.log("GlobalService constructor ");
        this.get('urlBase').subscribe(function (x) {
            if (x == null)
                _this.set('urlBase', _this.URL);
        });
        this.storageSrv.get('networkStatus').then(function (x) { return (x) ? _this.net.next(x) : _this.net.next(true); });
    }
    GlobalService.prototype.get = function (alias) {
        var _this = this;
        var obs = this.vars[alias];
        if (!obs) {
            this.vars[alias] = this.createObservable(null);
            this.getStorageValue(alias).then(function (x) {
                if (x) {
                    _this.set(alias, x);
                    return _this.vars[alias]; //.asObservable();
                }
            });
            return this.vars[alias]; //.asObservable();
        }
        else {
            return obs;
        }
    };
    GlobalService.prototype.set = function (alias, val) {
        this.vars[alias].next(val);
        // this.vars[alias].subscribe(o=>
        //     o.next(val));
    };
    GlobalService.prototype.save = function (alias, val) {
        this.set(alias, val);
        this.storageSrv.set(alias, val);
    };
    GlobalService.prototype.getStorageValue = function (alias) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storageSrv.get(alias)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    GlobalService.prototype.createObservable = function (val) {
        var x = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](val);
        //var x = new Observable(obs => {       
        // var x =  Observable.create(obs => {     
        //     //obs.next(val);
        //     obs.complete();
        // });
        return x;
    };
    GlobalService.prototype.changeNetworkStatus = function (msg) {
        this.net.next(msg);
    };
    GlobalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]])
    ], GlobalService);
    return GlobalService;
}());

//# sourceMappingURL=global.service.js.map

/***/ })

},[393]);
//# sourceMappingURL=main.js.map
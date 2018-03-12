webpackJsonp([0],{

/***/ 161:
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
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 204:
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
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_firebase_service__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import * as _ from 'lodash';

var HomePage = (function () {
    function HomePage(navCtrl, fs) {
        this.navCtrl = navCtrl;
        this.fs = fs;
    }
    HomePage.prototype.ngOnInit = function () {
        this.emotData = this.initChart();
        this.emot$ = this.fs.getEmotionsSnapshots('date', 'asc');
        this.setGraphOptions();
        this.fillEmotions();
    };
    HomePage.prototype.ngOnChanges = function (changes) {
        // changes.prop contains the old and the new value...
        console.log('ngOnChanges....');
    };
    HomePage.prototype.initChart = function () {
        var series = [
            {
                label: "Awareness",
                data: [],
                fill: false,
                pointRadius: 2,
                borderColor: 'Magenta',
                pointBorderColor: 'Black',
                backgroundColor: 'Yellow'
            },
            {
                label: "Complains",
                data: [],
                fill: false,
                pointRadius: 2,
                borderColor: 'Black',
                pointBorderColor: 'Black',
                backgroundColor: 'Yellow'
            },
            {
                label: "Good Things",
                data: [],
                fill: false,
                pointRadius: 2,
                borderColor: 'Green',
                pointBorderColor: 'Black',
                backgroundColor: 'Yellow'
            },
            {
                label: "Gratitude",
                data: [],
                fill: false,
                pointRadius: 2,
                borderColor: 'Gold',
                pointBorderColor: 'Black',
                backgroundColor: 'Yellow'
            },
            {
                label: "Health",
                data: [],
                fill: false,
                pointRadius: 2,
                borderColor: 'DodgerBlue',
                pointBorderColor: 'Black',
                backgroundColor: 'Yellow'
            },
            {
                label: "Love",
                data: [],
                fill: false,
                pointRadius: 2,
                borderColor: 'Red',
                pointBorderColor: 'Black',
                backgroundColor: 'Yellow'
            }
        ];
        return series;
    };
    HomePage.prototype.setGraphOptions = function () {
        this.graphOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        display: true,
                        ticks: {
                            callback: function (label, index, labels) {
                                return __WEBPACK_IMPORTED_MODULE_5_moment__(label).format('D MMM');
                            },
                            maxRotation: 0
                        }
                    }],
                yAxes: [{
                        display: true,
                        ticks: {
                            callback: function (label, index, labels) {
                                return label.toFixed(0);
                            }
                        }
                    }]
            },
            tooltips: {
                enabled: true,
                callbacks: {
                    label: function (tooltipItem, data) {
                        return __WEBPACK_IMPORTED_MODULE_5_moment__(tooltipItem.xLabel).format('D MMM') + ': ' + parseFloat(tooltipItem.yLabel).toFixed(0);
                    }
                },
                opacity: .8
            },
            pan: {
                enabled: true,
                mode: 'x'
            },
            zoom: {
                enabled: true,
                mode: 'x',
                limits: {
                    max: 10,
                    min: 0.5
                }
            },
        };
    };
    HomePage.prototype.fillEmotions = function () {
        var _this = this;
        var dataAwareness = [];
        var dataComplain = [];
        var dataGoodThings = [];
        var dataGratitude = [];
        var dataLove = [];
        var dataHealth = [];
        this.emot$.subscribe(function (col) {
            console.log('snapshotChanges subscribe length: ', col.length);
            col.map(function (snap, i) {
                var d = snap.payload.doc;
                var item = d.data();
                var date = new Date(item.date);
                //let date = moment().add(i,'days');
                dataAwareness.push({ x: date, y: item.totalAwareness });
                dataComplain.push({ x: date, y: item.totalComplain });
                dataGoodThings.push({ x: date, y: item.totalGoodThings });
                dataGratitude.push({ x: date, y: item.totalGratitude });
                dataHealth.push({ x: date, y: item.totalHealth });
                dataLove.push({ x: date, y: item.totalLove });
            });
            var dsAwareness = {
                data: dataAwareness
            };
            var dsComplain = {
                data: dataComplain
            };
            var dsGoodThings = {
                data: dataGoodThings
            };
            var dsGratitude = {
                data: dataGratitude
            };
            var dsHealth = {
                data: dataHealth
            };
            var dsLove = {
                data: dataLove
            };
            _this.emotData = [];
            _this.emotData.push(dsAwareness);
            _this.emotData.push(dsComplain);
            _this.emotData.push(dsGoodThings);
            _this.emotData.push(dsGratitude);
            _this.emotData.push(dsHealth);
            _this.emotData.push(dsLove);
            console.log('emotData: ', _this.emotData);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__["BaseChartDirective"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ng2_charts_ng2_charts__["BaseChartDirective"])
    ], HomePage.prototype, "chart", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/pablomassad/development/projects/-emotions/code/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n    <div class="graph-container" >\n        <canvas baseChart width="400" height="200" \n        [datasets]="emotData" \n        [options]="graphOptions" \n        [legend]="false" \n        [chartType]="\'scatter\'"></canvas>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/pablomassad/development/projects/-emotions/code/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_firebase_service__["a" /* FirebaseService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = (function () {
    function FirebaseService(afs) {
        this.afs = afs;
    }
    FirebaseService.prototype.getEmotionsSnapshots = function (sortName, sortDir) {
        this.testRef = this.afs.collection('emotionsByDay', function (ref) { return ref.orderBy(sortName, sortDir); });
        this.test$ = this.testRef.snapshotChanges();
        return this.test$;
    };
    FirebaseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], FirebaseService);
    return FirebaseService;
}());

//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(405);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_chartjs_plugin_zoom__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_chartjs_plugin_zoom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_chartjs_plugin_zoom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_services_firebase_service__ = __webpack_require__(267);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["b" /* AngularFirestoreModule */].enablePersistence(),
                __WEBPACK_IMPORTED_MODULE_8_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__shared_services_firebase_service__["a" /* FirebaseService */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 271,
	"./af.js": 271,
	"./ar": 272,
	"./ar-dz": 273,
	"./ar-dz.js": 273,
	"./ar-kw": 274,
	"./ar-kw.js": 274,
	"./ar-ly": 275,
	"./ar-ly.js": 275,
	"./ar-ma": 276,
	"./ar-ma.js": 276,
	"./ar-sa": 277,
	"./ar-sa.js": 277,
	"./ar-tn": 278,
	"./ar-tn.js": 278,
	"./ar.js": 272,
	"./az": 279,
	"./az.js": 279,
	"./be": 280,
	"./be.js": 280,
	"./bg": 281,
	"./bg.js": 281,
	"./bn": 282,
	"./bn.js": 282,
	"./bo": 283,
	"./bo.js": 283,
	"./br": 284,
	"./br.js": 284,
	"./bs": 285,
	"./bs.js": 285,
	"./ca": 286,
	"./ca.js": 286,
	"./cs": 287,
	"./cs.js": 287,
	"./cv": 288,
	"./cv.js": 288,
	"./cy": 289,
	"./cy.js": 289,
	"./da": 290,
	"./da.js": 290,
	"./de": 291,
	"./de-at": 292,
	"./de-at.js": 292,
	"./de-ch": 293,
	"./de-ch.js": 293,
	"./de.js": 291,
	"./dv": 294,
	"./dv.js": 294,
	"./el": 295,
	"./el.js": 295,
	"./en-au": 296,
	"./en-au.js": 296,
	"./en-ca": 297,
	"./en-ca.js": 297,
	"./en-gb": 298,
	"./en-gb.js": 298,
	"./en-ie": 299,
	"./en-ie.js": 299,
	"./en-nz": 300,
	"./en-nz.js": 300,
	"./eo": 301,
	"./eo.js": 301,
	"./es": 302,
	"./es-do": 303,
	"./es-do.js": 303,
	"./es.js": 302,
	"./et": 304,
	"./et.js": 304,
	"./eu": 305,
	"./eu.js": 305,
	"./fa": 306,
	"./fa.js": 306,
	"./fi": 307,
	"./fi.js": 307,
	"./fo": 308,
	"./fo.js": 308,
	"./fr": 309,
	"./fr-ca": 310,
	"./fr-ca.js": 310,
	"./fr-ch": 311,
	"./fr-ch.js": 311,
	"./fr.js": 309,
	"./fy": 312,
	"./fy.js": 312,
	"./gd": 313,
	"./gd.js": 313,
	"./gl": 314,
	"./gl.js": 314,
	"./gom-latn": 315,
	"./gom-latn.js": 315,
	"./he": 316,
	"./he.js": 316,
	"./hi": 317,
	"./hi.js": 317,
	"./hr": 318,
	"./hr.js": 318,
	"./hu": 319,
	"./hu.js": 319,
	"./hy-am": 320,
	"./hy-am.js": 320,
	"./id": 321,
	"./id.js": 321,
	"./is": 322,
	"./is.js": 322,
	"./it": 323,
	"./it.js": 323,
	"./ja": 324,
	"./ja.js": 324,
	"./jv": 325,
	"./jv.js": 325,
	"./ka": 326,
	"./ka.js": 326,
	"./kk": 327,
	"./kk.js": 327,
	"./km": 328,
	"./km.js": 328,
	"./kn": 329,
	"./kn.js": 329,
	"./ko": 330,
	"./ko.js": 330,
	"./ky": 331,
	"./ky.js": 331,
	"./lb": 332,
	"./lb.js": 332,
	"./lo": 333,
	"./lo.js": 333,
	"./lt": 334,
	"./lt.js": 334,
	"./lv": 335,
	"./lv.js": 335,
	"./me": 336,
	"./me.js": 336,
	"./mi": 337,
	"./mi.js": 337,
	"./mk": 338,
	"./mk.js": 338,
	"./ml": 339,
	"./ml.js": 339,
	"./mr": 340,
	"./mr.js": 340,
	"./ms": 341,
	"./ms-my": 342,
	"./ms-my.js": 342,
	"./ms.js": 341,
	"./my": 343,
	"./my.js": 343,
	"./nb": 344,
	"./nb.js": 344,
	"./ne": 345,
	"./ne.js": 345,
	"./nl": 346,
	"./nl-be": 347,
	"./nl-be.js": 347,
	"./nl.js": 346,
	"./nn": 348,
	"./nn.js": 348,
	"./pa-in": 349,
	"./pa-in.js": 349,
	"./pl": 350,
	"./pl.js": 350,
	"./pt": 351,
	"./pt-br": 352,
	"./pt-br.js": 352,
	"./pt.js": 351,
	"./ro": 353,
	"./ro.js": 353,
	"./ru": 354,
	"./ru.js": 354,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 356,
	"./se.js": 356,
	"./si": 357,
	"./si.js": 357,
	"./sk": 358,
	"./sk.js": 358,
	"./sl": 359,
	"./sl.js": 359,
	"./sq": 360,
	"./sq.js": 360,
	"./sr": 361,
	"./sr-cyrl": 362,
	"./sr-cyrl.js": 362,
	"./sr.js": 361,
	"./ss": 363,
	"./ss.js": 363,
	"./sv": 364,
	"./sv.js": 364,
	"./sw": 365,
	"./sw.js": 365,
	"./ta": 366,
	"./ta.js": 366,
	"./te": 367,
	"./te.js": 367,
	"./tet": 368,
	"./tet.js": 368,
	"./th": 369,
	"./th.js": 369,
	"./tl-ph": 370,
	"./tl-ph.js": 370,
	"./tlh": 371,
	"./tlh.js": 371,
	"./tr": 372,
	"./tr.js": 372,
	"./tzl": 373,
	"./tzl.js": 373,
	"./tzm": 374,
	"./tzm-latn": 375,
	"./tzm-latn.js": 375,
	"./tzm.js": 374,
	"./uk": 376,
	"./uk.js": 376,
	"./ur": 377,
	"./ur.js": 377,
	"./uz": 378,
	"./uz-latn": 379,
	"./uz-latn.js": 379,
	"./uz.js": 378,
	"./vi": 380,
	"./vi.js": 380,
	"./x-pseudo": 381,
	"./x-pseudo.js": 381,
	"./yo": 382,
	"./yo.js": 382,
	"./zh-cn": 383,
	"./zh-cn.js": 383,
	"./zh-hk": 384,
	"./zh-hk.js": 384,
	"./zh-tw": 385,
	"./zh-tw.js": 385
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
webpackContext.id = 569;

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(266);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]; //TabsPage;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/pablomassad/development/projects/-emotions/code/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/pablomassad/development/projects/-emotions/code/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[387]);
//# sourceMappingURL=main.js.map
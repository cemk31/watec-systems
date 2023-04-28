(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["untersuchung-list-untersuchung-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/untersuchung-list/untersuchung-list.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/untersuchung-list/untersuchung-list.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Untersuchungsliste</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"response\">\n    <ion-item *ngFor=\"let address of response\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Adresse</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-label>\n            <ion-icon name=\"home\"></ion-icon>\n            <h2>{{ address.strasse }},{{ address.hausnummer }}</h2>\n          </ion-label>\n          <ion-label>\n            <ion-icon name=\"pin\"></ion-icon>\n            <h2>{{ address.plz }} {{ address.ort }}</h2>\n          </ion-label>\n          <ion-label>\n            <ion-icon name=\"globe\"></ion-icon>\n            <h2>{{ address.land }}</h2>\n          </ion-label>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n  <ion-text *ngIf=\"!response\" color=\"danger\">\n    Keine Daten verfügbar\n  </ion-text>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/untersuchung-list/untersuchung-list-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/untersuchung-list/untersuchung-list-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: UntersuchungListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UntersuchungListPageRoutingModule", function() { return UntersuchungListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _untersuchung_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./untersuchung-list.page */ "./src/app/pages/untersuchung-list/untersuchung-list.page.ts");




const routes = [
    {
        path: '',
        component: _untersuchung_list_page__WEBPACK_IMPORTED_MODULE_3__["UntersuchungListPage"]
    }
];
let UntersuchungListPageRoutingModule = class UntersuchungListPageRoutingModule {
};
UntersuchungListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UntersuchungListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/untersuchung-list/untersuchung-list.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/untersuchung-list/untersuchung-list.module.ts ***!
  \*********************************************************************/
/*! exports provided: UntersuchungListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UntersuchungListPageModule", function() { return UntersuchungListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _untersuchung_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./untersuchung-list-routing.module */ "./src/app/pages/untersuchung-list/untersuchung-list-routing.module.ts");
/* harmony import */ var _untersuchung_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./untersuchung-list.page */ "./src/app/pages/untersuchung-list/untersuchung-list.page.ts");







let UntersuchungListPageModule = class UntersuchungListPageModule {
};
UntersuchungListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _untersuchung_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["UntersuchungListPageRoutingModule"]
        ],
        declarations: [_untersuchung_list_page__WEBPACK_IMPORTED_MODULE_6__["UntersuchungListPage"]]
    })
], UntersuchungListPageModule);



/***/ }),

/***/ "./src/app/pages/untersuchung-list/untersuchung-list.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/untersuchung-list/untersuchung-list.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VudGVyc3VjaHVuZy1saXN0L3VudGVyc3VjaHVuZy1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/untersuchung-list/untersuchung-list.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/untersuchung-list/untersuchung-list.page.ts ***!
  \*******************************************************************/
/*! exports provided: UntersuchungListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UntersuchungListPage", function() { return UntersuchungListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UntersuchungListPage = class UntersuchungListPage {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        console.log("hello");
        // this.http.get('https://spootech.bubbleapps.io/version-test/api/1.1/obj/Adresse_SST/').subscribe(data => {
        //   this.response = data.results;
        //   console.log(this.response);
        // });
    }
};
UntersuchungListPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UntersuchungListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-untersuchung-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./untersuchung-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/untersuchung-list/untersuchung-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./untersuchung-list.page.scss */ "./src/app/pages/untersuchung-list/untersuchung-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UntersuchungListPage);



/***/ })

}]);
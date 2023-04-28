(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["trinkwasseruntersuchung-trinkwasseruntersuchung-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      <h1>Trinkwasseruntersuchung</h1>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <h2>Allgemein</h2>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Unternehmensname</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"companyName\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Anschrift</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"address\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">E-Mail</ion-label>\n      <ion-input type=\"email\" [(ngModel)]=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Techniker</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"technician\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Besichtigungsdatum</ion-label>\n      <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"inspectionDate\"></ion-datetime>\n    </ion-item>\n\n    <ion-list-header>\n      Objekt\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Strasse</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"street\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Hausnummer</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"houseNumber\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">PLZ</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"zipCode\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Ort</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"city\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Versorgungsart</ion-label>\n      <ion-select [(ngModel)]=\"supplyType\">\n        <ion-select-option value=\"central\">Zentral</ion-select-option>\n        <ion-select-option value=\"decentral\">Dezentral</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"stacked\">Art der Anlage</ion-label>\n      <ion-select [(ngModel)]=\"systemType\">\n        <ion-select-option value=\"small\">Kleinanlage</ion-select-option>\n        <ion-select-option value=\"large\">Großanlage</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label position=\"stacked\">Öffentliche Nutzung</ion-label>\n      <ion-select [(ngModel)]=\"publicUsage\">\n        <ion-select-option value=\"yes\">Ja</ion-select-option>\n        <ion-select-option value=\"no\">Nein</ion-select-option>\n      </ion-select>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label position=\"stacked\">Anzahl WE / GE</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"numberOfWE_GE\"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label position=\"stacked\">Objektnutzung</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"objectUsage\"></ion-input>\n    </ion-item>\n    \n    <ion-item>\n      <ion-label position=\"stacked\">Zutritt zum Objekt</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"accessToObject\"></ion-input>\n    </ion-item>\n      </ion-list>\n    \n      <ion-row>\n        <ion-col>\n          <ion-button expand=\"block\" (click)=\"save()\">Speichern</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button expand=\"block\" (click)=\"cancel()\">Abbrechen</ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button expand=\"block\" (click)=\"reset()\">Zurücksetzen</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-content>");

/***/ }),

/***/ "./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: TrinkwasseruntersuchungPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrinkwasseruntersuchungPageRoutingModule", function() { return TrinkwasseruntersuchungPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trinkwasseruntersuchung_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trinkwasseruntersuchung.page */ "./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung.page.ts");




const routes = [
    {
        path: '',
        component: _trinkwasseruntersuchung_page__WEBPACK_IMPORTED_MODULE_3__["TrinkwasseruntersuchungPage"]
    }
];
let TrinkwasseruntersuchungPageRoutingModule = class TrinkwasseruntersuchungPageRoutingModule {
};
TrinkwasseruntersuchungPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrinkwasseruntersuchungPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung.module.ts ***!
  \*********************************************************************************/
/*! exports provided: TrinkwasseruntersuchungPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrinkwasseruntersuchungPageModule", function() { return TrinkwasseruntersuchungPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _trinkwasseruntersuchung_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trinkwasseruntersuchung-routing.module */ "./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung-routing.module.ts");
/* harmony import */ var _trinkwasseruntersuchung_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trinkwasseruntersuchung.page */ "./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung.page.ts");







let TrinkwasseruntersuchungPageModule = class TrinkwasseruntersuchungPageModule {
};
TrinkwasseruntersuchungPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _trinkwasseruntersuchung_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrinkwasseruntersuchungPageRoutingModule"]
        ],
        declarations: [_trinkwasseruntersuchung_page__WEBPACK_IMPORTED_MODULE_6__["TrinkwasseruntersuchungPage"]]
    })
], TrinkwasseruntersuchungPageModule);



/***/ }),

/***/ "./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RyaW5rd2Fzc2VydW50ZXJzdWNodW5nL3RyaW5rd2Fzc2VydW50ZXJzdWNodW5nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung.page.ts ***!
  \*******************************************************************************/
/*! exports provided: TrinkwasseruntersuchungPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrinkwasseruntersuchungPage", function() { return TrinkwasseruntersuchungPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrinkwasseruntersuchungPage = class TrinkwasseruntersuchungPage {
    constructor() { }
    ngOnInit() {
        this.save();
        this.cancel();
        this.reset();
    }
    save() {
        // Hier kannst du den Code für das Speichern des Formulars schreiben
        console.log('Speichern gedrückt');
    }
    cancel() {
        // Hier kannst du den Code für das Abbrechen des Formulars schreiben
        console.log('Abbrechen gedrückt');
    }
    reset() {
        // Hier kannst du den Code für das Zurücksetzen des Formulars schreiben
        console.log('Zurücksetzen gedrückt');
    }
};
TrinkwasseruntersuchungPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trinkwasseruntersuchung',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trinkwasseruntersuchung.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trinkwasseruntersuchung.page.scss */ "./src/app/pages/trinkwasseruntersuchung/trinkwasseruntersuchung.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TrinkwasseruntersuchungPage);



/***/ })

}]);
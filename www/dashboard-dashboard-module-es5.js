function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDashboardDashboardHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"presentPopover($event)\">\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"about-header\">\n    <!-- Instead of loading an image each time the select changes, use opacity to transition them -->\n    <div class=\"about-image madison\" [ngStyle]=\"location === 'madison' && {'opacity': '1'}\"></div>\n    <div class=\"about-image austin\" [ngStyle]=\"location === 'austin' && {'opacity': '1'}\"></div>\n    <div class=\"about-image chicago\" [ngStyle]=\"location === 'chicago' && {'opacity': '1'}\"></div>\n    <div class=\"about-image seattle\" [ngStyle]=\"location === 'seattle' && {'opacity': '1'}\"></div>\n  </div>\n\n  <div class=\"about-info\">\n    <h3 class=\"ion-padding-top ion-padding-start\">Informationen</h3>\n\n    <p class=\"ion-padding-start ion-padding-end\">\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n    </p>\n\n    <h3 class=\"ion-padding-top ion-padding-start\">Schnellrouten</h3>\n\n    <ion-list lines=\"none\" *ngFor=\"let routes of routes; let i = index\">\n      <ion-item>\n        <ion-button color=\"success\" href=\"{{routes.href}}\">Route</ion-button>\n        <ion-label>\n          {{routes.location}}\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <h3 class=\"ion-padding-top ion-padding-start\">Länder mit Vignetten</h3>\n\n    <ion-list lines=\"none\" *ngFor=\"let route of routes; let i = index\">\n      <ion-item>\n        <ion-thumbnail slot=\"start\">\n          <img alt=\"Silhouette of mountains\" src=\"{{route.flagImage}}\" />\n        </ion-thumbnail>\n        <ion-label>\n          {{route.country}}\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <h3 class=\"ion-padding-top ion-padding-start\">Länder mit Maut</h3>\n\n    <ion-list lines=\"none\" *ngFor=\"let route of routes; let i = index\">\n      <ion-item *ngIf=\"route.maut\">\n        <ion-thumbnail slot=\"start\">\n          <img alt=\"Silhouette of mountains\" src=\"{{route.flagImage}}\" />\n        </ion-thumbnail>\n        <ion-label>\n          {{route.country}}\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard */
    "./src/app/pages/dashboard/dashboard.ts");

    var routes = [{
      path: '',
      component: _dashboard__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"]
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../about-popover/about-popover */
    "./src/app/pages/about-popover/about-popover.ts");
    /* harmony import */


    var _dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard */
    "./src/app/pages/dashboard/dashboard.ts");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/pages/dashboard/dashboard-routing.module.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardPageRoutingModule"]],
      declarations: [_dashboard__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"], _about_popover_about_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverPage"]],
      entryComponents: [_about_popover_about_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverPage"]],
      bootstrap: [_dashboard__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.scss":
  /*!************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDashboardDashboardScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-toolbar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  --background: transparent;\n  --color: white;\n}\n\nion-toolbar ion-button,\nion-toolbar ion-back-button,\nion-toolbar ion-menu-button {\n  --color: white;\n}\n\n.about-header {\n  position: relative;\n  width: 100%;\n  height: 30%;\n}\n\n.about-header .about-image {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  opacity: 0;\n  transition: opacity 500ms ease-in-out;\n}\n\n.about-header .madison {\n  background-image: url(/assets/img/about/madison.jpg);\n}\n\n.about-header .austin {\n  background-image: url(/assets/img/about/austin.jpg);\n}\n\n.about-header .chicago {\n  background-image: url(/assets/img/about/chicago.jpg);\n}\n\n.about-header .seattle {\n  background-image: url(/assets/img/about/seattle.jpg);\n}\n\n.about-info {\n  position: absolute;\n  margin-top: -10px;\n  border-radius: 10px;\n  background: var(--ion-background-color, #fff);\n}\n\n.about-info h3 {\n  margin-top: 0;\n}\n\n.about-info ion-list {\n  padding-top: 0;\n}\n\n.about-info p {\n  line-height: 130%;\n  color: var(--ion-color-dark);\n}\n\n.about-info ion-icon {\n  -webkit-margin-end: 32px;\n          margin-inline-end: 32px;\n}\n\n/*\n * iOS Only\n */\n\n.ios .about-info {\n  --ion-padding: 19px;\n}\n\n.ios .about-info h3 {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jZW1rYW5tYXovRG9jdW1lbnRzL3Byb2plY3RzL2dpdC93YXRlYy1zeXN0ZW1zL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLHlCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElFOzs7RUFHRSxjQUFBO0FDREo7O0FESUU7RUFDRSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUVBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFFQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFFQSxVQUFBO0VBRUEscUNBQUE7QUNOSjs7QURTRTtFQUNFLG9EQUFBO0FDTko7O0FEUUU7RUFDRSxtREFBQTtBQ0xKOztBRE9FO0VBQ0Usb0RBQUE7QUNKSjs7QURNRTtFQUNFLG9EQUFBO0FDSEo7O0FETUU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2Q0FBQTtBQ0hKOztBRE1FO0VBQ0UsYUFBQTtBQ0hKOztBRE1FO0VBQ0UsY0FBQTtBQ0hKOztBRE1FO0VBQ0UsaUJBQUE7RUFFQSw0QkFBQTtBQ0pKOztBRE9FO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ0pKOztBRE9FOztFQUFBOztBQUlBO0VBQ0UsbUJBQUE7QUNMSjs7QURRRTtFQUNFLGdCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbixcbiAgaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxuICBpb24tdG9vbGJhciBpb24tbWVudS1idXR0b24ge1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuYWJvdXQtaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzAlO1xuICB9XG4gIFxuICAuYWJvdXQtaGVhZGVyIC5hYm91dC1pbWFnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICBcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gIFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIFxuICAgIG9wYWNpdHk6IDA7XG4gIFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gIH1cbiAgXG4gIC5hYm91dC1oZWFkZXIgLm1hZGlzb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9tYWRpc29uLmpwZyk7XG4gIH1cbiAgLmFib3V0LWhlYWRlciAuYXVzdGluIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvYXVzdGluLmpwZyk7XG4gIH1cbiAgLmFib3V0LWhlYWRlciAuY2hpY2FnbyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2NoaWNhZ28uanBnKTtcbiAgfVxuICAuYWJvdXQtaGVhZGVyIC5zZWF0dGxlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWcvYWJvdXQvc2VhdHRsZS5qcGcpO1xuICB9XG4gIFxuICAuYWJvdXQtaW5mbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xuICB9XG4gIFxuICAuYWJvdXQtaW5mbyBoMyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICBcbiAgLmFib3V0LWluZm8gaW9uLWxpc3Qge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG4gIFxuICAuYWJvdXQtaW5mbyBwIHtcbiAgICBsaW5lLWhlaWdodDogMTMwJTtcbiAgXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgfVxuICBcbiAgLmFib3V0LWluZm8gaW9uLWljb24ge1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAzMnB4O1xuICB9XG4gIFxuICAvKlxuICAgKiBpT1MgT25seVxuICAgKi9cbiAgXG4gIC5pb3MgLmFib3V0LWluZm8ge1xuICAgIC0taW9uLXBhZGRpbmc6IDE5cHg7XG4gIH1cbiAgXG4gIC5pb3MgLmFib3V0LWluZm8gaDMge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbiAgIiwiaW9uLXRvb2xiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG5pb24tdG9vbGJhciBpb24tYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLWJhY2stYnV0dG9uLFxuaW9uLXRvb2xiYXIgaW9uLW1lbnUtYnV0dG9uIHtcbiAgLS1jb2xvcjogd2hpdGU7XG59XG5cbi5hYm91dC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMwJTtcbn1cblxuLmFib3V0LWhlYWRlciAuYWJvdXQtaW1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4uYWJvdXQtaGVhZGVyIC5tYWRpc29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L21hZGlzb24uanBnKTtcbn1cblxuLmFib3V0LWhlYWRlciAuYXVzdGluIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2F1c3Rpbi5qcGcpO1xufVxuXG4uYWJvdXQtaGVhZGVyIC5jaGljYWdvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2Fib3V0L2NoaWNhZ28uanBnKTtcbn1cblxuLmFib3V0LWhlYWRlciAuc2VhdHRsZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9hYm91dC9zZWF0dGxlLmpwZyk7XG59XG5cbi5hYm91dC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xufVxuXG4uYWJvdXQtaW5mbyBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIGlvbi1saXN0IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbi5hYm91dC1pbmZvIHAge1xuICBsaW5lLWhlaWdodDogMTMwJTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cblxuLmFib3V0LWluZm8gaW9uLWljb24ge1xuICBtYXJnaW4taW5saW5lLWVuZDogMzJweDtcbn1cblxuLypcbiAqIGlPUyBPbmx5XG4gKi9cbi5pb3MgLmFib3V0LWluZm8ge1xuICAtLWlvbi1wYWRkaW5nOiAxOXB4O1xufVxuXG4uaW9zIC5hYm91dC1pbmZvIGgzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.ts ***!
    \**********************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppPagesDashboardDashboardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage() {
        _classCallCheck(this, DashboardPage);

        this.routes = [{
          href: 'https://goo.gl/maps/ziKFdHf4QZj98PRn8',
          location: 'Wien, Österreich',
          country: 'Österreich',
          maut: true,
          flagImage: 'https://cdn-icons-png.flaticon.com/512/197/197447.png'
        }, {
          href: 'https://goo.gl/maps/ziKFdHf4QZj98PRn8',
          location: 'Budapest, Ungarn',
          country: 'Ungarn',
          maut: true,
          flagImage: 'https://cdn-icons-png.flaticon.com/512/197/197584.png'
        }, {
          href: 'https://goo.gl/maps/ziKFdHf4QZj98PRn8',
          location: 'Zagreb, Kroatien',
          country: 'Kroatien',
          flagImage: 'https://cdn-icons-png.flaticon.com/512/197/197503.png'
        }, {
          href: 'https://goo.gl/maps/ziKFdHf4QZj98PRn8',
          location: 'Maribor, Slowenien',
          country: 'Slowenien',
          maut: false,
          flagImage: 'https://cdn-icons-png.flaticon.com/512/197/197633.png'
        }, {
          href: 'https://goo.gl/maps/ziKFdHf4QZj98PRn8',
          location: 'Belgrad, Serbien',
          country: 'Serbien',
          maut: true,
          flagImage: 'https://cdn-icons-png.flaticon.com/512/197/197602.png'
        }, {
          href: 'https://goo.gl/maps/ziKFdHf4QZj98PRn8',
          location: 'Sofia, Bulgarien',
          country: 'Bulgarien',
          maut: false,
          flagImage: 'https://cdn-icons-png.flaticon.com/512/197/197502.png'
        }, {
          href: 'https://goo.gl/maps/ziKFdHf4QZj98PRn8',
          location: 'Istanbul, Türkei',
          country: 'Türkei',
          maut: true,
          flagImage: 'https://cdn-icons-png.flaticon.com/512/197/197518.png'
        }];
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardPage;
    }();

    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.scss */
      "./src/app/pages/dashboard/dashboard.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-privacy-privacy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Privacy Policy</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div  [innerHTML]=\"htmlStr\"></div>\n  \n \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/privacy/privacy-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/privacy/privacy-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PrivacyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPageRoutingModule", function() { return PrivacyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacy.page */ "./src/app/pages/privacy/privacy.page.ts");




const routes = [
    {
        path: '',
        component: _privacy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacyPage"]
    }
];
let PrivacyPageRoutingModule = class PrivacyPageRoutingModule {
};
PrivacyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrivacyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/privacy/privacy.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/privacy/privacy.module.ts ***!
  \*************************************************/
/*! exports provided: PrivacyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPageModule", function() { return PrivacyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privacy-routing.module */ "./src/app/pages/privacy/privacy-routing.module.ts");
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy.page */ "./src/app/pages/privacy/privacy.page.ts");







let PrivacyPageModule = class PrivacyPageModule {
};
PrivacyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacyPageRoutingModule"]
        ],
        declarations: [_privacy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPage"]]
    })
], PrivacyPageModule);



/***/ }),

/***/ "./src/app/pages/privacy/privacy.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/privacy/privacy.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n  padding: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmFjeS9HOlxcS0FTVUlLXFxEZXZcXE5pc3ZlclxcVGFiVGVtcGxhdGVcXE5pc3Zlci9zcmNcXGFwcFxccGFnZXNcXHByaXZhY3lcXHByaXZhY3kucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcml2YWN5L3ByaXZhY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBYTtBQ0FqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByaXZhY3kvcHJpdmFjeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZcclxue1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufSIsImRpdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/privacy/privacy.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/privacy/privacy.page.ts ***!
  \***********************************************/
/*! exports provided: PrivacyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPage", function() { return PrivacyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");



 //common serviec
let PrivacyPage = class PrivacyPage {
    constructor(apiService, commonService) {
        this.apiService = apiService;
        this.commonService = commonService;
    }
    ngOnInit() {
        this.displayPrivacyPolicy();
    }
    displayPrivacyPolicy() {
        this.apiService.fecthPrivacyPolicyContent(null).subscribe((response) => {
            console.log(response);
            this.htmlStr = response['description'];
        });
    }
};
PrivacyPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
PrivacyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./privacy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./privacy.page.scss */ "./src/app/pages/privacy/privacy.page.scss")).default]
    })
], PrivacyPage);



/***/ })

}]);
//# sourceMappingURL=pages-privacy-privacy-module-es2015.js.map
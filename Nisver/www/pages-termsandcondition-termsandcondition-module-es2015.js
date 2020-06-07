(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-termsandcondition-termsandcondition-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/termsandcondition/termsandcondition.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/termsandcondition/termsandcondition.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Terms & Condition</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-card-header>\n    \n    <ion-card-title>Terms & Condition</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <p >{{ data ? data : '-' }}</p>\n  </ion-card-content>\n</ion-card>\n  \n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/termsandcondition/termsandcondition-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/termsandcondition/termsandcondition-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TermsandconditionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsandconditionPageRoutingModule", function() { return TermsandconditionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _termsandcondition_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./termsandcondition.page */ "./src/app/pages/termsandcondition/termsandcondition.page.ts");




const routes = [
    {
        path: '',
        component: _termsandcondition_page__WEBPACK_IMPORTED_MODULE_3__["TermsandconditionPage"]
    }
];
let TermsandconditionPageRoutingModule = class TermsandconditionPageRoutingModule {
};
TermsandconditionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TermsandconditionPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/termsandcondition/termsandcondition.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/termsandcondition/termsandcondition.module.ts ***!
  \*********************************************************************/
/*! exports provided: TermsandconditionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsandconditionPageModule", function() { return TermsandconditionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _termsandcondition_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./termsandcondition-routing.module */ "./src/app/pages/termsandcondition/termsandcondition-routing.module.ts");
/* harmony import */ var _termsandcondition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./termsandcondition.page */ "./src/app/pages/termsandcondition/termsandcondition.page.ts");







let TermsandconditionPageModule = class TermsandconditionPageModule {
};
TermsandconditionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _termsandcondition_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsandconditionPageRoutingModule"]
        ],
        declarations: [_termsandcondition_page__WEBPACK_IMPORTED_MODULE_6__["TermsandconditionPage"]]
    })
], TermsandconditionPageModule);



/***/ }),

/***/ "./src/app/pages/termsandcondition/termsandcondition.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/termsandcondition/termsandcondition.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zYW5kY29uZGl0aW9uL3Rlcm1zYW5kY29uZGl0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/termsandcondition/termsandcondition.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/termsandcondition/termsandcondition.page.ts ***!
  \*******************************************************************/
/*! exports provided: TermsandconditionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsandconditionPage", function() { return TermsandconditionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");


 //common serviec

let TermsandconditionPage = class TermsandconditionPage {
    constructor(apiService, commonService) {
        this.apiService = apiService;
        this.commonService = commonService;
    }
    ngOnInit() {
        this.displaytermsandcondition();
    }
    displaytermsandcondition() {
        this.apiService.displayTermsAndCondition(null).subscribe((response) => {
            console.log(response);
            this.data = response['description'];
        });
    }
};
TermsandconditionPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
TermsandconditionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-termsandcondition',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./termsandcondition.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/termsandcondition/termsandcondition.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./termsandcondition.page.scss */ "./src/app/pages/termsandcondition/termsandcondition.page.scss")).default]
    })
], TermsandconditionPage);



/***/ })

}]);
//# sourceMappingURL=pages-termsandcondition-termsandcondition-module-es2015.js.map
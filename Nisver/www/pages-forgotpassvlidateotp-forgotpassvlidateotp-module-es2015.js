(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgotpassvlidateotp-forgotpassvlidateotp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp.page.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Validate OTP</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"forgotpass\">\n    <ion-card-header>\n     \n      <ion-card-title>Validate OTP</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n     \n      <ion-item>\n        <ion-label position=\"stacked\">OTP</ion-label>\n        <ion-input [(ngModel)]='otp' type=\"text\"> </ion-input>\n      </ion-item>\n    \n      <ion-button (click)=\"validateotp()\" type=\"button\" expand=\"block\">Validate Otp</ion-button>\n   \n    \n  \n    </ion-card-content>\n  </ion-card>\n  \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ForgotpassvlidateotpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassvlidateotpPageRoutingModule", function() { return ForgotpassvlidateotpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _forgotpassvlidateotp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgotpassvlidateotp.page */ "./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp.page.ts");




const routes = [
    {
        path: '',
        component: _forgotpassvlidateotp_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpassvlidateotpPage"]
    }
];
let ForgotpassvlidateotpPageRoutingModule = class ForgotpassvlidateotpPageRoutingModule {
};
ForgotpassvlidateotpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgotpassvlidateotpPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp.module.ts ***!
  \***************************************************************************/
/*! exports provided: ForgotpassvlidateotpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassvlidateotpPageModule", function() { return ForgotpassvlidateotpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forgotpassvlidateotp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgotpassvlidateotp-routing.module */ "./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp-routing.module.ts");
/* harmony import */ var _forgotpassvlidateotp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpassvlidateotp.page */ "./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp.page.ts");







let ForgotpassvlidateotpPageModule = class ForgotpassvlidateotpPageModule {
};
ForgotpassvlidateotpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgotpassvlidateotp_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpassvlidateotpPageRoutingModule"]
        ],
        declarations: [_forgotpassvlidateotp_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassvlidateotpPage"]]
    })
], ForgotpassvlidateotpPageModule);



/***/ }),

/***/ "./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdHBhc3N2bGlkYXRlb3RwL2ZvcmdvdHBhc3N2bGlkYXRlb3RwLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp.page.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotpassvlidateotpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassvlidateotpPage", function() { return ForgotpassvlidateotpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _model_session_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/session-storage.service */ "./src/app/model/session-storage.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




 //common serviec

let ForgotpassvlidateotpPage = class ForgotpassvlidateotpPage {
    constructor(router, commonService, authService, sessionStorage) {
        this.router = router;
        this.commonService = commonService;
        this.authService = authService;
        this.sessionStorage = sessionStorage;
    }
    ngOnInit() {
        console.log(this.sessionStorage.getData("mobile"));
    }
    validateotp() {
        if (this.otp) {
            this.commonService.showLoader();
            var formData = new FormData();
            formData.append("mobile_no", this.sessionStorage.getData("mobile"));
            formData.append("otp", this.otp);
            this.authService.validateForgotPasswordOTP(formData).subscribe((response) => {
                console.log(response);
                this.commonService.hideLoader();
                if (response['status'] == 1) {
                    this.commonService.showSuccess("OTP is validated successfully");
                    this.router.navigate(['/resetpassword']);
                }
                else {
                    this.commonService.showError(response['message']);
                }
            });
        }
        else {
            this.commonService.showError("Please enter your mobile number");
        }
    }
};
ForgotpassvlidateotpPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _model_session_storage_service__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"] }
];
ForgotpassvlidateotpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassvlidateotp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgotpassvlidateotp.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgotpassvlidateotp.page.scss */ "./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp.page.scss")).default]
    })
], ForgotpassvlidateotpPage);



/***/ })

}]);
//# sourceMappingURL=pages-forgotpassvlidateotp-forgotpassvlidateotp-module-es2015.js.map
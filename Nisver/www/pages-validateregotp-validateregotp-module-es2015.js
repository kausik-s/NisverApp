(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-validateregotp-validateregotp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/validateregotp/validateregotp.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/validateregotp/validateregotp.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Validate OTP</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"forgotpass\">\n    <ion-card-header>\n     \n      <ion-card-title>Validate OTP</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n     \n      <ion-item>\n        <ion-label position=\"stacked\">OTP</ion-label>\n        <ion-input [(ngModel)]='otp' type=\"text\"> </ion-input>\n      </ion-item>\n    \n      <ion-button (click)=\"validateotp()\" type=\"button\" expand=\"block\">Validate Otp</ion-button>\n   \n    \n  \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/validateregotp/validateregotp-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/validateregotp/validateregotp-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ValidateregotpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateregotpPageRoutingModule", function() { return ValidateregotpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _validateregotp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validateregotp.page */ "./src/app/pages/validateregotp/validateregotp.page.ts");




const routes = [
    {
        path: '',
        component: _validateregotp_page__WEBPACK_IMPORTED_MODULE_3__["ValidateregotpPage"]
    }
];
let ValidateregotpPageRoutingModule = class ValidateregotpPageRoutingModule {
};
ValidateregotpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ValidateregotpPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/validateregotp/validateregotp.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/validateregotp/validateregotp.module.ts ***!
  \***************************************************************/
/*! exports provided: ValidateregotpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateregotpPageModule", function() { return ValidateregotpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _validateregotp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validateregotp-routing.module */ "./src/app/pages/validateregotp/validateregotp-routing.module.ts");
/* harmony import */ var _validateregotp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validateregotp.page */ "./src/app/pages/validateregotp/validateregotp.page.ts");







let ValidateregotpPageModule = class ValidateregotpPageModule {
};
ValidateregotpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _validateregotp_routing_module__WEBPACK_IMPORTED_MODULE_5__["ValidateregotpPageRoutingModule"]
        ],
        declarations: [_validateregotp_page__WEBPACK_IMPORTED_MODULE_6__["ValidateregotpPage"]]
    })
], ValidateregotpPageModule);



/***/ }),

/***/ "./src/app/pages/validateregotp/validateregotp.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/validateregotp/validateregotp.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZhbGlkYXRlcmVnb3RwL3ZhbGlkYXRlcmVnb3RwLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/validateregotp/validateregotp.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/validateregotp/validateregotp.page.ts ***!
  \*************************************************************/
/*! exports provided: ValidateregotpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateregotpPage", function() { return ValidateregotpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_session_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/session-storage.service */ "./src/app/model/session-storage.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



 //common serviec


let ValidateregotpPage = class ValidateregotpPage {
    constructor(router, commonService, authService, sessionStorage) {
        this.router = router;
        this.commonService = commonService;
        this.authService = authService;
        this.sessionStorage = sessionStorage;
    }
    ngOnInit() {
    }
    validateotp() {
        if (this.otp) {
            this.commonService.showLoader();
            var formData = new FormData();
            formData.append("mobile", this.sessionStorage.getData("mobile"));
            formData.append("otp", this.otp);
            this.authService.validateRegOtp(formData).subscribe((response) => {
                console.log(response);
                this.commonService.hideLoader();
                if (response['status'] == 1) {
                    this.commonService.showSuccess("OTP is validated successfully.Please login");
                    this.router.navigate(['/']);
                }
                else {
                    this.commonService.showError(response['message']);
                }
            });
        }
        else {
            this.commonService.showError("Please enter otp");
        }
    }
};
ValidateregotpPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _model_session_storage_service__WEBPACK_IMPORTED_MODULE_2__["SessionStorageService"] }
];
ValidateregotpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-validateregotp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./validateregotp.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/validateregotp/validateregotp.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./validateregotp.page.scss */ "./src/app/pages/validateregotp/validateregotp.page.scss")).default]
    })
], ValidateregotpPage);



/***/ })

}]);
//# sourceMappingURL=pages-validateregotp-validateregotp-module-es2015.js.map
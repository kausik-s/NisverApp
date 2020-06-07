(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-changepassword-changepassword-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/changepassword/changepassword.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/changepassword/changepassword.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Change Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"forgotpass\">\n    <ion-card-header>\n     \n    <ion-card-title>Change Password</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Old Password</ion-label>\n        <ion-input [(ngModel)]='oldpassword' type=\"password\"> </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">New Password</ion-label>\n        <ion-input [(ngModel)]='newpassword' type=\"password\"> </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"stacked\">Confirm Password</ion-label>\n        <ion-input [(ngModel)]='confmpassword' type=\"password\"> </ion-input>\n      </ion-item>\n    \n      <ion-button (click)=\"changePassword()\" type=\"button\" expand=\"block\">Change Password</ion-button>\n   \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/changepassword/changepassword-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ChangepasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageRoutingModule", function() { return ChangepasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changepassword.page */ "./src/app/pages/changepassword/changepassword.page.ts");




const routes = [
    {
        path: '',
        component: _changepassword_page__WEBPACK_IMPORTED_MODULE_3__["ChangepasswordPage"]
    }
];
let ChangepasswordPageRoutingModule = class ChangepasswordPageRoutingModule {
};
ChangepasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangepasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/changepassword/changepassword.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword.module.ts ***!
  \***************************************************************/
/*! exports provided: ChangepasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPageModule", function() { return ChangepasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changepassword-routing.module */ "./src/app/pages/changepassword/changepassword-routing.module.ts");
/* harmony import */ var _changepassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changepassword.page */ "./src/app/pages/changepassword/changepassword.page.ts");







let ChangepasswordPageModule = class ChangepasswordPageModule {
};
ChangepasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _changepassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangepasswordPageRoutingModule"]
        ],
        declarations: [_changepassword_page__WEBPACK_IMPORTED_MODULE_6__["ChangepasswordPage"]]
    })
], ChangepasswordPageModule);



/***/ }),

/***/ "./src/app/pages/changepassword/changepassword.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/changepassword/changepassword.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/changepassword/changepassword.page.ts ***!
  \*************************************************************/
/*! exports provided: ChangepasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordPage", function() { return ChangepasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _model_session_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/session-storage.service */ "./src/app/model/session-storage.service.ts");


 //common serviec



let ChangepasswordPage = class ChangepasswordPage {
    constructor(router, commonService, authService, sessionStorage) {
        this.router = router;
        this.commonService = commonService;
        this.authService = authService;
        this.sessionStorage = sessionStorage;
    }
    ngOnInit() {
    }
    changePassword() {
        if (!this.oldpassword) {
            this.commonService.showError("Please enter your old password");
            return;
        }
        if (!this.newpassword) {
            this.commonService.showError("Please enter new password");
            return;
        }
        if (!this.confmpassword) {
            this.commonService.showError("Please confirm password");
            return;
        }
        if (this.newpassword != this.confmpassword) {
            this.commonService.showError("Password did not match.Please check");
        }
        else {
            this.commonService.showLoader();
            var formData = new FormData();
            formData.append("customerid", this.sessionStorage.getData("userId"));
            formData.append("new_password", this.newpassword);
            formData.append("old_password", this.oldpassword);
            this.authService.changePassword(formData).subscribe((response) => {
                console.log(response);
                this.commonService.hideLoader();
                if (response['status'] == 1) {
                    this.commonService.showSuccess("Your password has been changed sucessfully");
                    if (localStorage.getItem("user_type") == "ADMIN")
                        this.router.navigate(['/dashboard']);
                    else
                        this.router.navigate(['/home']);
                }
                else {
                    this.commonService.showError(response['message']);
                }
            });
        }
    }
};
ChangepasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _model_session_storage_service__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"] }
];
ChangepasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-changepassword',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./changepassword.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/changepassword/changepassword.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./changepassword.page.scss */ "./src/app/pages/changepassword/changepassword.page.scss")).default]
    })
], ChangepasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-changepassword-changepassword-module-es2015.js.map
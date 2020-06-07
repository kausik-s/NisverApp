(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feedback-feedback-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Feedback</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card id=\"signUpCard\">\n    <ion-card-header class=\"center\">\n      Add Feedback\n    </ion-card-header>\n    <ion-card-content>\n      \n      <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitFeedback()\" novalidate>\n\n        <ion-item >\n          <!--<ion-label position=\"floating\" class=\"mandatory\">Comments</ion-label>-->\n          <ion-textarea (change)=\"trackValueChange()\" formControlName=\"comments\" placeholder=\"Enter your Feedback here...\"></ion-textarea>\n        </ion-item>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.comments.errors?.required\">\n         Comments cannot be empty.\n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.comments.errors?.maxlength\">\n          Maximum 250 charecter is allowed\n        </span>\n\n        \n        <ion-button type=\"submit\" expand=\"block\">Send</ion-button>\n\n    \n        \n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/feedback/feedback-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/feedback/feedback-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FeedbackPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageRoutingModule", function() { return FeedbackPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feedback.page */ "./src/app/pages/feedback/feedback.page.ts");




const routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_3__["FeedbackPage"]
    }
];
let FeedbackPageRoutingModule = class FeedbackPageRoutingModule {
};
FeedbackPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FeedbackPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/feedback/feedback.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.module.ts ***!
  \***************************************************/
/*! exports provided: FeedbackPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function() { return FeedbackPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feedback-routing.module */ "./src/app/pages/feedback/feedback-routing.module.ts");
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feedback.page */ "./src/app/pages/feedback/feedback.page.ts");







let FeedbackPageModule = class FeedbackPageModule {
};
FeedbackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackPageRoutingModule"]
        ],
        declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]]
    })
], FeedbackPageModule);



/***/ }),

/***/ "./src/app/pages/feedback/feedback.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWRiYWNrL2ZlZWRiYWNrLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/feedback/feedback.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.ts ***!
  \*************************************************/
/*! exports provided: FeedbackPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackPage", function() { return FeedbackPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



 //common serviec



const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let FeedbackPage = class FeedbackPage {
    constructor(router, formBuilder, commonService, apiService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.apiService = apiService;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.ionicForm = this.formBuilder.group({
            comments: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(255)]]
        });
    }
    submitFeedback() {
        if (!this.ionicForm.valid) {
            this.commonService.showError("Please provide valid data");
            return;
        }
        this.isSubmitted = true;
        this.commonService.showLoader();
        var formData = new FormData();
        formData.append("feedback", this.ionicForm.get('comments').value);
        let userData = this.getObject("userData");
        formData.append("userid", userData['userid']);
        this.apiService.addFeedback(formData).subscribe((response) => {
            console.log(response);
            this.commonService.hideLoader();
            if (response['status'] == 1) {
                this.commonService.showSuccess("Feedback submitted successfully");
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
    get errorControl() {
        return this.ionicForm.controls;
    }
    trackValueChange() {
        this.isSubmitted = true;
    }
    getObject(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const item = yield Storage.get({ key: key });
            return JSON.parse(item.value);
        });
    }
};
FeedbackPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
FeedbackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./feedback.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./feedback.page.scss */ "./src/app/pages/feedback/feedback.page.scss")).default]
    })
], FeedbackPage);



/***/ })

}]);
//# sourceMappingURL=pages-feedback-feedback-module-es2015.js.map
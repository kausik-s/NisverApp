(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminhome-adminhome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/adminhome/adminhome.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/adminhome/adminhome.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Admin Dashboard</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"notifications\"></ion-icon>\n    </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button color=\"primary\">Pending Jobs</ion-button>\n  <ion-button color=\"secondary\">Progress</ion-button>\n  <ion-button color=\"tertiary\">Completed</ion-button>\n  <ion-button color=\"tertiary\">Cancelled</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/admin/adminhome/adminhome-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/adminhome/adminhome-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminhomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminhomePageRoutingModule", function() { return AdminhomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _adminhome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminhome.page */ "./src/app/admin/adminhome/adminhome.page.ts");




const routes = [
    {
        path: '',
        component: _adminhome_page__WEBPACK_IMPORTED_MODULE_3__["AdminhomePage"]
    }
];
let AdminhomePageRoutingModule = class AdminhomePageRoutingModule {
};
AdminhomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdminhomePageRoutingModule);



/***/ }),

/***/ "./src/app/admin/adminhome/adminhome.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/adminhome/adminhome.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminhomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminhomePageModule", function() { return AdminhomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _adminhome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adminhome-routing.module */ "./src/app/admin/adminhome/adminhome-routing.module.ts");
/* harmony import */ var _adminhome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adminhome.page */ "./src/app/admin/adminhome/adminhome.page.ts");







let AdminhomePageModule = class AdminhomePageModule {
};
AdminhomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _adminhome_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdminhomePageRoutingModule"]
        ],
        declarations: [_adminhome_page__WEBPACK_IMPORTED_MODULE_6__["AdminhomePage"]]
    })
], AdminhomePageModule);



/***/ }),

/***/ "./src/app/admin/adminhome/adminhome.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/admin/adminhome/adminhome.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  width: 50px;\n  height: 27px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW5ob21lL0c6XFxLQVNVSUtcXERldlxcTmlzdmVyXFxUYWJUZW1wbGF0ZVxcTmlzdmVyL3NyY1xcYXBwXFxhZG1pblxcYWRtaW5ob21lXFxhZG1pbmhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbmhvbWUvYWRtaW5ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVHLFdBQVc7RUFDWCxZQUFZO0FDQWYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbmhvbWUvYWRtaW5ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uXHJcbntcclxuICAgd2lkdGg6IDUwcHg7XHJcbiAgIGhlaWdodDogMjdweDtcclxufSIsImlvbi1pY29uIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogMjdweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/admin/adminhome/adminhome.page.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/adminhome/adminhome.page.ts ***!
  \***************************************************/
/*! exports provided: AdminhomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminhomePage", function() { return AdminhomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AdminhomePage = class AdminhomePage {
    constructor() { }
    ngOnInit() {
    }
};
AdminhomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminhome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./adminhome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/adminhome/adminhome.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./adminhome.page.scss */ "./src/app/admin/adminhome/adminhome.page.scss")).default]
    })
], AdminhomePage);



/***/ })

}]);
//# sourceMappingURL=adminhome-adminhome-module-es2015.js.map
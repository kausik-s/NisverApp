(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orderhistab-orderhistab-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orderhistab/orderhistab.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orderhistab/orderhistab.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Order Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/admin/orderhistab/orderhistab-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/admin/orderhistab/orderhistab-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: OrderhistabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistabPageRoutingModule", function() { return OrderhistabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orderhistab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderhistab.page */ "./src/app/admin/orderhistab/orderhistab.page.ts");




const routes = [
    {
        path: '',
        component: _orderhistab_page__WEBPACK_IMPORTED_MODULE_3__["OrderhistabPage"]
    }
];
let OrderhistabPageRoutingModule = class OrderhistabPageRoutingModule {
};
OrderhistabPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderhistabPageRoutingModule);



/***/ }),

/***/ "./src/app/admin/orderhistab/orderhistab.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/orderhistab/orderhistab.module.ts ***!
  \*********************************************************/
/*! exports provided: OrderhistabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistabPageModule", function() { return OrderhistabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _orderhistab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderhistab-routing.module */ "./src/app/admin/orderhistab/orderhistab-routing.module.ts");
/* harmony import */ var _orderhistab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderhistab.page */ "./src/app/admin/orderhistab/orderhistab.page.ts");







let OrderhistabPageModule = class OrderhistabPageModule {
};
OrderhistabPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orderhistab_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderhistabPageRoutingModule"]
        ],
        declarations: [_orderhistab_page__WEBPACK_IMPORTED_MODULE_6__["OrderhistabPage"]]
    })
], OrderhistabPageModule);



/***/ }),

/***/ "./src/app/admin/orderhistab/orderhistab.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/admin/orderhistab/orderhistab.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL29yZGVyaGlzdGFiL29yZGVyaGlzdGFiLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/orderhistab/orderhistab.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/orderhistab/orderhistab.page.ts ***!
  \*******************************************************/
/*! exports provided: OrderhistabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistabPage", function() { return OrderhistabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderhistabPage = class OrderhistabPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderhistabPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderhistab',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderhistab.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/orderhistab/orderhistab.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderhistab.page.scss */ "./src/app/admin/orderhistab/orderhistab.page.scss")).default]
    })
], OrderhistabPage);



/***/ })

}]);
//# sourceMappingURL=orderhistab-orderhistab-module-es2015.js.map
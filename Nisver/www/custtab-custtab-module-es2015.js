(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["custtab-custtab-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/custtab/custtab.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/custtab/custtab.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Customer List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngFor=\"let cuslist of custJsonList\"  (click)=\"viewcuslistDetails(cuslist)\" detail>\n    <ion-list>\n  <ion-item lines=\"none\">\n        <ion-avatar slot=\"start\">\n          <img src=\"{{cuslist.user_profile}}\">\n        </ion-avatar>\n        \n        <ion-label>\n          \n          <ion-grid>\n            <ion-row>\n              <ion-col><div>Name:</div></ion-col>\n              <ion-col><div>{{cuslist.user_name}}</div></ion-col>\n              \n            </ion-row>\n\n            <ion-row>\n              <ion-col><div>Category:</div></ion-col>\n              <ion-col><div>{{cuslist.user_proffesion}}</div></ion-col>\n              \n            </ion-row>\n            <ion-row>\n              <ion-col><div>Mobile:</div></ion-col>\n              <ion-col><div>{{cuslist.user_mobile}}</div></ion-col>\n              \n            </ion-row>\n            <ion-row>\n              <ion-col><div>Address</div></ion-col>\n              <ion-col><div>{{cuslist.user_currentaddress}}</div></ion-col>\n              \n            </ion-row>\n          </ion-grid>\n        \n        </ion-label>\n      </ion-item>\n\n    </ion-list>\n\n  </ion-item>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/admin/custtab/custtab-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/custtab/custtab-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CusttabPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusttabPageRoutingModule", function() { return CusttabPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _custtab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custtab.page */ "./src/app/admin/custtab/custtab.page.ts");




const routes = [
    {
        path: '',
        component: _custtab_page__WEBPACK_IMPORTED_MODULE_3__["CusttabPage"]
    }
];
let CusttabPageRoutingModule = class CusttabPageRoutingModule {
};
CusttabPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CusttabPageRoutingModule);



/***/ }),

/***/ "./src/app/admin/custtab/custtab.module.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/custtab/custtab.module.ts ***!
  \*************************************************/
/*! exports provided: CusttabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusttabPageModule", function() { return CusttabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _custtab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custtab-routing.module */ "./src/app/admin/custtab/custtab-routing.module.ts");
/* harmony import */ var _custtab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custtab.page */ "./src/app/admin/custtab/custtab.page.ts");







let CusttabPageModule = class CusttabPageModule {
};
CusttabPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _custtab_routing_module__WEBPACK_IMPORTED_MODULE_5__["CusttabPageRoutingModule"]
        ],
        declarations: [_custtab_page__WEBPACK_IMPORTED_MODULE_6__["CusttabPage"]]
    })
], CusttabPageModule);



/***/ }),

/***/ "./src/app/admin/custtab/custtab.page.scss":
/*!*************************************************!*\
  !*** ./src/app/admin/custtab/custtab.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  color: black;\n}\n\ndiv {\n  font-size: 10px;\n}\n\nion-grid {\n  --ion-grid-padding:0px;\n}\n\nion-row {\n  height: 15px;\n}\n\n/**\r\nion-content{\r\n\r\n    --ion-background-color:#111D12;\r\n}\r\n***/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY3VzdHRhYi9HOlxcS0FTVUlLXFxEZXZcXE5pc3ZlclxcVGFiVGVtcGxhdGVcXE5pc3Zlci9zcmNcXGFwcFxcYWRtaW5cXGN1c3R0YWJcXGN1c3R0YWIucGFnZS5zY3NzIiwic3JjL2FwcC9hZG1pbi9jdXN0dGFiL2N1c3R0YWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksWUFBVztBQ0FmOztBREVBO0VBRUksZUFBZTtBQ0FuQjs7QURFQTtFQUVJLHNCQUFtQjtBQ0F2Qjs7QURFQTtFQUVJLFlBQVc7QUNBZjs7QURFQTs7Ozs7R0NLRyIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2N1c3R0YWIvY3VzdHRhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbVxyXG57XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5kaXZcclxue1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbmlvbi1ncmlkXHJcbntcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZzowcHg7XHJcbn1cclxuaW9uLXJvd1xyXG57XHJcbiAgICBoZWlnaHQ6MTVweDtcclxufVxyXG4vKipcclxuaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMTExRDEyO1xyXG59XHJcbioqKi9cclxuIiwiaW9uLWl0ZW0ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmRpdiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6MHB4O1xufVxuXG5pb24tcm93IHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4vKipcclxuaW9uLWNvbnRlbnR7XHJcblxyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMTExRDEyO1xyXG59XHJcbioqKi9cbiJdfQ== */");

/***/ }),

/***/ "./src/app/admin/custtab/custtab.page.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/custtab/custtab.page.ts ***!
  \***********************************************/
/*! exports provided: CusttabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CusttabPage", function() { return CusttabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



 //common serviec

let CusttabPage = class CusttabPage {
    constructor(router, apiService, commonService) {
        this.router = router;
        this.apiService = apiService;
        this.commonService = commonService;
    }
    ngOnInit() {
        this.getfeedbacklist();
    }
    getfeedbacklist() {
        this.apiService.getCustomerList(null).subscribe((response) => {
            console.log(response);
            this.custJsonList = response['customerList'];
        });
    }
    viewcuslistDetails(item) {
        console.log(JSON.stringify(item));
        this.commonService.setObject("cuslist", item);
        this.router.navigateByUrl('custdetails');
    }
};
CusttabPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
CusttabPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-custtab',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./custtab.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/custtab/custtab.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./custtab.page.scss */ "./src/app/admin/custtab/custtab.page.scss")).default]
    })
], CusttabPage);



/***/ })

}]);
//# sourceMappingURL=custtab-custtab-module-es2015.js.map
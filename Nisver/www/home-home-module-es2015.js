(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"pendingorder\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Home</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"vendorsearch\">\n        <ion-icon name=\"search\"></ion-icon>\n        <ion-label>Search</ion-label>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"orderhistory\">\n        <ion-icon name=\"git-pull-request\"></ion-icon>\n        <ion-label>Order History</ion-label>\n      </ion-tab-button>\n      \n      <ion-tab-button tab=\"bookinghistory\">\n        <ion-icon name=\"bookmarks\"></ion-icon>\n        <ion-label>Booking History</ion-label>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n\n  </ion-tabs>\n\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: 'home',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: 'pendingorder',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-pendingorder-pendingorder-module */ "pages-pendingorder-pendingorder-module").then(__webpack_require__.bind(null, /*! ../pages/pendingorder/pendingorder.module */ "./src/app/pages/pendingorder/pendingorder.module.ts")).then(m => m.PendingorderPageModule)
            },
            {
                path: 'vendorsearch',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-vendorsearch-vendorsearch-module */ "pages-vendorsearch-vendorsearch-module").then(__webpack_require__.bind(null, /*! ../pages/vendorsearch/vendorsearch.module */ "./src/app/pages/vendorsearch/vendorsearch.module.ts")).then(m => m.VendorsearchPageModule)
            },
            {
                path: 'orderhistory',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-orderhistory-orderhistory-module */ "pages-orderhistory-orderhistory-module").then(__webpack_require__.bind(null, /*! ../pages/orderhistory/orderhistory.module */ "./src/app/pages/orderhistory/orderhistory.module.ts")).then(m => m.OrderhistoryPageModule)
            },
            {
                path: 'bookinghistory',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-bookinghistory-bookinghistory-module */ "pages-bookinghistory-bookinghistory-module").then(__webpack_require__.bind(null, /*! ../pages/bookinghistory/bookinghistory.module */ "./src/app/pages/bookinghistory/bookinghistory.module.ts")).then(m => m.BookinghistoryPageModule)
            },
            {
                path: '',
                redirectTo: 'pendingorder',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'pendingorder',
        pathMatch: 'full'
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  color: black;\n}\n\ndiv {\n  font-size: 10px;\n}\n\nion-grid {\n  --ion-grid-padding:0px;\n}\n\nion-row {\n  height: 15px;\n}\n\n/**\r\nion-content{\r\n\r\n    --ion-background-color:#111D12;\r\n}\r\n***/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9HOlxcS0FTVUlLXFxEZXZcXE5pc3ZlclxcVGFiVGVtcGxhdGVcXE5pc3Zlci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFXO0FDQWY7O0FERUE7RUFFSSxlQUFlO0FDQW5COztBREVBO0VBRUksc0JBQW1CO0FDQXZCOztBREVBO0VBRUksWUFBVztBQ0FmOztBREVBOzs7OztHQ0tHIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtXHJcbntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbmRpdlxyXG57XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuaW9uLWdyaWRcclxue1xyXG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOjBweDtcclxufVxyXG5pb24tcm93XHJcbntcclxuICAgIGhlaWdodDoxNXB4O1xyXG59XHJcbi8qKlxyXG5pb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMxMTFEMTI7XHJcbn1cclxuKioqL1xyXG4iLCJpb24taXRlbSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuZGl2IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG5pb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtcGFkZGluZzowcHg7XG59XG5cbmlvbi1yb3cge1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi8qKlxyXG5pb24tY29udGVudHtcclxuXHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMxMTFEMTI7XHJcbn1cclxuKioqL1xuIl19 */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomePage = class HomePage {
    constructor() { }
    ngOnInit() {
    }
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map
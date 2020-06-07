(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-orderhistory-orderhistory-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderhistory/orderhistory.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderhistory/orderhistory.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Order History</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label >Order Status</ion-label>\n    <ion-select (ionChange)=\"selectStatus($event)\" interface=\"popover\" placeholder=\"Select One\">\n      <ion-select-option  *ngFor=\"let order of orderStatus\"   [value]=\"order.value\">{{order.key}}</ion-select-option>\n   \n    </ion-select>\n  </ion-item>\n\n\n  <!-----home page content-->\n  <ion-item *ngFor=\"let order of orderList\" >\n    <ion-list>\n     \n\n      <ion-item lines=\"none\">\n\n        <!--\n        <ion-avatar slot=\"start\">\n          <img src=\"{{vendor.user_profile}}\">\n        </ion-avatar>\n        -->\n        <ion-label>\n          \n          <ion-grid>\n            <ion-row>\n              <ion-col><div>Customer Name:</div></ion-col>\n              <ion-col><div>{{order.sender_name}}</div></ion-col>\n              \n            </ion-row>\n\n            <ion-row>\n              <ion-col><div>Order Category:</div></ion-col>\n              <ion-col><div>{{order.receiver_category_name}}</div></ion-col>\n              \n            </ion-row>\n            <ion-row>\n              <ion-col><div>Order Status:</div></ion-col>\n              <ion-col><div>{{order.order_status}}</div></ion-col>\n              \n            </ion-row>\n            <ion-row>\n              <ion-col><div>Order Date:</div></ion-col>\n              <ion-col><div>{{order.order_created_date}}</div></ion-col>\n              \n            </ion-row>\n\n            <ion-row>\n              <ion-col><div>Comments:</div></ion-col>\n              <ion-col><div>{{order.orders_comments}}</div></ion-col>\n              \n            </ion-row>\n          </ion-grid>\n        \n        </ion-label>\n      </ion-item>\n\n    </ion-list>\n\n  </ion-item>\n\n\n  \n\n<!----page content-->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/orderhistory/orderhistory-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/orderhistory/orderhistory-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OrderhistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistoryPageRoutingModule", function() { return OrderhistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orderhistory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderhistory.page */ "./src/app/pages/orderhistory/orderhistory.page.ts");




const routes = [
    {
        path: '',
        component: _orderhistory_page__WEBPACK_IMPORTED_MODULE_3__["OrderhistoryPage"]
    }
];
let OrderhistoryPageRoutingModule = class OrderhistoryPageRoutingModule {
};
OrderhistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderhistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/orderhistory/orderhistory.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/orderhistory/orderhistory.module.ts ***!
  \***********************************************************/
/*! exports provided: OrderhistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistoryPageModule", function() { return OrderhistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _orderhistory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderhistory-routing.module */ "./src/app/pages/orderhistory/orderhistory-routing.module.ts");
/* harmony import */ var _orderhistory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderhistory.page */ "./src/app/pages/orderhistory/orderhistory.page.ts");







let OrderhistoryPageModule = class OrderhistoryPageModule {
};
OrderhistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orderhistory_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderhistoryPageRoutingModule"]
        ],
        declarations: [_orderhistory_page__WEBPACK_IMPORTED_MODULE_6__["OrderhistoryPage"]]
    })
], OrderhistoryPageModule);



/***/ }),

/***/ "./src/app/pages/orderhistory/orderhistory.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/orderhistory/orderhistory.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  color: black;\n}\n\ndiv {\n  font-size: 10px;\n}\n\nion-grid {\n  --ion-grid-padding:0px;\n}\n\nion-row {\n  height: 15px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3JkZXJoaXN0b3J5L0c6XFxLQVNVSUtcXERldlxcTmlzdmVyXFxUYWJUZW1wbGF0ZVxcTmlzdmVyL3NyY1xcYXBwXFxwYWdlc1xcb3JkZXJoaXN0b3J5XFxvcmRlcmhpc3RvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9vcmRlcmhpc3Rvcnkvb3JkZXJoaXN0b3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQVc7QUNBZjs7QURFQTtFQUVJLGVBQWU7QUNBbkI7O0FERUE7RUFFSSxzQkFBbUI7QUNBdkI7O0FERUE7RUFFSSxZQUFXO0FDQWYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vcmRlcmhpc3Rvcnkvb3JkZXJoaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtXHJcbntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbmRpdlxyXG57XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuaW9uLWdyaWRcclxue1xyXG4gICAgLS1pb24tZ3JpZC1wYWRkaW5nOjBweDtcclxufVxyXG5pb24tcm93XHJcbntcclxuICAgIGhlaWdodDoxNXB4O1xyXG59IiwiaW9uLWl0ZW0ge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmRpdiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuaW9uLWdyaWQge1xuICAtLWlvbi1ncmlkLXBhZGRpbmc6MHB4O1xufVxuXG5pb24tcm93IHtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/orderhistory/orderhistory.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/orderhistory/orderhistory.page.ts ***!
  \*********************************************************/
/*! exports provided: OrderhistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderhistoryPage", function() { return OrderhistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



 //common serviec


let OrderhistoryPage = class OrderhistoryPage {
    constructor(apiService, commonService, router, menu) {
        this.apiService = apiService;
        this.commonService = commonService;
        this.router = router;
        this.menu = menu;
    }
    ngOnInit() {
        this.commonService.getObject("userData").then((result) => {
            console.log(result);
            this.userID = result['userid'];
        });
        this.orderStatus = [
            {
                "key": "All",
                "value": "ALL"
            },
            {
                "key": "Completed",
                "value": "COMPLETED"
            },
            {
                "key": "In Progress",
                "value": "PROGRESS"
            },
            {
                "key": "Cancelled",
                "value": "CANCELLED"
            }
        ];
    }
    selectStatus($event) {
        console.log("status of event" + $event.target.value);
        this.getOrderByStatus($event.target.value);
    }
    getOrderByStatus(status) {
        this.commonService.showLoader();
        var formData = new FormData();
        formData.append("customerid", this.userID);
        //formData.append("customerid","14");
        formData.append("status", status);
        this.apiService.getOrdersList(formData).subscribe((response) => {
            console.log(response);
            this.commonService.hideLoader();
            if (response['ordersList'] != "") {
                this.orderList = response['ordersList'];
                this.commonService.showSuccess("Order Retrived successfully");
            }
            else {
                this.commonService.showError("No Data Found");
            }
        });
    }
};
OrderhistoryPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
OrderhistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderhistory',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderhistory.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orderhistory/orderhistory.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderhistory.page.scss */ "./src/app/pages/orderhistory/orderhistory.page.scss")).default]
    })
], OrderhistoryPage);



/***/ })

}]);
//# sourceMappingURL=pages-orderhistory-orderhistory-module-es2015.js.map
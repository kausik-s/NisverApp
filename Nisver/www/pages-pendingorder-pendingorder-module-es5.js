function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pendingorder-pendingorder-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pendingorder/pendingorder.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pendingorder/pendingorder.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPendingorderPendingorderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Pending Orders</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon name=\"notifications\"></ion-icon>\n    </ion-buttons>\n    \n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor=\"let order of orderList\"  color=\"primary\" class=\"background\"> \n\n    <ion-item lines=\"none\">\n   \n      <ion-label>\n        \n        <ion-grid>\n          <ion-row>\n            <ion-col class=\"startColwidth\" ></ion-col>\n            <ion-col><div>Customer Name:</div></ion-col>\n            <ion-col><div>{{order.sender_name}}</div></ion-col>\n            <ion-col class=\"endcolwidth\" ></ion-col>\n          </ion-row>\n \n          <ion-row >\n            <ion-col class=\"startColwidth\" ></ion-col>\n            <ion-col><div>Order Category:</div></ion-col>\n            <ion-col><div>{{order.receiver_category_name}}</div></ion-col>\n            <ion-col class=\"endcolwidth\" ></ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"startColwidth\"></ion-col>\n            <ion-col><div>Order Status:</div></ion-col>\n            <ion-col><div>{{order.order_status}}</div></ion-col>\n            <ion-col class=\"endcolwidth\" ></ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"startColwidth\"></ion-col>\n            <ion-col ><div>Order Date:</div></ion-col>\n            <ion-col><div>{{order.order_created_date}}</div></ion-col>\n            <ion-col class=\"endcolwidth\" ></ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col class=\"startColwidth\"></ion-col>\n            <ion-col ><div>Comments:</div></ion-col>\n            <ion-col><div>{{order.orders_comments}}</div></ion-col>\n            <ion-col class=\"endcolwidth\" ></ion-col>\n          </ion-row>\n\n          \n        </ion-grid>\n\n        \n        <ion-grid>\n         \n          <ion-row class=\"action\">\n            <ion-col ></ion-col>\n            <ion-col >\n            <ion-chip (click)=\"acceptOrder(order)\" color=\"success\">\n              <ion-icon name=\"checkmark-circle\"></ion-icon>\n              <ion-label>Accept</ion-label>\n            </ion-chip>\n          </ion-col>\n            <ion-col>\n              <ion-chip (click)=\"rejectOrder(order)\" color=\"danger\">\n                <ion-icon name=\"close\"></ion-icon>\n                <ion-label>Reject</ion-label>\n              </ion-chip>\n  \n            </ion-col>\n            <ion-col ></ion-col>\n          </ion-row>\n\n        </ion-grid>\n       \n      \n      </ion-label>\n    </ion-item>\n\n    \n  </ion-card>\n\n\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/pendingorder/pendingorder-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/pendingorder/pendingorder-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: PendingorderPageRoutingModule */

  /***/
  function srcAppPagesPendingorderPendingorderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingorderPageRoutingModule", function () {
      return PendingorderPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pendingorder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pendingorder.page */
    "./src/app/pages/pendingorder/pendingorder.page.ts");

    var routes = [{
      path: '',
      component: _pendingorder_page__WEBPACK_IMPORTED_MODULE_3__["PendingorderPage"]
    }];

    var PendingorderPageRoutingModule = function PendingorderPageRoutingModule() {
      _classCallCheck(this, PendingorderPageRoutingModule);
    };

    PendingorderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PendingorderPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/pendingorder/pendingorder.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/pendingorder/pendingorder.module.ts ***!
    \***********************************************************/

  /*! exports provided: PendingorderPageModule */

  /***/
  function srcAppPagesPendingorderPendingorderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingorderPageModule", function () {
      return PendingorderPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _pendingorder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pendingorder-routing.module */
    "./src/app/pages/pendingorder/pendingorder-routing.module.ts");
    /* harmony import */


    var _pendingorder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pendingorder.page */
    "./src/app/pages/pendingorder/pendingorder.page.ts");

    var PendingorderPageModule = function PendingorderPageModule() {
      _classCallCheck(this, PendingorderPageModule);
    };

    PendingorderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pendingorder_routing_module__WEBPACK_IMPORTED_MODULE_5__["PendingorderPageRoutingModule"]],
      declarations: [_pendingorder_page__WEBPACK_IMPORTED_MODULE_6__["PendingorderPage"]]
    })], PendingorderPageModule);
    /***/
  },

  /***/
  "./src/app/pages/pendingorder/pendingorder.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/pendingorder/pendingorder.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPendingorderPendingorderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-label {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 5px;\n  font-style: normal;\n  font-variant: normal;\n}\n\nion-item {\n  color: black;\n}\n\ndiv {\n  font-size: 10px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-variant: normal;\n}\n\nion-grid {\n  --ion-grid-padding:0px;\n}\n\nion-row {\n  height: 15px;\n}\n\n.startColwidth {\n  min-width: 30px;\n}\n\n.endcolwidth {\n  min-width: 24%;\n}\n\n.action {\n  height: 50px;\n}\n\n.background {\n  background-color: slategray !important;\n}\n\nion-icon {\n  width: 50px;\n  height: 27px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVuZGluZ29yZGVyL0c6XFxLQVNVSUtcXERldlxcTmlzdmVyXFxUYWJUZW1wbGF0ZVxcTmlzdmVyL3NyY1xcYXBwXFxwYWdlc1xccGVuZGluZ29yZGVyXFxwZW5kaW5nb3JkZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wZW5kaW5nb3JkZXIvcGVuZGluZ29yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDJEQUEyRDtFQUMzRCxjQUFjO0VBQUUsa0JBQWtCO0VBQUUsb0JBQW9CO0FDRTVEOztBRENBO0VBRUksWUFBVztBQ0NmOztBRENBO0VBRUksZUFBZTtFQUNmLDJEQUEyRDtFQUMzRCxrQkFBa0I7RUFBRSxvQkFBb0I7QUNFNUM7O0FEQUE7RUFFSSxzQkFBbUI7QUNFdkI7O0FEQUE7RUFFSSxZQUFXO0FDRWY7O0FEQ0M7RUFFRyxlQUFlO0FDQ25COztBREVDO0VBRUcsY0FBYztBQ0FsQjs7QURFQztFQUVJLFlBQVc7QUNBaEI7O0FER0M7RUFFRyxzQ0FBc0M7QUNEMUM7O0FESUM7RUFFRyxXQUFXO0VBQ1gsWUFBWTtBQ0ZoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbmRpbmdvcmRlci9wZW5kaW5nb3JkZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWxhYmVsXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7IFxyXG4gICAgZm9udC1zaXplOiA1cHg7IGZvbnQtc3R5bGU6IG5vcm1hbDsgZm9udC12YXJpYW50OiBub3JtYWw7XHJcbiBcclxufVxyXG5pb24taXRlbVxyXG57XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5kaXZcclxue1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsgXHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7IGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG59XHJcbmlvbi1ncmlkXHJcbntcclxuICAgIC0taW9uLWdyaWQtcGFkZGluZzowcHg7XHJcbn1cclxuaW9uLXJvd1xyXG57XHJcbiAgICBoZWlnaHQ6MTVweDtcclxufVxyXG5cclxuIC5zdGFydENvbHdpZHRoXHJcbiB7XHJcbiAgICBtaW4td2lkdGg6IDMwcHg7XHJcbiB9XHJcblxyXG4gLmVuZGNvbHdpZHRoXHJcbiB7XHJcbiAgICBtaW4td2lkdGg6IDI0JTtcclxuIH1cclxuIC5hY3Rpb25cclxuIHtcclxuICAgICBoZWlnaHQ6NTBweDtcclxuIH1cclxuXHJcbiAuYmFja2dyb3VuZFxyXG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4gaW9uLWljb25cclxuIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gfSIsImlvbi1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNXB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xufVxuXG5pb24taXRlbSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuZGl2IHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xufVxuXG5pb24tZ3JpZCB7XG4gIC0taW9uLWdyaWQtcGFkZGluZzowcHg7XG59XG5cbmlvbi1yb3cge1xuICBoZWlnaHQ6IDE1cHg7XG59XG5cbi5zdGFydENvbHdpZHRoIHtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuXG4uZW5kY29sd2lkdGgge1xuICBtaW4td2lkdGg6IDI0JTtcbn1cblxuLmFjdGlvbiB7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXkgIWltcG9ydGFudDtcbn1cblxuaW9uLWljb24ge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiAyN3B4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/pendingorder/pendingorder.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/pendingorder/pendingorder.page.ts ***!
    \*********************************************************/

  /*! exports provided: PendingorderPage */

  /***/
  function srcAppPagesPendingorderPendingorderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingorderPage", function () {
      return PendingorderPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js"); //common serviec


    var PendingorderPage = /*#__PURE__*/function () {
      function PendingorderPage(apiService, commonService, router, menu) {
        _classCallCheck(this, PendingorderPage);

        this.apiService = apiService;
        this.commonService = commonService;
        this.router = router;
        this.menu = menu; //this.menu.enable(true, 'start');
      }

      _createClass(PendingorderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.commonService.getObject("userData").then(function (result) {
            console.log(result);
            _this.userID = result['userid'];

            _this.getPendingOrderList();
          });
        }
      }, {
        key: "getPendingOrderList",
        value: function getPendingOrderList() {
          var _this2 = this;

          this.commonService.showLoader();
          var formData = new FormData(); //formData.append("customerid",this.userID );

          formData.append("customerid", "14");
          formData.append("status", "PENDING");
          this.apiService.getOrdersList(formData).subscribe(function (response) {
            console.log(response);

            _this2.commonService.hideLoader();

            if (response['ordersList'] != "") {
              _this2.orderList = response['ordersList'];

              _this2.commonService.showSuccess("Order Retrived successfully");
            } else {
              _this2.commonService.showError("No Data Found");
            }
          });
        }
      }, {
        key: "acceptOrder",
        value: function acceptOrder(item) {
          var _this3 = this;

          console.log("selection changes" + JSON.stringify(item));
          this.commonService.showLoader();
          var formData = new FormData();
          formData.append("orderid", item['orderid']);
          formData.append("order_status", "1");
          this.apiService.acceptOrRejectOrder(formData).subscribe(function (response) {
            console.log(response);

            _this3.commonService.hideLoader();

            if (response['status'] == 1) {
              _this3.commonService.showSuccess("Order accpted successfully");

              _this3.router.navigate(['/home']);
            } else {
              _this3.commonService.showError("Error in accepting order");
            }
          });
        }
      }, {
        key: "rejectOrder",
        value: function rejectOrder(item) {
          var _this4 = this;

          console.log("selection changes" + JSON.stringify(item));
          this.commonService.showLoader();
          var formData = new FormData();
          formData.append("orderid", item['orderid']);
          formData.append("order_status", "0");
          this.apiService.acceptOrRejectOrder(formData).subscribe(function (response) {
            console.log(response);

            _this4.commonService.hideLoader();

            if (response['status'] == 1) {
              _this4.commonService.showSuccess("Order rejected successfully");

              _this4.router.navigate(['/home']);
            } else {
              _this4.commonService.showError("Error in accepting order");
            }
          });
        }
      }]);

      return PendingorderPage;
    }();

    PendingorderPage.ctorParameters = function () {
      return [{
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }];
    };

    PendingorderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pendingorder',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pendingorder.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pendingorder/pendingorder.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pendingorder.page.scss */
      "./src/app/pages/pendingorder/pendingorder.page.scss"))["default"]]
    })], PendingorderPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-pendingorder-pendingorder-module-es5.js.map
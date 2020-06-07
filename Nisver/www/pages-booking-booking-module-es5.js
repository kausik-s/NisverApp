function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-booking-booking-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booking/booking.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booking/booking.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBookingBookingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Booking</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n     \n      <ion-card-title>Vendor Details</ion-card-title>\n    </ion-card-header>\n  \n    <ion-card-content>\n\n      <ion-avatar class='avatar' >\n          <ion-img [src]=\"profileImg\"></ion-img>\n      </ion-avatar>\n      \n      \n\n      <ion-grid>\n        <ion-row>\n          <ion-col><div>Name:</div></ion-col>\n          <ion-col><div>{{name}}</div></ion-col>\n          \n        </ion-row>\n\n        <ion-row>\n          <ion-col><div>Mobile:</div></ion-col>\n          \n          \n          <ion-col *ngIf=\"hidemobile\"><div>xxxxxxxxx</div></ion-col>\n          <ion-col *ngIf=\"!hidemobile\"><div>{{user_mobile}}</div></ion-col>\n          <!--\n          <ion-col *ngIf=\"user_gender=='MALE'&&user_marital_status=='MARRIED';else showMob\"><div>xxxxxxxxxx</div></ion-col>\n\n          <ng-template #showMob> <ion-col><div>{{user_mobile}}</div></ion-col></ng-template>\n          -->\n          \n        </ion-row>\n\n        <ion-row>\n          <ion-col><div>Email:</div></ion-col>\n          <ion-col><div>{{user_email}}</div></ion-col>\n          \n        </ion-row>\n\n        <ion-row>\n          <ion-col><div>Gender:</div></ion-col>\n          <ion-col><div>{{user_gender}}</div></ion-col>\n          \n        </ion-row>\n\n        <ion-row>\n          <ion-col><div>Alternate Mobile:</div></ion-col>\n\n          <ion-col *ngIf=\"hidemobile\"><div>xxxxxxxxx</div></ion-col>\n          <ion-col *ngIf=\"!hidemobile\"><div>{{user_altmobile}}</div></ion-col>\n         \n      \n        </ion-row>\n\n        <ion-row>\n          <ion-col><div>Skills:</div></ion-col>\n          <ion-col><div>{{user_proffesion}}</div></ion-col>\n          \n        </ion-row>\n\n        <ion-row>\n          <ion-col><div>Distance:</div></ion-col>\n          <ion-col><div>{{user_distance}}</div></ion-col>\n          \n        </ion-row>\n        <ion-row>\n          <ion-col><div>Working Since:</div></ion-col>\n          <ion-col><div>{{user_addedon}}</div></ion-col>\n          \n        </ion-row>\n\n        <ion-row>\n          <ion-col><div>Current Address:</div></ion-col>\n          <ion-col><div>{{user_currentaddress}}</div></ion-col>\n          \n        </ion-row>\n\n      </ion-grid>\n\n\n      <ion-item >\n        <!--<ion-label position=\"floating\" class=\"mandatory\">Comments</ion-label>-->\n        <ion-textarea [(ngModel)]='comments'  placeholder=\"Enter your Comments here...\"></ion-textarea>\n      </ion-item>\n  \n      <ion-button (click)=\"submitBooking()\" type=\"button\" expand=\"block\">Book</ion-button>\n\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/booking/booking-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/booking/booking-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: BookingPageRoutingModule */

  /***/
  function srcAppPagesBookingBookingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPageRoutingModule", function () {
      return BookingPageRoutingModule;
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


    var _booking_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./booking.page */
    "./src/app/pages/booking/booking.page.ts");

    var routes = [{
      path: '',
      component: _booking_page__WEBPACK_IMPORTED_MODULE_3__["BookingPage"]
    }];

    var BookingPageRoutingModule = function BookingPageRoutingModule() {
      _classCallCheck(this, BookingPageRoutingModule);
    };

    BookingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/booking/booking.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/booking/booking.module.ts ***!
    \*************************************************/

  /*! exports provided: BookingPageModule */

  /***/
  function srcAppPagesBookingBookingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPageModule", function () {
      return BookingPageModule;
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


    var _booking_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./booking-routing.module */
    "./src/app/pages/booking/booking-routing.module.ts");
    /* harmony import */


    var _booking_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./booking.page */
    "./src/app/pages/booking/booking.page.ts");

    var BookingPageModule = function BookingPageModule() {
      _classCallCheck(this, BookingPageModule);
    };

    BookingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _booking_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingPageRoutingModule"]],
      declarations: [_booking_page__WEBPACK_IMPORTED_MODULE_6__["BookingPage"]]
    })], BookingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/booking/booking.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/booking/booking.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBookingBookingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2tpbmcvYm9va2luZy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/booking/booking.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/booking/booking.page.ts ***!
    \***********************************************/

  /*! exports provided: BookingPage */

  /***/
  function srcAppPagesBookingBookingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPage", function () {
      return BookingPage;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");

    var BookingPage = /*#__PURE__*/function () {
      function BookingPage(router, location, commonService, apiService) {
        var _this = this;

        _classCallCheck(this, BookingPage);

        this.router = router;
        this.location = location;
        this.commonService = commonService;
        this.apiService = apiService;
        this.commonService.getObject("vendor").then(function (result) {
          //console.log("vendor data"+JSON.stringify(result)); 
          //this.vendorData=result;
          _this.profileImg = result['user_profile'];
          _this.name = result['user_name'];
          _this.user_mobile = result['user_mobile'];
          _this.user_email = result['user_email'];
          _this.user_gender = result['user_gender'];
          _this.user_altmobile = result['user_altmobile'];
          _this.user_proffesion = result['user_proffesion'];
          _this.user_distance = result['user_distance'];
          _this.user_addedon = result['user_addedon'];
          _this.user_currentaddress = result['user_currentaddress'];
          _this.vendorid = result['customerid'];
          _this.user_marital_status = result['user_marital_status']; //HIDE MOBILE FOR FEMALE AND UNMARRIED VENDOR

          if (_this.user_gender == 'FEMALE' && _this.user_marital_status == 'UNMARRIED') _this.hidemobile = true;
        });
      }

      _createClass(BookingPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.commonService.getObject("userData").then(function (result) {
            console.log(result);
            _this2.userid = result['userid'];
          });
        }
      }, {
        key: "submitBooking",
        value: function submitBooking() {
          var _this3 = this;

          if (this.comments == '') {
            this.commonService.showError("Please insert your comments");
          } else {
            this.commonService.showLoader();
            var formData = new FormData();
            formData.append("senderid", this.userid);
            formData.append("receiverid", this.vendorid);
            formData.append("comments", this.comments);
            this.apiService.bookOrder(formData).subscribe(function (response) {
              console.log(response);

              _this3.commonService.hideLoader();

              if (response['status'] == 1) {
                _this3.commonService.showSuccess("Order booked sucessfully");
              } else {
                _this3.commonService.showError(response['message']);
              }
            });
          }
        }
      }]);

      return BookingPage;
    }();

    BookingPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }];
    };

    BookingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-booking',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./booking.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booking/booking.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./booking.page.scss */
      "./src/app/pages/booking/booking.page.scss"))["default"]]
    })], BookingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-booking-booking-module-es5.js.map
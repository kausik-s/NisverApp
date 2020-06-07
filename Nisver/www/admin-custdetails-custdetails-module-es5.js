function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-custdetails-custdetails-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/custdetails/custdetails.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/custdetails/custdetails.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCustdetailsCustdetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"custtab\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Customer Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-content>\n\n      <ion-avatar class='avatar' >\n          <ion-img [src]=\"user_profile\"></ion-img>\n      </ion-avatar>\n      \n      \n\n      <ion-grid>\n        <ion-row>\n          <ion-col><div>Name:</div></ion-col>\n          <ion-col><div>{{name}}</div></ion-col>\n          \n        </ion-row>\n\n        <ion-row>\n          <ion-col><div>Mobile:</div></ion-col> \n          <ion-col ><div>{{user_mobile}}</div></ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col><div>Email:</div></ion-col>\n          <ion-col><div>{{user_email}}</div></ion-col>\n          \n        </ion-row>\n\n        <ion-row>\n          <ion-col><div>Gender:</div></ion-col>\n          <ion-col><div>{{user_gender}}</div></ion-col>\n          \n        </ion-row>\n\n        <ion-row>\n          <ion-col><div>Alternate Mobile:</div></ion-col>\n\n          <ion-col *ngIf=\"hidemobile\"><div>xxxxxxxxx</div></ion-col>\n          <ion-col *ngIf=\"!hidemobile\"><div>{{user_altmobile}}</div></ion-col>\n         \n      \n        </ion-row>\n\n        <ion-row>\n          <ion-col><div>Skills:</div></ion-col>\n          <ion-col><div>{{user_proffesion}}</div></ion-col>\n          \n        </ion-row>\n\n        <ion-row>\n          <ion-col><div>Distance:</div></ion-col>\n          <ion-col><div>{{user_distance}}</div></ion-col>\n          \n        </ion-row>\n        <ion-row>\n          <ion-col><div>Working Since:</div></ion-col>\n          <ion-col><div>{{user_addedon}}</div></ion-col>\n          \n        </ion-row>\n\n        <ion-row>\n          <ion-col><div>Current Address:</div></ion-col>\n          <ion-col><div>{{user_currentaddress}}</div></ion-col>\n          \n        </ion-row>\n\n      </ion-grid>\n    <ion-button (click)=\"submitBlock()\" type=\"button\" expand=\"block\">Block</ion-button>\n      <ion-button (click)=\"submitUnblock()\" type=\"button\" expand=\"block\">UnBlock</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/admin/custdetails/custdetails-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/custdetails/custdetails-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CustdetailsPageRoutingModule */

  /***/
  function srcAppAdminCustdetailsCustdetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustdetailsPageRoutingModule", function () {
      return CustdetailsPageRoutingModule;
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


    var _custdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./custdetails.page */
    "./src/app/admin/custdetails/custdetails.page.ts");

    var routes = [{
      path: '',
      component: _custdetails_page__WEBPACK_IMPORTED_MODULE_3__["CustdetailsPage"]
    }];

    var CustdetailsPageRoutingModule = function CustdetailsPageRoutingModule() {
      _classCallCheck(this, CustdetailsPageRoutingModule);
    };

    CustdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CustdetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/custdetails/custdetails.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/admin/custdetails/custdetails.module.ts ***!
    \*********************************************************/

  /*! exports provided: CustdetailsPageModule */

  /***/
  function srcAppAdminCustdetailsCustdetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustdetailsPageModule", function () {
      return CustdetailsPageModule;
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


    var _custdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./custdetails-routing.module */
    "./src/app/admin/custdetails/custdetails-routing.module.ts");
    /* harmony import */


    var _custdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./custdetails.page */
    "./src/app/admin/custdetails/custdetails.page.ts");

    var CustdetailsPageModule = function CustdetailsPageModule() {
      _classCallCheck(this, CustdetailsPageModule);
    };

    CustdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _custdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["CustdetailsPageRoutingModule"]],
      declarations: [_custdetails_page__WEBPACK_IMPORTED_MODULE_6__["CustdetailsPage"]]
    })], CustdetailsPageModule);
    /***/
  },

  /***/
  "./src/app/admin/custdetails/custdetails.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/admin/custdetails/custdetails.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminCustdetailsCustdetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2N1c3RkZXRhaWxzL2N1c3RkZXRhaWxzLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/custdetails/custdetails.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/admin/custdetails/custdetails.page.ts ***!
    \*******************************************************/

  /*! exports provided: CustdetailsPage */

  /***/
  function srcAppAdminCustdetailsCustdetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustdetailsPage", function () {
      return CustdetailsPage;
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
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //common serviec


    var CustdetailsPage = /*#__PURE__*/function () {
      function CustdetailsPage(router, apiService, commonService) {
        var _this = this;

        _classCallCheck(this, CustdetailsPage);

        this.router = router;
        this.apiService = apiService;
        this.commonService = commonService;
        this.commonService.getObject("cuslist").then(function (result) {
          _this.user_profile = result['user_profile'];
          _this.name = result['user_name'];
          _this.user_mobile = result['user_mobile'];
          _this.user_email = result['user_email'];
          _this.user_gender = result['user_gender'];
          _this.user_altmobile = result['user_altmobile'];
          _this.user_proffesion = result['user_proffesion'];
          _this.user_distance = result['user_distance'];
          _this.user_addedon = result['user_addedon'];
          _this.user_currentaddress = result['user_currentaddress'];
          _this.user_marital_status = result['user_marital_status'];
          _this.userid = result['userid'];
        });
      }

      _createClass(CustdetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submitBlock",
        value: function submitBlock() {
          var _this2 = this;

          this.commonService.showLoader();
          var formData = new FormData();
          formData.append("customerid", this.userid);
          formData.append("status ", 1);
          this.apiService.setBlockUnblock(formData).subscribe(function (response) {
            console.log(response);

            _this2.commonService.hideLoader();

            if (response['status'] == 1) {
              _this2.commonService.showSuccess("User blocked sucessfully");
            } else {
              _this2.commonService.showError(response['message']);
            }
          });
        }
      }, {
        key: "submitUnblock",
        value: function submitUnblock() {
          var _this3 = this;

          this.commonService.showLoader();
          var formData = new FormData();
          formData.append("customerid", this.userid);
          formData.append("status ", 0);
          this.apiService.setBlockUnblock(formData).subscribe(function (response) {
            console.log(response);

            _this3.commonService.hideLoader();

            if (response['status'] == 1) {
              _this3.commonService.showSuccess("User blocked sucessfully");
            } else {
              _this3.commonService.showError(response['message']);
            }
          });
        }
      }]);

      return CustdetailsPage;
    }();

    CustdetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }];
    };

    CustdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-custdetails',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./custdetails.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/custdetails/custdetails.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./custdetails.page.scss */
      "./src/app/admin/custdetails/custdetails.page.scss"))["default"]]
    })], CustdetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=admin-custdetails-custdetails-module-es5.js.map
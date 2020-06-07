function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n  <ion-tabs>\n  \n  <ion-tab-bar slot=\"bottom\">\n  <ion-tab-button tab=\"adminhome\">\n    <ion-icon name=\"home\"></ion-icon>\n    <ion-label>Home</ion-label>\n  </ion-tab-button>\n  \n  <ion-tab-button tab=\"custtab\">\n    <ion-icon name=\"people-outline\"></ion-icon>\n    <ion-label>Customer</ion-label>\n  </ion-tab-button>\n  \n  <ion-tab-button tab=\"feedbacktab\">\n    <ion-icon name=\"briefcase-outline\"></ion-icon>\n    <ion-label>Feedback</ion-label>\n  </ion-tab-button>\n  \n  <ion-tab-button tab=\"orderhistab\">\n    <ion-icon name=\"bookmark\"></ion-icon>\n    <ion-label>Order</ion-label>\n  </ion-tab-button>\n\n  </ion-tab-bar>\n  \n  </ion-tabs>\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardPageRoutingModule */

  /***/
  function srcAppAdminDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageRoutingModule", function () {
      return DashboardPageRoutingModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/admin/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_3__["DashboardPage"],
      children: [{
        path: 'adminhome',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | adminhome-adminhome-module */
          "adminhome-adminhome-module").then(__webpack_require__.bind(null,
          /*! ../adminhome/adminhome.module */
          "./src/app/admin/adminhome/adminhome.module.ts")).then(function (m) {
            return m.AdminhomePageModule;
          });
        }
      }, {
        path: 'custtab',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | custtab-custtab-module */
          "custtab-custtab-module").then(__webpack_require__.bind(null,
          /*! ../custtab/custtab.module */
          "./src/app/admin/custtab/custtab.module.ts")).then(function (m) {
            return m.CusttabPageModule;
          });
        }
      }, {
        path: 'feedbacktab',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | feedbacktab-feedbacktab-module */
          "feedbacktab-feedbacktab-module").then(__webpack_require__.bind(null,
          /*! ../feedbacktab/feedbacktab.module */
          "./src/app/admin/feedbacktab/feedbacktab.module.ts")).then(function (m) {
            return m.FeedbacktabPageModule;
          });
        }
      }, {
        path: 'orderhistab',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | orderhistab-orderhistab-module */
          "orderhistab-orderhistab-module").then(__webpack_require__.bind(null,
          /*! ../orderhistab/orderhistab.module */
          "./src/app/admin/orderhistab/orderhistab.module.ts")).then(function (m) {
            return m.OrderhistabPageModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'adminhome',
        pathMatch: 'full'
      }]
    }, {
      path: '',
      redirectTo: 'adminhome',
      pathMatch: 'full'
    }];

    var DashboardPageRoutingModule = function DashboardPageRoutingModule() {
      _classCallCheck(this, DashboardPageRoutingModule);
    };

    DashboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppAdminDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/admin/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/admin/dashboard/dashboard.page.ts");

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardPageRoutingModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/admin/dashboard/dashboard.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/admin/dashboard/dashboard.page.ts ***!
    \***************************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppAdminDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage() {
        _classCallCheck(this, DashboardPage);
      }

      _createClass(DashboardPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashboardPage;
    }();

    DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/dashboard/dashboard.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/admin/dashboard/dashboard.page.scss"))["default"]]
    })], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=admin-dashboard-dashboard-module-es5.js.map
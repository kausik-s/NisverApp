function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n\n  <!-- user menu start-->\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"content1\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n     <!--profile image-->\n      <ion-avatar >\n        <img src=\"../../assets/img/avatar-han.png\">\n      </ion-avatar>\n      <!--profile image-->\n      <ion-list *ngFor=\"let pages of navigate\">\n      <ion-menu-toggle auto-hide=\"true\">\n        <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\">\n            <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\n               {{pages.title}} \n        </ion-item>\n      </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n<!-- user menu end-->\n\n<!---admin menu start--->\n\n<ion-menu side=\"start\" menuId=\"admin\" contentId=\"adminmenu\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n   <!--profile image-->\n    <ion-avatar >\n      <img src=\"../../assets/img/avatar-han.png\">\n    </ion-avatar>\n    <!--profile image-->\n    <ion-list *ngFor=\"let pages of navigateAdmin\">\n    <ion-menu-toggle auto-hide=\"true\">\n      <ion-item [routerLink]=\"pages.url\" routerDirection=\"forward\">\n          <ion-icon [name]=\"pages.icon\" slot=\"start\"></ion-icon>\n             {{pages.title}} \n      </ion-item>\n    </ion-menu-toggle>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<!---admin menu end-->\n  \n  \n  <ion-router-outlet id=\"content1\"></ion-router-outlet>\n  <ion-router-outlet id=\"adminmenu\"></ion-router-outlet>\n  \n</ion-app>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    var routes = [{
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | index-index-module */
        "index-index-module").then(__webpack_require__.bind(null,
        /*! ./index/index.module */
        "./src/app/index/index.module.ts")).then(function (m) {
          return m.IndexPageModule;
        });
      }
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-signup-signup-module */
        [__webpack_require__.e("default~pages-profile-profile-module~pages-signup-signup-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-signup-signup-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/signup/signup.module */
        "./src/app/pages/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-login-login-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/login/login.module */
        "./src/app/pages/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'aboutus',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-aboutus-aboutus-module */
        "pages-aboutus-aboutus-module").then(__webpack_require__.bind(null,
        /*! ./pages/aboutus/aboutus.module */
        "./src/app/pages/aboutus/aboutus.module.ts")).then(function (m) {
          return m.AboutusPageModule;
        });
      }
    }, {
      path: 'privacy',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-privacy-privacy-module */
        "pages-privacy-privacy-module").then(__webpack_require__.bind(null,
        /*! ./pages/privacy/privacy.module */
        "./src/app/pages/privacy/privacy.module.ts")).then(function (m) {
          return m.PrivacyPageModule;
        });
      }
    }, {
      path: 'feedback',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-feedback-feedback-module */
        "pages-feedback-feedback-module").then(__webpack_require__.bind(null,
        /*! ./pages/feedback/feedback.module */
        "./src/app/pages/feedback/feedback.module.ts")).then(function (m) {
          return m.FeedbackPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-profile-profile-module */
        [__webpack_require__.e("default~pages-profile-profile-module~pages-signup-signup-module"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/profile/profile.module */
        "./src/app/pages/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'home/booking',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-booking-booking-module */
        "pages-booking-booking-module").then(__webpack_require__.bind(null,
        /*! ./pages/booking/booking.module */
        "./src/app/pages/booking/booking.module.ts")).then(function (m) {
          return m.BookingPageModule;
        });
      }
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | admin-dashboard-dashboard-module */
        "admin-dashboard-dashboard-module").then(__webpack_require__.bind(null,
        /*! ./admin/dashboard/dashboard.module */
        "./src/app/admin/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardPageModule;
        });
      }
    }, {
      path: 'adminhome',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | admin-adminhome-adminhome-module */
        "adminhome-adminhome-module").then(__webpack_require__.bind(null,
        /*! ./admin/adminhome/adminhome.module */
        "./src/app/admin/adminhome/adminhome.module.ts")).then(function (m) {
          return m.AdminhomePageModule;
        });
      }
    }, {
      path: 'custtab',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | admin-custtab-custtab-module */
        "custtab-custtab-module").then(__webpack_require__.bind(null,
        /*! ./admin/custtab/custtab.module */
        "./src/app/admin/custtab/custtab.module.ts")).then(function (m) {
          return m.CusttabPageModule;
        });
      }
    }, {
      path: 'feedbacktab',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | admin-feedbacktab-feedbacktab-module */
        "feedbacktab-feedbacktab-module").then(__webpack_require__.bind(null,
        /*! ./admin/feedbacktab/feedbacktab.module */
        "./src/app/admin/feedbacktab/feedbacktab.module.ts")).then(function (m) {
          return m.FeedbacktabPageModule;
        });
      }
    }, {
      path: 'custdetails',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | admin-custdetails-custdetails-module */
        "admin-custdetails-custdetails-module").then(__webpack_require__.bind(null,
        /*! ./admin/custdetails/custdetails.module */
        "./src/app/admin/custdetails/custdetails.module.ts")).then(function (m) {
          return m.CustdetailsPageModule;
        });
      }
    }, {
      path: 'forgotpassword',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-forgotpassword-forgotpassword-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-forgotpassword-forgotpassword-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/forgotpassword/forgotpassword.module */
        "./src/app/pages/forgotpassword/forgotpassword.module.ts")).then(function (m) {
          return m.ForgotpasswordPageModule;
        });
      }
    }, {
      path: 'forgotpassvlidateotp',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-forgotpassvlidateotp-forgotpassvlidateotp-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-forgotpassvlidateotp-forgotpassvlidateotp-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/forgotpassvlidateotp/forgotpassvlidateotp.module */
        "./src/app/pages/forgotpassvlidateotp/forgotpassvlidateotp.module.ts")).then(function (m) {
          return m.ForgotpassvlidateotpPageModule;
        });
      }
    }, {
      path: 'resetpassword',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-resetpassword-resetpassword-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-resetpassword-resetpassword-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/resetpassword/resetpassword.module */
        "./src/app/pages/resetpassword/resetpassword.module.ts")).then(function (m) {
          return m.ResetpasswordPageModule;
        });
      }
    }, {
      path: 'changepassword',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-changepassword-changepassword-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-changepassword-changepassword-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/changepassword/changepassword.module */
        "./src/app/pages/changepassword/changepassword.module.ts")).then(function (m) {
          return m.ChangepasswordPageModule;
        });
      }
    }, {
      path: 'addcategory',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | admin-addcategory-addcategory-module */
        [__webpack_require__.e("common"), __webpack_require__.e("admin-addcategory-addcategory-module")]).then(__webpack_require__.bind(null,
        /*! ./admin/addcategory/addcategory.module */
        "./src/app/admin/addcategory/addcategory.module.ts")).then(function (m) {
          return m.AddcategoryPageModule;
        });
      }
    }, {
      path: 'termsandcondition',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-termsandcondition-termsandcondition-module */
        "pages-termsandcondition-termsandcondition-module").then(__webpack_require__.bind(null,
        /*! ./pages/termsandcondition/termsandcondition.module */
        "./src/app/pages/termsandcondition/termsandcondition.module.ts")).then(function (m) {
          return m.TermsandconditionPageModule;
        });
      }
    }, {
      path: 'validateregotp',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-validateregotp-validateregotp-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-validateregotp-validateregotp-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/validateregotp/validateregotp.module */
        "./src/app/pages/validateregotp/validateregotp.module.ts")).then(function (m) {
          return m.ValidateregotpPageModule;
        });
      }
    }
    /*
    ,
        {
      path: 'pendingorder',
      loadChildren: () => import('./pages/pendingorder/pendingorder.module').then( m => m.PendingorderPageModule)
    },
    {
      path: 'orderhistory',
      loadChildren: () => import('./pages/orderhistory/orderhistory.module').then( m => m.OrderhistoryPageModule)
    },
    {
      path: 'bookinghistory',
      loadChildren: () => import('./pages/bookinghistory/bookinghistory.module').then( m => m.BookinghistoryPageModule)
    }
    */

    /*
    ,
    {
      path: 'home/vendorsearch',
      loadChildren: () => import('./pages/vendorsearch/vendorsearch.module').then( m => m.VendorsearchPageModule)
    }
    */

    /*,
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'index',
      loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
    },
    {
      path: 'login',
      loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
    },
    
    {
      path: 'welcome',
      loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
    }
    */
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
        this.sideMenu();
        this.adminMenu();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
        /***** sideMenu for user menu and adminMenu for Admin
         *
         * for usiing menu import import
         * { MenuController } from '@ionic/angular';
         * in *.page.ts file
         * pass menu cotroller in Construter like : private menu: MenuController
         * inside controller write
         *
         *  this.menu.enable(true, 'admin');  for admin menu
         *  this.menu.enable(true, 'first');  for user menu
         *
         *
         */

      }, {
        key: "sideMenu",
        value: function sideMenu() {
          this.navigate = [{
            title: "Home",
            url: "/home",
            icon: "home"
          }, {
            title: "Profile",
            url: "/profile",
            icon: "home"
          }, {
            title: "Change Password",
            url: "/changepassword",
            icon: "help-circle-outline"
          }, {
            title: "Feedback",
            url: "/feedback",
            icon: "trophy-outline"
          }, {
            title: "Privacy Policy",
            url: "/privacy",
            icon: "eye-off-outline"
          }, {
            title: "Terms and Condition",
            url: "/termsandcondition",
            icon: "create-outline"
          }, {
            title: "About Us",
            url: "/aboutus",
            icon: "people-outline"
          }, {
            title: "Log Out",
            url: "/",
            icon: "log-out-outline"
          }];
        }
      }, {
        key: "adminMenu",
        value: function adminMenu() {
          this.navigateAdmin = [{
            title: "Home",
            url: "/dashboard",
            icon: "home"
          }, {
            title: "Profile",
            url: "/profile",
            icon: "person-outline"
          }, {
            title: "Change Password",
            url: "/changepassword",
            icon: "help-circle-outline"
          }, {
            title: "Feedback",
            url: "/feedback",
            icon: "trophy-outline"
          }, {
            title: "Add Category",
            url: "/addcategory",
            icon: "people-outline"
          }, {
            title: "Privacy Policy",
            url: "/privacy",
            icon: "eye-off-outline"
          }, {
            title: "Terms and Condition",
            url: "/termsandcondition",
            icon: "create-outline"
          }, {
            title: "About Us",
            url: "/aboutus",
            icon: "people-outline"
          }, {
            title: "Log Out",
            url: "/",
            icon: "log-out-outline"
          }];
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_env_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/env.service */
    "./src/app/services/env.service.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/api.service */
    "./src/app/services/api.service.ts"); //common serviec


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _services_common_service__WEBPACK_IMPORTED_MODULE_10__["CommonService"], _services_env_service__WEBPACK_IMPORTED_MODULE_11__["EnvService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"], _services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
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


    var _env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./env.service */
    "./src/app/services/env.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http, env) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.env = env; // Http Options

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'multipart/form-data'
          })
        };
      } // Handle API errors


      _createClass(ApiService, [{
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('Something bad happened; please try again later.');
        }
      }, {
        key: "addFeedback",
        //Feedback
        value: function addFeedback(item) {
          return this.http.post(this.env.API_URL + '/feedback_add.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //update profile

      }, {
        key: "updateProfile",
        value: function updateProfile(item) {
          return this.http.post(this.env.API_URL + '/my_profile_update.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //get category list

      }, {
        key: "getCategoryList",
        value: function getCategoryList(item) {
          return this.http.post(this.env.API_URL + '/category_list.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //search vendor

      }, {
        key: "searchVendorList",
        value: function searchVendorList(item) {
          return this.http.post(this.env.API_URL + '/search_vender_list.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //bookOrder

      }, {
        key: "bookOrder",
        value: function bookOrder(item) {
          return this.http.post(this.env.API_URL + '/order_booking.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //getOrders

      }, {
        key: "getOrdersList",
        value: function getOrdersList(item) {
          return this.http.post(this.env.API_URL + '/order_history_listing.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //acceptOrRejectOrder

      }, {
        key: "acceptOrRejectOrder",
        value: function acceptOrRejectOrder(item) {
          return this.http.post(this.env.API_URL + '/order_accept_reject.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //For Admin
        //Feedback List

      }, {
        key: "getfeedbackList",
        value: function getfeedbackList(item) {
          return this.http.post(this.env.API_URL + '/feedback_list.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //Customer List

      }, {
        key: "getCustomerList",
        value: function getCustomerList(item) {
          return this.http.post(this.env.API_URL + '/admin_customer_vender_list.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //BlockUnblock User

      }, {
        key: "setBlockUnblock",
        value: function setBlockUnblock(item) {
          return this.http.post(this.env.API_URL + '/admin_customer_vendor_block_unblock.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //Category add

      }, {
        key: "addCategory",
        value: function addCategory(item) {
          return this.http.post(this.env.API_URL + '/category_add.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //BlockUnblock User

      }, {
        key: "displayTermsAndCondition",
        value: function displayTermsAndCondition(item) {
          return this.http.post(this.env.API_URL + '/term_condition.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        } //BlockUnblock User

      }, {
        key: "fetchBookingList",
        value: function fetchBookingList(item) {
          return this.http.post(this.env.API_URL + '/order_booking_listing.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }]);

      return ApiService;
    }();

    ApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _env_service__WEBPACK_IMPORTED_MODULE_2__["EnvService"]
      }];
    };

    ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ApiService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _env_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./env.service */
    "./src/app/services/env.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js"); //import { Observable, BehaviorSubject } from  'rxjs';


    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;

    var AuthService = /*#__PURE__*/function () {
      function AuthService(http, env) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.env = env;
        /*
        login(data): Observable<AuthResponse> {
          return this.httpClient.post(`${this.env.API_URL}/login.php`, data).pipe(
            tap(async (res: AuthResponse) => {
              if (res.status==1) {
                
                await Storage.set({
                  key: 'userInfo',
                  value: JSON.stringify(res)
                });
                this.authSubject.next(true);
              }
            })
          );
        }
        */
        // Http Options

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'multipart/form-data'
          })
        };
      } // Handle API errors


      _createClass(AuthService, [{
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          } // return an observable with a user-facing error message


          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Something bad happened; please try again later.');
        }
      }, {
        key: "login",
        //login service call
        value: function login(item) {
          return this.http.post(this.env.API_URL + '/login.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        } //fecth about us

      }, {
        key: "fecthAboutusContent",
        value: function fecthAboutusContent(item) {
          return this.http.post(this.env.API_URL + '/aboutus.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        } //fecth about us

      }, {
        key: "fecthPrivacyPolicyContent",
        value: function fecthPrivacyPolicyContent(item) {
          return this.http.post(this.env.API_URL + '/privacy_policy.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        } //forgot password

      }, {
        key: "forgotpassword",
        value: function forgotpassword(item) {
          return this.http.post(this.env.API_URL + '/forget_password.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        } //validateForgotPasswordOTP

      }, {
        key: "validateForgotPasswordOTP",
        value: function validateForgotPasswordOTP(item) {
          return this.http.post(this.env.API_URL + '/forget_password_otp.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        } //resetPassword

      }, {
        key: "resetPassword",
        value: function resetPassword(item) {
          return this.http.post(this.env.API_URL + '/reset_password.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        } //changePassword

      }, {
        key: "changePassword",
        value: function changePassword(item) {
          return this.http.post(this.env.API_URL + '/change_password.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        } //validateRegOtp

      }, {
        key: "validateRegOtp",
        value: function validateRegOtp(item) {
          return this.http.post(this.env.API_URL + '/registration_otp.php', item, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _env_service__WEBPACK_IMPORTED_MODULE_4__["EnvService"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/common.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/common.service.ts ***!
    \********************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppServicesCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");

    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"].Storage;

    var CommonService = /*#__PURE__*/function () {
      function CommonService(toastController, loadingController) {
        _classCallCheck(this, CommonService);

        this.toastController = toastController;
        this.loadingController = loadingController;
      }
      /****show messagre */


      _createClass(CommonService, [{
        key: "showSuccess",
        value: function showSuccess(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.toastController.create({
                      message: msg,
                      color: "success",
                      position: 'top',
                      duration: 2000
                    });

                  case 2:
                    toast = _context.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showError",
        value: function showError(msg) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var toast;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.toastController.create({
                      message: msg,
                      color: "danger",
                      position: 'top',
                      duration: 2000
                    });

                  case 2:
                    toast = _context2.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
        /*****show loader */

      }, {
        key: "showLoader",
        value: function showLoader() {
          this.loaderToShow = this.loadingController.create({
            message: 'Please wait..'
          }).then(function (res) {
            res.present();
            res.onDidDismiss().then(function (dis) {
              console.log('Loading dismissed!');
            });
          });
        }
      }, {
        key: "hideLoader",
        value: function hideLoader() {
          this.loadingController.dismiss();
        }
        /****storing data in local storage */

      }, {
        key: "setObject",
        value: function setObject(key, data) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return Storage.set({
                      key: key,
                      value: JSON.stringify(data)
                    });

                  case 2:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
      }, {
        key: "getObject",
        value: function getObject(key) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var item;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return Storage.get({
                      key: key
                    });

                  case 2:
                    item = _context4.sent;
                    return _context4.abrupt("return", JSON.parse(item.value));

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/services/env.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/env.service.ts ***!
    \*****************************************/

  /*! exports provided: EnvService */

  /***/
  function srcAppServicesEnvServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnvService", function () {
      return EnvService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EnvService = function EnvService() {
      _classCallCheck(this, EnvService);

      this.API_URL = 'http://nisver.com/addon/api';
    };

    EnvService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EnvService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! G:\KASUIK\Dev\Nisver\TabTemplate\Nisver\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
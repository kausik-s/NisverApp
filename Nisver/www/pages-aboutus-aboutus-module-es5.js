function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-aboutus-aboutus-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aboutus/aboutus.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aboutus/aboutus.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutusAboutusPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>About Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card-header>\n    \n    <ion-card-title>About Us</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <p >{{ data ? data : '-' }}</p>\n  </ion-card-content>\n\n  \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/aboutus/aboutus-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/aboutus/aboutus-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AboutusPageRoutingModule */

  /***/
  function srcAppPagesAboutusAboutusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusPageRoutingModule", function () {
      return AboutusPageRoutingModule;
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


    var _aboutus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./aboutus.page */
    "./src/app/pages/aboutus/aboutus.page.ts");

    var routes = [{
      path: '',
      component: _aboutus_page__WEBPACK_IMPORTED_MODULE_3__["AboutusPage"]
    }];

    var AboutusPageRoutingModule = function AboutusPageRoutingModule() {
      _classCallCheck(this, AboutusPageRoutingModule);
    };

    AboutusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutusPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/aboutus/aboutus.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/aboutus/aboutus.module.ts ***!
    \*************************************************/

  /*! exports provided: AboutusPageModule */

  /***/
  function srcAppPagesAboutusAboutusModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function () {
      return AboutusPageModule;
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


    var _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./aboutus-routing.module */
    "./src/app/pages/aboutus/aboutus-routing.module.ts");
    /* harmony import */


    var _aboutus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./aboutus.page */
    "./src/app/pages/aboutus/aboutus.page.ts");

    var AboutusPageModule = function AboutusPageModule() {
      _classCallCheck(this, AboutusPageModule);
    };

    AboutusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutusPageRoutingModule"]],
      declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_6__["AboutusPage"]]
    })], AboutusPageModule);
    /***/
  },

  /***/
  "./src/app/pages/aboutus/aboutus.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/aboutus/aboutus.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutusAboutusPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0dXMvYWJvdXR1cy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/aboutus/aboutus.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/aboutus/aboutus.page.ts ***!
    \***********************************************/

  /*! exports provided: AboutusPage */

  /***/
  function srcAppPagesAboutusAboutusPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusPage", function () {
      return AboutusPage;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts"); //common serviec


    var AboutusPage = /*#__PURE__*/function () {
      function AboutusPage(apiService, commonService) {
        _classCallCheck(this, AboutusPage);

        this.apiService = apiService;
        this.commonService = commonService;
      }

      _createClass(AboutusPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.displayAboutUs();
        }
      }, {
        key: "displayAboutUs",
        value: function displayAboutUs() {
          var _this = this;

          this.apiService.fecthAboutusContent(null).subscribe(function (response) {
            console.log(response);
            _this.data = response['description'];
          });
          /*
          this.apiService.fecthAboutusContent(null).subscribe((response) => {
            console.log(response);
            this.commonService.hideLoader();
            
            if(response['status']==1)
            {
              console.log("success");
            }
            else
            {
              this.commonService.showError(response['message']);
            }
                }
          }
          */
        }
      }]);

      return AboutusPage;
    }();

    AboutusPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }];
    };

    AboutusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aboutus',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./aboutus.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/aboutus/aboutus.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./aboutus.page.scss */
      "./src/app/pages/aboutus/aboutus.page.scss"))["default"]]
    })], AboutusPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-aboutus-aboutus-module-es5.js.map
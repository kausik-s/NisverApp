function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n   <!-- <ion-title>login</ion-title>-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"masters\">\n\n<ion-card>\n  <ion-card-header class=\"center\">\n\n    Nisver\n\n  </ion-card-header>\n  <ion-card-content class=\"masters\">\n  <form [formGroup]=\"ionicForm\" (ngSubmit)=\"login()\" novalidate>\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Username</ion-label>\n        <ion-input formControlName=\"username\" type=\"text\"> </ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label position=\"stacked\">Password</ion-label>\n        <ion-input formControlName=\"password\" type=\"Password\"> </ion-input>\n       \n      </ion-item>\n      <ion-label class=\"forgot\"> <p><a routerLink=\"/forgotpassword\">Forgot Password ?</a></p></ion-label>\n     \n      <ion-button type=\"submit\" expand=\"block\" shape=\"round\" >Sign In</ion-button>\n     \n      \n     \n       <ion-item lines=\"none\">\n       \n        <p text-wrap >New User?&nbsp;&nbsp;<a routerLink=\"/signup\">Create Account</a> </p>\n        \n       </ion-item>\n       \n\n\n    </ion-list>\n</form>\n  </ion-card-content>\n</ion-card>\n\n<!--\n  <div class=\"center\">\n\n \n  <h1>Sign In</h1>\n</div>\n  <form class=\"masters\">\n    \n   \n    \n  </form>\n  -->\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-list {\n  padding: 20px;\n}\n\nion-input {\n  padding: 20px;\n}\n\nion-button {\n  margin-top: 30px;\n}\n\n.masters {\n  --background: linear-gradient(90deg, rgba(190,100,27,1) 40%, rgba(235,175,54,0.9780287114845938) 93%)!important;\n}\n\nion-card.masters {\n  box-shadow: none;\n  background: #be641b;\n  border-radius: 10px;\n  z-index: 100;\n}\n\n.item {\n  background: #be641b;\n}\n\nion-card {\n  margin-top: 50px;\n  padding: 20px;\n}\n\n.forgot {\n  margin-top: 5px;\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRzpcXEtBU1VJS1xcRGV2XFxOaXN2ZXJcXFRhYlRlbXBsYXRlXFxOaXN2ZXIvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0FDQ2pCOztBRENBO0VBRUksYUFBYTtBQ0NqQjs7QURFQTtFQUVJLGdCQUFnQjtBQ0FwQjs7QURJQTtFQUNJLCtHQUFhO0FDRGpCOztBRElBO0VBRUksZ0JBQWdCO0VBQ2hCLG1CQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtBQ0ZoQjs7QURJQTtFQUNDLG1CQUE4QjtBQ0QvQjs7QURHQTtFQUVJLGdCQUFnQjtFQUNoQixhQUFhO0FDRGpCOztBREdBO0VBRUksZUFBZTtFQUNmLFlBQVk7QUNEaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbmlvbi1pbnB1dFxyXG57XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxufVxyXG5pb24tYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcblxyXG4ubWFzdGVycyB7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxOTAsMTAwLDI3LDEpIDQwJSwgcmdiYSgyMzUsMTc1LDU0LDAuOTc4MDI4NzExNDg0NTkzOCkgOTMlKSFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5pb24tY2FyZC5tYXN0ZXJzXHJcbntcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5MCwxMDAsMjcsMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbi5pdGVte1xyXG4gYmFja2dyb3VuZDogcmdiYSgxOTAsMTAwLDI3LDEpO1xyXG59XHJcbmlvbi1jYXJkXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5mb3Jnb3Rcclxue1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4iLCJpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubWFzdGVycyB7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDE5MCwxMDAsMjcsMSkgNDAlLCByZ2JhKDIzNSwxNzUsNTQsMC45NzgwMjg3MTE0ODQ1OTM4KSA5MyUpIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQubWFzdGVycyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNiZTY0MWI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLml0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjYmU2NDFiO1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5mb3Jnb3Qge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _model_session_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../model/session-storage.service */
    "./src/app/model/session-storage.service.ts"); //import { LoadingController, ToastController } from '@ionic/angular';
    //common serviec


    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Storage;

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, authService, formBuilder, commonService, sessionstorage) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.sessionstorage = sessionstorage;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ionicForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]]
          });
        }
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          if (!this.ionicForm.get('username').value) {
            this.commonService.showError("Please enter your username to proceed");
            return;
          }

          if (!this.ionicForm.get('password').value) {
            this.commonService.showError("Please enter your password to proceed");
            return;
          }

          this.commonService.showLoader();
          var formData = new FormData();
          formData.append("mobile", this.ionicForm.get('username').value);
          formData.append("password", this.ionicForm.get('password').value);
          formData.append("token", "xxxxxxxxxxx");
          this.authService.login(formData).subscribe(function (response) {
            console.log(response);

            _this.commonService.hideLoader();

            if (response['status'] == 1) {
              _this.commonService.setObject("userData", response);

              _this.sessionstorage.setData("userId", response['userid']);

              localStorage.setItem("userId", response['userid']);
              localStorage.setItem("user_type", response['user_type']);

              if (response['user_type'] == "ADMIN") {
                _this.router.navigate(['/dashboard']);
              } else {
                _this.router.navigate(['/home']);
              }
            } else {
              _this.commonService.showError(response['message']);
            }
          });
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _model_session_storage_service__WEBPACK_IMPORTED_MODULE_7__["SessionStorageService"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map
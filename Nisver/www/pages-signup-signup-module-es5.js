function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Sign Up</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card id=\"signUpCard\">\n    <ion-card-header class=\"center\">\n      CREATE ACCOUNT\n    </ion-card-header>\n    <ion-card-content>\n      \n      <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n\n        <ion-item >\n          <ion-label position=\"floating\" class=\"mandatory\">Name</ion-label>\n          <ion-input formControlName=\"name\" type=\"text\"> </ion-input>\n        </ion-item>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.name.errors?.required\">\n          Name is required.\n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.name.errors?.minlength\">\n          Name should be atleast 4 charecter.\n        </span>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"mandatory\">Mobile Number</ion-label>\n          <ion-input formControlName=\"mobileNo\" type=\"tel\" maxlength=\"10\"> </ion-input>\n        </ion-item>\n\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.mobileNo.errors?.minlength\">\n          Please enter valid mobile number\n        </span>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"mandatory\">Password</ion-label>\n          <ion-input formControlName=\"password\" type=\"Password\" > </ion-input>\n        </ion-item>\n       \n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.minlength\">\n          Password must be atleast 4 charecter\n        </span>\n        \n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"mandatory\">Alternate Mobile Number</ion-label>\n          <ion-input formControlName=\"altMobileNo\" type=\"tel\" maxlength=\"10\"> </ion-input>\n        </ion-item>\n\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.altMobileNo.errors?.minlength\">\n          Please enter valid mobile number\n        </span>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"mandatory\">Email</ion-label>\n          <ion-input formControlName=\"email\" type=\"email\"> </ion-input>\n        </ion-item>\n\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n          Please enter valid Email Id\n        </span>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"mandatory\">Category</ion-label>\n          <ion-select formControlName=\"category\" placeholder=\"Select One\">\n            <ion-select-option value=\"Student\">Customer</ion-select-option>\n            <ion-select-option value=\"Faculty\">Vendor</ion-select-option>\n           \n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"mandatory\">Profession</ion-label>\n          <ion-select formControlName=\"profession\" placeholder=\"Select One\">\n            <ion-select-option  *ngFor=\"let category of categoryList\"   [value]=\"category.categoryid\">{{category.cat_name}}</ion-select-option>\n         \n          </ion-select>\n          <!--\n          <ion-select formControlName=\"profession\" placeholder=\"Select One\">\n            <ion-select-option value=\"Student\">Student</ion-select-option>\n            <ion-select-option value=\"Faculty\">Faculty</ion-select-option>\n            <ion-select-option value=\"OtherProfession\">Other</ion-select-option>\n          </ion-select>\n          -->\n        </ion-item>\n         \n        <ion-item>\n          <ion-label position=\"stacked\" class=\"mandatory\">Marital Status</ion-label>\n          <ion-select  formControlName=\"maritalStatus\" placeholder=\"Select One\">\n            <ion-select-option value=\"SINGLE\">Single</ion-select-option>\n            <ion-select-option value=\"MARRIED\">Married</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"mandatory\">Gender</ion-label>\n          <ion-select  formControlName=\"gender\" placeholder=\"Select One\">\n            <ion-select-option value=\"FEMALE\">Female</ion-select-option>\n            <ion-select-option value=\"MALE\">Male</ion-select-option>\n            \n          </ion-select>\n        </ion-item>\n        <ion-item >\n          <ion-label position=\"stacked\" class=\"mandatory\">Current Address</ion-label>\n          <ion-input formControlName=\"currentAddress\" type=\"text\"> </ion-input>\n        </ion-item>\n         \n        \n       \n        <ion-item >\n          <ion-label position=\"stacked\" class=\"mandatory\">Auto Address</ion-label>\n           \n          <ion-input id=\"txtHome\"   [formControl]=\"searchControl\" formControlName=\"autoAddress\" type=\"text\"> </ion-input>\n        \n        <!--<ion-input id=\"txtHome\" formControlName=\"autoAddress\" type=\"text\"> </ion-input>-->\n        </ion-item>\n      \n       \n        \n       \n        <ion-button type=\"submit\" expand=\"block\">Sign Up</ion-button>\n\n  \n        \n      </form>\n      \n      \n    \n      <ion-item lines=\"none\">\n        <p text-wrap>\n          Already have an account ?&nbsp;&nbsp;<a routerLink=\"/login\">Sign In</a>\n        </p>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n \n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/signup/signup-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppPagesSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/pages/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.module.ts ***!
    \***********************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppPagesSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/pages/signup/signup-routing.module.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/pages/signup/signup.page.ts"); //import { FormGroup, FormBuilder, Validators } from "@angular/forms";


    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyAn7mYIZlP-jAqfH6xFXqrmRmFaczK0_Ak',
        libraries: ["places"]
      }), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], //  FormGroup,
      // FormBuilder,
      //  Validators,
      _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/signup/signup.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#signUpCard {\n  width: 84%;\n  margin-left: 8%;\n  padding: 2%;\n  margin-top: 5%;\n}\n\nion-toolbar {\n  color: white;\n}\n\n#signUP_firstName {\n  width: 45%;\n  display: inline-block;\n}\n\n#signUP_lastName {\n  width: 45%;\n  display: inline-block;\n  float: right;\n}\n\n#signUp_address2 {\n  width: 95%;\n  display: inline-block;\n}\n\n#address2_locator {\n  width: 4%;\n  display: inline-block;\n}\n\n.mandatory:after {\n  content: \" *\";\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL0c6XFxLQVNVSUtcXERldlxcTmlzdmVyXFxUYWJUZW1wbGF0ZVxcTmlzdmVyL3NyY1xcYXBwXFxwYWdlc1xcc2lnbnVwXFxzaWdudXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7QUNDbEI7O0FEQ0E7RUFDSSxZQUFZO0FDRWhCOztBREFBO0VBQ0ksVUFBVTtFQUNWLHFCQUFxQjtBQ0d6Qjs7QUREQTtFQUNJLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsWUFBWTtBQ0loQjs7QURGQTtFQUNJLFVBQVU7RUFDVixxQkFBcUI7QUNLekI7O0FESEE7RUFDSSxTQUFTO0VBQ1QscUJBQXFCO0FDTXpCOztBREpBO0VBQ0ksYUFBWTtFQUNaLFVBQVU7QUNPZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3NpZ25VcENhcmR7XHJcbiAgICB3aWR0aDogODQlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5pb24tdG9vbGJhcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4jc2lnblVQX2ZpcnN0TmFtZXtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuI3NpZ25VUF9sYXN0TmFtZXtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuI3NpZ25VcF9hZGRyZXNzMntcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuI2FkZHJlc3MyX2xvY2F0b3J7XHJcbiAgICB3aWR0aDogNCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLm1hbmRhdG9yeTphZnRlciB7XHJcbiAgICBjb250ZW50OlwiICpcIjtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfSIsIiNzaWduVXBDYXJkIHtcbiAgd2lkdGg6IDg0JTtcbiAgbWFyZ2luLWxlZnQ6IDglO1xuICBwYWRkaW5nOiAyJTtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jc2lnblVQX2ZpcnN0TmFtZSB7XG4gIHdpZHRoOiA0NSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuI3NpZ25VUF9sYXN0TmFtZSB7XG4gIHdpZHRoOiA0NSU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jc2lnblVwX2FkZHJlc3MyIHtcbiAgd2lkdGg6IDk1JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jYWRkcmVzczJfbG9jYXRvciB7XG4gIHdpZHRoOiA0JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ubWFuZGF0b3J5OmFmdGVyIHtcbiAgY29udGVudDogXCIgKlwiO1xuICBjb2xvcjogcmVkO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/pages/signup/signup.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/signup/signup.page.ts ***!
    \*********************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppPagesSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _model_session_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../model/session-storage.service */
    "./src/app/model/session-storage.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts"); //common serviec


    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(formBuilder, http, loadingController, mapsAPILoader, ngZone, toastController, commonService, router, sessionStorage, apiservice) {
        _classCallCheck(this, SignupPage);

        this.formBuilder = formBuilder;
        this.http = http;
        this.loadingController = loadingController;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.toastController = toastController;
        this.commonService = commonService;
        this.router = router;
        this.sessionStorage = sessionStorage;
        this.apiservice = apiservice;
        this.isSubmitted = false;
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.getCategory();
          this.ionicForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            mobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            altMobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            profession: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maritalStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            currentAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            autoAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
          /******map****/
          //set google maps defaults

          this.zoom = 4;
          this.latitude = 22.5726;
          this.longitude = 88.3639; //create search FormControl

          this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](); //set current position

          this.setCurrentPosition(); //load Places Autocomplete

          this.mapsAPILoader.load().then(function () {
            var nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0]; //var nativeHomeInputBox;

            /*
             let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
               types: ["address"]
             });*/

            var autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
              types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
              _this.ngZone.run(function () {
                //get the place result
                var place = autocomplete.getPlace(); //verify result

                if (place.geometry === undefined || place.geometry === null) {
                  return;
                } //set latitude, longitude and zoom


                _this.latitude = place.geometry.location.lat();
                _this.longitude = place.geometry.location.lng();
                _this.zoom = 12;
              });
            });
          });
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          this.isSubmitted = true;

          if (!this.ionicForm.valid) {
            console.log('Please provide all the required values!');
            this.commonService.showSuccess("Please provide all the required values");
            this.postData();
            console.log(this.ionicForm.value);
            return false;
          } else {
            console.log(this.ionicForm.value);
            this.postData();
          }
        }
      }, {
        key: "postData",
        value: function postData() {
          var _this2 = this;

          this.commonService.showLoader();
          var formData = new FormData();
          formData.append("name", this.ionicForm.get('name').value);
          formData.append("mobile", this.ionicForm.get('mobileNo').value);
          formData.append("password", this.ionicForm.get('password').value);
          formData.append("alt_mobile", this.ionicForm.get('altMobileNo').value);
          formData.append("email", this.ionicForm.get('email').value);
          formData.append("category", this.ionicForm.get('category').value);
          formData.append("profession", this.ionicForm.get('profession').value);
          formData.append("marital_status", this.ionicForm.get('maritalStatus').value);
          formData.append("gender", this.ionicForm.get('gender').value);
          formData.append("currentaddress", this.ionicForm.get('currentAddress').value);
          formData.append("autoaddress", this.ionicForm.get('autoAddress').value);
          formData.append("latitude", this.latitude);
          formData.append("longitude", this.longitude);
          this.http.post('http://nisver.com/addon/api/registration.php', formData, {
            responseType: 'json'
          }).subscribe(function (response) {
            _this2.commonService.hideLoader();

            console.log(response);

            if (response['status'] == 1) {
              _this2.commonService.showSuccess("You have Registered sucessfully");

              _this2.sessionStorage.setData("mobile", _this2.ionicForm.get('mobileNo').value);

              _this2.router.navigate(['/validateregotp']);
            } else {
              _this2.commonService.showError(response['message']);
            }
          }, function (error) {
            console.log(error);

            _this2.commonService.showError(error);
          });
        }
      }, {
        key: "setCurrentPosition",
        value: function setCurrentPosition() {
          var _this3 = this;

          if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
              _this3.latitude = position.coords.latitude;
              _this3.longitude = position.coords.longitude;
              _this3.zoom = 12;
            });
          }
        }
      }, {
        key: "getCategory",
        value: function getCategory() {
          var _this4 = this;

          this.apiservice.getCategoryList(null).subscribe(function (response) {
            console.log(response);
            _this4.categoryList = response['CategoryList'];
          });
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.ionicForm.controls;
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _agm_core__WEBPACK_IMPORTED_MODULE_5__["MapsAPILoader"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _model_session_storage_service__WEBPACK_IMPORTED_MODULE_8__["SessionStorageService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("search")], SignupPage.prototype, "searchElementRef", void 0);
    SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/pages/signup/signup.page.scss"))["default"]]
    })], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-signup-signup-module-es5.js.map
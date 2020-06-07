function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card id=\"signUpCard\">\n    <ion-card-header class=\"center\">\n      Profile\n    </ion-card-header>\n    <ion-card-content>\n      <ion-avatar class='avatar' >\n        \n        <ion-img [src]=\"picToView\"></ion-img>\n      </ion-avatar>\n      <ion-chip (click)=\"enableEditMode()\"color=\"secondary\">\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\n        <ion-label>Edit</ion-label>\n      </ion-chip>\n      <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate>\n\n        <ion-item >\n          <ion-label position=\"floating\" class=\"mandatory\">Name</ion-label>\n          <ion-input [disabled]=\"disabled\" formControlName=\"name\" type=\"text\"> </ion-input>\n        </ion-item>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.name.errors?.required\">\n          Name is required.\n        </span>\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.name.errors?.minlength\">\n          Name should be atleast 4 charecter.\n        </span>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"mandatory\">Mobile Number</ion-label>\n          <ion-input [disabled]=\"true\" formControlName=\"mobileNo\" type=\"tel\" maxlength=\"10\"> </ion-input>\n        </ion-item>\n\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.mobileNo.errors?.minlength\">\n          Please enter valid mobile number\n        </span>\n\n       \n       \n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.password.errors?.minlength\">\n          Password must be atleast 4 charecter\n        </span>\n        \n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"mandatory\">Alternate Mobile Number</ion-label>\n          <ion-input [disabled]=\"disabled\" formControlName=\"altMobileNo\" type=\"tel\" maxlength=\"10\"> </ion-input>\n        </ion-item>\n\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.altMobileNo.errors?.minlength\">\n          Please enter valid mobile number\n        </span>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"mandatory\">Email</ion-label>\n          <ion-input [disabled]=\"disabled\" formControlName=\"email\" type=\"email\"> </ion-input>\n        </ion-item>\n\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.email.errors?.pattern\">\n          Please enter valid Email Id\n        </span>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"mandatory\">Category</ion-label>\n          \n          <ion-select [disabled]=\"disabled\" formControlName=\"category\" placeholder=\"Select One\">\n            <ion-select-option value=\"Student\">Customer</ion-select-option>\n            <ion-select-option value=\"Faculty\">Vendor</ion-select-option>\n           \n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"mandatory\">Skill</ion-label>\n          <ion-select [disabled]=\"disabled\" formControlName=\"profession\" placeholder=\"Select One\">\n            <ion-select-option value=\"Student\">Student</ion-select-option>\n            <ion-select-option value=\"Faculty\">Faculty</ion-select-option>\n            <ion-select-option value=\"OtherProfession\">Other</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label  position=\"stacked\" class=\"mandatory\">Marital Status</ion-label>\n          <ion-select [disabled]=\"disabled\"  formControlName=\"maritalStatus\" placeholder=\"Select One\">\n            <ion-select-option value=\"SINGLE\">Single</ion-select-option>\n            <ion-select-option value=\"MARRIED\">Married</ion-select-option>\n          </ion-select>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"stacked\" class=\"mandatory\">Gender</ion-label>\n          <ion-select [disabled]=\"disabled\" formControlName=\"gender\" placeholder=\"Select One\">\n            <ion-select-option value=\"FEMALE\">Female</ion-select-option>\n            <ion-select-option value=\"MALE\">Male</ion-select-option>\n            \n          </ion-select>\n        </ion-item>\n        <ion-item >\n          <ion-label position=\"stacked\" class=\"mandatory\">Current Address</ion-label>\n          <ion-input [disabled]=\"disabled\" formControlName=\"currentAddress\" type=\"text\"> </ion-input>\n        </ion-item>\n        \n        \n       \n        <ion-item >\n          <ion-label position=\"stacked\" class=\"mandatory\">Auto Address</ion-label>\n           \n          <ion-input id=\"txtHome\" [disabled]=\"disabled\"  [formControl]=\"searchControl\" formControlName=\"autoAddress\" type=\"text\"> </ion-input>\n        \n        <!--<ion-input id=\"txtHome\" formControlName=\"autoAddress\" type=\"text\"> </ion-input>-->\n        </ion-item>\n\n        <ion-item>\n          <ion-label id=\"profile_image\" color=\"primary\" stacked>Image</ion-label>\n          <ion-input [disabled]=\"disabled\" type=\"file\" accept=\"image/*\" (change)=\"changeListener($event)\" ></ion-input>\n        </ion-item>\n      \n      \n        <ion-button [disabled]=\"disabled\" type=\"submit\" expand=\"block\">Update</ion-button>\n\n  \n        \n      </form>\n      \n      \n    \n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/profile/profile-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppPagesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/profile/profile-routing.module.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyAn7mYIZlP-jAqfH6xFXqrmRmFaczK0_Ak',
        libraries: ["places"]
      }), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_7__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".avatar {\n  margin: auto;\n}\n\nion-chip {\n  float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9HOlxcS0FTVUlLXFxEZXZcXE5pc3ZlclxcVGFiVGVtcGxhdGVcXE5pc3Zlci9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWTtBQ0NoQjs7QURDQztFQUVJLFlBQVc7QUNDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuIH1cclxuIGlvbi1jaGlwXHJcbiB7XHJcbiAgICAgZmxvYXQ6cmlnaHQ7XHJcbiB9IiwiLmF2YXRhciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW9uLWNoaXAge1xuICBmbG9hdDogcmlnaHQ7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/profile/profile.page.ts ***!
    \***********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); //common serviec


    var Storage = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Storage;

    var ProfilePage = /*#__PURE__*/function () {
      function ProfilePage(router, formBuilder, http, loadingController, mapsAPILoader, ngZone, toastController, commonService, apiservice) {
        _classCallCheck(this, ProfilePage);

        this.router = router;
        this.formBuilder = formBuilder;
        this.http = http;
        this.loadingController = loadingController;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.toastController = toastController;
        this.commonService = commonService;
        this.apiservice = apiservice;
        this.isSubmitted = false;
      }

      _createClass(ProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.getCategory();
          this.ionicForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]],
            mobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            altMobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]+$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            category: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            profession: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            maritalStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            currentAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            autoAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
          this.commonService.getObject("userData").then(function (result) {
            console.log(result);
            _this.userID = result['userid'];
            _this.picToView = result['user_profile'];
            _this.disabled = true;
            console.log(result['user_profile']);

            _this.ionicForm.setValue({
              name: result['user_name'],
              mobileNo: result['user_mobile'],
              altMobileNo: result['user_altmobile'],
              email: result['user_email'],
              category: result['user_category'],
              profession: result['user_proffesion'],
              maritalStatus: result['user_marital_status'],
              gender: result['user_gender'],
              currentAddress: result['user_currentaddress'],
              autoAddress: result['user_autoaddress']
            });
          });
          /******map****/
          //set google maps defaults

          this.zoom = 4;
          this.latitude = 22.5726;
          this.longitude = 88.3639; //create search FormControl

          this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](); //set current position
          // this.setCurrentPosition();
          //load Places Autocomplete

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
            // this.commonService.showSuccess("Please provide all the required values");
            this.postData();
            console.log(this.ionicForm.value);
            return false;
          } else {
            console.log(this.ionicForm.value);
            this.postData();
          }
        }
      }, {
        key: "changeListener",
        value: function changeListener($event) {
          this.file = $event.target.files[0];
        }
      }, {
        key: "postData",
        value: function postData() {
          var _this2 = this;

          this.commonService.showLoader();
          var formData = new FormData();
          formData.append("name", this.ionicForm.get('name').value);
          formData.append("userid", this.userID);
          formData.append("alt_mobile", this.ionicForm.get('altMobileNo').value);
          formData.append("email", this.ionicForm.get('email').value);
          formData.append("category", this.ionicForm.get('category').value);
          formData.append("profession", this.ionicForm.get('profession').value);
          formData.append("marital_status", this.ionicForm.get('maritalStatus').value);
          formData.append("gender", this.ionicForm.get('gender').value);
          formData.append("currentaddress", this.ionicForm.get('currentAddress').value);
          formData.append("autoaddress", this.ionicForm.get('autoAddress').value);
          formData.append("Image", this.file);
          this.apiservice.updateProfile(formData).subscribe(function (response) {
            console.log(response);

            _this2.commonService.hideLoader();

            if (response['status'] == 1) {
              _this2.commonService.showSuccess("Profile updated sucessfully");

              if (localStorage.getItem("user_type") === "ADMIN") _this2.router.navigate(['/dashboard']);else _this2.router.navigate(['/home']);
            } else {
              _this2.commonService.showError(response['message']);
            }
          });
        }
      }, {
        key: "enableEditMode",
        value: function enableEditMode() {
          this.disabled = false;
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
        key: "getObject",
        value: function getObject(key) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var item;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Storage.get({
                      key: key
                    });

                  case 2:
                    item = _context.sent;
                    return _context.abrupt("return", JSON.parse(item.value));

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
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

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
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
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("search")], ProfilePage.prototype, "searchElementRef", void 0);
    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map
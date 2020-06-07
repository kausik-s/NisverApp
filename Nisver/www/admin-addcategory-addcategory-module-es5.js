function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-addcategory-addcategory-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/addcategory/addcategory.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/addcategory/addcategory.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAddcategoryAddcategoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>addcategory</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card id=\"signUpCard\">\r\n    <ion-card-header class=\"center\">\r\n      Add Category\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      \r\n      <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitFeedback()\" novalidate>\r\n\r\n        <ion-item >\r\n          <ion-textarea (change)=\"trackValueChange()\" formControlName=\"catname\" placeholder=\"Enter the Category here\"></ion-textarea>\r\n        </ion-item>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.comments.errors?.required\">\r\n         Field cannot be empty.\r\n        </span>\r\n        <span class=\"error ion-padding\" *ngIf=\"isSubmitted && errorControl.comments.errors?.maxlength\">\r\n          Maximum 50 charecter is allowed\r\n        </span>\r\n\r\n        \r\n        <ion-button type=\"submit\" expand=\"block\">Add Category</ion-button>\r\n\r\n    \r\n        \r\n      </form>\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/admin/addcategory/addcategory-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/addcategory/addcategory-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: AddcategoryPageRoutingModule */

  /***/
  function srcAppAdminAddcategoryAddcategoryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcategoryPageRoutingModule", function () {
      return AddcategoryPageRoutingModule;
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


    var _addcategory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./addcategory.page */
    "./src/app/admin/addcategory/addcategory.page.ts");

    var routes = [{
      path: '',
      component: _addcategory_page__WEBPACK_IMPORTED_MODULE_3__["AddcategoryPage"]
    }];

    var AddcategoryPageRoutingModule = function AddcategoryPageRoutingModule() {
      _classCallCheck(this, AddcategoryPageRoutingModule);
    };

    AddcategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddcategoryPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/addcategory/addcategory.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/admin/addcategory/addcategory.module.ts ***!
    \*********************************************************/

  /*! exports provided: AddcategoryPageModule */

  /***/
  function srcAppAdminAddcategoryAddcategoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcategoryPageModule", function () {
      return AddcategoryPageModule;
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


    var _addcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./addcategory-routing.module */
    "./src/app/admin/addcategory/addcategory-routing.module.ts");
    /* harmony import */


    var _addcategory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./addcategory.page */
    "./src/app/admin/addcategory/addcategory.page.ts");

    var AddcategoryPageModule = function AddcategoryPageModule() {
      _classCallCheck(this, AddcategoryPageModule);
    };

    AddcategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _addcategory_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddcategoryPageRoutingModule"]],
      declarations: [_addcategory_page__WEBPACK_IMPORTED_MODULE_6__["AddcategoryPage"]]
    })], AddcategoryPageModule);
    /***/
  },

  /***/
  "./src/app/admin/addcategory/addcategory.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/admin/addcategory/addcategory.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAddcategoryAddcategoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZGNhdGVnb3J5L2FkZGNhdGVnb3J5LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/addcategory/addcategory.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/admin/addcategory/addcategory.page.ts ***!
    \*******************************************************/

  /*! exports provided: AddcategoryPage */

  /***/
  function srcAppAdminAddcategoryAddcategoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddcategoryPage", function () {
      return AddcategoryPage;
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


    var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/common.service */
    "./src/app/services/common.service.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _model_session_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../model/session-storage.service */
    "./src/app/model/session-storage.service.ts"); //common serviec


    var AddcategoryPage = /*#__PURE__*/function () {
      function AddcategoryPage(router, formBuilder, commonService, apiService, sessionstorage) {
        _classCallCheck(this, AddcategoryPage);

        this.router = router;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.apiService = apiService;
        this.sessionstorage = sessionstorage;
        this.isSubmitted = false;
      }

      _createClass(AddcategoryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.ionicForm = this.formBuilder.group({
            catname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]]
          });
        }
      }, {
        key: "submitFeedback",
        value: function submitFeedback() {
          var _this = this;

          if (!this.ionicForm.valid) {
            this.commonService.showError("Please provide valid data");
            return;
          }

          this.isSubmitted = true;
          this.commonService.showLoader();
          var formData = new FormData();
          formData.append("category_name", this.ionicForm.get('catname').value);
          formData.append("userid", this.sessionstorage.getData("userId"));
          this.apiService.addCategory(formData).subscribe(function (response) {
            console.log(response);

            _this.commonService.hideLoader();

            if (response['status'] == 1) {
              _this.commonService.showSuccess(response['message']);

              if (localStorage.getItem("user_type") == "ADMIN") _this.router.navigate(['/dashboard']);else _this.router.navigate(['/home']);
            } else {
              _this.commonService.showError(response['message']);
            }
          });
        }
      }, {
        key: "trackValueChange",
        value: function trackValueChange() {
          this.isSubmitted = true;
        }
      }, {
        key: "errorControl",
        get: function get() {
          return this.ionicForm.controls;
        }
      }]);

      return AddcategoryPage;
    }();

    AddcategoryPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _model_session_storage_service__WEBPACK_IMPORTED_MODULE_6__["SessionStorageService"]
      }];
    };

    AddcategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addcategory',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./addcategory.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/addcategory/addcategory.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./addcategory.page.scss */
      "./src/app/admin/addcategory/addcategory.page.scss"))["default"]]
    })], AddcategoryPage);
    /***/
  }
}]);
//# sourceMappingURL=admin-addcategory-addcategory-module-es5.js.map
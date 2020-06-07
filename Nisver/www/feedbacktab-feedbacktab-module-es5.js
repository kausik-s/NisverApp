function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["feedbacktab-feedbacktab-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/feedbacktab/feedbacktab.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/feedbacktab/feedbacktab.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminFeedbacktabFeedbacktabPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button auto-hide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Feedback List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngFor=\"let feedback of feedBackList\">\n    <ion-list>\n     <ion-item lines=\"none\">\n      \n        <ion-label>\n          \n          <ion-grid>\n            <ion-row>\n              <ion-col><div>User ID:</div></ion-col>\n              <ion-col><div>{{feedback.feedback_userid}}</div></ion-col>\n              \n            </ion-row>\n            <ion-row>\n              <ion-col><div>Name:</div></ion-col>\n              <ion-col><div>{{feedback.sender_name}}</div></ion-col>           \n            </ion-row>\n\n            <ion-row>\n              <ion-col><div>Remarks:</div></ion-col>\n              <ion-col><div>{{feedback.feedback_comment}}</div></ion-col>           \n            </ion-row>\n            \n            <ion-row>\n              <ion-col><div>Rating:</div></ion-col>\n              <ion-col><div>{{feedback.feedback_rating}}</div></ion-col>           \n            </ion-row>\n\n          </ion-grid>\n        \n        </ion-label>\n      </ion-item>\n\n    </ion-list>\n\n  </ion-item>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/admin/feedbacktab/feedbacktab-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/admin/feedbacktab/feedbacktab-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: FeedbacktabPageRoutingModule */

  /***/
  function srcAppAdminFeedbacktabFeedbacktabRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbacktabPageRoutingModule", function () {
      return FeedbacktabPageRoutingModule;
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


    var _feedbacktab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feedbacktab.page */
    "./src/app/admin/feedbacktab/feedbacktab.page.ts");

    var routes = [{
      path: '',
      component: _feedbacktab_page__WEBPACK_IMPORTED_MODULE_3__["FeedbacktabPage"]
    }];

    var FeedbacktabPageRoutingModule = function FeedbacktabPageRoutingModule() {
      _classCallCheck(this, FeedbacktabPageRoutingModule);
    };

    FeedbacktabPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FeedbacktabPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/feedbacktab/feedbacktab.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/admin/feedbacktab/feedbacktab.module.ts ***!
    \*********************************************************/

  /*! exports provided: FeedbacktabPageModule */

  /***/
  function srcAppAdminFeedbacktabFeedbacktabModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbacktabPageModule", function () {
      return FeedbacktabPageModule;
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


    var _feedbacktab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./feedbacktab-routing.module */
    "./src/app/admin/feedbacktab/feedbacktab-routing.module.ts");
    /* harmony import */


    var _feedbacktab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./feedbacktab.page */
    "./src/app/admin/feedbacktab/feedbacktab.page.ts");

    var FeedbacktabPageModule = function FeedbacktabPageModule() {
      _classCallCheck(this, FeedbacktabPageModule);
    };

    FeedbacktabPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feedbacktab_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedbacktabPageRoutingModule"]],
      declarations: [_feedbacktab_page__WEBPACK_IMPORTED_MODULE_6__["FeedbacktabPage"]]
    })], FeedbacktabPageModule);
    /***/
  },

  /***/
  "./src/app/admin/feedbacktab/feedbacktab.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/admin/feedbacktab/feedbacktab.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminFeedbacktabFeedbacktabPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  color: black;\n}\n\ndiv {\n  font-size: 10px;\n}\n\nion-grid {\n  --ion-grid-padding:0px;\n}\n\nion-row {\n  height: 15px;\n}\n\n/**\r\nion-content{\r\n\r\n    --ion-background-color:#111D12;\r\n}\r\n***/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vZmVlZGJhY2t0YWIvRzpcXEtBU1VJS1xcRGV2XFxOaXN2ZXJcXFRhYlRlbXBsYXRlXFxOaXN2ZXIvc3JjXFxhcHBcXGFkbWluXFxmZWVkYmFja3RhYlxcZmVlZGJhY2t0YWIucGFnZS5zY3NzIiwic3JjL2FwcC9hZG1pbi9mZWVkYmFja3RhYi9mZWVkYmFja3RhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxZQUFXO0FDQWY7O0FERUE7RUFFSSxlQUFlO0FDQW5COztBREVBO0VBRUksc0JBQW1CO0FDQXZCOztBREVBO0VBRUksWUFBVztBQ0FmOztBREVBOzs7OztHQ0tHIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vZmVlZGJhY2t0YWIvZmVlZGJhY2t0YWIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW1cclxue1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuZGl2XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5pb24tZ3JpZFxyXG57XHJcbiAgICAtLWlvbi1ncmlkLXBhZGRpbmc6MHB4O1xyXG59XHJcbmlvbi1yb3dcclxue1xyXG4gICAgaGVpZ2h0OjE1cHg7XHJcbn1cclxuLyoqXHJcbmlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzExMUQxMjtcclxufVxyXG4qKiovXHJcbiIsImlvbi1pdGVtIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5kaXYge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbmlvbi1ncmlkIHtcbiAgLS1pb24tZ3JpZC1wYWRkaW5nOjBweDtcbn1cblxuaW9uLXJvdyB7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLyoqXHJcbmlvbi1jb250ZW50e1xyXG5cclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzExMUQxMjtcclxufVxyXG4qKiovXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/feedbacktab/feedbacktab.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/admin/feedbacktab/feedbacktab.page.ts ***!
    \*******************************************************/

  /*! exports provided: FeedbacktabPage */

  /***/
  function srcAppAdminFeedbacktabFeedbacktabPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbacktabPage", function () {
      return FeedbacktabPage;
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


    var FeedbacktabPage = /*#__PURE__*/function () {
      function FeedbacktabPage(router, apiService, commonService) {
        _classCallCheck(this, FeedbacktabPage);

        this.router = router;
        this.apiService = apiService;
        this.commonService = commonService;
      }

      _createClass(FeedbacktabPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getfeedbacklist();
        }
      }, {
        key: "getfeedbacklist",
        value: function getfeedbacklist() {
          var _this = this;

          this.apiService.getfeedbackList(null).subscribe(function (response) {
            console.log(response);
            _this.feedBackList = response['feedback'];
          });
        }
      }]);

      return FeedbacktabPage;
    }();

    FeedbacktabPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
      }, {
        type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }];
    };

    FeedbacktabPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feedbacktab',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./feedbacktab.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/feedbacktab/feedbacktab.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./feedbacktab.page.scss */
      "./src/app/admin/feedbacktab/feedbacktab.page.scss"))["default"]]
    })], FeedbacktabPage);
    /***/
  }
}]);
//# sourceMappingURL=feedbacktab-feedbacktab-module-es5.js.map
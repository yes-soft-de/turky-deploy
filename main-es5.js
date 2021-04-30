function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./src/app/@theme/components/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/@theme/components/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppThemeComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_pages_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/pages/admin-service/token/token.service */
    "./src/app/pages/admin-service/token/token.service.ts");
    /* harmony import */


    var src_app_pages_admin_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/pages/admin-service/auth/auth.service */
    "./src/app/pages/admin-service/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(tokenService, authService, router) {
        _classCallCheck(this, FooterComponent);

        this.tokenService = tokenService;
        this.authService = authService;
        this.router = router;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.authState.subscribe(function (loggedIn) {
            return _this.loggedIn = loggedIn;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenService.deleteToken();
          this.authService.changeAuthStatus(false);
          this.router.navigate(['/login']);
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_admin_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 6,
      vars: 0,
      consts: [[1, "bg-light", "p-3"], [1, "container", "text-center"], [1, "mb-0"], ["href", "https://yes-soft.de/", 1, "text-primary"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Powered By ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yes Soft");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #3498db;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHRoZW1lL2NvbXBvbmVudHMvZm9vdGVyL0Q6XFxTZXJ2ZXJzXFxkYXNoYm9hcmRzXFx0dXJreS1kZXBsb3kvc3JjXFxhcHBcXEB0aGVtZVxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0B0aGVtZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7QUNFSjs7QURESTtFQUNJLGNBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogIzM0OThkYjtcclxuICAgIH1cclxufSIsImZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICMzNDk4ZGI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_pages_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]
        }, {
          type: src_app_pages_admin_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@theme/components/header/header.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/@theme/components/header/header.component.ts ***!
    \**************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppThemeComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var src_app_pages_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/pages/admin-service/token/token.service */
    "./src/app/pages/admin-service/token/token.service.ts");
    /* harmony import */


    var src_app_pages_admin_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/pages/admin-service/auth/auth.service */
    "./src/app/pages/admin-service/auth/auth.service.ts");
    /* harmony import */


    var _helper_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../helper/layout.service */
    "./src/app/@theme/helper/layout.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function HeaderComponent_option_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", lang_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, lang_r3));
      }
    }

    function HeaderComponent_div_23_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r5 = ctx_r9.index;
        var menu_r4 = ctx_r9.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-link ", i_r5 != 0 ? "collapsed" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#" + menu_r4.id)("aria-controls", menu_r4.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", menu_r4.icon, " dash-header-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, menu_r4.translate), " ");
      }
    }

    function HeaderComponent_div_23_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_23_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.clicked();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r5 = ctx_r12.index;
        var menu_r4 = ctx_r12.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-link ", i_r5 != 0 ? "collapsed" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menu_r4.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-target", "#" + menu_r4.id)("aria-controls", menu_r4.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("", menu_r4.icon, " dash-header-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 10, menu_r4.translate), " ");
      }
    }

    function HeaderComponent_div_23_div_5_p_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_23_div_5_p_2_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var item_r14 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r15.clicked(item_r14.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", item_r14.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, item_r14.translate));
      }
    }

    function HeaderComponent_div_23_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_23_div_5_p_2_Template, 4, 4, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var i_r5 = ctx_r17.index;
        var menu_r4 = ctx_r17.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("collapse bg-light-blue text-white ", i_r5 == 0 ? "show" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", menu_r4.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-labelledby", menu_r4.id + "-" + i_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menu_r4.children);
      }
    }

    function HeaderComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_23_button_3_Template, 6, 11, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_div_23_button_4_Template, 4, 12, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_div_23_div_5_Template, 3, 6, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menu_r4 = ctx.$implicit;
        var i_r5 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", menu_r4.id ? menu_r4.id + "-" + i_r5 : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r4.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menu_r4.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r4.id);
      }
    }

    function HeaderComponent_div_31_div_3_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_31_div_3_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var order_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r22.select(order_r19.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#ID : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r19.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "recipient-name"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r19.recipientName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, "state"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r19.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, "date"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 13, order_r19.date.timestamp * 1000, "yyyy-MM-dd"));
      }
    }

    function HeaderComponent_div_31_div_3_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_div_31_div_3_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var order_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r26.select(order_r19.orderID);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "#ID : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r19.orderID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, "recipient-name"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r19.recipientName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 9, "state"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r19.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, "date"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 13, order_r19.orderDate.timestamp * 1000, "yyyy-MM-dd"));
      }
    }

    function HeaderComponent_div_31_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_31_div_3_a_1_Template, 23, 16, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_div_31_div_3_a_2_Template, 23, 16, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r19.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", order_r19.orderID);
      }
    }

    function HeaderComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_div_31_div_3_Template, 3, 2, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.ordersListFilter);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(tokenService, authService, layoutService, translate, router, datePipe, document, render) {
        _classCallCheck(this, HeaderComponent);

        this.tokenService = tokenService;
        this.authService = authService;
        this.layoutService = layoutService;
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.document = document;
        this.render = render;
        this.orders = [];
        this.ordersListFilter = [];
        this.disabled = false;
        this.selectLang = "";
        this.TransLang = [];
        translate.setDefaultLang('en');
        translate.addLangs(['en', 'ar']);
        this.selectLang = 'en';
        translate.use('en');
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.getTransLanguage(); // const orderDashboardObs: Observable<any> = this.dashboardService.ordersDashboard();
          // const pendingOrderObs: Observable<any> = this. orderService.allPendingOrders();
          // const joinObservable: Observable<any> = forkJoin([orderDashboardObs, pendingOrderObs]);
          // joinObservable.subscribe(
          //   data => {
          //     data[0].Data.map((captians, index) => {          
          //       if (index >= 3) {
          //         this.orders.push(captians);
          //       }
          //     });
          //     data[1].Data.map((captians, index) => {          
          //       this.orders.push(captians);
          //       this.ordersListFilter = this.orders;
          //     });
          //     console.log('ordersListFilter', this.ordersListFilter);
          //   }, error => console.log(error)      
          // );

          this.authService.authState.subscribe(function (loggedIn) {
            return _this2.loggedIn = loggedIn;
          });
        }
      }, {
        key: "setTransLanguage",
        value: function setTransLanguage() {
          var _this3 = this;

          console.log('set new language', this.selectLang);
          var htmlTag = this.document.querySelector('html');
          var loaderIcon = this.document.querySelector('.lds-ring');
          this.collapseMenu();

          if (this.selectLang == 'ar') {
            // set all project direction
            this.render.setStyle(htmlTag, 'direction', 'rtl'); // set sidebar direction
            // this.render.setStyle(this.document.querySelector('.main-sidebar'), 'right', 'unset');
            // set sidebar button direction

            this.document.querySelectorAll('.btn.btn-link').forEach(function (e) {
              _this3.render.setStyle(e, 'text-align', 'right');
            }); // set sidebar button icon direction

            this.document.querySelectorAll('.fa-custom').forEach(function (e) {
              _this3.render.setStyle(e, 'right', 'unset');

              _this3.render.setStyle(e, 'left', '10px');
            }); // set sidebar form direction to ltr 

            this.render.setStyle(this.document.querySelector('.mobile-search-form'), 'direction', 'ltr');
            this.render.setStyle(this.document.querySelector('.input-group-prepend'), 'display', 'flex');
            this.render.addClass(this.document.querySelector('.input-group-text'), 'input-group-text-custom'); // this.render.setStyle(this.document.querySelector('.search-result'), 'left', 'unset');
            // this.render.setStyle(this.document.querySelector('.search-result'), 'right', '-65vw');
            // change bootstrap link to bootstrap-rtl version link

            this.document.querySelectorAll('link').forEach(function (e, k, i) {
              if (e.href.search('bootstrap.min.css') > 0) {
                e.href = 'assets/css/bootstrap-rtl.min.css';
                e.removeAttribute('integrity');
                e.removeAttribute('crossorigin');
              }
            });
          } else {
            this.render.setStyle(htmlTag, 'direction', 'ltr'); // this.render.setStyle(this.document.querySelector('.main-sidebar'), 'right', '0');      
            // this.render.setStyle(this.document.querySelector('.search-result'), 'right', 'unset');
            // this.render.setStyle(this.document.querySelector('.search-result'), 'left', '-65vw');

            this.document.querySelectorAll('.btn.btn-link').forEach(function (e) {
              _this3.render.setStyle(e, 'text-align', 'left');
            });
            this.document.querySelectorAll('.fa-custom').forEach(function (e) {
              _this3.render.setStyle(e, 'right', '10px');

              _this3.render.setStyle(e, 'left', 'unset');
            }); // this.render.setStyle(this.document.querySelector('.custom-search-form'), 'direction', 'ltr');

            this.render.removeClass(this.document.querySelector('.input-group-text'), 'input-group-text-custom');
            this.document.querySelectorAll('link').forEach(function (e, k, i) {
              console.log(e.href);

              if (e.href.search('bootstrap-rtl.min.css') > 0) {
                e.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
                e.setAttribute('integrity', 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm');
                e.setAttribute('crossorigin', 'anonymous');
              }
            });
          }

          this.translate.use(this.selectLang);
        }
      }, {
        key: "getTransLanguage",
        value: function getTransLanguage() {
          this.TransLang = _toConsumableArray(this.translate.getLangs());
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenService.deleteToken();
          this.authService.changeAuthStatus(false);
          this.router.navigate(['/login']);
        }
      }, {
        key: "clicked",
        value: function clicked() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          this.collapseMenu();

          if (value) {
            this.layoutService.changeLayout(value);
            this.router.navigate(['/']);
          }
        }
      }, {
        key: "select",
        value: function select(id) {
          this.collapseMenu();
          this.disabled = false; // empty search input

          this.render.setProperty(this.document.getElementById('inlineFormInputGroupUsername2'), 'value', '');
          this.router.navigate(['/orders/view/', id]);
        }
      }, {
        key: "collapseMenu",
        value: function collapseMenu() {
          var screenWidth = window.innerWidth;

          if (screenWidth < 768) {
            this.render.addClass(this.document.querySelector('.navbar-toggler'), 'collapsed');
            this.render.removeClass(this.document.getElementById('navbarSupportedContent'), 'show');
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          this.collapseMenu(); // if (this.name == '') {
          //   this.disabled = false;
          // } else {
          //   this.disabled = true;
          // }
          // // if the search input value is empty
          // if (!this.name) {
          //   this.ordersListFilter = [...this.orders];
          // } else {
          //   this.ordersListFilter = [];
          //   this.ordersListFilter = this.orders.filter(res => {
          //     if (res.orderDate) {
          //       const orderDate = (this.datePipe.transform(new Date(res.orderDate.timestamp * 1000), 'yyyy-MM-dd')).toString().match(this.name.toLocaleLowerCase());
          //       if (orderDate) {
          //         return orderDate;
          //       } 
          //     } 
          //     if (res.id) {
          //       const id = res.id.toString().match(this.name.toLocaleLowerCase());
          //       if (id) {
          //         return id;
          //       }
          //     }
          //      if (res.orderID) {
          //       const orderID = res.orderID.toString().match(this.name.toLocaleLowerCase());
          //       if (orderID) {
          //         // display the Name Column
          //         return orderID;
          //       } 
          //     }
          //      if (res.date) {
          //       const date = (this.datePipe.transform(new Date(res.date.timestamp * 1000), 'yyyy-MM-dd')).toString().match(this.name.toLocaleLowerCase());
          //       if (date) {
          //         return date;
          //       }
          //     }
          //     if (res.recipientName)  {
          //       const recipientName = res.recipientName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          //       if (recipientName) {
          //         return recipientName;
          //       }
          //     }
          //   });
          // }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_pages_admin_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_helper_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      inputs: {
        menus: "menus"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])],
      decls: 32,
      vars: 17,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light-blue", 2, "z-index", "9999"], ["routerLink", "/", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "sidebar-search"], [1, "form-inline", "mt-3", "mobile-search-form", 2, "visibility", "hidden"], ["for", "inlineFormInputGroupUsername2", 1, "sr-only"], [1, "w-100", "input-group", "mb-2", "mr-sm-2"], ["type", "text", "id", "inlineFormInputGroupUsername2", "name", "search", 1, "form-control", 3, "ngModel", "title", "placeholder", "ngModelChange", "keyup"], [1, "input-group-prepend"], [1, "input-group-text"], ["aria-hidden", "true", 1, "fa", "fa-search", "fa-fw", "text-muted"], [1, "card", "mb-3"], [1, "card-header"], [1, "mb-0"], ["name", "selectLang", 1, "form-control", "custom-select-lang", 3, "ngModel", "ngModelChange", "change"], ["style", "background-color: #46566b", 3, "value", 4, "ngFor", "ngForOf"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "btn", "btn-link", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out", "dash-header-icon"], ["class", "search-result bg-white py-5", 4, "ngIf"], [2, "background-color", "#46566b", 3, "value"], ["data-toggle", "collapse", "aria-expanded", "true", "style", "cursor: pointer;", 3, "class", 4, "ngIf"], ["data-toggle", "collapse", "aria-expanded", "true", "style", "cursor: pointer;", 3, "class", "routerLink", "click", 4, "ngIf"], ["data-parent", "#accordion", 3, "id", "class", 4, "ngIf"], ["data-toggle", "collapse", "aria-expanded", "true", 2, "cursor", "pointer"], ["aria-hidden", "true"], [1, "fa", "fa-angle-down", "fa-custom", "fa-lg", "fa-fw"], [1, "fa", "fa-angle-up", "fa-custom", "fa-lg", "fa-fw"], ["data-toggle", "collapse", "aria-expanded", "true", 2, "cursor", "pointer", 3, "routerLink", "click"], ["data-parent", "#accordion", 3, "id"], [1, "card-body"], ["class", "mb-2", 4, "ngFor", "ngForOf"], [1, "mb-2"], [3, "routerLink", "click"], [1, "search-result", "bg-white", "py-5"], [1, "container"], [1, "row"], ["class", "col-12 col-md-6 col-lg-4 mb-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-lg-4", "mb-3"], ["style", "cursor: pointer;", 3, "click", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], [1, "card", "w-100", "text-dark", 2, "width", "18rem"], [1, "card-title"], [1, "text-info"], [1, "card-desc", "mb-0"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Turky");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.name = $event;
          })("keyup", function HeaderComponent_Template_input_keyup_12_listener() {
            return ctx.applyFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_select_ngModelChange_21_listener($event) {
            return ctx.selectLang = $event;
          })("change", function HeaderComponent_Template_select_change_21_listener() {
            return ctx.setTransLanguage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HeaderComponent_option_22_Template, 3, 4, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HeaderComponent_div_23_Template, 6, 4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_27_listener() {
            return ctx.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HeaderComponent_div_31_Template, 4, 1, "div", 22);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, "search"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, "title"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 13, "placeholder"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectLang);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.TransLang);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menus);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 15, "logout"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.disabled);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
      styles: [".navbar.navbar-expand-lg[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: #f1faee;\n}\n.navbar.navbar-expand-lg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  border-radius: 30px 0 0 30px;\n  border-right: 0;\n}\n.navbar.navbar-expand-lg[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   div.input-group-text[_ngcontent-%COMP%] {\n  border-radius: 0 30px 30px 0;\n  background: #fff;\n  border-left: 0;\n}\n.navbar.navbar-expand-lg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n}\n.navbar.navbar-expand-lg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: 0 !important;\n  background: rgba(54, 72, 94, 0.92);\n  position: relative;\n}\n.navbar.navbar-expand-lg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  color: #fff;\n  text-decoration: none;\n  font-weight: bolder;\n  font-size: 1.3rem;\n  letter-spacing: 0.07rem;\n}\n.navbar.navbar-expand-lg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%]:hover, .navbar.navbar-expand-lg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%]:active {\n  text-decoration: none;\n  color: #e6eff1;\n}\n.navbar.navbar-expand-lg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%]   .fa-angle-down[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar.navbar-expand-lg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%]   .fa-angle-up[_ngcontent-%COMP%] {\n  display: block;\n}\n.navbar.navbar-expand-lg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link.collapsed[_ngcontent-%COMP%]   .fa-angle-down[_ngcontent-%COMP%] {\n  display: block;\n}\n.navbar.navbar-expand-lg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link.collapsed[_ngcontent-%COMP%]   .fa-angle-up[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .navbar.navbar-expand-lg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n@media (max-width: 575px) {\n  .navbar.navbar-expand-lg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n.navbar.navbar-expand-lg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%]   .dash-header-icon[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  left: 0;\n  right: unset;\n  top: 0;\n}\n.navbar.navbar-expand-lg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  top: 14px;\n  color: #fff;\n  right: 10px;\n}\n.navbar.navbar-expand-lg[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .custom-select-lang[_ngcontent-%COMP%] {\n  background: rgba(54, 72, 94, 0);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.2rem;\n}\n.search-result[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 65vw;\n  height: 100vh;\n  left: -65vw;\n  top: 0;\n}\n@media (max-width: 767px) {\n  .search-result[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    z-index: 999;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHRoZW1lL2NvbXBvbmVudHMvaGVhZGVyL0Q6XFxTZXJ2ZXJzXFxkYXNoYm9hcmRzXFx0dXJreS1kZXBsb3kvc3JjXFxhcHBcXEB0aGVtZVxcY29tcG9uZW50c1xcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0B0aGVtZS9jb21wb25lbnRzL2hlYWRlci9EOlxcU2VydmVyc1xcZGFzaGJvYXJkc1xcdHVya3ktZGVwbG95L3NyY1xcX3ZhcmlhYmxlLnNjc3MiLCJzcmMvYXBwL0B0aGVtZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFBZ0IsY0NRTjtBQ1JkO0FGR1E7RUFDRSw0QkFBQTtFQUNBLGVBQUE7QUVEVjtBRkdRO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUVEVjtBRklJO0VBQ0ksWUFBQTtBRUZSO0FGR1E7RUFDSSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0NuQlU7RURvQlYsa0JBQUE7QUVEWjtBRkVZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FFQWhCO0FGQ2dCO0VBQW9CLHFCQUFBO0VBQXVCLGNBQUE7QUVHM0Q7QUZGZ0I7RUFBaUIsYUFBQTtBRUtqQztBRkpnQjtFQUFlLGNBQUE7QUVPL0I7QUZMa0I7RUFBaUIsY0FBQTtBRVFuQztBRlBrQjtFQUFlLGFBQUE7QUVVakM7QUZSZ0I7RUFmSjtJQWdCTSxpQkFBQTtFRVdoQjtBQUNGO0FGVmdCO0VBbEJKO0lBbUJNLGVBQUE7RUVhaEI7QUFDRjtBRlpnQjtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUVjbEI7QUZYWTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRWFoQjtBRlhZO0VBQ0UsK0JDekRhO0VEMERiLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FFYWQ7QUZSQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBRVdGO0FGVkU7RUFORjtJQU9JLFlBQUE7SUFDQSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7SUFDQSxPQUFBO0lBQ0EsTUFBQTtJQUNBLFFBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtFRWFGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9AdGhlbWUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3ZhcmlhYmxlXCI7XHJcbi5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZyB7XHJcbiAgICAubmF2YmFyLWJyYW5kIHsgY29sb3I6ICRsaWdodF93aGl0ZTt9XHJcbiAgICAuc2lkZWJhci1zZWFyY2gge1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDFweCAwcHggMTVweCAjODg4O1xyXG4gICAgICAgIGlucHV0LmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4IDAgMCAzMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXYuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDMwcHggMzBweCAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc2lkZWJhcl9pdGVtX2J1dHRvbjsgICAgICAgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYnV0dG9uLmJ0bi1saW5rIHsgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjsgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjA3cmVtO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciwgJjphY3RpdmUgeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiAjZTZlZmYxOyB9XHJcbiAgICAgICAgICAgICAgICAuZmEtYW5nbGUtZG93biB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICAgICAgICAgICAgICAgIC5mYS1hbmdsZS11cCB7IGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgICAgICAgICAgICAmLmNvbGxhcHNlZCB7XHJcbiAgICAgICAgICAgICAgICAgIC5mYS1hbmdsZS1kb3duIHsgZGlzcGxheTogYmxvY2s7IH1cclxuICAgICAgICAgICAgICAgICAgLmZhLWFuZ2xlLXVwIHsgZGlzcGxheTogbm9uZTsgfSAgXHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICc3NjhweCcpIGFuZCAobWF4LXdpZHRoOiAnOTkxcHgnKSB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICc1NzVweCcpIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgICAgIC5kYXNoLWhlYWRlci1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgIHJpZ2h0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jdXN0b20tc2VsZWN0LWxhbmcge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzaWRlYmFyX2l0ZW1fYnV0dG9uX2xhbmc7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uc2VhcmNoLXJlc3VsdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA2NXZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgbGVmdDogLTY1dnc7XHJcbiAgdG9wOiAwO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAnNzY3cHgnKSB7ICAgIFxyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICB9XHJcbn0iLCIkbGlnaHRfYmx1ZTogIzUxNzE5NztcclxuJHNpZGViYXJfaXRlbV9idXR0b246IHJnYmEoNTQsIDcyLCA5NCwgMC45Mik7XHJcbiRzaWRlYmFyX2l0ZW1fYnV0dG9uX2xhbmc6IHJnYmEoNTQsIDcyLCA5NCwgMCk7XHJcbiRtZWRpdW1fYmx1ZTogIzM2NDg1ZTtcclxuJGxpZ2h0X2JsdWVfaG92ZXI6ICMzNjQ4NWU7XHJcbiRsaWdodF9ibGFjazogIzNhM2EzYTtcclxuJGxpZ2h0X21lZHVpbV9ibGFjazogIzMwMzAzMDtcclxuJGxpZ2h0X2dyZXk6ICM5ZTllOWU7XHJcblxyXG5cclxuJGxpZ2h0X3doaXRlOiAjZjFmYWVlO1xyXG4kbWVkaXVtX2xpZ2h0X2JsdWU6ICM1MDg1YTc7XHJcbiRkYXJrX2JsdWU6ICMxZDM1NTc7XHJcbiRxdWlldF9ncmVlbjogIzJhOWQ4ZjtcclxuJHdhcm1fZ3JlZW46ICMyMWE1Yjg7IiwiLm5hdmJhci5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogI2YxZmFlZTtcbn1cbi5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZyAuc2lkZWJhci1zZWFyY2ggaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAwIDAgMzBweDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuLm5hdmJhci5uYXZiYXItZXhwYW5kLWxnIC5zaWRlYmFyLXNlYXJjaCBkaXYuaW5wdXQtZ3JvdXAtdGV4dCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgMzBweCAzMHB4IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuLm5hdmJhci5uYXZiYXItZXhwYW5kLWxnIC5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLm5hdmJhci5uYXZiYXItZXhwYW5kLWxnIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSg1NCwgNzIsIDk0LCAwLjkyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm5hdmJhci5uYXZiYXItZXhwYW5kLWxnIC5jYXJkIC5jYXJkLWhlYWRlciBidXR0b24uYnRuLWxpbmsge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGxldHRlci1zcGFjaW5nOiAwLjA3cmVtO1xufVxuLm5hdmJhci5uYXZiYXItZXhwYW5kLWxnIC5jYXJkIC5jYXJkLWhlYWRlciBidXR0b24uYnRuLWxpbms6aG92ZXIsIC5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZyAuY2FyZCAuY2FyZC1oZWFkZXIgYnV0dG9uLmJ0bi1saW5rOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNlNmVmZjE7XG59XG4ubmF2YmFyLm5hdmJhci1leHBhbmQtbGcgLmNhcmQgLmNhcmQtaGVhZGVyIGJ1dHRvbi5idG4tbGluayAuZmEtYW5nbGUtZG93biB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubmF2YmFyLm5hdmJhci1leHBhbmQtbGcgLmNhcmQgLmNhcmQtaGVhZGVyIGJ1dHRvbi5idG4tbGluayAuZmEtYW5nbGUtdXAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZyAuY2FyZCAuY2FyZC1oZWFkZXIgYnV0dG9uLmJ0bi1saW5rLmNvbGxhcHNlZCAuZmEtYW5nbGUtZG93biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm5hdmJhci5uYXZiYXItZXhwYW5kLWxnIC5jYXJkIC5jYXJkLWhlYWRlciBidXR0b24uYnRuLWxpbmsuY29sbGFwc2VkIC5mYS1hbmdsZS11cCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubmF2YmFyLm5hdmJhci1leHBhbmQtbGcgLmNhcmQgLmNhcmQtaGVhZGVyIGJ1dHRvbi5idG4tbGluayB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAubmF2YmFyLm5hdmJhci1leHBhbmQtbGcgLmNhcmQgLmNhcmQtaGVhZGVyIGJ1dHRvbi5idG4tbGluayB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG4ubmF2YmFyLm5hdmJhci1leHBhbmQtbGcgLmNhcmQgLmNhcmQtaGVhZGVyIGJ1dHRvbi5idG4tbGluayAuZGFzaC1oZWFkZXItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsZWZ0OiAwO1xuICByaWdodDogdW5zZXQ7XG4gIHRvcDogMDtcbn1cbi5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZyAuY2FyZCAuY2FyZC1oZWFkZXIgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHJpZ2h0OiAxMHB4O1xufVxuLm5hdmJhci5uYXZiYXItZXhwYW5kLWxnIC5jYXJkIC5jYXJkLWhlYWRlciAuY3VzdG9tLXNlbGVjdC1sYW5nIHtcbiAgYmFja2dyb3VuZDogcmdiYSg1NCwgNzIsIDk0LCAwKTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLnNlYXJjaC1yZXN1bHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2NXZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBsZWZ0OiAtNjV2dztcbiAgdG9wOiAwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zZWFyY2gtcmVzdWx0IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogOTk5O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss'],
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        }]
      }], function () {
        return [{
          type: src_app_pages_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]
        }, {
          type: src_app_pages_admin_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _helper_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        menus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/@theme/components/not-found/not-found.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/@theme/components/not-found/not-found.component.ts ***!
    \********************************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppThemeComponentsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 2,
      vars: 0,
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@theme/components/sidebar/sidebar.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/@theme/components/sidebar/sidebar.component.ts ***!
    \****************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppThemeComponentsSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_pages_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/pages/admin-service/token/token.service */
    "./src/app/pages/admin-service/token/token.service.ts");
    /* harmony import */


    var src_app_pages_admin_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/pages/admin-service/auth/auth.service */
    "./src/app/pages/admin-service/auth/auth.service.ts");
    /* harmony import */


    var _helper_layout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../helper/layout.service */
    "./src/app/@theme/helper/layout.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function SidebarComponent_div_0_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", lang_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, lang_r4));
      }
    }

    function SidebarComponent_div_0_div_21_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var i_r6 = ctx_r10.index;
        var menu_r5 = ctx_r10.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("btn btn-link ", i_r6 != 0 ? "collapsed" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-target", "#" + menu_r5.id)("aria-controls", menu_r5.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", menu_r5.icon, " dash-header-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 9, menu_r5.translate), " ");
      }
    }

    function SidebarComponent_div_0_div_21_button_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var i_r6 = ctx_r11.index;
        var menu_r5 = ctx_r11.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("btn btn-link ", i_r6 != 0 ? "collapsed" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", menu_r5.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("data-target", "#" + menu_r5.id)("aria-controls", menu_r5.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("", menu_r5.icon, " dash-header-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 10, menu_r5.translate), " ");
      }
    }

    function SidebarComponent_div_0_div_21_div_5_p_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_div_0_div_21_div_5_p_2_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var item_r13 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r14.clicked(item_r13.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", item_r13.link);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, item_r13.translate));
      }
    }

    function SidebarComponent_div_0_div_21_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidebarComponent_div_0_div_21_div_5_p_2_Template, 4, 4, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var i_r6 = ctx_r16.index;
        var menu_r5 = ctx_r16.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("collapse bg-light-blue text-white ", i_r6 == 0 ? "show" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", menu_r5.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-labelledby", menu_r5.id + "-" + i_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", menu_r5.children);
      }
    }

    function SidebarComponent_div_0_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidebarComponent_div_0_div_21_button_3_Template, 6, 11, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SidebarComponent_div_0_div_21_button_4_Template, 4, 12, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SidebarComponent_div_0_div_21_div_5_Template, 3, 6, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menu_r5 = ctx.$implicit;
        var i_r6 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", menu_r5.id ? menu_r5.id + "-" + i_r6 : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menu_r5.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !menu_r5.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menu_r5.id);
      }
    }

    function SidebarComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SidebarComponent_div_0_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.name = $event;
        })("keyup", function SidebarComponent_div_0_Template_input_keyup_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.applyFilter();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h5", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "select", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SidebarComponent_div_0_Template_select_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.selectLang = $event;
        })("change", function SidebarComponent_div_0_Template_select_change_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r21.setTransLanguage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SidebarComponent_div_0_option_20_Template, 3, 4, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SidebarComponent_div_0_div_21_Template, 6, 4, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h5", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_div_0_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, "search"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 10, "title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 12, "placeholder"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.selectLang);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.TransLang);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.menus);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 14, "logout"), " ");
      }
    }

    function SidebarComponent_div_1_div_3_a_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_div_1_div_3_a_1_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

          var order_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r27.select(order_r24.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#ID : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r24.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "recipient-name"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r24.recipientName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, "state"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r24.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 11, "date"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 13, order_r24.date.timestamp * 1000, "yyyy-MM-dd"));
      }
    }

    function SidebarComponent_div_1_div_3_a_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_div_1_div_3_a_2_Template_a_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

          var order_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r31.select(order_r24.orderID);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "#ID : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h5", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r24.orderID);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "recipient-name"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r24.recipientName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 9, "state"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](order_r24.state);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 11, "date"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 13, order_r24.orderDate.timestamp * 1000, "yyyy-MM-dd"));
      }
    }

    function SidebarComponent_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_div_1_div_3_a_1_Template, 23, 16, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SidebarComponent_div_1_div_3_a_2_Template, 23, 16, "a", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var order_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r24.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", order_r24.orderID);
      }
    }

    function SidebarComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidebarComponent_div_1_div_3_Template, 3, 2, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.ordersListFilter);
      }
    }

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent(tokenService, authService, layoutService, translate, router, datePipe, document, render) {
        _classCallCheck(this, SidebarComponent);

        this.tokenService = tokenService;
        this.authService = authService;
        this.layoutService = layoutService;
        this.translate = translate;
        this.router = router;
        this.datePipe = datePipe;
        this.document = document;
        this.render = render;
        this.orders = [];
        this.ordersListFilter = [];
        this.disabled = false;
        this.selectLang = '';
        this.TransLang = [];
        translate.setDefaultLang('en');
        translate.addLangs(['en', 'ar']);
        this.selectLang = 'en';
        translate.use('en');
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.getTransLanguage();
          this.authService.authState.subscribe(function (loggedIn) {
            return _this4.loggedIn = loggedIn;
          });
        }
      }, {
        key: "setTransLanguage",
        value: function setTransLanguage() {
          var _this5 = this;

          console.log('set new language', this.selectLang);
          var htmlTag = this.document.querySelector('html');
          var search_result = this.document.querySelector('.search-result'); // change louder icon direction

          this.isElementExists();

          if (this.selectLang == 'ar') {
            // set all project direction
            this.render.setStyle(htmlTag, 'direction', 'rtl'); // set sidebar direction

            this.render.setStyle(this.document.querySelector('.main-sidebar'), 'right', '0'); // set sidebar button direction

            this.document.querySelectorAll('.btn.btn-link').forEach(function (e) {
              _this5.render.setStyle(e, 'text-align', 'right');
            }); // set sidebar button icon direction

            this.document.querySelectorAll('.fa-custom').forEach(function (e) {
              _this5.render.setStyle(e, 'right', 'unset');

              _this5.render.setStyle(e, 'left', '10px');
            }); // set sidebar form direction to ltr

            this.render.setStyle(this.document.querySelector('.custom-search-form'), 'direction', 'ltr');
            this.render.setStyle(this.document.querySelector('.input-group-prepend'), 'display', 'flex');
            this.render.addClass(this.document.querySelector('.input-group-text'), 'input-group-text-custom'); // change bootstrap link to bootstrap-rtl version link

            this.document.querySelectorAll('link').forEach(function (e, k, i) {
              if (e.href.search('bootstrap.min.css') > 0) {
                e.href = 'assets/css/bootstrap-rtl.min.css';
                e.removeAttribute('integrity');
                e.removeAttribute('crossorigin');
              }
            });
          } else {
            this.render.setStyle(htmlTag, 'direction', 'ltr');
            this.render.setStyle(this.document.querySelector('.main-sidebar'), 'right', '0');
            this.document.querySelectorAll('.btn.btn-link').forEach(function (e) {
              _this5.render.setStyle(e, 'text-align', 'left');
            });
            this.document.querySelectorAll('.fa-custom').forEach(function (e) {
              _this5.render.setStyle(e, 'right', '10px');

              _this5.render.setStyle(e, 'left', 'unset');
            }); // this.render.setStyle(this.document.querySelector('.custom-search-form'), 'direction', 'ltr');

            this.render.removeClass(this.document.querySelector('.input-group-text'), 'input-group-text-custom');
            this.document.querySelectorAll('link').forEach(function (e, k, i) {
              if (e.href.search('bootstrap-rtl.min.css') > 0) {
                e.href = 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css';
                e.setAttribute('integrity', 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm');
                e.setAttribute('crossorigin', 'anonymous');
              }
            });
          }

          this.translate.use(this.selectLang);
        }
      }, {
        key: "getTransLanguage",
        value: function getTransLanguage() {
          this.TransLang = _toConsumableArray(this.translate.getLangs());
        }
      }, {
        key: "logout",
        value: function logout() {
          this.tokenService.deleteToken();
          this.authService.changeAuthStatus(false);
          this.router.navigate(['/login']);
        }
      }, {
        key: "clicked",
        value: function clicked() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          if (value) {
            this.layoutService.changeLayout(value);
            this.router.navigate(['/']);
          }
        }
      }, {
        key: "select",
        value: function select(id) {
          this.disabled = false; // empty search input

          this.render.setProperty(this.document.getElementById('inlineFormInputGroupUsername2'), 'value', '');
          this.router.navigate(['/orders/view/', id]);
        } // Exists from search result page (if exists) using escape button

      }, {
        key: "onKeydownHandler",
        value: function onKeydownHandler(event) {
          this.disabled = false; // empty search input

          this.render.setProperty(this.document.getElementById('inlineFormInputGroupUsername2'), 'value', '');
        } // check if search-result div exists

      }, {
        key: "checkSearchDivExists",
        value: function checkSearchDivExists() {// if (this.selectLang == 'ar') {
          //   let elementExists = setInterval(() => {
          //     const search_result = this.document.querySelector('.search-result') as HTMLElement;
          //     if (search_result) {
          //       this.render.setStyle(this.document.querySelector('.search-result'), 'left', 'unset');
          //       this.render.setStyle(this.document.querySelector('.search-result'), 'right', '-65vw');
          //       clearInterval(elementExists);
          //     }
          //   }, 10);
          // } else {
          //   let elementExists = setInterval(() => {
          //     const search_result = this.document.querySelector('.search-result') as HTMLElement;
          //     if (search_result) {
          //       this.render.setStyle(this.document.querySelector('.search-result'), 'right', 'unset');
          //       this.render.setStyle(this.document.querySelector('.search-result'), 'left', '-65vw');
          //       clearInterval(elementExists);
          //     }
          //   }, 10);
          // }
        } // check Element Exists

      }, {
        key: "isElementExists",
        value: function isElementExists() {
          var _this6 = this;

          if (this.selectLang == 'ar') {
            var elementExists = setInterval(function () {
              var loaderIcon = _this6.document.querySelector('.lds-ring');

              if (loaderIcon) {
                // set loader icon direction
                _this6.render.setStyle(_this6.document.querySelector('.lds-ring'), 'left', '33.3%');

                _this6.render.setStyle(_this6.document.querySelector('.lds-ring'), 'right', 'unset');

                clearInterval(elementExists);
              }
            }, 10);
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {// if (this.name == '') {
          //   this.disabled = false;
          // } else {
          //   this.disabled = true;
          //   // run method if search input not empty
          //   this.checkSearchDivExists();
          // }
          // // if the search input value is empty
          // if (!this.name) {
          //   this.ordersListFilter = [...this.orders];
          // } else {
          //   this.ordersListFilter = [];
          //   this.ordersListFilter = this.orders.filter(res => {
          //     if (res.orderDate) {
          //       const orderDate = (this.datePipe.transform(new Date(res.orderDate.timestamp * 1000), 'yyyy-MM-dd')).toString().match(this.name.toLocaleLowerCase());
          //       if (orderDate) {
          //         return orderDate;
          //       }
          //     }
          //     if (res.id) {
          //       const id = res.id.toString().match(this.name.toLocaleLowerCase());
          //       if (id) {
          //         return id;
          //       }
          //     }
          //      if (res.orderID) {
          //       const orderID = res.orderID.toString().match(this.name.toLocaleLowerCase());
          //       if (orderID) {
          //         // display the Name Column
          //         return orderID;
          //       }
          //     }
          //      if (res.date) {
          //       const date = (this.datePipe.transform(new Date(res.date.timestamp * 1000), 'yyyy-MM-dd')).toString().match(this.name.toLocaleLowerCase());
          //       if (date) {
          //         return date;
          //       }
          //     }
          //     if (res.recipientName)  {
          //       const recipientName = res.recipientName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          //       if (recipientName) {
          //         return recipientName;
          //       }
          //     }
          //   });
          // }
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_pages_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_pages_admin_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_helper_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      hostBindings: function SidebarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown.escape", function SidebarComponent_keydown_escape_HostBindingHandler($event) {
            return ctx.onKeydownHandler($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveDocument"]);
        }
      },
      inputs: {
        menus: "menus"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]])],
      decls: 2,
      vars: 2,
      consts: [["class", "main-sidebar bg-light-blue", 4, "ngIf"], ["class", "search-result bg-white py-5", 4, "ngIf"], [1, "main-sidebar", "bg-light-blue"], [1, "sidebar-search", "p-3"], [1, "form-inline", "custom-search-form", 2, "visibility", "hidden"], ["for", "inlineFormInputGroupUsername2", 1, "sr-only"], [1, "w-100", "input-group", "mb-2", "mr-sm-2"], ["type", "text", "id", "inlineFormInputGroupUsername2", "name", "search", 1, "form-control", 3, "ngModel", "title", "placeholder", "ngModelChange", "keyup"], [1, "input-group-prepend"], [1, "input-group-text", "input-group-text-custom"], ["aria-hidden", "true", 1, "fa", "fa-search", "fa-fw", "text-muted"], [1, "sidebar-menu", "py-5"], [1, "container"], ["id", "accordion"], [1, "card", "mb-3"], [1, "card-header"], [1, "mb-0"], ["name", "selectLang", 1, "form-control", "custom-select-lang", 3, "ngModel", "ngModelChange", "change"], ["style", "background-color: #46566b", "class", "options", 3, "value", 4, "ngFor", "ngForOf"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "btn", "btn-link", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sign-out", "dash-header-icon"], [1, "options", 2, "background-color", "#46566b", 3, "value"], ["data-toggle", "collapse", "aria-expanded", "true", "style", "cursor: pointer;", 3, "class", 4, "ngIf"], ["data-toggle", "collapse", "aria-expanded", "true", "style", "cursor: pointer;", 3, "class", "routerLink", 4, "ngIf"], ["data-parent", "#accordion", 3, "id", "class", 4, "ngIf"], ["data-toggle", "collapse", "aria-expanded", "true", 2, "cursor", "pointer"], ["aria-hidden", "true"], [1, "fa", "fa-angle-down", "fa-custom", "fa-lg", "fa-fw"], [1, "fa", "fa-angle-up", "fa-custom", "fa-lg", "fa-fw"], ["data-toggle", "collapse", "aria-expanded", "true", 2, "cursor", "pointer", 3, "routerLink"], ["data-parent", "#accordion", 3, "id"], [1, "card-body"], ["class", "mb-2", 4, "ngFor", "ngForOf"], [1, "mb-2"], [3, "routerLink", "click"], [1, "search-result", "bg-white", "py-5"], [1, "row"], ["class", "col-12 col-md-6 col-lg-4 mb-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-md-6", "col-lg-4", "mb-3"], ["style", "cursor: pointer;", 3, "click", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], [1, "card", "w-100", "text-dark", 2, "width", "18rem"], [1, "card-title"], [1, "text-info"], [1, "card-desc", "mb-0"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SidebarComponent_div_0_Template, 29, 16, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SidebarComponent_div_1_Template, 4, 1, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.disabled);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]],
      styles: [".main-sidebar[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  position: fixed;\n  left: 0;\n  width: 34.3%;\n  z-index: 1;\n}\n@media (min-width: 1200px) {\n  .main-sidebar[_ngcontent-%COMP%] {\n    width: 24.5%;\n  }\n}\n.main-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 7px;\n}\n.main-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.main-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888;\n}\n.main-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n.main-sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%] {\n  box-shadow: 1px 0px 15px #ffffff47;\n}\n.main-sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%] {\n  border-radius: 30px 0 0 30px;\n  border-right: 0;\n}\n.main-sidebar[_ngcontent-%COMP%]   .sidebar-search[_ngcontent-%COMP%]   div.input-group-text[_ngcontent-%COMP%] {\n  border-radius: 0 30px 30px 0;\n  background: #fff;\n  border-left: 0;\n}\n.main-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n}\n.main-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  padding: 0;\n  border-radius: 0 !important;\n  background: rgba(54, 72, 94, 0.92);\n  position: relative;\n}\n.main-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  color: #fff;\n  text-decoration: none;\n  font-weight: bolder;\n  font-size: 1.3rem;\n  letter-spacing: 0.07rem;\n}\n.main-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%]:hover, .main-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%]:active {\n  text-decoration: none;\n  color: #a6a7a9;\n}\n.main-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%]   .fa-angle-down[_ngcontent-%COMP%] {\n  display: none;\n}\n.main-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%]   .fa-angle-up[_ngcontent-%COMP%] {\n  display: block;\n}\n.main-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link.collapsed[_ngcontent-%COMP%]   .fa-angle-down[_ngcontent-%COMP%] {\n  display: block;\n}\n.main-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link.collapsed[_ngcontent-%COMP%]   .fa-angle-up[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .main-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n.main-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button.btn-link[_ngcontent-%COMP%]   .dash-header-icon[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  left: 0;\n  right: unset;\n  top: 0;\n}\n.main-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  top: 14px;\n  color: #fff;\n  right: 10px;\n}\n.main-sidebar[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .custom-select-lang[_ngcontent-%COMP%] {\n  background: rgba(54, 72, 94, 0);\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  font-size: 1.2rem;\n}\n.search-result[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 65vw;\n  height: 100vh;\n  left: -65vw;\n  top: 0;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .search-result[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .search-result[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n@media (min-width: 576px) and (max-width: 991px) {\n  .search-result[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQHRoZW1lL2NvbXBvbmVudHMvc2lkZWJhci9EOlxcU2VydmVyc1xcZGFzaGJvYXJkc1xcdHVya3ktZGVwbG95L3NyY1xcYXBwXFxAdGhlbWVcXGNvbXBvbmVudHNcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0B0aGVtZS9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQHRoZW1lL2NvbXBvbmVudHMvc2lkZWJhci9EOlxcU2VydmVyc1xcZGFzaGJvYXJkc1xcdHVya3ktZGVwbG95L3NyY1xcX3ZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNBSjtBRENJO0VBUko7SUFTTSxZQUFBO0VDRUo7QUFDRjtBRERJO0VBQ0UsVUFBQTtBQ0dOO0FEREk7RUFDRSxtQkFBQTtBQ0dOO0FEREk7RUFDRSxnQkFBQTtBQ0dOO0FEREk7RUFDRSxnQkFBQTtBQ0dOO0FEREk7RUFFSSxrQ0FBQTtBQ0VSO0FERFE7RUFDRSw0QkFBQTtFQUNBLGVBQUE7QUNHVjtBRERRO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNHVjtBREFJO0VBQ0ksWUFBQTtBQ0VSO0FERFE7RUFDSSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0V6Q1U7RUYwQ1Ysa0JBQUE7QUNHWjtBREZZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDSWhCO0FESGdCO0VBQW9CLHFCQUFBO0VBQXVCLGNBQUE7QUNPM0Q7QUROZ0I7RUFBaUIsYUFBQTtBQ1NqQztBRFJnQjtFQUFlLGNBQUE7QUNXL0I7QURUa0I7RUFBaUIsY0FBQTtBQ1luQztBRFhrQjtFQUFlLGFBQUE7QUNjakM7QURaZ0I7RUFmSjtJQWdCTSxpQkFBQTtFQ2VoQjtBQUNGO0FEZGdCO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtBQ2dCbEI7QURiWTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ2VoQjtBRGJZO0VBQ0UsK0JFNUVhO0VGNkViLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDZWQ7QURWQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQ2FGO0FEWEk7RUFERjtJQUVJLGlCQUFBO0VDY0o7QUFDRjtBRGJJO0VBSkY7SUFLSSxlQUFBO0VDZ0JKO0FBQ0Y7QURiSTtFQURGO0lBRUksaUJBQUE7RUNnQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL0B0aGVtZS9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi92YXJpYWJsZVwiO1xyXG4ubWFpbi1zaWRlYmFyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDM0LjMlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIEBtZWRpYShtaW4td2lkdGg6ICcxMjAwcHgnKSB7XHJcbiAgICAgIHdpZHRoOiAyNC41JTtcclxuICAgIH1cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgd2lkdGg6IDdweDtcclxuICAgIH1cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgIH1cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgYmFja2dyb3VuZDogIzg4ODtcclxuICAgIH1cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzU1NTtcclxuICAgIH1cclxuICAgIC5zaWRlYmFyLXNlYXJjaCB7XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogMXB4IDBweCAxNXB4ICM4ODg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAxNXB4ICNmZmZmZmY0NztcclxuICAgICAgICBpbnB1dC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweCAwIDAgMzBweDtcclxuICAgICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2LmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAzMHB4IDMwcHggMDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICBib3JkZXItbGVmdDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHNpZGViYXJfaXRlbV9idXR0b247ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgYnV0dG9uLmJ0bi1saW5rIHsgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjsgXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjA3cmVtO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciwgJjphY3RpdmUgeyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGNvbG9yOiAjYTZhN2E5OyB9XHJcbiAgICAgICAgICAgICAgICAuZmEtYW5nbGUtZG93biB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICAgICAgICAgICAgICAgIC5mYS1hbmdsZS11cCB7IGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgICAgICAgICAgICAgICAmLmNvbGxhcHNlZCB7XHJcbiAgICAgICAgICAgICAgICAgIC5mYS1hbmdsZS1kb3duIHsgZGlzcGxheTogYmxvY2s7IH1cclxuICAgICAgICAgICAgICAgICAgLmZhLWFuZ2xlLXVwIHsgZGlzcGxheTogbm9uZTsgfSAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJzc2OHB4JykgYW5kIChtYXgtd2lkdGg6ICc5OTFweCcpIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZGFzaC1oZWFkZXItaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY3VzdG9tLXNlbGVjdC1sYW5nIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc2lkZWJhcl9pdGVtX2J1dHRvbl9sYW5nO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnNlYXJjaC1yZXN1bHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNjV2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGxlZnQ6IC02NXZ3O1xyXG4gIHRvcDogMDtcclxuICBoNSB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJzc2OHB4JykgYW5kIChtYXgtd2lkdGg6ICc5OTFweCcpIHtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJzU3NnB4JykgYW5kIChtYXgtd2lkdGg6ICc3NjdweCcpIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBwIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAnNTc2cHgnKSBhbmQgKG1heC13aWR0aDogJzk5MXB4Jykge1xyXG4gICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIi5tYWluLXNpZGViYXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMzQuMyU7XG4gIHotaW5kZXg6IDE7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5tYWluLXNpZGViYXIge1xuICAgIHdpZHRoOiAyNC41JTtcbiAgfVxufVxuLm1haW4tc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogN3B4O1xufVxuLm1haW4tc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xufVxuLm1haW4tc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xufVxuLm1haW4tc2lkZWJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTU1O1xufVxuLm1haW4tc2lkZWJhciAuc2lkZWJhci1zZWFyY2gge1xuICBib3gtc2hhZG93OiAxcHggMHB4IDE1cHggI2ZmZmZmZjQ3O1xufVxuLm1haW4tc2lkZWJhciAuc2lkZWJhci1zZWFyY2ggaW5wdXQuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyLXJhZGl1czogMzBweCAwIDAgMzBweDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuLm1haW4tc2lkZWJhciAuc2lkZWJhci1zZWFyY2ggZGl2LmlucHV0LWdyb3VwLXRleHQge1xuICBib3JkZXItcmFkaXVzOiAwIDMwcHggMzBweCAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItbGVmdDogMDtcbn1cbi5tYWluLXNpZGViYXIgLmNhcmQge1xuICBib3JkZXI6IG5vbmU7XG59XG4ubWFpbi1zaWRlYmFyIC5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSg1NCwgNzIsIDk0LCAwLjkyKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1haW4tc2lkZWJhciAuY2FyZCAuY2FyZC1oZWFkZXIgYnV0dG9uLmJ0bi1saW5rIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4wN3JlbTtcbn1cbi5tYWluLXNpZGViYXIgLmNhcmQgLmNhcmQtaGVhZGVyIGJ1dHRvbi5idG4tbGluazpob3ZlciwgLm1haW4tc2lkZWJhciAuY2FyZCAuY2FyZC1oZWFkZXIgYnV0dG9uLmJ0bi1saW5rOmFjdGl2ZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNhNmE3YTk7XG59XG4ubWFpbi1zaWRlYmFyIC5jYXJkIC5jYXJkLWhlYWRlciBidXR0b24uYnRuLWxpbmsgLmZhLWFuZ2xlLWRvd24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1haW4tc2lkZWJhciAuY2FyZCAuY2FyZC1oZWFkZXIgYnV0dG9uLmJ0bi1saW5rIC5mYS1hbmdsZS11cCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW4tc2lkZWJhciAuY2FyZCAuY2FyZC1oZWFkZXIgYnV0dG9uLmJ0bi1saW5rLmNvbGxhcHNlZCAuZmEtYW5nbGUtZG93biB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLm1haW4tc2lkZWJhciAuY2FyZCAuY2FyZC1oZWFkZXIgYnV0dG9uLmJ0bi1saW5rLmNvbGxhcHNlZCAuZmEtYW5nbGUtdXAge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm1haW4tc2lkZWJhciAuY2FyZCAuY2FyZC1oZWFkZXIgYnV0dG9uLmJ0bi1saW5rIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxufVxuLm1haW4tc2lkZWJhciAuY2FyZCAuY2FyZC1oZWFkZXIgYnV0dG9uLmJ0bi1saW5rIC5kYXNoLWhlYWRlci1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiB1bnNldDtcbiAgdG9wOiAwO1xufVxuLm1haW4tc2lkZWJhciAuY2FyZCAuY2FyZC1oZWFkZXIgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMTRweDtcbiAgY29sb3I6ICNmZmY7XG4gIHJpZ2h0OiAxMHB4O1xufVxuLm1haW4tc2lkZWJhciAuY2FyZCAuY2FyZC1oZWFkZXIgLmN1c3RvbS1zZWxlY3QtbGFuZyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTQsIDcyLCA5NCwgMCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5zZWFyY2gtcmVzdWx0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjV2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgbGVmdDogLTY1dnc7XG4gIHRvcDogMDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zZWFyY2gtcmVzdWx0IGg1IHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNlYXJjaC1yZXN1bHQgaDUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnNlYXJjaC1yZXN1bHQgcCB7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gIH1cbn0iLCIkbGlnaHRfYmx1ZTogIzUxNzE5NztcclxuJHNpZGViYXJfaXRlbV9idXR0b246IHJnYmEoNTQsIDcyLCA5NCwgMC45Mik7XHJcbiRzaWRlYmFyX2l0ZW1fYnV0dG9uX2xhbmc6IHJnYmEoNTQsIDcyLCA5NCwgMCk7XHJcbiRtZWRpdW1fYmx1ZTogIzM2NDg1ZTtcclxuJGxpZ2h0X2JsdWVfaG92ZXI6ICMzNjQ4NWU7XHJcbiRsaWdodF9ibGFjazogIzNhM2EzYTtcclxuJGxpZ2h0X21lZHVpbV9ibGFjazogIzMwMzAzMDtcclxuJGxpZ2h0X2dyZXk6ICM5ZTllOWU7XHJcblxyXG5cclxuJGxpZ2h0X3doaXRlOiAjZjFmYWVlO1xyXG4kbWVkaXVtX2xpZ2h0X2JsdWU6ICM1MDg1YTc7XHJcbiRkYXJrX2JsdWU6ICMxZDM1NTc7XHJcbiRxdWlldF9ncmVlbjogIzJhOWQ4ZjtcclxuJHdhcm1fZ3JlZW46ICMyMWE1Yjg7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss'],
          providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]]
        }]
      }], function () {
        return [{
          type: src_app_pages_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]
        }, {
          type: src_app_pages_admin_service_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _helper_layout_service__WEBPACK_IMPORTED_MODULE_4__["LayoutService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      }, {
        menus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        onKeydownHandler: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['document:keydown.escape', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/@theme/helper/helper.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/@theme/helper/helper.service.ts ***!
    \*************************************************/

  /*! exports provided: HelperService */

  /***/
  function srcAppThemeHelperHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HelperService", function () {
      return HelperService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HelperService = /*#__PURE__*/function () {
      function HelperService() {
        _classCallCheck(this, HelperService);
      } // the time inserted as : 02:14:30


      _createClass(HelperService, null, [{
        key: "timeToMillisecond",
        value: function timeToMillisecond(time) {
          var timeParts = time.split(":");
          var result = +timeParts[0] * (60000 * 60) + +timeParts[1] * 60000 + +timeParts[2] * 1000;
          return result;
        } // Convert millisecond To Time

      }, {
        key: "millisecondToTime",
        value: function millisecondToTime(duration) {
          var milliseconds = Number(duration % 1000 / 100);
          var seconds = Math.floor(duration / 1000 % 60);
          var minutes = Math.floor(duration / (1000 * 60) % 60);
          var hours = Math.floor(duration / (1000 * 60 * 60) % 24);
          hours = hours < 10 ? "0" + hours : hours;
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
        }
      }]);

      return HelperService;
    }();

    HelperService.ɵfac = function HelperService_Factory(t) {
      return new (t || HelperService)();
    };

    HelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HelperService,
      factory: HelperService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@theme/helper/layout.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/@theme/helper/layout.service.ts ***!
    \*************************************************/

  /*! exports provided: LayoutService */

  /***/
  function srcAppThemeHelperLayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
      return LayoutService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LayoutService = /*#__PURE__*/function () {
      function LayoutService() {
        _classCallCheck(this, LayoutService);

        this.layout = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.layoutState = this.layout.asObservable();
      }

      _createClass(LayoutService, [{
        key: "changeLayout",
        value: function changeLayout(value) {
          this.layout.next(value);
        }
      }]);

      return LayoutService;
    }();

    LayoutService.ɵfac = function LayoutService_Factory(t) {
      return new (t || LayoutService)();
    };

    LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LayoutService,
      factory: LayoutService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@theme/theme.module.ts":
  /*!****************************************!*\
    !*** ./src/app/@theme/theme.module.ts ***!
    \****************************************/

  /*! exports provided: ThemeModule */

  /***/
  function srcAppThemeThemeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
      return ThemeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/sidebar/sidebar.component */
    "./src/app/@theme/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/@theme/components/footer/footer.component.ts");
    /* harmony import */


    var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/not-found/not-found.component */
    "./src/app/@theme/components/not-found/not-found.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/@theme/components/header/header.component.ts");

    var COMPONENTS = [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"]];
    var MODULES = [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]];

    var ThemeModule = /*#__PURE__*/function () {
      function ThemeModule() {
        _classCallCheck(this, ThemeModule);
      }

      _createClass(ThemeModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: ThemeModule
          };
        }
      }]);

      return ThemeModule;
    }();

    ThemeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ThemeModule
    });
    ThemeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ThemeModule_Factory(t) {
        return new (t || ThemeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThemeModule, {
        declarations: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
        exports: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_5__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [].concat(COMPONENTS, [_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"]]),
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]],
          exports: [].concat(COMPONENTS, MODULES)
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-register-register-module */
        "pages-register-register-module").then(__webpack_require__.bind(null,
        /*! ./pages/register/register.module */
        "./src/app/pages/register/register.module.ts")).then(function (m) {
          return m.RegisterModule;
        });
      }
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-pages-module */
        "pages-pages-module").then(__webpack_require__.bind(null,
        /*! ./pages/pages.module */
        "./src/app/pages/pages.module.ts")).then(function (m) {
          return m.PagesModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _sidebar_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sidebar-menu */
    "./src/app/sidebar-menu.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.menu = _sidebar_menu__WEBPACK_IMPORTED_MODULE_1__["SIDEBAR_MENU_ITEM"];
      this.title = 'Her Sey Dashboard';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "<router-outlet><router-outlet>"
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
    /* harmony import */


    var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/database */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-database.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__["TranslateHttpLoader"](http);
    } // For Firebase JS SDK v7.20.0 and later, measurementId is optional


    var firebaseConfig = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig;

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"], {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(), _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"].forRoot(), _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot({}, {}), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument({
        maxAge: 25,
        logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production
      }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsModule"].forRoot([]), _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabaseModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsRootModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabaseModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot(), _theme_theme_module__WEBPACK_IMPORTED_MODULE_3__["ThemeModule"].forRoot(), _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot({}, {}), _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument({
            maxAge: 25,
            logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production
          }), _ngrx_effects__WEBPACK_IMPORTED_MODULE_15__["EffectsModule"].forRoot([]), _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabaseModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
            }
          })],
          providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestore"], {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"]
          }],
          exports: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/admin-service/auth/auth.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/admin-service/auth/auth.service.ts ***!
    \**********************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppPagesAdminServiceAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _token_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../token/token.service */
    "./src/app/pages/admin-service/token/token.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(tokenService) {
        _classCallCheck(this, AuthService);

        this.tokenService = tokenService;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.tokenService.loggedIn());
        this.authState = this.loggedIn.asObservable();
      } // change loggedIn value


      _createClass(AuthService, [{
        key: "changeAuthStatus",
        value: function changeAuthStatus(value) {
          this.loggedIn.next(value);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _token_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/admin-service/token/token.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/admin-service/token/token.service.ts ***!
    \************************************************************/

  /*! exports provided: TokenService */

  /***/
  function srcAppPagesAdminServiceTokenTokenServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenService", function () {
      return TokenService;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_theme_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/@theme/helper/helper.service */
    "./src/app/@theme/helper/helper.service.ts");

    var TokenService = /*#__PURE__*/function () {
      function TokenService() {
        _classCallCheck(this, TokenService);

        this.expireTime = src_app_theme_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"].timeToMillisecond("02:00:00");
        this.iss = {
          //login: AdminConfig.loginAPI,
          username: ''
        };
        console.log('Expire Time To Delete Your Token is : ', src_app_theme_helper_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"].millisecondToTime(this.expireTime));
      }

      _createClass(TokenService, [{
        key: "handle",
        value: function handle(username, token) {
          this.iss.username = username; // this.setToken(token);

          this.setTokenWithExpiry("token", token, this.expireTime);
        } // Store The Token In The Cookie
        // setToken(token) {
        //   localStorage.setItem('token', token);
        // }
        // GET The Token From The Cookie
        // getToken() {
        //   return localStorage.getItem('token');
        // }
        // Delete The Token From The Cookie

      }, {
        key: "deleteToken",
        value: function deleteToken() {
          localStorage.removeItem('token');
        }
      }, {
        key: "isValid",
        value: function isValid() {
          var token = this.getTokenWithExpiry('token');

          if (token) {
            var payload = this.payload(token);
            return Object.values(this.iss).indexOf(payload.username) > -1 || token != '' ? true : false;
          }

          return false;
        }
      }, {
        key: "payload",
        value: function payload(token) {
          var payload = token.split('.')[1];
          return this.decode(payload);
        } // decode the token to fetch the data from it

      }, {
        key: "decode",
        value: function decode(payload) {
          return JSON.parse(atob(payload));
        }
      }, {
        key: "loggedIn",
        value: function loggedIn() {
          return this.isValid();
        }
      }, {
        key: "setTokenWithExpiry",
        value: function setTokenWithExpiry(key, value, ttl) {
          var now = new Date(); // `item` is an object which contains the original value
          // as well as the time when it's supposed to expire

          var item = {
            value: value,
            expiry: now.getTime() + ttl
          };
          localStorage.setItem(key, JSON.stringify(item));
        }
      }, {
        key: "getTokenWithExpiry",
        value: function getTokenWithExpiry(key) {
          var itemStr = localStorage.getItem(key); // if the item doesn't exist, return null

          if (!itemStr) {
            return null;
          }

          var item = JSON.parse(itemStr);
          var now = new Date(); // compare the expiry time of the item with the current time

          if (now.getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            localStorage.removeItem(key);
            return null;
          }

          return item.value;
        }
      }, {
        key: "httpOptions",
        value: function httpOptions() {
          var token = this.getTokenWithExpiry('token');

          if (token) {
            return {
              headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: "Bearer " + token
              })
            };
          }
        }
      }]);

      return TokenService;
    }();

    TokenService.ɵfac = function TokenService_Factory(t) {
      return new (t || TokenService)();
    };

    TokenService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: TokenService,
      factory: TokenService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TokenService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sidebar-menu.ts":
  /*!*********************************!*\
    !*** ./src/app/sidebar-menu.ts ***!
    \*********************************/

  /*! exports provided: SIDEBAR_MENU_ITEM */

  /***/
  function srcAppSidebarMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SIDEBAR_MENU_ITEM", function () {
      return SIDEBAR_MENU_ITEM;
    });

    var SIDEBAR_MENU_ITEM = [{
      title: 'Dashboard',
      translate: 'dashboard',
      icon: 'fa fa-tachometer',
      link: '/'
    }, {
      title: 'Products',
      id: 'products',
      translate: 'products',
      icon: 'fa fa-tags',
      children: [{
        title: 'All Products',
        translate: 'all-products',
        link: '/products'
      }, {
        title: 'All Cars',
        translate: 'all-cars',
        link: '/cars'
      }, {
        title: 'All Devices',
        translate: 'all-devices',
        link: '/devices'
      }, {
        title: 'All Real Estate',
        translate: 'all-real-estate',
        link: '/real-estate'
      }]
    }, {
      title: 'Reports',
      translate: 'reports',
      icon: 'fa fa-files-o',
      link: '/reports'
    }, {
      title: 'Chats',
      translate: 'chats',
      icon: 'fa fa-comments',
      link: '/chats'
    }, {
      title: 'Services',
      translate: 'services',
      icon: 'fa fa-audio-description',
      link: '/services'
    }];
    /***/
  },

  /***/
  "./src/environments/environment.prod.ts":
  /*!**********************************************!*\
    !*** ./src/environments/environment.prod.ts ***!
    \**********************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentProdTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: true,
      sourceApi: 'http://turkey-app.yes-cloud.de/html/public/index.php/',
      firebaseConfig: {
        apiKey: "AIzaSyDOAu8tqavfWnEit8vuOr7JyxRt2XHjEcs",
        authDomain: "yes-soft-6866a.firebaseapp.com",
        databaseURL: "https://yes-soft-6866a.firebaseio.com",
        projectId: "yes-soft-6866a",
        storageBucket: "yes-soft-6866a.appspot.com",
        messagingSenderId: "396882908080",
        appId: "1:396882908080:web:e86f986ae56c6070fabc75",
        measurementId: "G-HPC10T199F"
      }
    };
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    document.addEventListener('DOMContentLoaded', function () {
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
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
    /*! D:\Servers\dashboards\turky-deploy\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
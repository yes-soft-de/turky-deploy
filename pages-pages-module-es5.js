function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"], {
  /***/
  "./src/app/@theme/components/index.ts":
  /*!********************************************!*\
    !*** ./src/app/@theme/components/index.ts ***!
    \********************************************/

  /*! exports provided: SidebarComponent, FooterComponent, NotFoundComponent */

  /***/
  function srcAppThemeComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/@theme/components/sidebar/sidebar.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_0__["SidebarComponent"];
    });
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/@theme/components/footer/footer.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"];
    });
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/@theme/components/not-found/not-found.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"];
    });
    /***/

  },

  /***/
  "./src/app/pages/admin-service/guard/after-login.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/admin-service/guard/after-login.service.ts ***!
    \******************************************************************/

  /*! exports provided: AfterLoginService */

  /***/
  function srcAppPagesAdminServiceGuardAfterLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AfterLoginService", function () {
      return AfterLoginService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _token_token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../token/token.service */
    "./src/app/pages/admin-service/token/token.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AfterLoginService = /*#__PURE__*/function () {
      function AfterLoginService(tokenService, router) {
        _classCallCheck(this, AfterLoginService);

        this.tokenService = tokenService;
        this.router = router;
      }

      _createClass(AfterLoginService, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          // return true;
          var flag = this.tokenService.loggedIn();

          if (flag) {
            return flag;
          } else {
            this.router.navigate(['/login']);
            return;
          }

          return flag;
        }
      }]);

      return AfterLoginService;
    }();

    AfterLoginService.ɵfac = function AfterLoginService_Factory(t) {
      return new (t || AfterLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_token_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AfterLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AfterLoginService,
      factory: AfterLoginService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AfterLoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _token_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/pages-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: PagesRoutingModule */

  /***/
  function srcAppPagesPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
      return PagesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../@theme/components */
    "./src/app/@theme/components/index.ts");
    /* harmony import */


    var _admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-service/guard/after-login.service */
    "./src/app/pages/admin-service/guard/after-login.service.ts");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");

    var routes = [{
      path: '',
      component: _pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"],
      children: [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | dashboard-dashboard-module */
          "dashboard-dashboard-module").then(__webpack_require__.bind(null,
          /*! ./dashboard/dashboard.module */
          "./src/app/pages/dashboard/dashboard.module.ts")).then(function (m) {
            return m.DashboardModule;
          });
        },
        canActivate: [_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_3__["AfterLoginService"]]
      }, {
        path: 'products',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | products-products-module */
          [__webpack_require__.e("default~cars-cars-module~categories-categories-module~chats-chats-module~devices-devices-module~prod~36d02cfd"), __webpack_require__.e("products-products-module")]).then(__webpack_require__.bind(null,
          /*! ./products/products.module */
          "./src/app/pages/products/products.module.ts")).then(function (m) {
            return m.ProductsModule;
          });
        },
        canActivate: [_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_3__["AfterLoginService"]]
      }, {
        path: 'cars',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | cars-cars-module */
          [__webpack_require__.e("default~cars-cars-module~categories-categories-module~chats-chats-module~devices-devices-module~prod~36d02cfd"), __webpack_require__.e("cars-cars-module")]).then(__webpack_require__.bind(null,
          /*! ./cars/cars.module */
          "./src/app/pages/cars/cars.module.ts")).then(function (m) {
            return m.CarsModule;
          });
        },
        canActivate: [_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_3__["AfterLoginService"]]
      }, {
        path: 'devices',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | devices-devices-module */
          [__webpack_require__.e("default~cars-cars-module~categories-categories-module~chats-chats-module~devices-devices-module~prod~36d02cfd"), __webpack_require__.e("devices-devices-module")]).then(__webpack_require__.bind(null,
          /*! ./devices/devices.module */
          "./src/app/pages/devices/devices.module.ts")).then(function (m) {
            return m.DevicesModule;
          });
        },
        canActivate: [_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_3__["AfterLoginService"]]
      }, {
        path: 'real-estate',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | real-estate-real-estate-module */
          [__webpack_require__.e("default~cars-cars-module~categories-categories-module~chats-chats-module~devices-devices-module~prod~36d02cfd"), __webpack_require__.e("real-estate-real-estate-module")]).then(__webpack_require__.bind(null,
          /*! ./real-estate/real-estate.module */
          "./src/app/pages/real-estate/real-estate.module.ts")).then(function (m) {
            return m.RealEstateModule;
          });
        },
        canActivate: [_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_3__["AfterLoginService"]]
      }, {
        path: 'reports',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | reports-reports-module */
          [__webpack_require__.e("default~cars-cars-module~categories-categories-module~chats-chats-module~devices-devices-module~prod~36d02cfd"), __webpack_require__.e("reports-reports-module")]).then(__webpack_require__.bind(null,
          /*! ./reports/reports.module */
          "./src/app/pages/reports/reports.module.ts")).then(function (m) {
            return m.ReportsModule;
          });
        },
        canActivate: [_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_3__["AfterLoginService"]]
      }, {
        path: 'chats',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | chats-chats-module */
          [__webpack_require__.e("default~cars-cars-module~categories-categories-module~chats-chats-module~devices-devices-module~prod~36d02cfd"), __webpack_require__.e("chats-chats-module")]).then(__webpack_require__.bind(null,
          /*! ./chats/chats.module */
          "./src/app/pages/chats/chats.module.ts")).then(function (m) {
            return m.ChatsModule;
          });
        },
        canActivate: [_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_3__["AfterLoginService"]]
      }, {
        path: 'services',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | services-services-module */
          [__webpack_require__.e("default~cars-cars-module~categories-categories-module~chats-chats-module~devices-devices-module~prod~36d02cfd"), __webpack_require__.e("services-services-module")]).then(__webpack_require__.bind(null,
          /*! ./services/services.module */
          "./src/app/pages/services/services.module.ts")).then(function (m) {
            return m.ServicesModule;
          });
        },
        canActivate: [_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_3__["AfterLoginService"]]
      }, {
        path: 'categories',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | categories-categories-module */
          [__webpack_require__.e("default~cars-cars-module~categories-categories-module~chats-chats-module~devices-devices-module~prod~36d02cfd"), __webpack_require__.e("categories-categories-module")]).then(__webpack_require__.bind(null,
          /*! ./categories/categories.module */
          "./src/app/pages/categories/categories.module.ts")).then(function (m) {
            return m.CategoriesModule;
          });
        },
        canActivate: [_admin_service_guard_after_login_service__WEBPACK_IMPORTED_MODULE_3__["AfterLoginService"]]
      }, {
        path: '**',
        component: _theme_components__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
      }]
    }];

    var PagesRoutingModule = function PagesRoutingModule() {
      _classCallCheck(this, PagesRoutingModule);
    };

    PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PagesRoutingModule
    });
    PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PagesRoutingModule_Factory(t) {
        return new (t || PagesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages.component.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/pages.component.ts ***!
    \******************************************/

  /*! exports provided: PagesComponent */

  /***/
  function srcAppPagesPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
      return PagesComponent;
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


    var _sidebar_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sidebar-menu */
    "./src/app/sidebar-menu.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _theme_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../@theme/components/header/header.component */
    "./src/app/@theme/components/header/header.component.ts");
    /* harmony import */


    var _theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../@theme/components/sidebar/sidebar.component */
    "./src/app/@theme/components/sidebar/sidebar.component.ts");

    function PagesComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-header", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menus", ctx_r0.menu);
      }
    }

    function PagesComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-sidebar", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("menus", ctx_r1.menu);
      }
    }

    var PagesComponent = /*#__PURE__*/function () {
      function PagesComponent(document, render) {
        _classCallCheck(this, PagesComponent);

        this.document = document;
        this.render = render;
        this.menu = _sidebar_menu__WEBPACK_IMPORTED_MODULE_2__["SIDEBAR_MENU_ITEM"];
        this.isMobile = false;
        this.showLoadingIndicator = true; // create variable
      }

      _createClass(PagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.onResize();
        }
      }, {
        key: "onResize",
        value: function onResize() {
          var screenWidth = window.innerWidth;

          if (screenWidth < 768) {
            this.isMobile = true;
            this.render.removeClass(this.document.getElementById('body_div'), 'col-8');
            this.render.addClass(this.document.getElementById('body_div'), 'col-12');

            if (screenWidth < 576) {
              this.render.removeClass(this.document.getElementById('parent_body_div'), 'row');
              this.render.addClass(this.document.getElementById('parent_body_div'), 'pb-5');
              this.render.removeClass(this.document.getElementById('body_div'), 'pr-0');
              this.render.removeClass(this.document.getElementById('body_div'), 'col-12');
            }
          } else {
            this.isMobile = false;
          }
        }
      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {// this.render.addClass(this.document.getElementById('sidebar_div'), 'd-none');
          // this.render.removeClass(this.document.getElementById('body_div'), 'col-8');
          // this.render.addClass(this.document.getElementById('body_div'), 'col-12');
        }
      }]);

      return PagesComponent;
    }();

    PagesComponent.ɵfac = function PagesComponent_Factory(t) {
      return new (t || PagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
    };

    PagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PagesComponent,
      selectors: [["app-pages"]],
      decls: 5,
      vars: 2,
      consts: [["id", "mobile_header", "class", "d-md-none", 4, "ngIf"], ["id", "parent_body_div", 1, "row", "w-100"], ["id", "sidebar_div", "class", "col-4 col-xl-3 px-0 d-none d-md-block", 4, "ngIf"], ["id", "body_div", 1, "col-8", "col-xl-9", "pr-0"], ["id", "mobile_header", 1, "d-md-none"], [3, "menus"], ["id", "sidebar_div", 1, "col-4", "col-xl-3", "px-0", "d-none", "d-md-block"]],
      template: function PagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PagesComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PagesComponent_div_2_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isMobile);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _theme_components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _theme_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-pages',
          // template: `
          //   <router-outlet></router-outlet>`
          template: "\n  <div *ngIf=\"isMobile\" id=\"mobile_header\" class=\"d-md-none\">\n    <app-header [menus]=\"menu\"></app-header>\n  </div>\n  <div id=\"parent_body_div\" class=\"row w-100\">\n    <div *ngIf=\"!isMobile\" id=\"sidebar_div\" class=\"col-4 col-xl-3 px-0 d-none d-md-block\">\n      <app-sidebar [menus]=\"menu\"></app-sidebar>\n    </div>\n    <div id=\"body_div\" class=\"col-8 col-xl-9 pr-0\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>"
        }]
      }], function () {
        return [{
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/pages.module.ts ***!
    \***************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages-routing.module */
    "./src/app/pages/pages-routing.module.ts");
    /* harmony import */


    var _pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages.component */
    "./src/app/pages/pages.component.ts");

    var PagesModule = function PagesModule() {
      _classCallCheck(this, PagesModule);
    };

    PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PagesModule
    });
    PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PagesModule_Factory(t) {
        return new (t || PagesModule)();
      },
      imports: [[_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, {
        declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"]],
        imports: [_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"]],
          imports: [_pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-pages-module-es5.js.map
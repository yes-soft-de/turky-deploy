function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./src/app/pages/AdminConfig.ts":
  /*!**************************************!*\
    !*** ./src/app/pages/AdminConfig.ts ***!
    \**************************************/

  /*! exports provided: AdminConfig */

  /***/
  function srcAppPagesAdminConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminConfig", function () {
      return AdminConfig;
    });
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");

    var AdminConfig = function AdminConfig() {
      _classCallCheck(this, AdminConfig);
    }; // An Example | Delete The Content When Started
    // source api


    AdminConfig.sourceAPI = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].sourceApi; // public static sourceAPI                   = 'http://localhost:8000/';
    // All Application Api

    AdminConfig.loginAPI = AdminConfig.sourceAPI + 'login_check';
    AdminConfig.userAPI = AdminConfig.sourceAPI + 'user'; // Products

    AdminConfig.productsAPI = AdminConfig.sourceAPI + 'allproperties'; // Real Estate

    AdminConfig.allRealEstateAPI = AdminConfig.sourceAPI + 'allRealEstate';
    AdminConfig.getRealEstateAPI = AdminConfig.sourceAPI + 'realEstate';
    AdminConfig.deleteRealEstateAPI = AdminConfig.sourceAPI + 'realEstate'; // Cars

    AdminConfig.allCarsAPI = AdminConfig.sourceAPI + 'allCars';
    AdminConfig.getCarAPI = AdminConfig.sourceAPI + 'car';
    AdminConfig.deleteCarAPI = AdminConfig.sourceAPI + 'cars'; // Devices

    AdminConfig.allDevicesAPI = AdminConfig.sourceAPI + 'allDevices';
    AdminConfig.getDeviceAPI = AdminConfig.sourceAPI + 'device';
    AdminConfig.deleteDeviceAPI = AdminConfig.sourceAPI + 'devices'; // Reports

    AdminConfig.reportsAPI = AdminConfig.sourceAPI + 'reports';
    AdminConfig.reportAPI = AdminConfig.sourceAPI + 'report';
    AdminConfig.deleteReportAPI = AdminConfig.sourceAPI + 'deletereport'; // Chats

    AdminConfig.chatsAPI = AdminConfig.sourceAPI + 'getallchat'; // Statistics

    AdminConfig.statisticsAPI = AdminConfig.sourceAPI + 'statistics'; // Services

    AdminConfig.allServicesAPI = AdminConfig.sourceAPI + 'allservices';
    AdminConfig.servicesAPI = AdminConfig.sourceAPI + 'services'; // Categories

    AdminConfig.categoriesAPI = AdminConfig.sourceAPI + 'categories';
    AdminConfig.categoryAPI = AdminConfig.sourceAPI + 'category'; // Upload

    AdminConfig.generalUploadAPI = AdminConfig.sourceAPI + 'uploadfile';
    /***/
  },

  /***/
  "./src/app/pages/dashboard/dashboard-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppPagesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
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


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }, {
      path: 'dashboard',
      redirectTo: '',
      pathMatch: 'full'
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardRoutingModule
    });
    DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardRoutingModule_Factory(t) {
        return new (t || DashboardRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
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
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var src_app_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/@theme/components */
    "./src/app/@theme/components/index.ts");
    /* harmony import */


    var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/dashboard.service */
    "./src/app/pages/dashboard/services/dashboard.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../@theme/components/footer/footer.component */
    "./src/app/@theme/components/footer/footer.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function DashboardComponent_div_0_div_126_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var car_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", car_r7 == null ? null : car_r7.carType, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("( ", car_r7 == null ? null : car_r7.description == null ? null : car_r7.description.slice(0, 10), "... )");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/cars/", car_r7 == null ? null : car_r7.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "view"));
      }
    }

    function DashboardComponent_div_0_div_126_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_126_ng_container_1_ng_container_1_Template, 8, 6, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r8 = ctx.index;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r8 < ctx_r6.latestCarsNumber);
      }
    }

    function DashboardComponent_div_0_div_126_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_126_ng_container_1_Template, 2, 1, "ng-container", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.allCars);
      }
    }

    function DashboardComponent_div_0_div_127_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "car-not-found"), " ");
      }
    }

    function DashboardComponent_div_0_div_135_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var device_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", device_r12 == null ? null : device_r12.brand.slice(0, 20), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/devices/", device_r12 == null ? null : device_r12.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "view"));
      }
    }

    function DashboardComponent_div_0_div_135_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_135_ng_container_1_ng_container_1_Template, 6, 5, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var i_r13 = ctx.index;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r13 < ctx_r11.latestDevicesNumber);
      }
    }

    function DashboardComponent_div_0_div_135_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_135_ng_container_1_Template, 2, 1, "ng-container", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.allDevices);
      }
    }

    function DashboardComponent_div_0_div_136_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "device-not-found"), " ");
      }
    }

    function DashboardComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h6");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](63, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](76, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](80, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](85, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](100, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](105, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](115, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "i", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](124, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](125, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, DashboardComponent_div_0_div_126_Template, 2, 1, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, DashboardComponent_div_0_div_127_Template, 4, 3, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](133, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](134, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](135, DashboardComponent_div_0_div_135_Template, 2, 1, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, DashboardComponent_div_0_div_136_Template, 4, 3, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 37, "dashboard-page"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 39, "total-cars"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.cars ? ctx_r0.allStatistics.cars : 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 41, "total-devices"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.devices ? ctx_r0.allStatistics.devices : 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 43, "total-real-estate"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.realEstates ? ctx_r0.allStatistics.realEstates : 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 45, "total-reports"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r0.allReports == null ? null : ctx_r0.allReports.length) ? ctx_r0.allReports == null ? null : ctx_r0.allReports.length : 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 47, "total-chats"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r0.allStatistics == null ? null : ctx_r0.allStatistics.chats == null ? null : ctx_r0.allStatistics.chats.total) ? ctx_r0.allStatistics == null ? null : ctx_r0.allStatistics.chats == null ? null : ctx_r0.allStatistics.chats.total : 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](63, 49, "total-services"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r0.allStatistics == null ? null : ctx_r0.allStatistics.services) ? ctx_r0.allStatistics == null ? null : ctx_r0.allStatistics.services : 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](76, 51, "chats-number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](80, 53, "chats-with-lawyer"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.chats.chatsWithLawyer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](85, 55, "chats-with-users"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.chats.chatsWithUsers);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](96, 57, "reactions"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](100, 59, "car-reaction-number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.reactions.carReactions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](105, 61, "device-reaction-number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.reactions.deviceReactions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](110, 63, "real-estate-reaction-number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.reactions.realEstateReactions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](115, 65, "services-number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics == null ? null : ctx_r0.allStatistics.reactions == null ? null : ctx_r0.allStatistics.reactions.services);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](124, 67, "latest"), " ", ctx_r0.latestCarsNumber, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](125, 69, "cars"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.allCars == null ? null : ctx_r0.allCars.length) != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.allCars == null ? null : ctx_r0.allCars.length) == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](133, 71, "latest"), " ", ctx_r0.latestDevicesNumber, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](134, 73, "devices"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.allDevices == null ? null : ctx_r0.allDevices.length) != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.allDevices == null ? null : ctx_r0.allDevices.length) == 0);
      }
    }

    function DashboardComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(dashboardService) {
        _classCallCheck(this, DashboardComponent);

        this.dashboardService = dashboardService;
        this.latestCarsNumber = 5;
        this.latestDevicesNumber = 5;
        this.latestRealEstateNumber = 5;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var allCars = this.dashboardService.getAllCars();
          var allDevices = this.dashboardService.getDevices();
          var allReports = this.dashboardService.getReports();
          var allStatistics = this.dashboardService.allStatistics();
          var mergeRequests = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([allCars, allDevices, allReports, allStatistics]);
          mergeRequests.subscribe(function (response) {
            if (response) {
              console.log('response : ', response);
              _this.allCars = response[0].Data;
              _this.allDevices = response[1].Data;
              _this.allReports = response[2].Data;
              _this.allStatistics = response[3].Data[0];
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// this.combinedObservable.unsubscribe();
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_theme_components__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]])],
      decls: 3,
      vars: 2,
      consts: [["class", "w-100 mb-4", 4, "ngIf"], [4, "ngIf"], [1, "w-100", "mb-4"], [1, "container"], [1, "home-stat"], [1, "my-4", "text-center"], [1, "row"], [1, "col-md-6", "col-lg-4"], [1, "stat", "mb-3", "st_categories"], [1, "fa", "fa-car", "fa-fw", "fa-5x"], ["routerLink", "/cars"], [1, "stat", "mb-3", "st_animes"], [1, "fa", "fa-tv", "fa-fw", "fa-5x"], ["routerLink", "/devices"], [1, "stat", "mb-3", "st_episode_coming_soon"], [1, "fa", "fa-building", "fa-fw", "fa-5x"], ["routerLink", "/real-estate"], [1, "col-md-6", "col-lg-4", "mx-auto"], [1, "stat", "mb-3", "st_clients"], [1, "fa", "fa-files-o", "fa-fw", "fa-5x"], ["routerLink", "/reports"], [1, "stat", "mb-3", "st_pending"], [1, "fa", "fa-comments", "fa-fw", "fa-5x"], ["routerLink", "/chats"], [1, "stat", "mb-3", "st_services"], [1, "fa", "fa-audio-description", "fa-fw", "fa-5x"], ["routerLink", "/services"], [1, "latest", "mt-5"], [1, "col-12", "col-md-6", "mb-3"], [1, "card", "bg-gradient-x-dark-blue", "text-white", "border-0"], [1, "card-content"], [1, "card-body"], [1, "weather-details", "text-center"], [1, "block", "white", "darken-1"], [1, "card-footer", "bg-gradient-x-dark-blue", "border-0"], [1, "col-6", "text-center", "display-table-cell", "white", 3, "title"], [1, "fa", "fa-graduation-cap", "fa-fw", "mx-1"], [1, "fa", "fa-users", "fa-fw", "mx-1"], [1, "card", "bg-gradient-x-info", "text-white", "border-0"], [1, "card-footer", "bg-gradient-x-info", "border-0"], [1, "col-3", "text-center", "display-table-cell", "white", 3, "title"], [1, "fa", "fa-car", "fa-fw", "mx-1"], [1, "fa", "fa-tv", "fa-fw", "mx-1"], [1, "fa", "fa-building", "fa-fw", "mx-1"], [1, "fa", "fa-cogs", "fa-fw", "mx-1"], [1, "col-12", "col-md-6"], [1, "late", "mb-3"], [1, "card"], [1, "card-header"], ["class", "card-body", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "late_info"], [1, "btn", "btn-success", "btn-sm", "py-0", "float-right", 3, "routerLink"], [1, "lds-ring"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 137, 75, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 6, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allStatistics);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allStatistics == null);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
      styles: ["@media (min-width: 768px) and (max-width: 991px) {\n  .home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (max-width: 575px) {\n  .home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  background: cadetblue;\n  padding: 15px;\n  margin-bottom: 5px;\n  text-align: center;\n  border-radius: 10px;\n  color: #fff;\n  border: 1px solid #ccc;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s ease-in-out;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 600;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]:hover {\n  -o-box-shadow: 3px 3px 10px #888;\n  box-shadow: 3px 3px 10px #888;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: right;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 18px;\n}\n@media (min-width: 768px) and (max-width: 1199px) {\n  .home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 4em;\n    transform: translateY(25%);\n  }\n}\n.home-stat[_ngcontent-%COMP%]   .st_member[_ngcontent-%COMP%] {\n  background: #3498db;\n}\n.home-stat[_ngcontent-%COMP%]   .st_pending[_ngcontent-%COMP%] {\n  background: #c0392b;\n}\n.home-stat[_ngcontent-%COMP%]   .st_item[_ngcontent-%COMP%] {\n  background: #d35400;\n}\n.home-stat[_ngcontent-%COMP%]   .st_comment[_ngcontent-%COMP%] {\n  background: #8e44ad;\n}\n.home-stat[_ngcontent-%COMP%]   .st_interactions[_ngcontent-%COMP%] {\n  background: #218c74;\n}\n.home-stat[_ngcontent-%COMP%]   .st_clients[_ngcontent-%COMP%] {\n  background: #40407a;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #999;\n  cursor: pointer;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding: 7px;\n  overflow: auto;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eee;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  padding: 6px 10px;\n  color: #329de5;\n  font-size: 16px;\n  width: 140px;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: right;\n  width: calc(100% - 140px);\n  background: #eee;\n  padding: 10px;\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 10px;\n  left: -20px;\n  border-style: solid;\n  border-color: transparent #eee transparent transparent;\n  border-width: 10px;\n}\n\n\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  background: cadetblue;\n  padding: 15px;\n  margin-bottom: 5px;\n  text-align: center;\n  border-radius: 10px;\n  color: #fff;\n  border: 1px solid #ccc;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s ease-in-out;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 600;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]:hover {\n  -o-box-shadow: 3px 3px 10px #888;\n  box-shadow: 3px 3px 10px #888;\n}\n.home-stat[_ngcontent-%COMP%]   .st_categories[_ngcontent-%COMP%] {\n  background: #3498db;\n}\n.home-stat[_ngcontent-%COMP%]   .st_pending[_ngcontent-%COMP%] {\n  background: #008385;\n}\n.home-stat[_ngcontent-%COMP%]   .st_item[_ngcontent-%COMP%] {\n  background: #d35400;\n}\n.home-stat[_ngcontent-%COMP%]   .st_animes[_ngcontent-%COMP%] {\n  background: #8e44ad;\n}\n.home-stat[_ngcontent-%COMP%]   .st_episode_coming_soon[_ngcontent-%COMP%] {\n  background: #218c74;\n}\n.home-stat[_ngcontent-%COMP%]   .st_clients[_ngcontent-%COMP%] {\n  background: #40407a;\n}\n.home-stat[_ngcontent-%COMP%]   .st_services[_ngcontent-%COMP%] {\n  background: #2e6d97;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: right;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 18px;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #999;\n  cursor: pointer;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding: 7px;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eee;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  padding: 6px 10px;\n  color: #329de5;\n  font-size: 16px;\n  width: 140px;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: right;\n  width: calc(100% - 140px);\n  background: #eee;\n  padding: 10px;\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 10px;\n  left: -20px;\n  border-style: solid;\n  border-color: transparent #eee transparent transparent;\n  border-width: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0Q6XFxTZXJ2ZXJzXFxkYXNoYm9hcmRzXFx0dXJreS1kZXBsb3kvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBQTtBQU1NO0VBSkY7SUFLSSxpQkFBQTtFQ0hOO0FBQ0Y7QURJTTtFQVBGO0lBUUksZUFBQTtFQ0ROO0FBQ0Y7QURJTTtFQVpGO0lBYUksaUJBQUE7RUNETjtBQUNGO0FES0k7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBSUEsZ0NBQUE7QUNITjtBRElNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDRlI7QURJTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FESU07RUFHRSxnQ0FBQTtFQUNBLDZCQUFBO0FDRlI7QURJTTtFQUNFLFlBQUE7QUNGUjtBRElNO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDRlI7QURJTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNGUjtBREdRO0VBSkY7SUFLSSxjQUFBO0lBQ0EsMEJBQUE7RUNBUjtBQUNGO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FETUk7RUFDRSxrQkFBQTtBQ0hOO0FESU07RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FES0k7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDSE47QURJTTtFQUNFLGdCQUFBO0FDRlI7QURJTTtFQUNFLG1CQUFBO0FDRlI7QURLSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNITjtBRElNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FESU07RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FER1E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0FDRFY7QURNRSwrQkFBQTtBQUNBLGlDQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBSUEsZ0NBQUE7QUNISjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDRko7QURJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0RKO0FER0U7RUFHRSxnQ0FBQTtFQUNBLDZCQUFBO0FDQUo7QURFRTtFQUNFLG1CQUFBO0FDQ0o7QURDRTtFQUNFLG1CQUFBO0FDRUo7QURBRTtFQUNFLG1CQUFBO0FDR0o7QURERTtFQUNFLG1CQUFBO0FDSUo7QURGRTtFQUNFLG1CQUFBO0FDS0o7QURIRTtFQUNFLG1CQUFBO0FDTUo7QURKRTtFQUNFLG1CQUFBO0FDT0o7QURKRTtFQUNFLFlBQUE7QUNPSjtBRExFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDUUo7QURORTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNTSjtBRFBFO0VBQ0Usa0JBQUE7QUNVSjtBRFJFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNXSjtBRFRFO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FDWUo7QURWRTtFQUNFLGdCQUFBO0FDYUo7QURYRTtFQUNFLG1CQUFBO0FDY0o7QURaRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNlSjtBRFpFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ2VKO0FEWkU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ2VKO0FEWkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0FDZUo7QURiRSwrQkFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAtLS0gU3RhcnQgRGFzaGJvYXJkIFBhZ2UgLS0tICovXHJcbi5ob21lLXN0YXQge1xyXG4gICAgaDEge1xyXG4gICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogJzk5MnB4JykgYW5kIChtYXgtd2lkdGg6ICcxMTk5cHgnKSB7XHJcbiAgICAgIC8vICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgIC8vIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICc3NjhweCcpIGFuZCAobWF4LXdpZHRoOiAnOTkxcHgnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICc1NzZweCcpIGFuZCAobWF4LXdpZHRoOiAnNzY3cHgnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAvLyBjb2xvcjogIzIxYTViOCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAnNTc1cHgnKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIGNvbG9yOiAjMjFhNWI4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdGF0IHtcclxuICAgICAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgLW1vei10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIC1vLXRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICBoNiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgfVxyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6NTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwXHJcbiAgICAgIH1cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OjNweCAzcHggMTBweCAjODg4O1xyXG4gICAgICAgIC1tb3otYm94LXNoYWRvdzozcHggM3B4IDEwcHggIzg4ODtcclxuICAgICAgICAtby1ib3gtc2hhZG93OjNweCAzcHggMTBweCAjODg4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6M3B4IDNweCAxMHB4ICM4ODg7XHJcbiAgICAgIH1cclxuICAgICAgZGl2IHtcclxuICAgICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgfVxyXG4gICAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICB9XHJcbiAgICAgIGkge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OjEwcHg7XHJcbiAgICAgICAgdG9wOjE4cHg7XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICc3NjhweCcpIGFuZCAobWF4LXdpZHRoOiAnMTE5OXB4Jykge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjUlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdF9tZW1iZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gICAgfVxyXG4gICAgLnN0X3BlbmRpbmcge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjYzAzOTJiXHJcbiAgICB9XHJcbiAgICAuc3RfaXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNkMzU0MDBcclxuICAgIH1cclxuICAgIC5zdF9jb21tZW50IHtcclxuICAgICAgYmFja2dyb3VuZDogIzhlNDRhZFxyXG4gICAgfVxyXG4gICAgLnN0X2ludGVyYWN0aW9ucyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMyMThjNzRcclxuICAgIH1cclxuICAgIC5zdF9jbGllbnRzIHtcclxuICAgICAgYmFja2dyb3VuZDogIzQwNDA3YVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxhdGUge1xyXG4gICAgLmNhcmQtaGVhZGVyIHtcclxuICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGF0ZV9pbmZvIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztcclxuICAgICAgcGFkZGluZzo3cHg7XHJcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlXHJcbiAgICAgIH1cclxuICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lbWJlcl9jb21tZW50IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgICAgICBjb2xvcjogIzMyOWRlNTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDE0MHB4XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNDBweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbGVmdDogLTIwcHg7XHJcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZWVlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKiAtLS0gRW5kIERhc2hib2FyZCBQYWdlIC0tLSAqL1xyXG4gIC8qIC0tLSBTdGFydCBEYXNoYm9hcmQgUGFnZSAtLS0gKi9cclxuICAuaG9tZS1zdGF0IC5zdGF0IHtcclxuICAgIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RhdCBoNiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0YXQgc3BhbiB7XHJcbiAgICBmb250LXNpemU6NTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDBcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RhdDpob3ZlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6M3B4IDNweCAxMHB4ICM4ODg7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6M3B4IDNweCAxMHB4ICM4ODg7XHJcbiAgICAtby1ib3gtc2hhZG93OjNweCAzcHggMTBweCAjODg4O1xyXG4gICAgYm94LXNoYWRvdzozcHggM3B4IDEwcHggIzg4ODtcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RfY2F0ZWdvcmllcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gIH1cclxuICAuaG9tZS1zdGF0IC5zdF9wZW5kaW5nIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDgzODVcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RfaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDM1NDAwXHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0X2FuaW1lcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGU0NGFkXHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0X2VwaXNvZGVfY29taW5nX3Nvb24ge1xyXG4gICAgYmFja2dyb3VuZDogIzIxOGM3NFxyXG4gIH1cclxuICAuaG9tZS1zdGF0IC5zdF9jbGllbnRzIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MDQwN2FcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3Rfc2VydmljZXMge1xyXG4gICAgYmFja2dyb3VuZDogIzJlNmQ5N1xyXG4gIH1cclxuICBcclxuICAuaG9tZS1zdGF0IC5zdGF0IGRpdiB7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RhdCBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RhdCBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MTBweDtcclxuICAgIHRvcDoxOHB4O1xyXG4gIH1cclxuICAubGF0ZSAuY2FyZC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5sYXRlIC5jYXJkLWhlYWRlciBzcGFuIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgfVxyXG4gIC5sYXRlIC5sYXRlX2luZm8ge1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6N3B4O1xyXG4gIH1cclxuICAubGF0ZSAubGF0ZV9pbmZvOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZWVcclxuICB9XHJcbiAgLmxhdGUgLmxhdGVfaW5mbzpsYXN0LW9mLXR5cGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gIH1cclxuICAubGF0ZSAubWVtYmVyX2NvbW1lbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG4gIH1cclxuXHJcbiAgLmxhdGUgLm1lbWJlcl9jb21tZW50IHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgY29sb3I6ICMzMjlkZTU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aWR0aDogMTQwcHhcclxuICB9XHJcblxyXG4gIC5sYXRlIC5tZW1iZXJfY29tbWVudCBwIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNDBweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gIH1cclxuXHJcbiAgLmxhdGUgLm1lbWJlcl9jb21tZW50IHA6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAtMjBweDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNlZWUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG4gIC8qIC0tLSBFbmQgRGFzaGJvYXJkIFBhZ2UgLS0tICovXHJcbiIsIi8qIC0tLSBTdGFydCBEYXNoYm9hcmQgUGFnZSAtLS0gKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5ob21lLXN0YXQgaDEge1xuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaG9tZS1zdGF0IGgxIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAuaG9tZS1zdGF0IGgxIHtcbiAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgfVxufVxuLmhvbWUtc3RhdCAuc3RhdCB7XG4gIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5ob21lLXN0YXQgLnN0YXQgaDYge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uaG9tZS1zdGF0IC5zdGF0IHNwYW4ge1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaG9tZS1zdGF0IC5zdGF0OmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzg4ODtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzg4ODtcbiAgLW8tYm94LXNoYWRvdzogM3B4IDNweCAxMHB4ICM4ODg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjODg4O1xufVxuLmhvbWUtc3RhdCAuc3RhdCBkaXYge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uaG9tZS1zdGF0IC5zdGF0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmhvbWUtc3RhdCAuc3RhdCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDE4cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLmhvbWUtc3RhdCAuc3RhdCBpIHtcbiAgICBmb250LXNpemU6IDRlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjUlKTtcbiAgfVxufVxuLmhvbWUtc3RhdCAuc3RfbWVtYmVyIHtcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcbn1cbi5ob21lLXN0YXQgLnN0X3BlbmRpbmcge1xuICBiYWNrZ3JvdW5kOiAjYzAzOTJiO1xufVxuLmhvbWUtc3RhdCAuc3RfaXRlbSB7XG4gIGJhY2tncm91bmQ6ICNkMzU0MDA7XG59XG4uaG9tZS1zdGF0IC5zdF9jb21tZW50IHtcbiAgYmFja2dyb3VuZDogIzhlNDRhZDtcbn1cbi5ob21lLXN0YXQgLnN0X2ludGVyYWN0aW9ucyB7XG4gIGJhY2tncm91bmQ6ICMyMThjNzQ7XG59XG4uaG9tZS1zdGF0IC5zdF9jbGllbnRzIHtcbiAgYmFja2dyb3VuZDogIzQwNDA3YTtcbn1cblxuLmxhdGUgLmNhcmQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxhdGUgLmNhcmQtaGVhZGVyIHNwYW4ge1xuICBjb2xvcjogIzk5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxhdGUgLmxhdGVfaW5mbyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA3cHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuLmxhdGUgLmxhdGVfaW5mbzpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG4ubGF0ZSAubGF0ZV9pbmZvOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4ubGF0ZSAubWVtYmVyX2NvbW1lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubGF0ZSAubWVtYmVyX2NvbW1lbnQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGNvbG9yOiAjMzI5ZGU1O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxNDBweDtcbn1cbi5sYXRlIC5tZW1iZXJfY29tbWVudCBwIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTQwcHgpO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGF0ZSAubWVtYmVyX2NvbW1lbnQgcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogLTIwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2VlZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xufVxuXG4vKiAtLS0gRW5kIERhc2hib2FyZCBQYWdlIC0tLSAqL1xuLyogLS0tIFN0YXJ0IERhc2hib2FyZCBQYWdlIC0tLSAqL1xuLmhvbWUtc3RhdCAuc3RhdCB7XG4gIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmhvbWUtc3RhdCAuc3RhdCBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhvbWUtc3RhdCAuc3RhdCBzcGFuIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaG9tZS1zdGF0IC5zdGF0OmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzg4ODtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzg4ODtcbiAgLW8tYm94LXNoYWRvdzogM3B4IDNweCAxMHB4ICM4ODg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjODg4O1xufVxuXG4uaG9tZS1zdGF0IC5zdF9jYXRlZ29yaWVzIHtcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcbn1cblxuLmhvbWUtc3RhdCAuc3RfcGVuZGluZyB7XG4gIGJhY2tncm91bmQ6ICMwMDgzODU7XG59XG5cbi5ob21lLXN0YXQgLnN0X2l0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjZDM1NDAwO1xufVxuXG4uaG9tZS1zdGF0IC5zdF9hbmltZXMge1xuICBiYWNrZ3JvdW5kOiAjOGU0NGFkO1xufVxuXG4uaG9tZS1zdGF0IC5zdF9lcGlzb2RlX2NvbWluZ19zb29uIHtcbiAgYmFja2dyb3VuZDogIzIxOGM3NDtcbn1cblxuLmhvbWUtc3RhdCAuc3RfY2xpZW50cyB7XG4gIGJhY2tncm91bmQ6ICM0MDQwN2E7XG59XG5cbi5ob21lLXN0YXQgLnN0X3NlcnZpY2VzIHtcbiAgYmFja2dyb3VuZDogIzJlNmQ5Nztcbn1cblxuLmhvbWUtc3RhdCAuc3RhdCBkaXYge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5ob21lLXN0YXQgLnN0YXQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5ob21lLXN0YXQgLnN0YXQgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAxOHB4O1xufVxuXG4ubGF0ZSAuY2FyZC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sYXRlIC5jYXJkLWhlYWRlciBzcGFuIHtcbiAgY29sb3I6ICM5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxhdGUgLmxhdGVfaW5mbyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA3cHg7XG59XG5cbi5sYXRlIC5sYXRlX2luZm86bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuXG4ubGF0ZSAubGF0ZV9pbmZvOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5sYXRlIC5tZW1iZXJfY29tbWVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxhdGUgLm1lbWJlcl9jb21tZW50IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBjb2xvcjogIzMyOWRlNTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTQwcHg7XG59XG5cbi5sYXRlIC5tZW1iZXJfY29tbWVudCBwIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTQwcHgpO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sYXRlIC5tZW1iZXJfY29tbWVudCBwOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAtMjBweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZWVlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICBib3JkZXItd2lkdGg6IDEwcHg7XG59XG5cbi8qIC0tLSBFbmQgRGFzaGJvYXJkIFBhZ2UgLS0tICovIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss'],
          providers: [src_app_theme_components__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]]
        }]
      }], function () {
        return [{
          type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
    \*****************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppPagesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/pages/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DashboardModule_Factory(t) {
        return new (t || DashboardModule)();
      },
      imports: [[src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
        imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
          imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/services/dashboard.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/dashboard/services/dashboard.service.ts ***!
    \***************************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppPagesDashboardServicesDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
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


    var _AdminConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../AdminConfig */
    "./src/app/pages/AdminConfig.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../admin-service/token/token.service */
    "./src/app/pages/admin-service/token/token.service.ts");

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(httpClient, tokenService) {
        _classCallCheck(this, DashboardService);

        this.httpClient = httpClient;
        this.tokenService = tokenService;
      }

      _createClass(DashboardService, [{
        key: "getDevices",
        value: // all Devices
        function getDevices() {
          return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].allDevicesAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(DashboardService.errorHandler));
        } // all Cars

      }, {
        key: "getAllCars",
        value: function getAllCars() {
          return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].allCarsAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(DashboardService.errorHandler));
        }
      }, {
        key: "getReports",
        value: function getReports() {
          return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].reportsAPI, this.tokenService.httpOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(DashboardService.errorHandler));
        } // All Statistics

      }, {
        key: "allStatistics",
        value: function allStatistics() {
          return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].statisticsAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(DashboardService.errorHandler));
        }
      }], [{
        key: "errorHandler",
        value: function errorHandler(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error || 'Server Error');
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ɵfac = function DashboardService_Factory(t) {
      return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]));
    };

    DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DashboardService,
      factory: DashboardService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map
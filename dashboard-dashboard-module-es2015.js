(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/pages/AdminConfig.ts":
/*!**************************************!*\
  !*** ./src/app/pages/AdminConfig.ts ***!
  \**************************************/
/*! exports provided: AdminConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminConfig", function() { return AdminConfig; });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");

class AdminConfig {
}
// An Example | Delete The Content When Started
// source api
AdminConfig.sourceAPI = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__["environment"].sourceApi;
// public static sourceAPI                   = 'http://localhost:8000/';
// All Application Api
AdminConfig.loginAPI = AdminConfig.sourceAPI + 'login_check';
AdminConfig.userAPI = AdminConfig.sourceAPI + 'user';
// Products
AdminConfig.productsAPI = AdminConfig.sourceAPI + 'allproperties';
// Real Estate
AdminConfig.allRealEstateAPI = AdminConfig.sourceAPI + 'allRealEstate';
AdminConfig.getRealEstateAPI = AdminConfig.sourceAPI + 'realEstate';
AdminConfig.deleteRealEstateAPI = AdminConfig.sourceAPI + 'realEstate';
// Cars
AdminConfig.allCarsAPI = AdminConfig.sourceAPI + 'allCars';
AdminConfig.getCarAPI = AdminConfig.sourceAPI + 'car';
AdminConfig.deleteCarAPI = AdminConfig.sourceAPI + 'cars';
// Devices
AdminConfig.allDevicesAPI = AdminConfig.sourceAPI + 'allDevices';
AdminConfig.getDeviceAPI = AdminConfig.sourceAPI + 'device';
AdminConfig.deleteDeviceAPI = AdminConfig.sourceAPI + 'devices';
// Reports
AdminConfig.reportsAPI = AdminConfig.sourceAPI + 'reports';
AdminConfig.reportAPI = AdminConfig.sourceAPI + 'report';
AdminConfig.deleteReportAPI = AdminConfig.sourceAPI + 'deletereport';
// Chats
AdminConfig.chatsAPI = AdminConfig.sourceAPI + 'getallchat';
// Statistics
AdminConfig.statisticsAPI = AdminConfig.sourceAPI + 'statistics';
// Upload
AdminConfig.generalUploadAPI = AdminConfig.sourceAPI + 'uploadfile';


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");





const routes = [
    { path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'dashboard', redirectTo: '', pathMatch: 'full' }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_theme_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@theme/components */ "./src/app/@theme/components/index.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/dashboard.service */ "./src/app/pages/dashboard/services/dashboard.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../@theme/components/footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









function DashboardComponent_div_0_div_111_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const car_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", car_r7 == null ? null : car_r7.carType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("( ", car_r7 == null ? null : car_r7.description == null ? null : car_r7.description.slice(0, 20), "... )");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/cars/", car_r7 == null ? null : car_r7.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "view"));
} }
function DashboardComponent_div_0_div_111_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_111_ng_container_1_ng_container_1_Template, 8, 6, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r8 < ctx_r6.latestCarsNumber);
} }
function DashboardComponent_div_0_div_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_111_ng_container_1_Template, 2, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.allCars);
} }
function DashboardComponent_div_0_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "car-not-found"), " ");
} }
function DashboardComponent_div_0_div_120_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const device_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", device_r12 == null ? null : device_r12.brand.slice(0, 20), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/devices/", device_r12 == null ? null : device_r12.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, "view"));
} }
function DashboardComponent_div_0_div_120_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_120_ng_container_1_ng_container_1_Template, 6, 5, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r13 < ctx_r11.latestDevicesNumber);
} }
function DashboardComponent_div_0_div_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_0_div_120_ng_container_1_Template, 2, 1, "ng-container", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.allDevices);
} }
function DashboardComponent_div_0_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "device-not-found"), " ");
} }
function DashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](70, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](86, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](90, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](95, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](100, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](109, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](110, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, DashboardComponent_div_0_div_111_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](112, DashboardComponent_div_0_div_112_Template, 4, 3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](118, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](119, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, DashboardComponent_div_0_div_120_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, DashboardComponent_div_0_div_121_Template, 4, 3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 33, "dashboard-page"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 35, "total-cars"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.cars ? ctx_r0.allStatistics.cars : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 37, "total-devices"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.devices ? ctx_r0.allStatistics.devices : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 39, "total-real-estate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.realEstates ? ctx_r0.allStatistics.realEstates : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 41, "total-reports"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r0.allReports == null ? null : ctx_r0.allReports.length) ? ctx_r0.allReports == null ? null : ctx_r0.allReports.length : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 43, "total-chats"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r0.allStatistics == null ? null : ctx_r0.allStatistics.chats == null ? null : ctx_r0.allStatistics.chats.total) ? ctx_r0.allStatistics == null ? null : ctx_r0.allStatistics.chats == null ? null : ctx_r0.allStatistics.chats.total : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 45, "chats-number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](70, 47, "chats-with-lawyer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.chats.chatsWithLawyer);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 49, "chats-with-users"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.chats.chatsWithUsers);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](86, 51, "reactions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](90, 53, "car-reaction-number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.reactions.carReactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](95, 55, "device-reaction-number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.reactions.deviceReactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](100, 57, "real-estate-reaction-number"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.allStatistics.reactions.realEstateReactions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](109, 59, "latest"), " ", ctx_r0.latestCarsNumber, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](110, 61, "cars"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.allCars == null ? null : ctx_r0.allCars.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.allCars == null ? null : ctx_r0.allCars.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](118, 63, "latest"), " ", ctx_r0.latestDevicesNumber, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](119, 65, "devices"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.allDevices == null ? null : ctx_r0.allDevices.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.allDevices == null ? null : ctx_r0.allDevices.length) == 0);
} }
function DashboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.latestCarsNumber = 5;
        this.latestDevicesNumber = 5;
        this.latestRealEstateNumber = 5;
    }
    ngOnInit() {
        const allCars = this.dashboardService.getAllCars();
        const allDevices = this.dashboardService.getDevices();
        const allReports = this.dashboardService.getReports();
        const allStatistics = this.dashboardService.allStatistics();
        const mergeRequests = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([allCars, allDevices, allReports, allStatistics]);
        mergeRequests.subscribe(response => {
            if (response) {
                console.log('response : ', response);
                this.allCars = response[0].Data;
                this.allDevices = response[1].Data;
                this.allReports = response[2].Data;
                this.allStatistics = response[3].Data[0];
            }
        });
    }
    ngOnDestroy() {
        // this.combinedObservable.unsubscribe();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_theme_components__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]])], decls: 3, vars: 2, consts: [["class", "w-100 mb-4", 4, "ngIf"], [4, "ngIf"], [1, "w-100", "mb-4"], [1, "container"], [1, "home-stat"], [1, "my-4", "text-center"], [1, "row"], [1, "col-md-6", "col-lg-4"], [1, "stat", "mb-3", "st_categories"], [1, "fa", "fa-car", "fa-fw", "fa-5x"], ["routerLink", "/cars"], [1, "stat", "mb-3", "st_animes"], [1, "fa", "fa-tv", "fa-fw", "fa-5x"], ["routerLink", "/devices"], [1, "stat", "mb-3", "st_episode_coming_soon"], [1, "fa", "fa-building", "fa-fw", "fa-5x"], ["routerLink", "/real-estate"], [1, "col-md-6", "col-lg-4", "mx-auto"], [1, "stat", "mb-3", "st_clients"], [1, "fa", "fa-files-o", "fa-fw", "fa-5x"], ["routerLink", "/reports"], [1, "stat", "mb-3", "st_pending"], [1, "fa", "fa-comments", "fa-fw", "fa-5x"], ["routerLink", "/chats"], [1, "latest", "mt-5"], [1, "col-12", "col-md-6", "mb-3"], [1, "card", "bg-gradient-x-dark-blue", "text-white", "border-0"], [1, "card-content"], [1, "card-body"], [1, "weather-details", "text-center"], [1, "block", "white", "darken-1"], [1, "card-footer", "bg-gradient-x-dark-blue", "border-0"], [1, "col-6", "text-center", "display-table-cell", "white", 3, "title"], [1, "fa", "fa-graduation-cap", "fa-fw", "mx-1"], [1, "fa", "fa-users", "fa-fw", "mx-1"], [1, "card", "bg-gradient-x-info", "text-white", "border-0"], [1, "card-footer", "bg-gradient-x-info", "border-0"], [1, "col-4", "text-center", "display-table-cell", "white", 3, "title"], [1, "fa", "fa-car", "fa-fw", "mx-1"], [1, "fa", "fa-tv", "fa-fw", "mx-1"], [1, "fa", "fa-building", "fa-fw", "mx-1"], [1, "col-12", "col-md-6"], [1, "late", "mb-3"], [1, "card"], [1, "card-header"], ["class", "card-body", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "late_info"], [1, "btn", "btn-success", "btn-sm", "py-0", "float-right", 3, "routerLink"], [1, "lds-ring"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardComponent_div_0_Template, 122, 67, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 6, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allStatistics);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allStatistics == null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: ["@media (min-width: 768px) and (max-width: 991px) {\n  .home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (max-width: 575px) {\n  .home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  background: cadetblue;\n  padding: 15px;\n  margin-bottom: 5px;\n  text-align: center;\n  border-radius: 10px;\n  color: #fff;\n  border: 1px solid #ccc;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s ease-in-out;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 600;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]:hover {\n  -o-box-shadow: 3px 3px 10px #888;\n  box-shadow: 3px 3px 10px #888;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: right;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 18px;\n}\n@media (min-width: 768px) and (max-width: 1199px) {\n  .home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 4em;\n    transform: translateY(25%);\n  }\n}\n.home-stat[_ngcontent-%COMP%]   .st_member[_ngcontent-%COMP%] {\n  background: #3498db;\n}\n.home-stat[_ngcontent-%COMP%]   .st_pending[_ngcontent-%COMP%] {\n  background: #c0392b;\n}\n.home-stat[_ngcontent-%COMP%]   .st_item[_ngcontent-%COMP%] {\n  background: #d35400;\n}\n.home-stat[_ngcontent-%COMP%]   .st_comment[_ngcontent-%COMP%] {\n  background: #8e44ad;\n}\n.home-stat[_ngcontent-%COMP%]   .st_interactions[_ngcontent-%COMP%] {\n  background: #218c74;\n}\n.home-stat[_ngcontent-%COMP%]   .st_clients[_ngcontent-%COMP%] {\n  background: #40407a;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #999;\n  cursor: pointer;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding: 7px;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eee;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  padding: 6px 10px;\n  color: #329de5;\n  font-size: 16px;\n  width: 140px;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: right;\n  width: calc(100% - 140px);\n  background: #eee;\n  padding: 10px;\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 10px;\n  left: -20px;\n  border-style: solid;\n  border-color: transparent #eee transparent transparent;\n  border-width: 10px;\n}\n\n\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  background: cadetblue;\n  padding: 15px;\n  margin-bottom: 5px;\n  text-align: center;\n  border-radius: 10px;\n  color: #fff;\n  border: 1px solid #ccc;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s ease-in-out;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 600;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]:hover {\n  -o-box-shadow: 3px 3px 10px #888;\n  box-shadow: 3px 3px 10px #888;\n}\n.home-stat[_ngcontent-%COMP%]   .st_categories[_ngcontent-%COMP%] {\n  background: #3498db;\n}\n.home-stat[_ngcontent-%COMP%]   .st_pending[_ngcontent-%COMP%] {\n  background: #008385;\n}\n.home-stat[_ngcontent-%COMP%]   .st_item[_ngcontent-%COMP%] {\n  background: #d35400;\n}\n.home-stat[_ngcontent-%COMP%]   .st_animes[_ngcontent-%COMP%] {\n  background: #8e44ad;\n}\n.home-stat[_ngcontent-%COMP%]   .st_episode_coming_soon[_ngcontent-%COMP%] {\n  background: #218c74;\n}\n.home-stat[_ngcontent-%COMP%]   .st_clients[_ngcontent-%COMP%] {\n  background: #40407a;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: right;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 18px;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #999;\n  cursor: pointer;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding: 7px;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eee;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  padding: 6px 10px;\n  color: #329de5;\n  font-size: 16px;\n  width: 140px;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: right;\n  width: calc(100% - 140px);\n  background: #eee;\n  padding: 10px;\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 10px;\n  left: -20px;\n  border-style: solid;\n  border-color: transparent #eee transparent transparent;\n  border-width: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0Q6XFxTZXJ2ZXJzXFxkYXNoYm9hcmRzXFx0dXJreS1kZXBsb3kvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBQTtBQU1NO0VBSkY7SUFLSSxpQkFBQTtFQ0hOO0FBQ0Y7QURJTTtFQVBGO0lBUUksZUFBQTtFQ0ROO0FBQ0Y7QURJTTtFQVpGO0lBYUksaUJBQUE7RUNETjtBQUNGO0FES0k7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBSUEsZ0NBQUE7QUNITjtBRElNO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDRlI7QURJTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FESU07RUFHRSxnQ0FBQTtFQUNBLDZCQUFBO0FDRlI7QURJTTtFQUNFLFlBQUE7QUNGUjtBRElNO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDRlI7QURJTTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNGUjtBREdRO0VBSkY7SUFLSSxjQUFBO0lBQ0EsMEJBQUE7RUNBUjtBQUNGO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FER0k7RUFDRSxtQkFBQTtBQ0ROO0FETUk7RUFDRSxrQkFBQTtBQ0hOO0FESU07RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FES0k7RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUNITjtBRElNO0VBQ0UsZ0JBQUE7QUNGUjtBRElNO0VBQ0UsbUJBQUE7QUNGUjtBREtJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0hOO0FESU07RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRlI7QURJTTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRlI7QURHUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO0VBQ0Esa0JBQUE7QUNEVjtBRE1FLCtCQUFBO0FBQ0EsaUNBQUE7QUFDQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFJQSxnQ0FBQTtBQ0hKO0FES0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNGSjtBRElFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDREo7QURHRTtFQUdFLGdDQUFBO0VBQ0EsNkJBQUE7QUNBSjtBREVFO0VBQ0UsbUJBQUE7QUNDSjtBRENFO0VBQ0UsbUJBQUE7QUNFSjtBREFFO0VBQ0UsbUJBQUE7QUNHSjtBRERFO0VBQ0UsbUJBQUE7QUNJSjtBREZFO0VBQ0UsbUJBQUE7QUNLSjtBREhFO0VBQ0UsbUJBQUE7QUNNSjtBREpFO0VBQ0UsWUFBQTtBQ09KO0FETEU7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUNRSjtBRE5FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ1NKO0FEUEU7RUFDRSxrQkFBQTtBQ1VKO0FEUkU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ1dKO0FEVEU7RUFDRSw2QkFBQTtFQUNBLFlBQUE7QUNZSjtBRFZFO0VBQ0UsZ0JBQUE7QUNhSjtBRFhFO0VBQ0UsbUJBQUE7QUNjSjtBRFpFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ2VKO0FEWkU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDZUo7QURaRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDZUo7QURaRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO0VBQ0Esa0JBQUE7QUNlSjtBRGJFLCtCQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC0tLSBTdGFydCBEYXNoYm9hcmQgUGFnZSAtLS0gKi9cclxuLmhvbWUtc3RhdCB7XHJcbiAgICBoMSB7XHJcbiAgICAgIC8vIEBtZWRpYSAobWluLXdpZHRoOiAnOTkycHgnKSBhbmQgKG1heC13aWR0aDogJzExOTlweCcpIHtcclxuICAgICAgLy8gICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgLy8gfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJzc2OHB4JykgYW5kIChtYXgtd2lkdGg6ICc5OTFweCcpIHtcclxuICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogJzU3NnB4JykgYW5kIChtYXgtd2lkdGg6ICc3NjdweCcpIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vIGNvbG9yOiAjMjFhNWI4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ICc1NzVweCcpIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gY29sb3I6ICMyMWE1YjggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN0YXQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAtbW96LXRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgLW8tdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIGg2IHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTo1MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDBcclxuICAgICAgfVxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6M3B4IDNweCAxMHB4ICM4ODg7XHJcbiAgICAgICAgLW1vei1ib3gtc2hhZG93OjNweCAzcHggMTBweCAjODg4O1xyXG4gICAgICAgIC1vLWJveC1zaGFkb3c6M3B4IDNweCAxMHB4ICM4ODg7XHJcbiAgICAgICAgYm94LXNoYWRvdzozcHggM3B4IDEwcHggIzg4ODtcclxuICAgICAgfVxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgIH1cclxuICAgICAgaSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6MTBweDtcclxuICAgICAgICB0b3A6MThweDtcclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJzc2OHB4JykgYW5kIChtYXgtd2lkdGg6ICcxMTk5cHgnKSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnN0X21lbWJlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzNDk4ZGI7XHJcbiAgICB9XHJcbiAgICAuc3RfcGVuZGluZyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNjMDM5MmJcclxuICAgIH1cclxuICAgIC5zdF9pdGVtIHtcclxuICAgICAgYmFja2dyb3VuZDogI2QzNTQwMFxyXG4gICAgfVxyXG4gICAgLnN0X2NvbW1lbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjOGU0NGFkXHJcbiAgICB9XHJcbiAgICAuc3RfaW50ZXJhY3Rpb25zIHtcclxuICAgICAgYmFja2dyb3VuZDogIzIxOGM3NFxyXG4gICAgfVxyXG4gICAgLnN0X2NsaWVudHMge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNDA0MDdhXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubGF0ZSB7XHJcbiAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5sYXRlX2luZm8ge1xyXG4gICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgICBwYWRkaW5nOjdweDtcclxuICAgICAgJjpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZVxyXG4gICAgICB9XHJcbiAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOm5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZW1iZXJfY29tbWVudCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICMzMjlkZTU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxNDBweFxyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTQwcHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2VlZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLyogLS0tIEVuZCBEYXNoYm9hcmQgUGFnZSAtLS0gKi9cclxuICAvKiAtLS0gU3RhcnQgRGFzaGJvYXJkIFBhZ2UgLS0tICovXHJcbiAgLmhvbWUtc3RhdCAuc3RhdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtby10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0YXQgaDYge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gIH1cclxuICAuaG9tZS1zdGF0IC5zdGF0IHNwYW4ge1xyXG4gICAgZm9udC1zaXplOjUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwXHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0YXQ6aG92ZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OjNweCAzcHggMTBweCAjODg4O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OjNweCAzcHggMTBweCAjODg4O1xyXG4gICAgLW8tYm94LXNoYWRvdzozcHggM3B4IDEwcHggIzg4ODtcclxuICAgIGJveC1zaGFkb3c6M3B4IDNweCAxMHB4ICM4ODg7XHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0X2NhdGVnb3JpZXMge1xyXG4gICAgYmFja2dyb3VuZDogIzM0OThkYjtcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RfcGVuZGluZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA4Mzg1XHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0X2l0ZW0ge1xyXG4gICAgYmFja2dyb3VuZDogI2QzNTQwMFxyXG4gIH1cclxuICAuaG9tZS1zdGF0IC5zdF9hbmltZXMge1xyXG4gICAgYmFja2dyb3VuZDogIzhlNDRhZFxyXG4gIH1cclxuICAuaG9tZS1zdGF0IC5zdF9lcGlzb2RlX2NvbWluZ19zb29uIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMThjNzRcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RfY2xpZW50cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDA0MDdhXHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0YXQgZGl2IHtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gIH1cclxuICAuaG9tZS1zdGF0IC5zdGF0IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICAuaG9tZS1zdGF0IC5zdGF0IGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDoxMHB4O1xyXG4gICAgdG9wOjE4cHg7XHJcbiAgfVxyXG4gIC5sYXRlIC5jYXJkLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB9XHJcbiAgLmxhdGUgLmNhcmQtaGVhZGVyIHNwYW4ge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXJcclxuICB9XHJcbiAgLmxhdGUgLmxhdGVfaW5mbyB7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzo3cHg7XHJcbiAgfVxyXG4gIC5sYXRlIC5sYXRlX2luZm86bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogI2VlZVxyXG4gIH1cclxuICAubGF0ZSAubGF0ZV9pbmZvOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBib3JkZXItYm90dG9tOm5vbmU7XHJcbiAgfVxyXG4gIC5sYXRlIC5tZW1iZXJfY29tbWVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuXHJcbiAgfVxyXG5cclxuICAubGF0ZSAubWVtYmVyX2NvbW1lbnQgc3BhbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBjb2xvcjogIzMyOWRlNTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiAxNDBweFxyXG4gIH1cclxuXHJcbiAgLmxhdGUgLm1lbWJlcl9jb21tZW50IHAge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0MHB4KTtcclxuICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgfVxyXG5cclxuICAubGF0ZSAubWVtYmVyX2NvbW1lbnQgcDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2VlZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci13aWR0aDogMTBweDtcclxuICB9XHJcbiAgLyogLS0tIEVuZCBEYXNoYm9hcmQgUGFnZSAtLS0gKi9cclxuIiwiLyogLS0tIFN0YXJ0IERhc2hib2FyZCBQYWdlIC0tLSAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmhvbWUtc3RhdCBoMSB7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5ob21lLXN0YXQgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5ob21lLXN0YXQgaDEge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICB9XG59XG4uaG9tZS1zdGF0IC5zdGF0IHtcbiAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xufVxuLmhvbWUtc3RhdCAuc3RhdCBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5ob21lLXN0YXQgLnN0YXQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5ob21lLXN0YXQgLnN0YXQ6aG92ZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjODg4O1xuICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjODg4O1xuICAtby1ib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzg4ODtcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4ICM4ODg7XG59XG4uaG9tZS1zdGF0IC5zdGF0IGRpdiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5ob21lLXN0YXQgLnN0YXQgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uaG9tZS1zdGF0IC5zdGF0IGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMThweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAuaG9tZS1zdGF0IC5zdGF0IGkge1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyNSUpO1xuICB9XG59XG4uaG9tZS1zdGF0IC5zdF9tZW1iZXIge1xuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xufVxuLmhvbWUtc3RhdCAuc3RfcGVuZGluZyB7XG4gIGJhY2tncm91bmQ6ICNjMDM5MmI7XG59XG4uaG9tZS1zdGF0IC5zdF9pdGVtIHtcbiAgYmFja2dyb3VuZDogI2QzNTQwMDtcbn1cbi5ob21lLXN0YXQgLnN0X2NvbW1lbnQge1xuICBiYWNrZ3JvdW5kOiAjOGU0NGFkO1xufVxuLmhvbWUtc3RhdCAuc3RfaW50ZXJhY3Rpb25zIHtcbiAgYmFja2dyb3VuZDogIzIxOGM3NDtcbn1cbi5ob21lLXN0YXQgLnN0X2NsaWVudHMge1xuICBiYWNrZ3JvdW5kOiAjNDA0MDdhO1xufVxuXG4ubGF0ZSAuY2FyZC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGF0ZSAuY2FyZC1oZWFkZXIgc3BhbiB7XG4gIGNvbG9yOiAjOTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGF0ZSAubGF0ZV9pbmZvIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDdweDtcbn1cbi5sYXRlIC5sYXRlX2luZm86bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xufVxuLmxhdGUgLmxhdGVfaW5mbzpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmxhdGUgLm1lbWJlcl9jb21tZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmxhdGUgLm1lbWJlcl9jb21tZW50IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBjb2xvcjogIzMyOWRlNTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTQwcHg7XG59XG4ubGF0ZSAubWVtYmVyX2NvbW1lbnQgcCB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0MHB4KTtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxhdGUgLm1lbWJlcl9jb21tZW50IHA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IC0yMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNlZWUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci13aWR0aDogMTBweDtcbn1cblxuLyogLS0tIEVuZCBEYXNoYm9hcmQgUGFnZSAtLS0gKi9cbi8qIC0tLSBTdGFydCBEYXNoYm9hcmQgUGFnZSAtLS0gKi9cbi5ob21lLXN0YXQgLnN0YXQge1xuICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5ob21lLXN0YXQgLnN0YXQgaDYge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ob21lLXN0YXQgLnN0YXQgc3BhbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmhvbWUtc3RhdCAuc3RhdDpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCAxMHB4ICM4ODg7XG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCAxMHB4ICM4ODg7XG4gIC1vLWJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjODg4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzg4ODtcbn1cblxuLmhvbWUtc3RhdCAuc3RfY2F0ZWdvcmllcyB7XG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XG59XG5cbi5ob21lLXN0YXQgLnN0X3BlbmRpbmcge1xuICBiYWNrZ3JvdW5kOiAjMDA4Mzg1O1xufVxuXG4uaG9tZS1zdGF0IC5zdF9pdGVtIHtcbiAgYmFja2dyb3VuZDogI2QzNTQwMDtcbn1cblxuLmhvbWUtc3RhdCAuc3RfYW5pbWVzIHtcbiAgYmFja2dyb3VuZDogIzhlNDRhZDtcbn1cblxuLmhvbWUtc3RhdCAuc3RfZXBpc29kZV9jb21pbmdfc29vbiB7XG4gIGJhY2tncm91bmQ6ICMyMThjNzQ7XG59XG5cbi5ob21lLXN0YXQgLnN0X2NsaWVudHMge1xuICBiYWNrZ3JvdW5kOiAjNDA0MDdhO1xufVxuXG4uaG9tZS1zdGF0IC5zdGF0IGRpdiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmhvbWUtc3RhdCAuc3RhdCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmhvbWUtc3RhdCAuc3RhdCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDE4cHg7XG59XG5cbi5sYXRlIC5jYXJkLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxhdGUgLmNhcmQtaGVhZGVyIHNwYW4ge1xuICBjb2xvcjogIzk5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGF0ZSAubGF0ZV9pbmZvIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDdweDtcbn1cblxuLmxhdGUgLmxhdGVfaW5mbzpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbi5sYXRlIC5sYXRlX2luZm86bGFzdC1vZi10eXBlIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmxhdGUgLm1lbWJlcl9jb21tZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGF0ZSAubWVtYmVyX2NvbW1lbnQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGNvbG9yOiAjMzI5ZGU1O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuLmxhdGUgLm1lbWJlcl9jb21tZW50IHAge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNDBweCk7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxhdGUgLm1lbWJlcl9jb21tZW50IHA6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IC0yMHB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNlZWUgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci13aWR0aDogMTBweDtcbn1cblxuLyogLS0tIEVuZCBEYXNoYm9hcmQgUGFnZSAtLS0gKi8iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss'],
                providers: [src_app_theme_components__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]]
            }]
    }], function () { return [{ type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_3__["DashboardService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");





class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
            src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]], imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                ],
                imports: [
                    src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/dashboard/services/dashboard.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboard/services/dashboard.service.ts ***!
  \***************************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _AdminConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AdminConfig */ "./src/app/pages/AdminConfig.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin-service/token/token.service */ "./src/app/pages/admin-service/token/token.service.ts");







class DashboardService {
    constructor(httpClient, tokenService) {
        this.httpClient = httpClient;
        this.tokenService = tokenService;
    }
    static errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error || 'Server Error');
    }
    // all Devices
    getDevices() {
        return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].allDevicesAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(DashboardService.errorHandler));
    }
    // all Cars
    getAllCars() {
        return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].allCarsAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(DashboardService.errorHandler));
    }
    getReports() {
        return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].reportsAPI, this.tokenService.httpOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(DashboardService.errorHandler));
    }
    // All Statistics
    allStatistics() {
        return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].statisticsAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(DashboardService.errorHandler));
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map
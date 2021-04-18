(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["devices-devices-module"],{

/***/ "./src/app/pages/devices/components/all-devices/all-devices.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/devices/components/all-devices/all-devices.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AllDevicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllDevicesComponent", function() { return AllDevicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_device_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/device.actions */ "./src/app/pages/devices/store/device.actions.ts");
/* harmony import */ var _store_device_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/device.selector */ "./src/app/pages/devices/store/device.selector.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");












function AllDevicesComponent_div_0_div_1_tr_41_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllDevicesComponent_div_0_div_1_tr_41_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const device_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r5.delete(device_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", device_r4 == null ? null : device_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", device_r4.brand, " Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((device_r4 == null ? null : device_r4.userName) ? device_r4 == null ? null : device_r4.userName : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((device_r4 == null ? null : device_r4.brand) ? device_r4 == null ? null : device_r4.brand : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((device_r4 == null ? null : device_r4.type) ? device_r4 == null ? null : device_r4.type : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((device_r4 == null ? null : device_r4.description) ? device_r4 == null ? null : device_r4.description : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((device_r4 == null ? null : device_r4.country) ? device_r4 == null ? null : device_r4.country : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((device_r4 == null ? null : device_r4.city) ? device_r4 == null ? null : device_r4.city : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((device_r4 == null ? null : device_r4.price) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 15, device_r4 == null ? null : device_r4.price) : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/devices/", device_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 17, "view"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-danger confirm btn-sm mr-1 mb-1 ", ctx_r3.isDeleted ? "disabled" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 19, "delete"), " ");
} }
function AllDevicesComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AllDevicesComponent_div_0_div_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.name = $event; })("keyup", function AllDevicesComponent_div_0_div_1_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.applyFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AllDevicesComponent_div_0_div_1_tr_41_Template, 25, 21, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "pagination-controls", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AllDevicesComponent_div_0_div_1_Template_pagination_controls_pageChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 17, "manage-devices-page"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 19, "device-search-input"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 21, "device-search-input"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 23, "image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 25, "username"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 27, "brand"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 29, "type"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 31, "description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 33, "country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 35, "city"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 37, "price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 39, "control"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](42, 41, ctx_r2.devicesFilterList, ctx_r2.config));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("previousLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 44, "prev"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nextLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 46, "next"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("screenReaderCurrentLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 48, "you-are-on-page"));
} }
function AllDevicesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllDevicesComponent_div_0_div_1_Template, 47, 50, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.devices.length !== 0);
} }
function AllDevicesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AllDevicesComponent {
    constructor(store, toaster) {
        this.store = store;
        this.toaster = toaster;
        this.devicesList = [];
        this.devicesFilterList = []; // We Create It Second For Filter
        this.isDeleted = false;
    }
    ngOnInit() {
        this.store.dispatch(_store_device_actions__WEBPACK_IMPORTED_MODULE_2__["loadDevices"]());
        // Get All devices
        this.getDevices();
        // Dispatch Error
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_device_selector__WEBPACK_IMPORTED_MODULE_3__["getDevicesError"])).subscribe(error => console.log('error', error));
    }
    // Get All devices
    getDevices() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_device_selector__WEBPACK_IMPORTED_MODULE_3__["allDevicesSelector"])).subscribe((alldevices) => {
            console.log('all devices', alldevices);
            this.devices = alldevices;
            this.devicesList = alldevices;
            this.devicesFilterList = this.devicesList;
            this.isDeleted = false;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.devicesList.length
        };
    }
    // Handle Response Error
    handleError(error) {
        console.log('error : ', error);
        if (error) {
            if (error.error.error) {
                this.toaster.error(error.error.error);
            }
            if (error.error.msg) {
                this.toaster.error(error.error.msg);
            }
            else {
                this.toaster.error('Server Error');
            }
        }
    }
    // Fetch The Page Number On Page Change
    pageChanged(event) {
        this.config.currentPage = event;
    }
    // Delete The Device
    delete(deviceId) {
        if (confirm('Are You Sure You Want To Delete This Device')) {
            this.isDeleted = true;
            this.store.dispatch(_store_device_actions__WEBPACK_IMPORTED_MODULE_2__["deleteDevice"]({ id: deviceId }));
            this.toaster.success('Device Successfully Deleted');
            setTimeout(() => { this.isDeleted = false; }, 1000);
        }
        else {
            return false;
        }
    }
    applyFilter() {
        // if the search input value is empty
        if (!this.name) {
            this.devicesFilterList = [...this.devicesList];
        }
        else {
            this.devicesFilterList = [];
            this.devicesFilterList = this.devicesList.filter(res => {
                if (res.userName) {
                    const username = res.userName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
                    if (username) {
                        // display the Name Column
                        return username;
                    }
                }
                if (res.brand) {
                    const brand = res.brand.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
                    if (brand) {
                        // display the Name Column
                        return brand;
                    }
                }
                if (res.cpu) {
                    const cpu = res.cpu.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
                    if (cpu) {
                        // display the Name Column
                        return cpu;
                    }
                }
                if (res.price) {
                    const price = res.price.toString().toLocaleLowerCase().match(this.name.toLocaleLowerCase());
                    if (price) {
                        // display the Name Column
                        return price;
                    }
                }
                if (res.type) {
                    const type = res.type.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
                    if (type) {
                        // display the Name Column
                        return type;
                    }
                }
            });
        }
    }
}
AllDevicesComponent.ɵfac = function AllDevicesComponent_Factory(t) { return new (t || AllDevicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
AllDevicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllDevicesComponent, selectors: [["app-all-devices"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "text-center", "details-title", "my-4"], [1, "row"], [1, "col-10", "col-sm-8", "col-md-6", "col-xl-4"], [1, "form-group", "mb-4"], ["id", "exampleFormControlInput2", "type", "text", 1, "form-control", "form-control-underlined", "border-primary", "search-input", 3, "ngModel", "placeholder", "title", "ngModelChange", "keyup"], [1, "col-5", "col-md-6", "col-xl-8", "align-self-center"], [1, "table-responsive", "text-center"], [1, "table", "table-bordered", "main-table"], [1, "bg-dark", "text-white"], [4, "ngFor", "ngForOf"], ["autoHide", "true", "maxSize", "5", "responsive", "true", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", 1, "my-pagination", 3, "previousLabel", "nextLabel", "screenReaderCurrentLabel", "pageChange"], [1, "img-thumbnail", "img-custom", 3, "src", "alt"], [1, "td-custom"], [1, "btn", "btn-success", "btn-sm", "mr-1", "mb-1", 3, "routerLink"], [3, "click"], [1, "lds-ring"]], template: function AllDevicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllDevicesComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllDevicesComponent_div_1_Template, 6, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.devices != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.devices.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldmljZXMvY29tcG9uZW50cy9hbGwtZGV2aWNlcy9hbGwtZGV2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllDevicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-devices',
                templateUrl: './all-devices.component.html',
                styleUrls: ['./all-devices.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/devices/components/device-details/device-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/devices/components/device-details/device-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DeviceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceDetailsComponent", function() { return DeviceDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_device_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/device.actions */ "./src/app/pages/devices/store/device.actions.ts");
/* harmony import */ var _store_device_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/device.selector */ "./src/app/pages/devices/store/device.selector.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");










function DeviceDetailsComponent_div_0_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeviceDetailsComponent_div_0_div_9_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.viewImage(_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function DeviceDetailsComponent_div_0_div_9_div_1_Template_img_load_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r16 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.checkSecondImagesloaded(i_r16); })("error", function DeviceDetailsComponent_div_0_div_9_div_1_Template_img_error_3_listener() { const img_r15 = ctx.$implicit; return img_r15.image = "../../../../../assets/default-Item.jpg"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r15 == null ? null : img_r15.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function DeviceDetailsComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeviceDetailsComponent_div_0_div_9_div_1_Template, 4, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.device.images);
} }
function DeviceDetailsComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DeviceDetailsComponent_div_0_li_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.device == null ? null : ctx_r4.device.userImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r4.device == null ? null : ctx_r4.device.username, " Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.device == null ? null : ctx_r4.device.username);
} }
function DeviceDetailsComponent_div_0_li_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "type"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.device == null ? null : ctx_r5.device.type);
} }
function DeviceDetailsComponent_div_0_li_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "country"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.device == null ? null : ctx_r6.device.country);
} }
function DeviceDetailsComponent_div_0_li_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "price"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx_r7.device == null ? null : ctx_r7.device.price));
} }
function DeviceDetailsComponent_div_0_li_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "yearOfRelease"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, (ctx_r8.device == null ? null : ctx_r8.device.yearOfRelease.timestamp) * 1000, "yyyy-MM-dd"));
} }
function DeviceDetailsComponent_div_0_li_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "city"), " : ", ctx_r9.device == null ? null : ctx_r9.device.city, "");
} }
function DeviceDetailsComponent_div_0_li_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "createdBy"), " : ", ctx_r10.device == null ? null : ctx_r10.device.createdBy, "");
} }
function DeviceDetailsComponent_div_0_li_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "createdAt"), " : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 4, (ctx_r11.device == null ? null : ctx_r11.device.createdAt.timestamp) * 1000, "yyyy-MM-dd"), "");
} }
function DeviceDetailsComponent_div_0_li_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "updatedAt"), " : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 4, (ctx_r12.device == null ? null : ctx_r12.device.updatedAt.timestamp) * 1000, "yyyy-MM-dd"), "");
} }
function DeviceDetailsComponent_div_0_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "description"), " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.device == null ? null : ctx_r13.device.description);
} }
function DeviceDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function DeviceDetailsComponent_div_0_Template_img_load_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.checkImageloaded(); })("error", function DeviceDetailsComponent_div_0_Template_img_error_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.device.image = "../../../../../assets/default-Item.jpg"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DeviceDetailsComponent_div_0_div_9_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DeviceDetailsComponent_div_0_div_10_Template, 6, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DeviceDetailsComponent_div_0_li_22_Template, 7, 3, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DeviceDetailsComponent_div_0_li_23_Template, 6, 4, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DeviceDetailsComponent_div_0_li_24_Template, 6, 4, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DeviceDetailsComponent_div_0_li_25_Template, 7, 6, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DeviceDetailsComponent_div_0_li_26_Template, 7, 7, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "hr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DeviceDetailsComponent_div_0_li_35_Template, 4, 4, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DeviceDetailsComponent_div_0_li_38_Template, 4, 4, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, DeviceDetailsComponent_div_0_li_39_Template, 5, 7, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, DeviceDetailsComponent_div_0_li_40_Template, 5, 7, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, DeviceDetailsComponent_div_0_div_41_Template, 6, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 18, "device-details-page"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.device == null ? null : ctx_r0.device.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r0.device == null ? null : ctx_r0.device.brand, " Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.device.images.length != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.rendering && ctx_r0.imagesRendering);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.device == null ? null : ctx_r0.device.brand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.device == null ? null : ctx_r0.device.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.device == null ? null : ctx_r0.device.userImage) && (ctx_r0.device == null ? null : ctx_r0.device.username));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.device == null ? null : ctx_r0.device.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.device == null ? null : ctx_r0.device.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.device == null ? null : ctx_r0.device.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.device == null ? null : ctx_r0.device.yearOfRelease);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 20, "more-info"), " :");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.device == null ? null : ctx_r0.device.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.device == null ? null : ctx_r0.device.createdBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.device == null ? null : ctx_r0.device.createdAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.device == null ? null : ctx_r0.device.updatedAt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.device == null ? null : ctx_r0.device.description);
} }
function DeviceDetailsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DeviceDetailsComponent {
    constructor(store, activatedRoute, document, render) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.document = document;
        this.render = render;
        this.rendering = false;
        this.imagesRendering = false;
    }
    ngOnInit() {
        const deviceID = Number(this.activatedRoute.snapshot.paramMap.get('id'));
        this.store.dispatch(_store_device_actions__WEBPACK_IMPORTED_MODULE_2__["loadDevice"]({ id: deviceID }));
        this.deviceDetails();
    }
    // Get Device Details
    deviceDetails() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_device_selector__WEBPACK_IMPORTED_MODULE_3__["deviceDetailsSelector"])).subscribe(data => {
            this.device = data;
            console.log(data);
        });
    }
    viewImage(element) {
        const mainImage = this.document.querySelector('.image-details img');
        const mainImageLink = mainImage.getAttribute('src');
        const currentImage = element.firstChild;
        const currentImageLink = currentImage.getAttribute('src');
        // force user to click on the same image for one time
        // if (mainImageLink != currentImageLink) {
        this.rendering = true;
        this.imagesRendering = true;
        this.render.setAttribute(currentImage, 'src', mainImageLink);
        this.render.setAttribute(mainImage, 'src', currentImageLink);
        // }
    }
    // Check If main image is rendering
    checkImageloaded() {
        console.log('main Image rendered');
        this.rendering = false;
    }
    // Check if all second images is rendering
    checkSecondImagesloaded(customId) {
        // check if last second image is rendering finished
        if ((customId + 1) == this.device.images.length) {
            // Check If the main image is rendering finish
            if (!this.render) {
                console.log('rendering all image');
                this.imagesRendering = false;
            }
        }
    }
}
DeviceDetailsComponent.ɵfac = function DeviceDetailsComponent_Factory(t) { return new (t || DeviceDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
DeviceDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeviceDetailsComponent, selectors: [["app-device-details"]], decls: 2, vars: 2, consts: [["class", "device-details", 4, "ngIf"], [4, "ngIf"], [1, "device-details"], [1, "container"], [1, "my-3", "details-title"], [1, "row"], [1, "col-12", "col-sm-6", "mx-auto", "text-center"], [1, "image-details", "mb-3"], [1, "img-fluid", "img-thumbnail", 3, "src", "alt", "load", "error"], ["class", "row w-100 mx-auto", 4, "ngIf"], ["class", "overlay", 4, "ngIf"], [1, "col-12", "col-sm-6", "mx-auto"], [1, "info-details"], [1, "list-unstyled"], [1, "col"], [1, "text-info"], [1, "col", "align-self-center", "text-right"], [1, "status", "border", "border-secondary", "rounded", "py-1", "px-2"], ["class", "my-2", 4, "ngIf"], [1, "col-12"], [1, "w-50", "mx-auto"], [1, ""], ["class", "col-12", 4, "ngIf"], [1, "row", "w-100", "mx-auto"], ["class", "col-4 mx-auto px-0 mb-1", 4, "ngFor", "ngForOf"], [1, "col-4", "mx-auto", "px-0", "mb-1"], [1, "second-images-details", 3, "click"], ["secondImageDetails", ""], ["alt", "Second Images", 1, "img-fluid", 3, "src", "load", "error"], [1, "overlay"], [1, "overlay-lds-ring"], [1, "my-2"], [1, "col-4", "col-xl-3", "text-center"], [1, "img-fluid", "img-thumbnail", 3, "src", "alt"], [1, "col-7", "align-self-center"], [1, "mb-2", "text-secondary"], [1, "mb-2"], [1, "text-secondary"], [1, "lds-ring"]], template: function DeviceDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DeviceDetailsComponent_div_0_Template, 42, 22, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeviceDetailsComponent_div_1_Template, 6, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.device);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.device);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".device-details[_ngcontent-%COMP%]   .image-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 600px;\n}\n.device-details[_ngcontent-%COMP%]   .info-details[_ngcontent-%COMP%]   .img-custom[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV2aWNlcy9jb21wb25lbnRzL2RldmljZS1kZXRhaWxzL0Q6XFxTZXJ2ZXJzXFxkYXNoYm9hcmRzXFx0dXJreS1kZXBsb3kvc3JjXFxhcHBcXHBhZ2VzXFxkZXZpY2VzXFxjb21wb25lbnRzXFxkZXZpY2UtZGV0YWlsc1xcZGV2aWNlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldmljZXMvY29tcG9uZW50cy9kZXZpY2UtZGV0YWlscy9kZXZpY2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUFNLGlCQUFBO0FDQVY7QURHSTtFQUNFLFlBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldmljZXMvY29tcG9uZW50cy9kZXZpY2UtZGV0YWlscy9kZXZpY2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXZpY2UtZGV0YWlscyB7XHJcbiAgLmltYWdlLWRldGFpbHMge1xyXG4gICAgaW1nIHsgbWF4LWhlaWdodDogNjAwcHg7IH1cclxuICB9XHJcbiAgLmluZm8tZGV0YWlscyB7XHJcbiAgICAuaW1nLWN1c3RvbSB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmRldmljZS1kZXRhaWxzIC5pbWFnZS1kZXRhaWxzIGltZyB7XG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xufVxuLmRldmljZS1kZXRhaWxzIC5pbmZvLWRldGFpbHMgLmltZy1jdXN0b20ge1xuICB3aWR0aDogMTAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeviceDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-device-details',
                templateUrl: './device-details.component.html',
                styleUrls: ['./device-details.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/devices/devices-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/devices/devices-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DevicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesRoutingModule", function() { return DevicesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_all_devices_all_devices_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/all-devices/all-devices.component */ "./src/app/pages/devices/components/all-devices/all-devices.component.ts");
/* harmony import */ var _components_device_details_device_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/device-details/device-details.component */ "./src/app/pages/devices/components/device-details/device-details.component.ts");






const routes = [
    { path: '', component: _components_all_devices_all_devices_component__WEBPACK_IMPORTED_MODULE_2__["AllDevicesComponent"] },
    { path: ':id', component: _components_device_details_device_details_component__WEBPACK_IMPORTED_MODULE_3__["DeviceDetailsComponent"] }
];
class DevicesRoutingModule {
}
DevicesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DevicesRoutingModule });
DevicesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DevicesRoutingModule_Factory(t) { return new (t || DevicesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DevicesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevicesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/devices/devices.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/devices/devices.module.ts ***!
  \*************************************************/
/*! exports provided: DevicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesModule", function() { return DevicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _devices_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./devices-routing.module */ "./src/app/pages/devices/devices-routing.module.ts");
/* harmony import */ var _components_all_devices_all_devices_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/all-devices/all-devices.component */ "./src/app/pages/devices/components/all-devices/all-devices.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_device_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/device.reducer */ "./src/app/pages/devices/store/device.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _store_device_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/device.effects */ "./src/app/pages/devices/store/device.effects.ts");
/* harmony import */ var _components_device_details_device_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/device-details/device-details.component */ "./src/app/pages/devices/components/device-details/device-details.component.ts");












class DevicesModule {
}
DevicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DevicesModule });
DevicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DevicesModule_Factory(t) { return new (t || DevicesModule)(); }, imports: [[
            src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
            _devices_routing_module__WEBPACK_IMPORTED_MODULE_2__["DevicesRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_store_device_reducer__WEBPACK_IMPORTED_MODULE_5__["devicesFeatureKey"], _store_device_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_device_effects__WEBPACK_IMPORTED_MODULE_7__["DeviceEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DevicesModule, { declarations: [_components_all_devices_all_devices_component__WEBPACK_IMPORTED_MODULE_3__["AllDevicesComponent"], _components_device_details_device_details_component__WEBPACK_IMPORTED_MODULE_8__["DeviceDetailsComponent"]], imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
        _devices_routing_module__WEBPACK_IMPORTED_MODULE_2__["DevicesRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_all_devices_all_devices_component__WEBPACK_IMPORTED_MODULE_3__["AllDevicesComponent"], _components_device_details_device_details_component__WEBPACK_IMPORTED_MODULE_8__["DeviceDetailsComponent"]],
                imports: [
                    src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                    _devices_routing_module__WEBPACK_IMPORTED_MODULE_2__["DevicesRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_store_device_reducer__WEBPACK_IMPORTED_MODULE_5__["devicesFeatureKey"], _store_device_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_device_effects__WEBPACK_IMPORTED_MODULE_7__["DeviceEffects"]])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/devices/services/devices.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/devices/services/devices.service.ts ***!
  \***********************************************************/
/*! exports provided: DevicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicesService", function() { return DevicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _AdminConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AdminConfig */ "./src/app/pages/AdminConfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class DevicesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    static errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error || 'Server Error');
    }
    // all Devices
    getDevices() {
        return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_3__["AdminConfig"].allDevicesAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(DevicesService.errorHandler));
    }
    // Car Details
    deviceDetails(deviceID) {
        return this.httpClient.get(`${_AdminConfig__WEBPACK_IMPORTED_MODULE_3__["AdminConfig"].getDeviceAPI}/${deviceID}`);
    }
    // Delete Device
    deleteDevice(deviceId) {
        return this.httpClient.delete(`${_AdminConfig__WEBPACK_IMPORTED_MODULE_3__["AdminConfig"].deleteDeviceAPI}/${deviceId}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(DevicesService.errorHandler));
    }
}
DevicesService.ɵfac = function DevicesService_Factory(t) { return new (t || DevicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
DevicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DevicesService, factory: DevicesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DevicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/devices/store/device.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/devices/store/device.actions.ts ***!
  \*******************************************************/
/*! exports provided: loadDevices, loadDevicesSuccess, loadDevicesFailure, loadDevice, loadDeviceSuccess, loadDeviceFailure, deleteDevice, deleteDeviceSuccess, deleteDeviceFailure, addDevice, upsertDevice, addDevices, upsertDevices, updateDevice, updateDevices, deleteDevices, clearDevices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDevices", function() { return loadDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDevicesSuccess", function() { return loadDevicesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDevicesFailure", function() { return loadDevicesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDevice", function() { return loadDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDeviceSuccess", function() { return loadDeviceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDeviceFailure", function() { return loadDeviceFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDevice", function() { return deleteDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDeviceSuccess", function() { return deleteDeviceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDeviceFailure", function() { return deleteDeviceFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDevice", function() { return addDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upsertDevice", function() { return upsertDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDevices", function() { return addDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upsertDevices", function() { return upsertDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDevice", function() { return updateDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDevices", function() { return updateDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteDevices", function() { return deleteDevices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearDevices", function() { return clearDevices; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const loadDevices = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device/API] Load Devices');
const loadDevicesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device/API] Load Devices Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadDevicesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device/API] Load Devices Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadDevice = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device Components/API] Load Device', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadDeviceSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device Effect/API] Load Device Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadDeviceFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device Effect/API] Load Device Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteDevice = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device Component/API] Delete Device', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteDeviceSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device Effect/API] Delete Device Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteDeviceFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device Effect/API] Delete Device Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addDevice = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device/API] Add Device', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const upsertDevice = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device/API] Upsert Device', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addDevices = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device/API] Add Devices', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const upsertDevices = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device/API] Upsert Devices', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateDevice = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device/API] Update Device', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateDevices = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device/API] Update Devices', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteDevices = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device/API] Delete Devices', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const clearDevices = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Device/API] Clear Devices');


/***/ }),

/***/ "./src/app/pages/devices/store/device.effects.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/devices/store/device.effects.ts ***!
  \*******************************************************/
/*! exports provided: DeviceEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceEffects", function() { return DeviceEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _device_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./device.actions */ "./src/app/pages/devices/store/device.actions.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_devices_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/devices.service */ "./src/app/pages/devices/services/devices.service.ts");









class DeviceEffects {
    constructor(actions$, toaster, deviceService) {
        this.actions$ = actions$;
        this.toaster = toaster;
        this.deviceService = deviceService;
        this.loadDevices$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_device_actions__WEBPACK_IMPORTED_MODULE_4__["loadDevices"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.deviceService.getDevices()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(devicesResponse => _device_actions__WEBPACK_IMPORTED_MODULE_4__["loadDevicesSuccess"](devicesResponse)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_device_actions__WEBPACK_IMPORTED_MODULE_4__["loadDevicesFailure"](error)))))));
        // Load Device Effect
        this.loadDevice$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_device_actions__WEBPACK_IMPORTED_MODULE_4__["loadDevice"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(action => this.deviceService.deviceDetails(action.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => _device_actions__WEBPACK_IMPORTED_MODULE_4__["loadDeviceSuccess"](response)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_device_actions__WEBPACK_IMPORTED_MODULE_4__["loadDeviceFailure"](error)))))));
        // Delete Device Effect
        this.deleteDevice$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_device_actions__WEBPACK_IMPORTED_MODULE_4__["deleteDevice"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(action => this.deviceService.deleteDevice(action.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => _device_actions__WEBPACK_IMPORTED_MODULE_4__["deleteDeviceSuccess"]({ id: action.id })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_device_actions__WEBPACK_IMPORTED_MODULE_4__["deleteDeviceFailure"](error)))))));
    }
}
DeviceEffects.ɵfac = function DeviceEffects_Factory(t) { return new (t || DeviceEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_devices_service__WEBPACK_IMPORTED_MODULE_6__["DevicesService"])); };
DeviceEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeviceEffects, factory: DeviceEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeviceEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: _services_devices_service__WEBPACK_IMPORTED_MODULE_6__["DevicesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/devices/store/device.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/devices/store/device.reducer.ts ***!
  \*******************************************************/
/*! exports provided: devicesFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "devicesFeatureKey", function() { return devicesFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js");
/* harmony import */ var _device_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./device.actions */ "./src/app/pages/devices/store/device.actions.ts");



const devicesFeatureKey = 'devices';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    // additional entity state properties
    Data: undefined,
    selectedDevice: undefined,
    error: undefined
});
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_device_actions__WEBPACK_IMPORTED_MODULE_2__["loadDevicesSuccess"], (state, action) => adapter.setAll(action.Data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_device_actions__WEBPACK_IMPORTED_MODULE_2__["loadDevicesFailure"], (state, action) => {
    return Object.assign(Object.assign({}, state), { error: action.error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_device_actions__WEBPACK_IMPORTED_MODULE_2__["loadDeviceSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { selectedDevice: action.Data });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_device_actions__WEBPACK_IMPORTED_MODULE_2__["loadDeviceFailure"], (state, action) => {
    return Object.assign(Object.assign({}, state), { error: action.error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_device_actions__WEBPACK_IMPORTED_MODULE_2__["deleteDevice"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_device_actions__WEBPACK_IMPORTED_MODULE_2__["deleteDeviceFailure"], (state, action) => {
    return Object.assign(Object.assign({}, state), { error: action.error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_device_actions__WEBPACK_IMPORTED_MODULE_2__["addDevice"], (state, action) => adapter.addOne(action.device, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_device_actions__WEBPACK_IMPORTED_MODULE_2__["upsertDevice"], (state, action) => adapter.upsertOne(action.device, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_device_actions__WEBPACK_IMPORTED_MODULE_2__["addDevices"], (state, action) => adapter.addMany(action.devices, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_device_actions__WEBPACK_IMPORTED_MODULE_2__["upsertDevices"], (state, action) => adapter.upsertMany(action.devices, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_device_actions__WEBPACK_IMPORTED_MODULE_2__["updateDevice"], (state, action) => adapter.updateOne(action.device, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_device_actions__WEBPACK_IMPORTED_MODULE_2__["updateDevices"], (state, action) => adapter.updateMany(action.devices, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_device_actions__WEBPACK_IMPORTED_MODULE_2__["deleteDevices"], (state, action) => adapter.removeMany(action.ids, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_device_actions__WEBPACK_IMPORTED_MODULE_2__["clearDevices"], state => adapter.removeAll(state)));
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/pages/devices/store/device.selector.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/devices/store/device.selector.ts ***!
  \********************************************************/
/*! exports provided: allDevicesSelector, allDevicesAndCarsSelector, deviceDetailsSelector, getDevicesError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allDevicesSelector", function() { return allDevicesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allDevicesAndCarsSelector", function() { return allDevicesAndCarsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deviceDetailsSelector", function() { return deviceDetailsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDevicesError", function() { return getDevicesError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _device_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device.reducer */ "./src/app/pages/devices/store/device.reducer.ts");


const deviceFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_device_reducer__WEBPACK_IMPORTED_MODULE_1__["devicesFeatureKey"]);
const allDevicesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(deviceFeatureState, _device_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const allDevicesAndCarsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(deviceFeatureState, _device_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const deviceDetailsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(deviceFeatureState, (state) => state.selectedDevice);
const getDevicesError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(deviceFeatureState, (state) => state.error);


/***/ })

}]);
//# sourceMappingURL=devices-devices-module-es2015.js.map
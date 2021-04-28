function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"], {
  /***/
  "./src/app/pages/services/components/all-services/all-services.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/pages/services/components/all-services/all-services.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AllServicesComponent */

  /***/
  function srcAppPagesServicesComponentsAllServicesAllServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllServicesComponent", function () {
      return AllServicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_service_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../store/service.actions */
    "./src/app/pages/services/store/service.actions.ts");
    /* harmony import */


    var _store_service_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/service.selector */
    "./src/app/pages/services/store/service.selector.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function AllServicesComponent_div_0_div_1_tr_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllServicesComponent_div_0_div_1_tr_41_Template_a_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var service_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r5["delete"](service_r4.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r4 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", service_r4 == null ? null : service_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", service_r4.brand, " Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((service_r4 == null ? null : service_r4.title) ? service_r4 == null ? null : service_r4.title : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", service_r4 == null ? null : service_r4.userImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", service_r4.brand, " Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((service_r4 == null ? null : service_r4.userName) ? service_r4 == null ? null : service_r4.userName : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((service_r4 == null ? null : service_r4.type) ? service_r4 == null ? null : service_r4.type : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((service_r4 == null ? null : service_r4.description) ? service_r4 == null ? null : service_r4.description : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((service_r4 == null ? null : service_r4.commentsNumber) ? service_r4 == null ? null : service_r4.commentsNumber : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 16, (service_r4 == null ? null : service_r4.createdAt.timestamp) * 1000, "yyyy-MM-dd"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/services/", service_r4.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 19, "view"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-danger confirm btn-sm mr-1 mb-1 ", ctx_r3.isDeleted ? "disabled" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 21, "delete"), " ");
      }
    }

    function AllServicesComponent_div_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AllServicesComponent_div_0_div_1_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.name = $event;
        })("keyup", function AllServicesComponent_div_0_div_1_Template_input_keyup_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.applyFilter();
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 10);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 10);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AllServicesComponent_div_0_div_1_tr_41_Template, 25, 23, "tr", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "pagination-controls", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AllServicesComponent_div_0_div_1_Template_pagination_controls_pageChange_43_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 17, "manage-services-page"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 19, "service-search-input"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 21, "service-search-input"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 23, "image"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 25, "service-title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 27, "user-image"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 29, "username"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 31, "type"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 33, "description"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 35, "comments-number"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 37, "createdAt"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 39, "control"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](42, 41, ctx_r2.servicesFilterList, ctx_r2.config));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("previousLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 44, "prev"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nextLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 46, "next"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("screenReaderCurrentLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 48, "you-are-on-page"));
      }
    }

    function AllServicesComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllServicesComponent_div_0_div_1_Template, 47, 50, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.services.length !== 0);
      }
    }

    function AllServicesComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AllServicesComponent = /*#__PURE__*/function () {
      function AllServicesComponent(store, toaster) {
        _classCallCheck(this, AllServicesComponent);

        this.store = store;
        this.toaster = toaster;
        this.servicesList = [];
        this.servicesFilterList = []; // We Create It Second For Filter

        this.isDeleted = false;
      }

      _createClass(AllServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.store.dispatch(_store_service_actions__WEBPACK_IMPORTED_MODULE_1__["loadServices"]());
          this.getAllServices();
        }
      }, {
        key: "getAllServices",
        value: function getAllServices() {
          var _this = this;

          this.store.select(_store_service_selector__WEBPACK_IMPORTED_MODULE_2__["allServicesSelector"]).subscribe(function (allServices) {
            if (allServices) {
              console.log('all services', allServices);
              _this.services = allServices;
              _this.servicesList = allServices;
              _this.servicesFilterList = _this.servicesList;
              _this.isDeleted = false; // pagination config

              _this.config = {
                itemsPerPage: 5,
                currentPage: 1,
                totalItems: _this.servicesList.length
              };
            }
          });
        } // Handle Response Error

      }, {
        key: "handleError",
        value: function handleError(error) {
          console.log('error : ', error);

          if (error) {
            if (error.error.error) {
              this.toaster.error(error.error.error);
            }

            if (error.error.msg) {
              this.toaster.error(error.error.msg);
            } else {
              this.toaster.error('Server Error');
            }
          }
        } // Fetch The Page Number On Page Change

      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.config.currentPage = event;
        } // Delete The Service

      }, {
        key: "delete",
        value: function _delete(serviceId) {
          var _this2 = this;

          if (confirm('Are You Sure You Want To Delete This Service')) {
            this.isDeleted = true;
            this.store.dispatch(_store_service_actions__WEBPACK_IMPORTED_MODULE_1__["deleteService"]({
              id: serviceId
            })); // this.toaster.success('Device Successfully Deleted');

            setTimeout(function () {
              _this2.isDeleted = false;
            }, 1000);
          } else {
            return false;
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          var _this3 = this;

          // if the search input value is empty
          if (!this.name) {
            this.servicesFilterList = _toConsumableArray(this.servicesList);
          } else {
            this.servicesFilterList = [];
            this.servicesFilterList = this.servicesList.filter(function (res) {
              if (res.userName) {
                var username = res.userName.toLocaleLowerCase().match(_this3.name.toLocaleLowerCase());

                if (username) {
                  // display the Name Column
                  return username;
                }
              }

              if (res.title) {
                var title = res.title.toLocaleLowerCase().match(_this3.name.toLocaleLowerCase());

                if (title) {
                  // display the Name Column
                  return title;
                }
              }

              if (res.type) {
                var type = res.type.toLocaleLowerCase().match(_this3.name.toLocaleLowerCase());

                if (type) {
                  // display the Name Column
                  return type;
                }
              }
            });
          }
        }
      }]);

      return AllServicesComponent;
    }();

    AllServicesComponent.ɵfac = function AllServicesComponent_Factory(t) {
      return new (t || AllServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    AllServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllServicesComponent,
      selectors: [["app-all-services"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "text-center", "details-title", "my-4"], [1, "row"], [1, "col-10", "col-sm-8", "col-md-6", "col-xl-4"], [1, "form-group", "mb-4"], ["id", "exampleFormControlInput2", "type", "text", 1, "form-control", "form-control-underlined", "border-primary", "search-input", 3, "ngModel", "placeholder", "title", "ngModelChange", "keyup"], [1, "col-5", "col-md-6", "col-xl-8", "align-self-center"], [1, "table-responsive", "text-center"], [1, "table", "table-bordered", "main-table"], [1, "bg-dark", "text-white"], [2, "white-space", "nowrap"], [4, "ngFor", "ngForOf"], ["autoHide", "true", "maxSize", "5", "responsive", "true", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", 1, "my-pagination", 3, "previousLabel", "nextLabel", "screenReaderCurrentLabel", "pageChange"], [1, "img-thumbnail", "img-custom", 3, "src", "alt"], [1, "td-custom"], [1, "btn", "btn-success", "btn-sm", "mr-1", "mb-1", 3, "routerLink"], [3, "click"], [1, "lds-ring"]],
      template: function AllServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllServicesComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllServicesComponent_div_1_Template, 6, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.services != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.services.length === 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL2NvbXBvbmVudHMvYWxsLXNlcnZpY2VzL2FsbC1zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-services',
          templateUrl: './all-services.component.html',
          styleUrls: ['./all-services.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/services/components/services-details/services-details.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/services/components/services-details/services-details.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: ServicesDetailsComponent */

  /***/
  function srcAppPagesServicesComponentsServicesDetailsServicesDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesDetailsComponent", function () {
      return ServicesDetailsComponent;
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


    var _store_service_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/service.actions */
    "./src/app/pages/services/store/service.actions.ts");
    /* harmony import */


    var _store_service_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../store/service.selector */
    "./src/app/pages/services/store/service.selector.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function ServicesDetailsComponent_div_0_li_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "type"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.service == null ? null : ctx_r2.service.type);
      }
    }

    function ServicesDetailsComponent_div_0_li_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "createdAt"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, (ctx_r3.service == null ? null : ctx_r3.service.createdAt.timestamp) * 1000));
      }
    }

    function ServicesDetailsComponent_div_0_li_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "updatedAt"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, (ctx_r4.service == null ? null : ctx_r4.service.updatedAt.timestamp) * 1000));
      }
    }

    function ServicesDetailsComponent_div_0_li_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, "description"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.service == null ? null : ctx_r5.service.description);
      }
    }

    function ServicesDetailsComponent_div_0_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "comments"), " :");
      }
    }

    function ServicesDetailsComponent_div_0_div_31_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var comment_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", (comment_r9 == null ? null : comment_r9.image) ? comment_r9 == null ? null : comment_r9.image : "../../../../../assets/default-avatar.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", comment_r9 == null ? null : comment_r9.userName, " ", (comment_r9 == null ? null : comment_r9.createdAt) != null ? "( " + _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](10, 4, (comment_r9 == null ? null : comment_r9.createdAt.timestamp) * 1000, "medium") + " )" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", comment_r9 == null ? null : comment_r9.comment, " ");
      }
    }

    function ServicesDetailsComponent_div_0_div_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ServicesDetailsComponent_div_0_div_31_div_4_Template, 13, 7, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "pagination-controls", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ServicesDetailsComponent_div_0_div_31_Template_pagination_controls_pageChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r10.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 4, ctx_r7.serviceCommentsList, ctx_r7.config));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("previousLabel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, "prev"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("nextLabel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 9, "next"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("screenReaderCurrentLabel", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 11, "you-are-on-page"));
      }
    }

    function ServicesDetailsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ul", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h4", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ServicesDetailsComponent_div_0_li_24_Template, 6, 4, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ServicesDetailsComponent_div_0_li_25_Template, 7, 6, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ServicesDetailsComponent_div_0_li_26_Template, 7, 6, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ServicesDetailsComponent_div_0_li_27_Template, 6, 4, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "hr", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ServicesDetailsComponent_div_0_div_30_Template, 4, 3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ServicesDetailsComponent_div_0_div_31_Template, 11, 13, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 13, "service-details-page"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.service == null ? null : ctx_r0.service.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r0.service == null ? null : ctx_r0.service.title, " Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.service == null ? null : ctx_r0.service.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.service == null ? null : ctx_r0.service.userImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r0.service == null ? null : ctx_r0.service.userName, " Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.service == null ? null : ctx_r0.service.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.service == null ? null : ctx_r0.service.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.service == null ? null : ctx_r0.service.createdAt);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.service == null ? null : ctx_r0.service.updatedAt);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.service == null ? null : ctx_r0.service.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.serviceCommentsList.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.serviceCommentsList.length > 0);
      }
    }

    function ServicesDetailsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var ServicesDetailsComponent = /*#__PURE__*/function () {
      function ServicesDetailsComponent(store, activatedRoute, document, render) {
        _classCallCheck(this, ServicesDetailsComponent);

        this.store = store;
        this.activatedRoute = activatedRoute;
        this.document = document;
        this.render = render;
        this.serviceCommentsList = [];
        this.rendering = false;
        this.imagesRendering = false;
      }

      _createClass(ServicesDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var serviceID = this.activatedRoute.snapshot.paramMap.get('id');
          this.store.dispatch(_store_service_actions__WEBPACK_IMPORTED_MODULE_2__["loadService"]({
            id: serviceID
          }));
          this.serviceDetails();
        } // Get service Details

      }, {
        key: "serviceDetails",
        value: function serviceDetails() {
          var _this4 = this;

          this.store.select(_store_service_selector__WEBPACK_IMPORTED_MODULE_3__["serviceDetailsSelector"]).subscribe(function (data) {
            if (data) {
              _this4.service = data;
              _this4.serviceCommentsList = data.comments;
              console.log(data);
              _this4.config = {
                itemsPerPage: 5,
                currentPage: 1,
                totalItems: _this4.serviceCommentsList.length
              };
            }
          });
        } // viewImage(element: HTMLDivElement) {
        //   const mainImage = this.document.querySelector('.image-details img');
        //   const mainImageLink = mainImage.getAttribute('src');
        //   const currentImage = element.firstChild as HTMLImageElement;
        //   const currentImageLink = currentImage.getAttribute('src');
        //   // force user to click on the same image for one time
        //   // if (mainImageLink != currentImageLink) {
        //   this.rendering = true;
        //   this.imagesRendering = true;
        //   this.render.setAttribute(currentImage, 'src', mainImageLink);
        //   this.render.setAttribute(mainImage, 'src', currentImageLink);
        //   // }
        // }
        // Check If main image is rendering

      }, {
        key: "checkImageloaded",
        value: function checkImageloaded() {
          console.log('main Image rendered');
          this.rendering = false;
        } // Check if all second images is rendering
        // checkSecondImagesloaded(customId: number) {
        //   // check if last second image is rendering finished
        //   if ((customId + 1) == this.service.images.length) {
        //     // Check If the main image is rendering finish
        //     if (!this.render) {
        //       console.log('rendering all image');
        //       this.imagesRendering = false;
        //     }
        //   }
        // }

      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.config.currentPage = event;
        }
      }]);

      return ServicesDetailsComponent;
    }();

    ServicesDetailsComponent.ɵfac = function ServicesDetailsComponent_Factory(t) {
      return new (t || ServicesDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]));
    };

    ServicesDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ServicesDetailsComponent,
      selectors: [["app-services-details"]],
      decls: 2,
      vars: 2,
      consts: [["class", "service-details", 4, "ngIf"], [4, "ngIf"], [1, "service-details"], [1, "container"], [1, "my-3", "details-title"], [1, "row"], [1, "col-12", "col-sm-5", "col-md-4", "position-relative", "mx-auto", "text-center", "mb-3"], [1, "image-details", "mb-3"], [1, "img-fluid", "img-thumbnail", 3, "src", "alt"], [1, "col-12", "col-sm-6", "mx-auto"], [1, "info-details"], [1, "list-unstyled"], [1, "col"], [1, "text-info"], [1, "my-2"], [1, "col-4", "col-xl-3", "text-center"], [1, "col-7", "align-self-center"], [1, "mb-2", "text-secondary"], ["class", "mb-2", 4, "ngIf"], [1, "col-12"], [1, "w-50", "mx-auto"], ["class", "col-12", 4, "ngIf"], ["class", "card col-12 px-0", 4, "ngIf"], [1, "mb-2"], [1, "text-secondary"], [1, ""], [1, "card", "col-12", "px-0"], [1, "card-header"], [1, "card-body", "p-2"], [1, "messages-body", "my-3", "pt-3", "p-2"], ["class", "comment-block", 4, "ngFor", "ngForOf"], [1, "card-footer", "text-center"], ["autoHide", "true", "maxSize", "5", "responsive", "true", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", 3, "previousLabel", "nextLabel", "screenReaderCurrentLabel", "pageChange"], [1, "comment-block"], [1, "col-2", "col-lg-1", "text-center", "pr-0", "align-self-center"], [1, "user-img"], ["alt", "", 1, "res-image", 3, "src"], [1, "col-10", "col-lg-11", "mt-2", "mt-sm-0"], [1, "comment-body", "py-2", "px-3"], [1, "time"], [1, "pb-1"], [1, "comment", "m-0"], [1, "lds-ring"]],
      template: function ServicesDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ServicesDetailsComponent_div_0_Template, 32, 15, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ServicesDetailsComponent_div_1_Template, 6, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.service);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.service);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginationControlsComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["PaginatePipe"]],
      styles: [".service-details[_ngcontent-%COMP%]   .image-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 600px;\n}\n.service-details[_ngcontent-%COMP%]   .info-details[_ngcontent-%COMP%]   .img-custom[_ngcontent-%COMP%] {\n  width: 100px;\n}\n.user-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  position: relative;\n  border: 2px solid #517197;\n  max-width: 100%;\n}\n.user-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.comment-body[_ngcontent-%COMP%] {\n  border: 1px solid #517197;\n}\n.comment-body[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(54, 72, 94, 0.92);\n}\n.comment-body[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #9e9e9e;\n}\n.comment-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  background: #517197;\n  color: #fff;\n  margin: 15px 10px;\n  outline: none;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n}\n.comment-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: none;\n  color: #517197;\n  border: 1px solid #517197;\n}\n.comment-block[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VydmljZXMvY29tcG9uZW50cy9zZXJ2aWNlcy1kZXRhaWxzL0Q6XFxTZXJ2ZXJzXFxkYXNoYm9hcmRzXFx0dXJreS1kZXBsb3kvc3JjXFxhcHBcXHBhZ2VzXFxzZXJ2aWNlc1xcY29tcG9uZW50c1xcc2VydmljZXMtZGV0YWlsc1xcc2VydmljZXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VydmljZXMvY29tcG9uZW50cy9zZXJ2aWNlcy1kZXRhaWxzL3NlcnZpY2VzLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NlcnZpY2VzL2NvbXBvbmVudHMvc2VydmljZXMtZGV0YWlscy9EOlxcU2VydmVyc1xcZGFzaGJvYXJkc1xcdHVya3ktZGVwbG95L3NyY1xcX3ZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSU07RUFBTSxpQkFBQTtBQ0ZaO0FES007RUFDRSxZQUFBO0FDSFI7QURRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0xKO0FEZUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDYk47QURpQkU7RUFDRSx5QkFBQTtBQ2RKO0FEZ0JNO0VBQ0UsNkJFdkNjO0FEeUJ0QjtBRGVRO0VBQ0UsY0VuQ0c7QURzQmI7QURpQkk7RUFDRSw2QkFBQTtFQUNBLG1CRWhETztFRmlEUCxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtBQ2ZOO0FEZ0JNO0VBQ0UsZ0JBQUE7RUFDQSxjRXhESztFRnlETCx5QkFBQTtBQ2RSO0FEbUJFO0VBQ0UsbUJBQUE7QUNoQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXJ2aWNlcy9jb21wb25lbnRzL3NlcnZpY2VzLWRldGFpbHMvc2VydmljZXMtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3ZhcmlhYmxlJztcclxuXHJcbi5zZXJ2aWNlLWRldGFpbHMge1xyXG4gICAgLmltYWdlLWRldGFpbHMge1xyXG4gICAgICBpbWcgeyBtYXgtaGVpZ2h0OiA2MDBweDsgfVxyXG4gICAgfVxyXG4gICAgLmluZm8tZGV0YWlscyB7XHJcbiAgICAgIC5pbWctY3VzdG9tIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnVzZXItaW1ne1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkbGlnaHRfYmx1ZTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIC8vJjphZnRlciB7XHJcbiAgICAvLyAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gIGNvbnRlbnQ6ICcnO1xyXG4gICAgLy8gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICRsaWdodF9ibHVlO1xyXG4gICAgLy8gIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIC8vICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAvLyAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgLy8gIHRvcDogY2FsYyg1MCUgLSA1cHgpO1xyXG4gICAgLy99XHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21tZW50LWJvZHkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0X2JsdWU7XHJcbiAgICAudGltZSB7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAkc2lkZWJhcl9pdGVtX2J1dHRvbjtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkbGlnaHRfZ3JleTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkbGlnaHRfYmx1ZTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIG1hcmdpbjogMTVweCAxMHB4O1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICAgJjpob3ZlcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAkbGlnaHRfYmx1ZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRfYmx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuY29tbWVudC1ibG9jayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICAiLCIuc2VydmljZS1kZXRhaWxzIC5pbWFnZS1kZXRhaWxzIGltZyB7XG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xufVxuLnNlcnZpY2UtZGV0YWlscyAuaW5mby1kZXRhaWxzIC5pbWctY3VzdG9tIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4udXNlci1pbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzUxNzE5NztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnVzZXItaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbW1lbnQtYm9keSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MTcxOTc7XG59XG4uY29tbWVudC1ib2R5IC50aW1lIHNwYW4ge1xuICBjb2xvcjogcmdiYSg1NCwgNzIsIDk0LCAwLjkyKTtcbn1cbi5jb21tZW50LWJvZHkgLnRpbWUgc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuLmNvbW1lbnQtYm9keSBidXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogIzUxNzE5NztcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTVweCAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5jb21tZW50LWJvZHkgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM1MTcxOTc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MTcxOTc7XG59XG5cbi5jb21tZW50LWJsb2NrIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iLCIkbGlnaHRfYmx1ZTogIzUxNzE5NztcclxuJHNpZGViYXJfaXRlbV9idXR0b246IHJnYmEoNTQsIDcyLCA5NCwgMC45Mik7XHJcbiRzaWRlYmFyX2l0ZW1fYnV0dG9uX2xhbmc6IHJnYmEoNTQsIDcyLCA5NCwgMCk7XHJcbiRtZWRpdW1fYmx1ZTogIzM2NDg1ZTtcclxuJGxpZ2h0X2JsdWVfaG92ZXI6ICMzNjQ4NWU7XHJcbiRsaWdodF9ibGFjazogIzNhM2EzYTtcclxuJGxpZ2h0X21lZHVpbV9ibGFjazogIzMwMzAzMDtcclxuJGxpZ2h0X2dyZXk6ICM5ZTllOWU7XHJcblxyXG5cclxuJGxpZ2h0X3doaXRlOiAjZjFmYWVlO1xyXG4kbWVkaXVtX2xpZ2h0X2JsdWU6ICM1MDg1YTc7XHJcbiRkYXJrX2JsdWU6ICMxZDM1NTc7XHJcbiRxdWlldF9ncmVlbjogIzJhOWQ4ZjtcclxuJHdhcm1fZ3JlZW46ICMyMWE1Yjg7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ServicesDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-services-details',
          templateUrl: './services-details.component.html',
          styleUrls: ['./services-details.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
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
  "./src/app/pages/services/services-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/services/services-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ServicesRoutingModule */

  /***/
  function srcAppPagesServicesServicesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesRoutingModule", function () {
      return ServicesRoutingModule;
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


    var _components_all_services_all_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/all-services/all-services.component */
    "./src/app/pages/services/components/all-services/all-services.component.ts");
    /* harmony import */


    var _components_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/services-details/services-details.component */
    "./src/app/pages/services/components/services-details/services-details.component.ts");

    var routes = [{
      path: '',
      component: _components_all_services_all_services_component__WEBPACK_IMPORTED_MODULE_2__["AllServicesComponent"]
    }, {
      path: ':id',
      component: _components_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_3__["ServicesDetailsComponent"]
    }];

    var ServicesRoutingModule = function ServicesRoutingModule() {
      _classCallCheck(this, ServicesRoutingModule);
    };

    ServicesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServicesRoutingModule
    });
    ServicesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServicesRoutingModule_Factory(t) {
        return new (t || ServicesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesRoutingModule, [{
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
  "./src/app/pages/services/services.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/services/services.module.ts ***!
    \***************************************************/

  /*! exports provided: ServicesModule */

  /***/
  function srcAppPagesServicesServicesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesModule", function () {
      return ServicesModule;
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


    var _services_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services-routing.module */
    "./src/app/pages/services/services-routing.module.ts");
    /* harmony import */


    var _components_all_services_all_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/all-services/all-services.component */
    "./src/app/pages/services/components/all-services/all-services.component.ts");
    /* harmony import */


    var _components_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/services-details/services-details.component */
    "./src/app/pages/services/components/services-details/services-details.component.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_service_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store/service.reducer */
    "./src/app/pages/services/store/service.reducer.ts");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
    /* harmony import */


    var _store_service_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./store/service.effects */
    "./src/app/pages/services/store/service.effects.ts");

    var ServicesModule = function ServicesModule() {
      _classCallCheck(this, ServicesModule);
    };

    ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ServicesModule
    });
    ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ServicesModule_Factory(t) {
        return new (t || ServicesModule)();
      },
      imports: [[src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _services_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServicesRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature(_store_service_reducer__WEBPACK_IMPORTED_MODULE_6__["servicesFeatureKey"], _store_service_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_service_effects__WEBPACK_IMPORTED_MODULE_8__["ServiceEffects"]])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesModule, {
        declarations: [_components_all_services_all_services_component__WEBPACK_IMPORTED_MODULE_3__["AllServicesComponent"], _components_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_4__["ServicesDetailsComponent"]],
        imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _services_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServicesRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsFeatureModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_all_services_all_services_component__WEBPACK_IMPORTED_MODULE_3__["AllServicesComponent"], _components_services_details_services_details_component__WEBPACK_IMPORTED_MODULE_4__["ServicesDetailsComponent"]],
          imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _services_routing_module__WEBPACK_IMPORTED_MODULE_2__["ServicesRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forFeature(_store_service_reducer__WEBPACK_IMPORTED_MODULE_6__["servicesFeatureKey"], _store_service_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_service_effects__WEBPACK_IMPORTED_MODULE_8__["ServiceEffects"]])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/services/services/services.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/services/services/services.service.ts ***!
    \*************************************************************/

  /*! exports provided: ServicesService */

  /***/
  function srcAppPagesServicesServicesServicesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesService", function () {
      return ServicesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _AdminConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../AdminConfig */
    "./src/app/pages/AdminConfig.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ServicesService = /*#__PURE__*/function () {
      function ServicesService(httpClient) {
        _classCallCheck(this, ServicesService);

        this.httpClient = httpClient;
      }

      _createClass(ServicesService, [{
        key: "allServices",
        value: function allServices() {
          return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].allServicesAPI);
        }
      }, {
        key: "serviceDetails",
        value: function serviceDetails(serviceId) {
          return this.httpClient.get("".concat(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].servicesAPI, "/").concat(serviceId));
        }
      }, {
        key: "deleteService",
        value: function deleteService(serviceId) {
          return this.httpClient["delete"]("".concat(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].servicesAPI, "/").concat(serviceId));
        }
      }]);

      return ServicesService;
    }();

    ServicesService.ɵfac = function ServicesService_Factory(t) {
      return new (t || ServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServicesService,
      factory: ServicesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/services/store/service.actions.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/services/store/service.actions.ts ***!
    \*********************************************************/

  /*! exports provided: loadServices, loadServicesSuccess, loadServicesFailure, loadService, loadServiceSuccess, loadServiceFailure, deleteService, deleteServiceSuccess, deleteServiceFailure, addService, upsertService, addServices, upsertServices, updateService, updateServices, deleteServices, clearServices */

  /***/
  function srcAppPagesServicesStoreServiceActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadServices", function () {
      return loadServices;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadServicesSuccess", function () {
      return loadServicesSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadServicesFailure", function () {
      return loadServicesFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadService", function () {
      return loadService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadServiceSuccess", function () {
      return loadServiceSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadServiceFailure", function () {
      return loadServiceFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteService", function () {
      return deleteService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteServiceSuccess", function () {
      return deleteServiceSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteServiceFailure", function () {
      return deleteServiceFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addService", function () {
      return addService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "upsertService", function () {
      return upsertService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "addServices", function () {
      return addServices;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "upsertServices", function () {
      return upsertServices;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateService", function () {
      return updateService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "updateServices", function () {
      return updateServices;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteServices", function () {
      return deleteServices;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "clearServices", function () {
      return clearServices;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var loadServices = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Load Services');
    var loadServicesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Load Services Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadServicesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Load Services Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadService = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Load Service', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadServiceSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Load Service Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadServiceFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Load Service Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteService = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Delete Service', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteServiceSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Delete Service Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteServiceFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Delete Service Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var addService = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Add Service', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var upsertService = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Upsert Service', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var addServices = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Add Services', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var upsertServices = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Upsert Services', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateService = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Update Service', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var updateServices = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Update Services', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteServices = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Delete Services', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var clearServices = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Service/API] Clear Services');
    /***/
  },

  /***/
  "./src/app/pages/services/store/service.effects.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/services/store/service.effects.ts ***!
    \*********************************************************/

  /*! exports provided: ServiceEffects */

  /***/
  function srcAppPagesServicesStoreServiceEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceEffects", function () {
      return ServiceEffects;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _service_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./service.actions */
    "./src/app/pages/services/store/service.actions.ts");
    /* harmony import */


    var _services_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/services.service */
    "./src/app/pages/services/services/services.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var ServiceEffects = function ServiceEffects(actions$, services, toaster) {
      var _this5 = this;

      _classCallCheck(this, ServiceEffects);

      this.actions$ = actions$;
      this.services = services;
      this.toaster = toaster;
      this.loadServices$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this5.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_service_actions__WEBPACK_IMPORTED_MODULE_4__["loadServices"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
          return _this5.services.allServices().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            console.log('response : ', response);
            return _service_actions__WEBPACK_IMPORTED_MODULE_4__["loadServicesSuccess"]({
              services: response.Data
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log('error : ', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_service_actions__WEBPACK_IMPORTED_MODULE_4__["loadServicesFailure"]({
              error: error
            }));
          }));
        }));
      });
      this.loadService$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this5.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_service_actions__WEBPACK_IMPORTED_MODULE_4__["loadService"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (action) {
          return _this5.services.serviceDetails(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return _service_actions__WEBPACK_IMPORTED_MODULE_4__["loadServiceSuccess"]({
              service: response.Data
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log('error : ', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_service_actions__WEBPACK_IMPORTED_MODULE_4__["loadServiceFailure"]({
              error: error
            }));
          }));
        }));
      });
      this.deleteService$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this5.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_service_actions__WEBPACK_IMPORTED_MODULE_4__["deleteService"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(function (action) {
          return _this5.services.deleteService(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this5.toaster.success(response.msg);

            return _service_actions__WEBPACK_IMPORTED_MODULE_4__["deleteServiceSuccess"]({
              id: action.id
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log('error : ', error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_service_actions__WEBPACK_IMPORTED_MODULE_4__["deleteServiceFailure"]({
              error: error
            }));
          }));
        }));
      }, {
        dispatch: false
      });
    };

    ServiceEffects.ɵfac = function ServiceEffects_Factory(t) {
      return new (t || ServiceEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_services_service__WEBPACK_IMPORTED_MODULE_5__["ServicesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
    };

    ServiceEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServiceEffects,
      factory: ServiceEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _services_services_service__WEBPACK_IMPORTED_MODULE_5__["ServicesService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/services/store/service.reducer.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/services/store/service.reducer.ts ***!
    \*********************************************************/

  /*! exports provided: servicesFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */

  /***/
  function srcAppPagesServicesStoreServiceReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "servicesFeatureKey", function () {
      return servicesFeatureKey;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "adapter", function () {
      return adapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialState", function () {
      return initialState;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "reducer", function () {
      return reducer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectIds", function () {
      return selectIds;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectEntities", function () {
      return selectEntities;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectAll", function () {
      return selectAll;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectTotal", function () {
      return selectTotal;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/entity */
    "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js");
    /* harmony import */


    var _service_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service.actions */
    "./src/app/pages/services/store/service.actions.ts");

    var servicesFeatureKey = 'services';
    var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
    var initialState = adapter.getInitialState({
      // additional entity state properties
      Data: undefined,
      serviceDetails: undefined
    });
    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_service_actions__WEBPACK_IMPORTED_MODULE_2__["loadServicesSuccess"], function (state, action) {
      return adapter.setAll(action.services, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_service_actions__WEBPACK_IMPORTED_MODULE_2__["loadServiceSuccess"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        serviceDetails: action.service
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_service_actions__WEBPACK_IMPORTED_MODULE_2__["deleteServiceSuccess"], function (state, action) {
      return adapter.removeOne(action.id, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_service_actions__WEBPACK_IMPORTED_MODULE_2__["addService"], function (state, action) {
      return adapter.addOne(action.service, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_service_actions__WEBPACK_IMPORTED_MODULE_2__["upsertService"], function (state, action) {
      return adapter.upsertOne(action.service, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_service_actions__WEBPACK_IMPORTED_MODULE_2__["addServices"], function (state, action) {
      return adapter.addMany(action.services, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_service_actions__WEBPACK_IMPORTED_MODULE_2__["upsertServices"], function (state, action) {
      return adapter.upsertMany(action.services, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_service_actions__WEBPACK_IMPORTED_MODULE_2__["updateService"], function (state, action) {
      return adapter.updateOne(action.service, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_service_actions__WEBPACK_IMPORTED_MODULE_2__["updateServices"], function (state, action) {
      return adapter.updateMany(action.services, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_service_actions__WEBPACK_IMPORTED_MODULE_2__["deleteServices"], function (state, action) {
      return adapter.removeMany(action.ids, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_service_actions__WEBPACK_IMPORTED_MODULE_2__["clearServices"], function (state) {
      return adapter.removeAll(state);
    }));

    var _adapter$getSelectors = adapter.getSelectors(),
        selectIds = _adapter$getSelectors.selectIds,
        selectEntities = _adapter$getSelectors.selectEntities,
        selectAll = _adapter$getSelectors.selectAll,
        selectTotal = _adapter$getSelectors.selectTotal;
    /***/

  },

  /***/
  "./src/app/pages/services/store/service.selector.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/services/store/service.selector.ts ***!
    \**********************************************************/

  /*! exports provided: allServicesSelector, serviceDetailsSelector */

  /***/
  function srcAppPagesServicesStoreServiceSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "allServicesSelector", function () {
      return allServicesSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "serviceDetailsSelector", function () {
      return serviceDetailsSelector;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _service_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./service.reducer */
    "./src/app/pages/services/store/service.reducer.ts");

    var ServiceState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_service_reducer__WEBPACK_IMPORTED_MODULE_1__["servicesFeatureKey"]);
    var allServicesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(ServiceState, _service_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
    var serviceDetailsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(ServiceState, function (state) {
      return state.serviceDetails;
    });
    /***/
  }
}]);
//# sourceMappingURL=services-services-module-es5.js.map
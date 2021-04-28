function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-estate-real-estate-module"], {
  /***/
  "./src/app/pages/real-estate/components/all-real-estate/all-real-estate.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/real-estate/components/all-real-estate/all-real-estate.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: AllRealEstateComponent */

  /***/
  function srcAppPagesRealEstateComponentsAllRealEstateAllRealEstateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllRealEstateComponent", function () {
      return AllRealEstateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_real_estate_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/real-estate.actions */
    "./src/app/pages/real-estate/store/real-estate.actions.ts");
    /* harmony import */


    var _store_real_estate_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../store/real-estate.selector */
    "./src/app/pages/real-estate/store/real-estate.selector.ts");
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

    function AllRealEstateComponent_div_0_div_1_tr_41_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllRealEstateComponent_div_0_div_1_tr_41_Template_a_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var realEstate_r4 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r5["delete"](realEstate_r4.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var realEstate_r4 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", realEstate_r4 == null ? null : realEstate_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((realEstate_r4 == null ? null : realEstate_r4.userName) ? realEstate_r4 == null ? null : realEstate_r4.userName : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((realEstate_r4 == null ? null : realEstate_r4.country) ? realEstate_r4 == null ? null : realEstate_r4.country : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((realEstate_r4 == null ? null : realEstate_r4.realEstateType) ? realEstate_r4 == null ? null : realEstate_r4.realEstateType : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((realEstate_r4 == null ? null : realEstate_r4.numberOfFloors) ? realEstate_r4 == null ? null : realEstate_r4.numberOfFloors : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((realEstate_r4 == null ? null : realEstate_r4.city) ? realEstate_r4 == null ? null : realEstate_r4.city : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((realEstate_r4 == null ? null : realEstate_r4.price) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 14, realEstate_r4 == null ? null : realEstate_r4.price) : "-");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 16, (realEstate_r4 == null ? null : realEstate_r4.createdAt == null ? null : realEstate_r4.createdAt.timestamp) * 1000, "MMM d, y, h:mm:ss a"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/real-estate/", realEstate_r4.id, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 19, "view"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-danger confirm btn-sm mr-1 mb-1 ", ctx_r3.isDeleted ? "disabled" : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 21, "delete"), " ");
      }
    }

    function AllRealEstateComponent_div_0_div_1_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AllRealEstateComponent_div_0_div_1_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.name = $event;
        })("keyup", function AllRealEstateComponent_div_0_div_1_Template_input_keyup_7_listener() {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AllRealEstateComponent_div_0_div_1_tr_41_Template, 26, 23, "tr", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "paginate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "pagination-controls", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AllRealEstateComponent_div_0_div_1_Template_pagination_controls_pageChange_43_listener($event) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 17, "manage-real-estates-page"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 19, "real-estate-search-input"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 21, "real-estate-search-input"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 23, "image"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 25, "username"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 27, "country"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 29, "real-estate-type"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 31, "number-of-floors"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 33, "city"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 35, "price"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 37, "createdAt"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 39, "control"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](42, 41, ctx_r2.realEstatesFilterList, ctx_r2.config));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("previousLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 44, "prev"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nextLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 46, "next"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("screenReaderCurrentLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 48, "you-are-on-page"));
      }
    }

    function AllRealEstateComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllRealEstateComponent_div_0_div_1_Template, 47, 50, "div", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.realEstates.length !== 0);
      }
    }

    function AllRealEstateComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AllRealEstateComponent = /*#__PURE__*/function () {
      function AllRealEstateComponent(store, toaster) {
        _classCallCheck(this, AllRealEstateComponent);

        this.store = store;
        this.toaster = toaster;
        this.realEstatesList = [];
        this.realEstatesFilterList = []; // We Create It Second For Filter

        this.isDeleted = false;
      }

      _createClass(AllRealEstateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.store.dispatch(_store_real_estate_actions__WEBPACK_IMPORTED_MODULE_2__["loadRealEstates"]()); // Get All realEstates

          this.getRealEstates(); // Dispatch Error

          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_real_estate_selector__WEBPACK_IMPORTED_MODULE_3__["getRealEstateError"])).subscribe(function (error) {
            return _this.handleError(error);
          });
        } // Get All realEstates

      }, {
        key: "getRealEstates",
        value: function getRealEstates() {
          var _this2 = this;

          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_real_estate_selector__WEBPACK_IMPORTED_MODULE_3__["realEstatesSelector"])).subscribe(function (allrealEstates) {
            console.log('all realEstates', allrealEstates);
            _this2.realEstates = allrealEstates;
            _this2.realEstatesList = allrealEstates;
            _this2.realEstatesFilterList = _this2.realEstatesList;
          });
          this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.realEstatesList.length
          };
        } // Handle Response Error

      }, {
        key: "handleError",
        value: function handleError(error) {
          console.log('error', error);

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
        } // Delete The Realestate

      }, {
        key: "delete",
        value: function _delete(realEstateId) {
          var _this3 = this;

          if (confirm('Are You Sure You Want To Delete This RealEstate')) {
            this.isDeleted = true;
            this.store.dispatch(_store_real_estate_actions__WEBPACK_IMPORTED_MODULE_2__["deleteRealEstate"]({
              id: realEstateId
            }));
            this.toaster.success('RealEstate Successfully Deleted');
            setTimeout(function () {
              _this3.isDeleted = true;
            }, 1000);
          } else {
            return false;
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          var _this4 = this;

          // if the search input value is empty
          if (!this.name) {
            this.realEstatesFilterList = _toConsumableArray(this.realEstatesList);
          } else {
            this.realEstatesFilterList = [];
            this.realEstatesFilterList = this.realEstatesList.filter(function (res) {
              if (res.userName) {
                var userName = res.userName.toLocaleLowerCase().match(_this4.name.toLocaleLowerCase());

                if (userName) {
                  // display the Name Column
                  return userName;
                }
              }

              if (res.country) {
                var country = res.country.toLocaleLowerCase().match(_this4.name.toLocaleLowerCase());

                if (country) {
                  // display the Name Column
                  return country;
                }
              }

              if (res.city) {
                var city = res.city.toLocaleLowerCase().match(_this4.name.toLocaleLowerCase());

                if (city) {
                  // display the Name Column
                  return city;
                }
              }

              if (res.company) {
                var company = res.company.toLocaleLowerCase().match(_this4.name.toLocaleLowerCase());

                if (company) {
                  // display the Name Column
                  return company;
                }
              }

              if (res.realEstateType) {
                var realEstateType = res.realEstateType.toLocaleLowerCase().match(_this4.name.toLocaleLowerCase());

                if (realEstateType) {
                  // display the Name Column
                  return realEstateType;
                }
              }
            });
          }
        }
      }]);

      return AllRealEstateComponent;
    }();

    AllRealEstateComponent.ɵfac = function AllRealEstateComponent_Factory(t) {
      return new (t || AllRealEstateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]));
    };

    AllRealEstateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllRealEstateComponent,
      selectors: [["app-all-real-estate"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "text-center", "details-title", "my-4"], [1, "row"], [1, "col-10", "col-sm-8", "col-md-6", "col-xl-4"], [1, "form-group", "mb-4"], ["id", "exampleFormControlInput2", "type", "text", 1, "form-control", "form-control-underlined", "border-primary", "search-input", 3, "ngModel", "placeholder", "title", "ngModelChange", "keyup"], [1, "col-5", "col-md-6", "col-xl-8", "align-self-center"], [1, "table-responsive", "text-center"], [1, "table", "table-bordered", "main-table"], [1, "bg-dark", "text-white"], [4, "ngFor", "ngForOf"], ["autoHide", "true", "maxSize", "5", "responsive", "true", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", 1, "my-pagination", 3, "previousLabel", "nextLabel", "screenReaderCurrentLabel", "pageChange"], ["alt", "Real Estate Image", 1, "img-thumbnail", "img-custom", 3, "src"], [2, "white-space", "nowrap"], [1, "btn", "btn-success", "btn-sm", "mr-1", "mb-1", 3, "routerLink"], [3, "click"], [1, "lds-ring"]],
      template: function AllRealEstateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllRealEstateComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllRealEstateComponent_div_1_Template, 6, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.realEstates != null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.realEstates.length === 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlYWwtZXN0YXRlL2NvbXBvbmVudHMvYWxsLXJlYWwtZXN0YXRlL2FsbC1yZWFsLWVzdGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllRealEstateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-real-estate',
          templateUrl: './all-real-estate.component.html',
          styleUrls: ['./all-real-estate.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/real-estate/components/real-estate-details/real-estate-details.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/pages/real-estate/components/real-estate-details/real-estate-details.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: RealEstateDetailsComponent */

  /***/
  function srcAppPagesRealEstateComponentsRealEstateDetailsRealEstateDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateDetailsComponent", function () {
      return RealEstateDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _store_real_estate_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/real-estate.actions */
    "./src/app/pages/real-estate/store/real-estate.actions.ts");
    /* harmony import */


    var _store_real_estate_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../store/real-estate.selector */
    "./src/app/pages/real-estate/store/real-estate.selector.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function RealEstateDetailsComponent_div_0_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30, 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RealEstateDetailsComponent_div_0_div_9_div_1_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r19.viewImage(_r18);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function RealEstateDetailsComponent_div_0_div_9_div_1_Template_img_load_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

          var i_r17 = ctx.index;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r21.checkSecondImagesloaded(i_r17);
        })("error", function RealEstateDetailsComponent_div_0_div_9_div_1_Template_img_error_3_listener() {
          var img_r16 = ctx.$implicit;
          return img_r16.image = "../../../../../assets/default-Item.jpg";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var img_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", img_r16 == null ? null : img_r16.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function RealEstateDetailsComponent_div_0_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RealEstateDetailsComponent_div_0_div_9_div_1_Template, 4, 1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.realEstate.images);
      }
    }

    function RealEstateDetailsComponent_div_0_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function RealEstateDetailsComponent_div_0_li_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "country"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.realEstate == null ? null : ctx_r4.realEstate.country);
      }
    }

    function RealEstateDetailsComponent_div_0_li_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "city"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.realEstate == null ? null : ctx_r5.realEstate.city);
      }
    }

    function RealEstateDetailsComponent_div_0_li_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "price"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx_r6.realEstate == null ? null : ctx_r6.realEstate.price));
      }
    }

    function RealEstateDetailsComponent_div_0_li_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "real-estate-type"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.realEstate == null ? null : ctx_r7.realEstate.realEstateType);
      }
    }

    function RealEstateDetailsComponent_div_0_li_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "space"), " : ", ctx_r8.realEstate == null ? null : ctx_r8.realEstate.space, "");
      }
    }

    function RealEstateDetailsComponent_div_0_li_42_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "number-of-floors"), " : ", ctx_r9.realEstate == null ? null : ctx_r9.realEstate.numberOfFloors, "");
      }
    }

    function RealEstateDetailsComponent_div_0_li_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "rooms"), " : ", ctx_r10.realEstate == null ? null : ctx_r10.realEstate.rooms, "");
      }
    }

    function RealEstateDetailsComponent_div_0_li_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "home-furnishing"), " : ", ctx_r11.realEstate == null ? null : ctx_r11.realEstate.homeFurnishing, "");
      }
    }

    function RealEstateDetailsComponent_div_0_li_47_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "createdAt"), " : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 4, (ctx_r12.realEstate == null ? null : ctx_r12.realEstate.createdAt.timestamp) * 1000, "yyyy-MM-dd"), "");
      }
    }

    function RealEstateDetailsComponent_div_0_li_48_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "updatedAt"), " : ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 4, (ctx_r13.realEstate == null ? null : ctx_r13.realEstate.updatedAt.timestamp) * 1000, "yyyy-MM-dd"), "");
      }
    }

    function RealEstateDetailsComponent_div_0_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "description"), " : ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.realEstate == null ? null : ctx_r14.realEstate.description);
      }
    }

    function RealEstateDetailsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function RealEstateDetailsComponent_div_0_Template_img_load_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.checkImageloaded();
        })("error", function RealEstateDetailsComponent_div_0_Template_img_error_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.realEstate.image = "../../../../../assets/default-Item.jpg";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RealEstateDetailsComponent_div_0_div_9_Template, 2, 1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RealEstateDetailsComponent_div_0_div_10_Template, 6, 0, "div", 10);

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function RealEstateDetailsComponent_div_0_Template_img_error_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r26.realEstate.userImage = "../../../../../assets/default-avatar.jpg";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RealEstateDetailsComponent_div_0_li_29_Template, 6, 4, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RealEstateDetailsComponent_div_0_li_30_Template, 6, 4, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RealEstateDetailsComponent_div_0_li_31_Template, 7, 6, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RealEstateDetailsComponent_div_0_li_32_Template, 6, 4, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "hr", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, RealEstateDetailsComponent_div_0_li_41_Template, 4, 4, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, RealEstateDetailsComponent_div_0_li_42_Template, 4, 4, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, RealEstateDetailsComponent_div_0_li_43_Template, 4, 4, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, RealEstateDetailsComponent_div_0_li_44_Template, 4, 4, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, RealEstateDetailsComponent_div_0_li_47_Template, 5, 7, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, RealEstateDetailsComponent_div_0_li_48_Template, 5, 7, "li", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, RealEstateDetailsComponent_div_0_div_49_Template, 6, 4, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 22, "real-estate-details-page"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.company, " Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.realEstate.images.length != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.rendering);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.realEstate == null ? null : ctx_r0.realEstate.realEstateType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.realEstate == null ? null : ctx_r0.realEstate.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.userImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.username, " Image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.realEstate == null ? null : ctx_r0.realEstate.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.realEstateType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 24, "more-info"), " :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.space);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.numberOfFloors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.rooms);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.homeFurnishing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.createdAt);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.updatedAt);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.realEstate == null ? null : ctx_r0.realEstate.description);
      }
    }

    function RealEstateDetailsComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RealEstateDetailsComponent = /*#__PURE__*/function () {
      function RealEstateDetailsComponent(store, activatedRoute, document, render) {
        _classCallCheck(this, RealEstateDetailsComponent);

        this.store = store;
        this.activatedRoute = activatedRoute;
        this.document = document;
        this.render = render;
        this.rendering = false;
        this.imagesRendering = false;
      }

      _createClass(RealEstateDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var realEstateID = Number(this.activatedRoute.snapshot.paramMap.get('id'));
          this.store.dispatch(_store_real_estate_actions__WEBPACK_IMPORTED_MODULE_2__["loadRealEstate"]({
            id: realEstateID
          }));
          this.getRealEstateDetails();
        }
      }, {
        key: "getRealEstateDetails",
        value: function getRealEstateDetails() {
          var _this5 = this;

          this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_real_estate_selector__WEBPACK_IMPORTED_MODULE_3__["realEstateSelector"])).subscribe(function (data) {
            console.log(data);
            _this5.realEstate = data;
          });
        }
      }, {
        key: "viewImage",
        value: function viewImage(element) {
          var mainImage = this.document.querySelector('.image-details img');
          var mainImageLink = mainImage.getAttribute('src');
          var currentImage = element.firstChild;
          var currentImageLink = currentImage.getAttribute('src'); // force user to click on the same image for one time
          // if (mainImageLink != currentImageLink) {

          this.rendering = true;
          this.imagesRendering = true;
          this.render.setAttribute(currentImage, 'src', mainImageLink);
          this.render.setAttribute(mainImage, 'src', currentImageLink); // }
        } // Check If main image is rendering

      }, {
        key: "checkImageloaded",
        value: function checkImageloaded() {
          console.log('main Image rendered');
          this.rendering = false;
        } // Check if all second images is rendering

      }, {
        key: "checkSecondImagesloaded",
        value: function checkSecondImagesloaded(customId) {
          // check if last second image is rendering finished
          if (customId + 1 == this.realEstate.images.length) {
            // Check If the main image is rendering finish
            if (!this.render) {
              console.log('rendering all image');
              this.imagesRendering = false;
            }
          }
        }
      }]);

      return RealEstateDetailsComponent;
    }();

    RealEstateDetailsComponent.ɵfac = function RealEstateDetailsComponent_Factory(t) {
      return new (t || RealEstateDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    RealEstateDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RealEstateDetailsComponent,
      selectors: [["app-real-estate-details"]],
      decls: 2,
      vars: 2,
      consts: [["class", "car-details", 4, "ngIf"], [4, "ngIf"], [1, "car-details"], [1, "container"], [1, "my-3", "details-title"], [1, "row"], [1, "col-12", "col-sm-6", "mx-auto", "text-center"], [1, "image-details", "mb-3"], [1, "img-fluid", "img-thumbnail", 3, "src", "alt", "load", "error"], ["class", "row w-100 mx-auto", 4, "ngIf"], ["class", "overlay", 4, "ngIf"], [1, "col-12", "col-sm-6", "mx-auto"], [1, "info-details"], [1, "list-unstyled"], [1, "col"], [1, "text-info"], [1, "col", "align-self-center", "text-right"], [1, "status", "border", "border-secondary", "rounded", "py-1", "px-2"], [1, "my-2"], [1, "col-4", "col-xl-3", "text-center"], [1, "img-fluid", "img-thumbnail", 3, "src", "alt", "error"], [1, "col-7", "align-self-center"], [1, "mb-2", "text-secondary"], [1, "col-12"], [1, "w-50", "mx-auto"], [1, ""], ["class", "col-12", 4, "ngIf"], [1, "row", "w-100", "mx-auto"], ["class", "col-4 mx-auto px-0 mb-1", 4, "ngFor", "ngForOf"], [1, "col-4", "mx-auto", "px-0", "mb-1"], [1, "second-images-details", 3, "click"], ["secondImageDetails", ""], ["alt", "Second Images", 1, "img-fluid", 3, "src", "load", "error"], [1, "overlay"], [1, "overlay-lds-ring"], [1, "mb-2"], [1, "text-secondary"], [1, "lds-ring"]],
      template: function RealEstateDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RealEstateDetailsComponent_div_0_Template, 50, 26, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RealEstateDetailsComponent_div_1_Template, 6, 0, "div", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.realEstate);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.realEstate);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlYWwtZXN0YXRlL2NvbXBvbmVudHMvcmVhbC1lc3RhdGUtZGV0YWlscy9yZWFsLWVzdGF0ZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-real-estate-details',
          templateUrl: './real-estate-details.component.html',
          styleUrls: ['./real-estate-details.component.scss']
        }]
      }], function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/real-estate/real-estate-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/real-estate/real-estate-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: RealEstateRoutingModule */

  /***/
  function srcAppPagesRealEstateRealEstateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateRoutingModule", function () {
      return RealEstateRoutingModule;
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


    var _components_all_real_estate_all_real_estate_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/all-real-estate/all-real-estate.component */
    "./src/app/pages/real-estate/components/all-real-estate/all-real-estate.component.ts");
    /* harmony import */


    var _components_real_estate_details_real_estate_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/real-estate-details/real-estate-details.component */
    "./src/app/pages/real-estate/components/real-estate-details/real-estate-details.component.ts");

    var routes = [{
      path: '',
      component: _components_all_real_estate_all_real_estate_component__WEBPACK_IMPORTED_MODULE_2__["AllRealEstateComponent"]
    }, {
      path: ':id',
      component: _components_real_estate_details_real_estate_details_component__WEBPACK_IMPORTED_MODULE_3__["RealEstateDetailsComponent"]
    }];

    var RealEstateRoutingModule = function RealEstateRoutingModule() {
      _classCallCheck(this, RealEstateRoutingModule);
    };

    RealEstateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RealEstateRoutingModule
    });
    RealEstateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RealEstateRoutingModule_Factory(t) {
        return new (t || RealEstateRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RealEstateRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateRoutingModule, [{
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
  "./src/app/pages/real-estate/real-estate.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/real-estate/real-estate.module.ts ***!
    \*********************************************************/

  /*! exports provided: RealEstateModule */

  /***/
  function srcAppPagesRealEstateRealEstateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateModule", function () {
      return RealEstateModule;
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


    var _real_estate_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./real-estate-routing.module */
    "./src/app/pages/real-estate/real-estate-routing.module.ts");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
    /* harmony import */


    var _components_all_real_estate_all_real_estate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/all-real-estate/all-real-estate.component */
    "./src/app/pages/real-estate/components/all-real-estate/all-real-estate.component.ts");
    /* harmony import */


    var _store_real_estate_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store/real-estate.reducer */
    "./src/app/pages/real-estate/store/real-estate.reducer.ts");
    /* harmony import */


    var _store_real_estate_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./store/real-estate.effects */
    "./src/app/pages/real-estate/store/real-estate.effects.ts");
    /* harmony import */


    var _components_real_estate_details_real_estate_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/real-estate-details/real-estate-details.component */
    "./src/app/pages/real-estate/components/real-estate-details/real-estate-details.component.ts");

    var RealEstateModule = function RealEstateModule() {
      _classCallCheck(this, RealEstateModule);
    };

    RealEstateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RealEstateModule
    });
    RealEstateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RealEstateModule_Factory(t) {
        return new (t || RealEstateModule)();
      },
      imports: [[src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _real_estate_routing_module__WEBPACK_IMPORTED_MODULE_2__["RealEstateRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store_real_estate_reducer__WEBPACK_IMPORTED_MODULE_6__["realEstatesFeatureKey"], _store_real_estate_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_real_estate_effects__WEBPACK_IMPORTED_MODULE_7__["RealEstateEffects"]])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RealEstateModule, {
        declarations: [_components_all_real_estate_all_real_estate_component__WEBPACK_IMPORTED_MODULE_5__["AllRealEstateComponent"], _components_real_estate_details_real_estate_details_component__WEBPACK_IMPORTED_MODULE_8__["RealEstateDetailsComponent"]],
        imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _real_estate_routing_module__WEBPACK_IMPORTED_MODULE_2__["RealEstateRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsFeatureModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_all_real_estate_all_real_estate_component__WEBPACK_IMPORTED_MODULE_5__["AllRealEstateComponent"], _components_real_estate_details_real_estate_details_component__WEBPACK_IMPORTED_MODULE_8__["RealEstateDetailsComponent"]],
          imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"], _real_estate_routing_module__WEBPACK_IMPORTED_MODULE_2__["RealEstateRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store_real_estate_reducer__WEBPACK_IMPORTED_MODULE_6__["realEstatesFeatureKey"], _store_real_estate_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"]), _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_real_estate_effects__WEBPACK_IMPORTED_MODULE_7__["RealEstateEffects"]])]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/real-estate/services/real-estate.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/real-estate/services/real-estate.service.ts ***!
    \*******************************************************************/

  /*! exports provided: RealEstateService */

  /***/
  function srcAppPagesRealEstateServicesRealEstateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateService", function () {
      return RealEstateService;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _AdminConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../AdminConfig */
    "./src/app/pages/AdminConfig.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RealEstateService = /*#__PURE__*/function () {
      function RealEstateService(httpClient) {
        _classCallCheck(this, RealEstateService);

        this.httpClient = httpClient;
      }

      _createClass(RealEstateService, [{
        key: "getRealEstates",
        value: // all RealEstate
        function getRealEstates() {
          return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_3__["AdminConfig"].allRealEstateAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(RealEstateService.errorHandler));
        } // RealEstate Details

      }, {
        key: "realEstateDetails",
        value: function realEstateDetails(realEstateID) {
          return this.httpClient.get("".concat(_AdminConfig__WEBPACK_IMPORTED_MODULE_3__["AdminConfig"].getRealEstateAPI, "/").concat(realEstateID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(RealEstateService.errorHandler));
        } // Delete Real Estate

      }, {
        key: "deleteRealEstates",
        value: function deleteRealEstates(deviceId) {
          return this.httpClient["delete"]("".concat(_AdminConfig__WEBPACK_IMPORTED_MODULE_3__["AdminConfig"].deleteRealEstateAPI, "/").concat(deviceId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(RealEstateService.errorHandler));
        }
      }], [{
        key: "errorHandler",
        value: function errorHandler(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error || 'Server Error');
        }
      }]);

      return RealEstateService;
    }();

    RealEstateService.ɵfac = function RealEstateService_Factory(t) {
      return new (t || RealEstateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    RealEstateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RealEstateService,
      factory: RealEstateService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/real-estate/store/real-estate.actions.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/real-estate/store/real-estate.actions.ts ***!
    \****************************************************************/

  /*! exports provided: loadRealEstates, loadRealEstatesSuccess, loadRealEstatesFailure, loadRealEstate, loadRealEstateSuccess, loadRealEstateFailure, deleteRealEstate, deleteRealEstateSuccess, deleteRealEstateFailure */

  /***/
  function srcAppPagesRealEstateStoreRealEstateActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRealEstates", function () {
      return loadRealEstates;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRealEstatesSuccess", function () {
      return loadRealEstatesSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRealEstatesFailure", function () {
      return loadRealEstatesFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRealEstate", function () {
      return loadRealEstate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRealEstateSuccess", function () {
      return loadRealEstateSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loadRealEstateFailure", function () {
      return loadRealEstateFailure;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteRealEstate", function () {
      return deleteRealEstate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteRealEstateSuccess", function () {
      return deleteRealEstateSuccess;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deleteRealEstateFailure", function () {
      return deleteRealEstateFailure;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

    var loadRealEstates = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[RealEstate/API] Load RealEstates');
    var loadRealEstatesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[RealEstate/API] Load RealEstates Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadRealEstatesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[RealEstate/API] Load RealEstates Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadRealEstate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[RealEstate Components/API] Load Real Estate', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadRealEstateSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[RealEstate Effect/API] Load Real Estate Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var loadRealEstateFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[RealEstate Effect/API] Load Real Estate Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteRealEstate = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[RealEstate Components/API] Delete RealEstate', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteRealEstateSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[RealEstate Effect/API] Delete RealEstate Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    var deleteRealEstateFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[RealEstate Effect/API] Delete RealEstate Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
    /***/
  },

  /***/
  "./src/app/pages/real-estate/store/real-estate.effects.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/real-estate/store/real-estate.effects.ts ***!
    \****************************************************************/

  /*! exports provided: RealEstateEffects */

  /***/
  function srcAppPagesRealEstateStoreRealEstateEffectsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateEffects", function () {
      return RealEstateEffects;
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


    var _store_real_estate_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../store/real-estate.actions */
    "./src/app/pages/real-estate/store/real-estate.actions.ts");
    /* harmony import */


    var _services_real_estate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/real-estate.service */
    "./src/app/pages/real-estate/services/real-estate.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var RealEstateEffects = function RealEstateEffects(actions$, realEstateService, toaster) {
      var _this6 = this;

      _classCallCheck(this, RealEstateEffects);

      this.actions$ = actions$;
      this.realEstateService = realEstateService;
      this.toaster = toaster; // Load Real Estate

      this.loadRealEstates$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this6.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_real_estate_actions__WEBPACK_IMPORTED_MODULE_4__["loadRealEstates"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
          return _this6.realEstateService.getRealEstates().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return _store_real_estate_actions__WEBPACK_IMPORTED_MODULE_4__["loadRealEstatesSuccess"](response);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_store_real_estate_actions__WEBPACK_IMPORTED_MODULE_4__["loadRealEstatesFailure"](error));
          }));
        }));
      }); // Load Real Estate Details

      this.loadRealEstate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this6.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_real_estate_actions__WEBPACK_IMPORTED_MODULE_4__["loadRealEstate"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
          return _this6.realEstateService.realEstateDetails(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return _store_real_estate_actions__WEBPACK_IMPORTED_MODULE_4__["loadRealEstateSuccess"](response);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_store_real_estate_actions__WEBPACK_IMPORTED_MODULE_4__["loadRealEstateFailure"](error));
          }));
        }));
      }); // Delete Real Estate Effect

      this.deleteRealEstate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(function () {
        return _this6.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_real_estate_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRealEstate"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (action) {
          return _this6.realEstateService.deleteRealEstates(action.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return _store_real_estate_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRealEstateSuccess"]({
              id: action.id
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_store_real_estate_actions__WEBPACK_IMPORTED_MODULE_4__["deleteRealEstateFailure"]({
              error: error
            }));
          }));
        }));
      });
    };

    RealEstateEffects.ɵfac = function RealEstateEffects_Factory(t) {
      return new (t || RealEstateEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_real_estate_service__WEBPACK_IMPORTED_MODULE_5__["RealEstateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]));
    };

    RealEstateEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RealEstateEffects,
      factory: RealEstateEffects.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealEstateEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]
        }, {
          type: _services_real_estate_service__WEBPACK_IMPORTED_MODULE_5__["RealEstateService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/real-estate/store/real-estate.reducer.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/real-estate/store/real-estate.reducer.ts ***!
    \****************************************************************/

  /*! exports provided: realEstatesFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */

  /***/
  function srcAppPagesRealEstateStoreRealEstateReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "realEstatesFeatureKey", function () {
      return realEstatesFeatureKey;
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


    var _real_estate_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./real-estate.actions */
    "./src/app/pages/real-estate/store/real-estate.actions.ts");

    var realEstatesFeatureKey = 'realEstates';
    var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
    var initialState = adapter.getInitialState({
      // additional entity state properties
      Data: undefined,
      selectedRealEstate: undefined,
      error: undefined
    });
    var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_real_estate_actions__WEBPACK_IMPORTED_MODULE_2__["loadRealEstatesSuccess"], function (state, action) {
      return adapter.setAll(action.Data, state);
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_real_estate_actions__WEBPACK_IMPORTED_MODULE_2__["loadRealEstatesFailure"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        error: action.error
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_real_estate_actions__WEBPACK_IMPORTED_MODULE_2__["loadRealEstateSuccess"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        selectedRealEstate: action.Data
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_real_estate_actions__WEBPACK_IMPORTED_MODULE_2__["loadRealEstateFailure"], function (state, action) {
      return Object.assign(Object.assign({}, state), {
        error: action.error
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_real_estate_actions__WEBPACK_IMPORTED_MODULE_2__["deleteRealEstate"], function (state, action) {
      return adapter.removeOne(action.id, state);
    }));

    var _adapter$getSelectors = adapter.getSelectors(),
        selectIds = _adapter$getSelectors.selectIds,
        selectEntities = _adapter$getSelectors.selectEntities,
        selectAll = _adapter$getSelectors.selectAll,
        selectTotal = _adapter$getSelectors.selectTotal;
    /***/

  },

  /***/
  "./src/app/pages/real-estate/store/real-estate.selector.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/real-estate/store/real-estate.selector.ts ***!
    \*****************************************************************/

  /*! exports provided: realEstatesSelector, realEstateSelector, getRealEstateError */

  /***/
  function srcAppPagesRealEstateStoreRealEstateSelectorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "realEstatesSelector", function () {
      return realEstatesSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "realEstateSelector", function () {
      return realEstateSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getRealEstateError", function () {
      return getRealEstateError;
    });
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _real_estate_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./real-estate.reducer */
    "./src/app/pages/real-estate/store/real-estate.reducer.ts");

    var realEstateFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_real_estate_reducer__WEBPACK_IMPORTED_MODULE_1__["realEstatesFeatureKey"]); // real estates selector

    var realEstatesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(realEstateFeatureState, _real_estate_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]); // real estate details selector

    var realEstateSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(realEstateFeatureState, function (state) {
      return state.selectedRealEstate;
    }); // real estate error selector

    var getRealEstateError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(realEstateFeatureState, function (state) {
      return state.error;
    });
    /***/
  }
}]);
//# sourceMappingURL=real-estate-real-estate-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"],{

/***/ "./src/app/pages/products/components/all-products/all-products.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/products/components/all-products/all-products.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AllProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllProductsComponent", function() { return AllProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_product_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/product.actions */ "./src/app/pages/products/store/product.actions.ts");
/* harmony import */ var _store_product_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/product.selector */ "./src/app/pages/products/store/product.selector.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/pages/products/services/products.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");












function AllProductsComponent_div_0_div_1_tr_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 12);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 13);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r4 == null ? null : product_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", product_r4.name, " Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.userName ? product_r4.userName : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.city ? product_r4.city : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.country ? product_r4.country : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.description ? product_r4.description : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.entity ? product_r4.entity : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.price ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 11, product_r4.price) : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r4.status ? product_r4.status : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](22, 13, product_r4.createdAt.timestamp * 1000, "MMM d, y, h:mm:ss a"));
} }
function AllProductsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AllProductsComponent_div_0_div_1_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.name = $event; })("keyup", function AllProductsComponent_div_0_div_1_Template_input_keyup_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.applyFilter(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "#ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AllProductsComponent_div_0_div_1_tr_43_Template, 23, 16, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "pagination-controls", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AllProductsComponent_div_0_div_1_Template_pagination_controls_pageChange_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 17, "manage-products-page"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 19, "product-search-input"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 21, "product-search-input"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 23, "image"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 25, "username"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 27, "city"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 29, "country"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 31, "description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 33, "entity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 35, "price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 37, "status"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 39, "createdAt"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 41, ctx_r2.productsFilterList, ctx_r2.config));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("previousLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 44, "prev"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nextLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 46, "next"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("screenReaderCurrentLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 48, "you-are-on-page"));
} }
function AllProductsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllProductsComponent_div_0_div_1_Template, 49, 50, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.products.length !== 0);
} }
function AllProductsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AllProductsComponent {
    constructor(productService, formBuilder, store, toaster) {
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.store = store;
        this.toaster = toaster;
        this.productsList = [];
        this.productsFilterList = []; // We Create It Second For Filter
        this.isDeleted = false;
    }
    ngOnInit() {
        this.store.dispatch(_store_product_actions__WEBPACK_IMPORTED_MODULE_2__["loadProducts"]());
        // Get All Products
        this.getProducts();
        // Dispatch Error
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_product_selector__WEBPACK_IMPORTED_MODULE_3__["getProductError"])).subscribe(error => this.handleError(error));
    }
    // Get All Products
    getProducts() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_product_selector__WEBPACK_IMPORTED_MODULE_3__["productsSelector"])).subscribe((allProducts) => {
            console.log('all Products', allProducts);
            this.products = allProducts;
            this.productsList = allProducts;
            this.productsFilterList = this.productsList;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.productsList.length
        };
    }
    // Handle Response Error
    handleError(error) {
        console.log('error : ', error);
        if (error) {
            if (error.error.error) {
                this.toaster.error(error.error.error);
            }
            else if (error.error.msg) {
                this.toaster.error(error.error.msg);
            }
        }
    }
    // Fetch The Page Number On Page Change
    pageChanged(event) {
        this.config.currentPage = event;
    }
    // Delete The Category
    delete(productId) {
        if (confirm('Are You Sure You Want To Delete This Product')) {
            this.isDeleted = true;
            this.store.dispatch(_store_product_actions__WEBPACK_IMPORTED_MODULE_2__["deleteProduct"]({ id: productId }));
            this.toaster.success('Product Successfully Deleted');
            // fetch all product after delete product
            this.getProducts();
        }
        else {
            return false;
        }
    }
    applyFilter() {
        // if the search input value is empty
        if (!this.name) {
            this.productsFilterList = [...this.productsList];
        }
        else {
            this.productsFilterList = [];
            this.productsFilterList = this.productsList.filter(res => {
                if (res.userName) {
                    const userName = res.userName.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
                    if (userName) {
                        // display the Name Column
                        return userName;
                    }
                }
                if (res.entity) {
                    const entity = res.entity.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
                    if (entity) {
                        // display the Name Column
                        return entity;
                    }
                }
                if (res.country) {
                    const country = res.country.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
                    if (country) {
                        // display the Name Column
                        return country;
                    }
                }
                if (res.status) {
                    const status = res.status.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
                    if (status) {
                        // display the Name Column
                        return status;
                    }
                }
            });
        }
    }
}
AllProductsComponent.ɵfac = function AllProductsComponent_Factory(t) { return new (t || AllProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
AllProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllProductsComponent, selectors: [["app-all-products"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [1, "text-center", "details-title", "my-4"], [1, "row"], [1, "col-10", "col-sm-8", "col-md-6", "col-xl-5"], [1, "form-group", "mb-4"], ["id", "exampleFormControlInput2", "type", "text", 1, "form-control", "form-control-underlined", "border-primary", "search-input", 3, "ngModel", "placeholder", "title", "ngModelChange", "keyup"], [1, "col-5", "col-md-6", "col-xl-8", "align-self-center"], [1, "table-responsive", "text-center"], [1, "table", "table-bordered", "main-table"], [1, "bg-dark", "text-white"], [4, "ngFor", "ngForOf"], ["autoHide", "true", "maxSize", "5", "responsive", "true", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", 1, "my-pagination", 3, "previousLabel", "nextLabel", "screenReaderCurrentLabel", "pageChange"], [1, "img-thumbnail", "img-custom", 3, "src", "alt"], [1, "td-custom"], [2, "white-space", "nowrap"], [1, "lds-ring"]], template: function AllProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllProductsComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllProductsComponent_div_1_Template, 6, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL2NvbXBvbmVudHMvYWxsLXByb2R1Y3RzL2FsbC1wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-products',
                templateUrl: './all-products.component.html',
                styleUrls: ['./all-products.component.scss']
            }]
    }], function () { return [{ type: _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/products/components/product-details/product-details.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/products/components/product-details/product-details.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/pages/products/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class ProductDetailsComponent {
    constructor(productService, activatedRoute) {
        this.productService = productService;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        // this.productService.getProductDetails(this.activatedRoute.snapshot.params.get('id'))
        // .subscribe(
        //   (response: ProductDetailsResponse) => this.responseHandler(response),
        //   error => this.errorHandler(error)
        // );
    }
    responseHandler(response) {
        this.productDetails = response.Data;
    }
    errorHandler(error) {
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 2, vars: 0, template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RzL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-details',
                templateUrl: './product-details.component.html',
                styleUrls: ['./product-details.component.scss']
            }]
    }], function () { return [{ type: _services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/products/products-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/products/products-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/all-products/all-products.component */ "./src/app/pages/products/components/all-products/all-products.component.ts");





const routes = [
    { path: '', component: _components_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_2__["AllProductsComponent"] },
];
class ProductsRoutingModule {
}
ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsRoutingModule });
ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsRoutingModule_Factory(t) { return new (t || ProductsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/products/products.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/products/products.module.ts ***!
  \***************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/pages/products/products-routing.module.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _store_product_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/product.reducer */ "./src/app/pages/products/store/product.reducer.ts");
/* harmony import */ var _store_product_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/product.effects */ "./src/app/pages/products/store/product.effects.ts");
/* harmony import */ var _components_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/all-products/all-products.component */ "./src/app/pages/products/components/all-products/all-products.component.ts");
/* harmony import */ var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/product-details/product-details.component */ "./src/app/pages/products/components/product-details/product-details.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");












class ProductsModule {
}
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }, imports: [[
            src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature(_store_product_reducer__WEBPACK_IMPORTED_MODULE_4__["productsFeatureKey"], _store_product_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_store_product_effects__WEBPACK_IMPORTED_MODULE_5__["ProductEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_components_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_6__["AllProductsComponent"], _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"]], imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
        _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_all_products_all_products_component__WEBPACK_IMPORTED_MODULE_6__["AllProductsComponent"], _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"]],
                imports: [
                    src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                    _products_routing_module__WEBPACK_IMPORTED_MODULE_2__["ProductsRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forFeature(_store_product_reducer__WEBPACK_IMPORTED_MODULE_4__["productsFeatureKey"], _store_product_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_store_product_effects__WEBPACK_IMPORTED_MODULE_5__["ProductEffects"]])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/products/services/products.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/products/services/products.service.ts ***!
  \*************************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _AdminConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../AdminConfig */ "./src/app/pages/AdminConfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ProductsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    static errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error || 'Server Error');
    }
    getProducts() {
        return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_3__["AdminConfig"].productsAPI).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(ProductsService.errorHandler));
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/products/store/product.actions.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/products/store/product.actions.ts ***!
  \*********************************************************/
/*! exports provided: loadProducts, loadProductsSuccess, loadProductsFailure, deleteProduct, deleteProductSuccess, deleteProductFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProducts", function() { return loadProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProductsSuccess", function() { return loadProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProductsFailure", function() { return loadProductsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProductSuccess", function() { return deleteProductSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProductFailure", function() { return deleteProductFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const loadProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product/API] Load Products');
const loadProductsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product/API] Load Products Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadProductsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product/API] Load Products Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteProduct = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product Component/API] Delete Product', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteProductSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product Effect/API] Delete Product Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteProductFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product Effect/API] Delete Product Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// export const loadAdmin = createAction(
//   '[Admin Component/API] Load Admin',
//   props<{ id: number }>()
// );
// export const loadAdminSuccess = createAction(
//   '[Admin Effects/API] Load Admin Success',
//   props<{ data: Admin }>()
// );
// export const loadAdminFailure = createAction(
//   '[Admin Effects/API] Load Admin Failure',
//   props<{ error: string }>()
// );
// export const addAdmin = createAction(
//   '[Admin Components/API] Add Admin',
//   props<{ admin: Admin }>()
// );
// export const addAdminSuccess = createAction(
//   '[Admin Effects/API] Add Admin Success',
//   props<{ admin: Admin }>()
// );
// export const addAdminFailure = createAction(
//   '[Admin Effects/API] Add Admin Failure',
//   props<{ error: any }>()
// );
// export const deleteAdmin = createAction(
//   '[Admin Component/API] Delete Admin',
//   props<{ id: string }>()
// );
// export const deleteAdminSuccess = createAction(
//   '[Admin Effects/API] Delete Admin Success',
//   props<{ id: string }>()
// );
// export const deleteAdminFailure = createAction(
//   '[Admin Effects/API] Delete Admin Failure',
//   props<{ error: string }>()
// );
// export const updateAdmin = createAction(
//   '[Admin Components/API] Update Admin',
//   props<{ admin: Update<Admin> }>()
// );
// export const updateAdminSuccess = createAction(
//   '[Admin Effects/API] Update Admin Success',
//   props<{ admin: Update<Admin> }>()
// );
// export const updateAdminFailure = createAction(
//   '[Admin Effects/API] Update Admin Failure',
//   props<{ error: string }>()
// );
// export const upsertAdmin = createAction(
//   '[Admin/API] Upsert Admin',
//   props<{ admin: Admin }>()
// );
// export const upsertAdmins = createAction(
//   '[Admin/API] Upsert Admins',
//   props<{ admins: Admin[] }>()
// );
// export const updateAdmins = createAction(
//   '[Admin/API] Update Admins',
//   props<{ admins: Update<Admin>[] }>()
// );
// export const clearAdmins = createAction(
//   '[Admin/API] Clear Admins'
// );


/***/ }),

/***/ "./src/app/pages/products/store/product.effects.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/products/store/product.effects.ts ***!
  \*********************************************************/
/*! exports provided: ProductEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEffects", function() { return ProductEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _store_product_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/product.actions */ "./src/app/pages/products/store/product.actions.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/products.service */ "./src/app/pages/products/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");










class ProductEffects {
    constructor(actions$, productService, router, toaster, activatedRoute) {
        this.actions$ = actions$;
        this.productService = productService;
        this.router = router;
        this.toaster = toaster;
        this.activatedRoute = activatedRoute;
        // Load Products Effect
        this.loadProducts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_product_actions__WEBPACK_IMPORTED_MODULE_4__["loadProducts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.productService.getProducts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(productsResponse => _store_product_actions__WEBPACK_IMPORTED_MODULE_4__["loadProductsSuccess"](productsResponse)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_store_product_actions__WEBPACK_IMPORTED_MODULE_4__["loadProductsFailure"](error)))))));
    }
}
ProductEffects.ɵfac = function ProductEffects_Factory(t) { return new (t || ProductEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
ProductEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductEffects, factory: ProductEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/products/store/product.reducer.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/products/store/product.reducer.ts ***!
  \*********************************************************/
/*! exports provided: productsFeatureKey, adapter, initialState, reducer, metaReducers, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsFeatureKey", function() { return productsFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _store_product_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/product.actions */ "./src/app/pages/products/store/product.actions.ts");




const productsFeatureKey = 'products';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    // additional entity state properties
    Data: undefined,
    selectedProduct: undefined,
    error: undefined
});
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_store_product_actions__WEBPACK_IMPORTED_MODULE_3__["loadProductsSuccess"], (state, action) => adapter.setAll(action.Data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_store_product_actions__WEBPACK_IMPORTED_MODULE_3__["loadProductsFailure"], (state, action) => {
    return Object.assign(Object.assign({}, state), { error: action.error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_store_product_actions__WEBPACK_IMPORTED_MODULE_3__["deleteProductSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_store_product_actions__WEBPACK_IMPORTED_MODULE_3__["deleteProductFailure"], (state, action) => {
    return Object.assign(Object.assign({}, state), { error: action.error });
}));
const metaReducers = !src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production ? [] : [];
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/pages/products/store/product.selector.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/products/store/product.selector.ts ***!
  \**********************************************************/
/*! exports provided: selectProductState, productsSelector, productSelector, getProductError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProductState", function() { return selectProductState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsSelector", function() { return productsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productSelector", function() { return productSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductError", function() { return getProductError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _product_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.reducer */ "./src/app/pages/products/store/product.reducer.ts");


// fetch the whole slice for product state
const selectProductState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_product_reducer__WEBPACK_IMPORTED_MODULE_1__["productsFeatureKey"]);
const productsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProductState, _product_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);
const productSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProductState, (state) => state.selectedProduct);
const getProductError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectProductState, (state) => state.error);


/***/ })

}]);
//# sourceMappingURL=products-products-module-es2015.js.map
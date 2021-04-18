(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chats-chats-module"],{

/***/ "./src/app/pages/chats/chats-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/chats/chats-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: ChatsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsRoutingModule", function() { return ChatsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_all_chats_all_chats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/all-chats/all-chats.component */ "./src/app/pages/chats/components/all-chats/all-chats.component.ts");
/* harmony import */ var _components_chat_details_chat_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chat-details/chat-details.component */ "./src/app/pages/chats/components/chat-details/chat-details.component.ts");






const routes = [
    { path: '', component: _components_all_chats_all_chats_component__WEBPACK_IMPORTED_MODULE_2__["AllChatsComponent"] },
    { path: ':id', component: _components_chat_details_chat_details_component__WEBPACK_IMPORTED_MODULE_3__["ChatDetailsComponent"] }
];
class ChatsRoutingModule {
}
ChatsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatsRoutingModule });
ChatsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatsRoutingModule_Factory(t) { return new (t || ChatsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/chats/chats.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/chats/chats.module.ts ***!
  \*********************************************/
/*! exports provided: ChatsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsModule", function() { return ChatsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _chats_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chats-routing.module */ "./src/app/pages/chats/chats-routing.module.ts");
/* harmony import */ var _components_all_chats_all_chats_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/all-chats/all-chats.component */ "./src/app/pages/chats/components/all-chats/all-chats.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_chat_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/chat.reducer */ "./src/app/pages/chats/store/chat.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _store_chat_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/chat.effects */ "./src/app/pages/chats/store/chat.effects.ts");
/* harmony import */ var _components_chat_details_chat_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chat-details/chat-details.component */ "./src/app/pages/chats/components/chat-details/chat-details.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_chats_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/chats.service */ "./src/app/pages/chats/services/chats.service.ts");














class ChatsModule {
}
ChatsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatsModule });
ChatsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatsModule_Factory(t) { return new (t || ChatsModule)(); }, providers: [_services_chats_service__WEBPACK_IMPORTED_MODULE_10__["ChatsService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], imports: [[
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
            _chats_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatsRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_store_chat_reducer__WEBPACK_IMPORTED_MODULE_5__["chatsFeatureKey"], _store_chat_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_chat_effects__WEBPACK_IMPORTED_MODULE_7__["ChatEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatsModule, { declarations: [_components_all_chats_all_chats_component__WEBPACK_IMPORTED_MODULE_3__["AllChatsComponent"], _components_chat_details_chat_details_component__WEBPACK_IMPORTED_MODULE_8__["ChatDetailsComponent"]], imports: [_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
        _chats_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatsRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_all_chats_all_chats_component__WEBPACK_IMPORTED_MODULE_3__["AllChatsComponent"], _components_chat_details_chat_details_component__WEBPACK_IMPORTED_MODULE_8__["ChatDetailsComponent"]],
                imports: [
                    _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                    _chats_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChatsRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature(_store_chat_reducer__WEBPACK_IMPORTED_MODULE_5__["chatsFeatureKey"], _store_chat_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forFeature([_store_chat_effects__WEBPACK_IMPORTED_MODULE_7__["ChatEffects"]])
                ],
                providers: [_services_chats_service__WEBPACK_IMPORTED_MODULE_10__["ChatsService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/chats/components/all-chats/all-chats.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/chats/components/all-chats/all-chats.component.ts ***!
  \*************************************************************************/
/*! exports provided: AllChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllChatsComponent", function() { return AllChatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_chat_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/chat.actions */ "./src/app/pages/chats/store/chat.actions.ts");
/* harmony import */ var _store_chat_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/chat.selector */ "./src/app/pages/chats/store/chat.selector.ts");
/* harmony import */ var _services_chats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/chats.service */ "./src/app/pages/chats/services/chats.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");













function AllChatsComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", chat_r3 == null ? null : chat_r3.roomID);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", (chat_r3 == null ? null : chat_r3.image) ? chat_r3 == null ? null : chat_r3.image : "../../../../../assets/default-avatar.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", chat_r3 == null ? null : chat_r3.username, " ", (chat_r3 == null ? null : chat_r3.startAt) != null ? "( " + _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 4, (chat_r3 == null ? null : chat_r3.startAt.timestamp) * 1000, "medium") + " )" : "", "");
} }
function AllChatsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AllChatsComponent_div_0_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.name = $event; })("keyup", function AllChatsComponent_div_0_Template_input_keyup_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.applyFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AllChatsComponent_div_0_div_16_Template, 12, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "pagination-controls", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function AllChatsComponent_div_0_Template_pagination_controls_pageChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.pageChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, "manage-chats-page"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 10, "chat-search-input"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 12, "chat-search-input"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 14, ctx_r0.chatsList, ctx_r0.config));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("previousLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 17, "prev"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nextLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 19, "next"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("screenReaderCurrentLabel", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 21, "you-are-on-page"));
} }
function AllChatsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AllChatsComponent {
    constructor(store, chatService, toaster) {
        this.store = store;
        this.chatService = chatService;
        this.toaster = toaster;
        this.chatsList = [];
    }
    ngOnInit() {
        this.store.dispatch(_store_chat_actions__WEBPACK_IMPORTED_MODULE_2__["loadChats"]());
        // Get All Chats
        this.getAllChats();
    }
    getAllChats() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_chat_selector__WEBPACK_IMPORTED_MODULE_3__["chatsSelector"])).subscribe(response => {
            console.log('chats: ', response);
            this.chats = response;
            this.chatsList = response;
        });
        this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.chatsList.length
        };
    }
    // Handle Response Error
    handleError(error) {
        console.log(error);
        if (error.error.error) {
            this.toaster.error(error.error.error);
        }
        else if (error.error.msg) {
            this.toaster.error(error.error.msg);
        }
    }
    // Fetch The Page Number On Page Change
    pageChanged(event) {
        this.config.currentPage = event;
    }
    // Delete The Cars
    delete(carId) {
        if (confirm('Are You Sure You Want To Delete This Chat')) {
            // this.isDeleted = true;
            // this.store.dispatch(carAction.deleteCar({id: carId}));
            // this.toaster.success('Car Successfully Deleted');
            // fetch all product after delete Car
            this.getAllChats();
        }
        else {
            return false;
        }
    }
    applyFilter() {
        // if the search input value is empty
        if (!this.name) {
            this.chatsList = [...this.chats];
        }
        else {
            this.chatsList = [];
            this.chatsList = this.chats.filter(res => {
                if (res.username) {
                    const username = res.username.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
                    if (username) {
                        // display the Name Column
                        return username;
                    }
                }
            });
        }
    }
}
AllChatsComponent.ɵfac = function AllChatsComponent_Factory(t) { return new (t || AllChatsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chats_service__WEBPACK_IMPORTED_MODULE_4__["ChatsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
AllChatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllChatsComponent, selectors: [["app-all-chats"]], decls: 2, vars: 2, consts: [["class", "chats", 4, "ngIf"], [4, "ngIf"], [1, "chats"], [1, "container-fluid"], [1, "card", "my-5"], [1, "card-header"], [1, "text-center", "details-title", "my-4"], [1, "card-body", "p-2"], [1, "row"], [1, "col-10", "col-sm-8", "col-md-6", "col-xl-4"], [1, "form-group", "mb-0", "mt-3"], ["id", "exampleFormControlInput2", "type", "text", 1, "form-control", "form-control-underlined", "border-primary", "search-input", 3, "ngModel", "placeholder", "title", "ngModelChange", "keyup"], [1, "col-5", "col-md-6", "col-xl-8", "align-self-center"], [1, "messages-body", "my-3", "pt-3", "p-2"], ["class", "comment-block", 4, "ngFor", "ngForOf"], [1, "card-footer"], ["autoHide", "true", "maxSize", "5", "responsive", "true", "screenReaderPaginationLabel", "Pagination", "screenReaderPageLabel", "page", 1, "my-pagination", 3, "previousLabel", "nextLabel", "screenReaderCurrentLabel", "pageChange"], [1, "comment-block"], [3, "routerLink"], [1, "col-2", "col-lg-1", "text-center", "pr-0", "align-self-center"], [1, "user-img"], ["alt", "", 1, "res-image", 3, "src"], [1, "col-10", "col-lg-11", "mt-2", "mt-sm-0"], [1, "comment-body", "py-2", "px-3"], [1, "time"], [1, "pb-1"], [1, "lds-ring"]], template: function AllChatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllChatsComponent_div_0_Template, 23, 23, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AllChatsComponent_div_1_Template, 6, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chats.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chats.length === 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLinkWithHref"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".user-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  position: relative;\n  border: 2px solid #517197;\n  max-width: 100%;\n}\n.user-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.comment-body[_ngcontent-%COMP%] {\n  border: 1px solid #517197;\n}\n.comment-body[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #3a3a3a;\n}\n.comment-body[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  color: #9e9e9e;\n}\n.comment-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  background: #517197;\n  color: #fff;\n  margin: 15px 10px;\n  outline: none;\n  transition: all 0.5s ease-in-out;\n  -webkit-transition: all 0.5s ease-in-out;\n}\n.comment-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: none;\n  color: #517197;\n  border: 1px solid #517197;\n}\n.comment-block[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdHMvY29tcG9uZW50cy9hbGwtY2hhdHMvRDpcXFNlcnZlcnNcXGRhc2hib2FyZHNcXHR1cmt5LWRlcGxveS9zcmNcXGFwcFxccGFnZXNcXGNoYXRzXFxjb21wb25lbnRzXFxhbGwtY2hhdHNcXGFsbC1jaGF0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhdHMvY29tcG9uZW50cy9hbGwtY2hhdHMvYWxsLWNoYXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jaGF0cy9jb21wb25lbnRzL2FsbC1jaGF0cy9EOlxcU2VydmVyc1xcZGFzaGJvYXJkc1xcdHVya3ktZGVwbG95L3NyY1xcX3ZhcmlhYmxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNBRjtBRFVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1JKO0FEWUE7RUFDRSx5QkFBQTtBQ1RGO0FEV0k7RUFDRSxjRXZCUTtBRGNkO0FEVU07RUFDRSxjRXZCSztBRGViO0FEWUU7RUFDRSw2QkFBQTtFQUNBLG1CRXBDUztFRnFDVCxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtBQ1ZKO0FEV0k7RUFDRSxnQkFBQTtFQUNBLGNFNUNPO0VGNkNQLHlCQUFBO0FDVE47QURjQTtFQUNFLG1CQUFBO0FDWEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaGF0cy9jb21wb25lbnRzL2FsbC1jaGF0cy9hbGwtY2hhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi92YXJpYWJsZSc7XHJcbi51c2VyLWltZ3tcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAkbGlnaHRfYmx1ZTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgLy8mOmFmdGVyIHtcclxuICAvLyAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vICBjb250ZW50OiAnJztcclxuICAvLyAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgJGxpZ2h0X2JsdWU7XHJcbiAgLy8gIGJvcmRlci10b3A6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAvLyAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIC8vICByaWdodDogLTEwcHg7XHJcbiAgLy8gIHRvcDogY2FsYyg1MCUgLSA1cHgpO1xyXG4gIC8vfVxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB9XHJcbn1cclxuXHJcbi5jb21tZW50LWJvZHkge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodF9ibHVlO1xyXG4gIC50aW1lIHtcclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogJGxpZ2h0X2JsYWNrO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJGxpZ2h0X2dyZXk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogJGxpZ2h0X2JsdWU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMTVweCAxMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAkbGlnaHRfYmx1ZTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpZ2h0X2JsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY29tbWVudC1ibG9jayB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4iLCIudXNlci1pbWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzUxNzE5NztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuLnVzZXItaW1nIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNvbW1lbnQtYm9keSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MTcxOTc7XG59XG4uY29tbWVudC1ib2R5IC50aW1lIHNwYW4ge1xuICBjb2xvcjogIzNhM2EzYTtcbn1cbi5jb21tZW50LWJvZHkgLnRpbWUgc3Bhbjpob3ZlciB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuLmNvbW1lbnQtYm9keSBidXR0b24ge1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogIzUxNzE5NztcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogMTVweCAxMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cbi5jb21tZW50LWJvZHkgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICM1MTcxOTc7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM1MTcxOTc7XG59XG5cbi5jb21tZW50LWJsb2NrIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iLCIkbGlnaHRfYmx1ZTogIzUxNzE5NztcclxuJHNpZGViYXJfaXRlbV9idXR0b246IHJnYmEoNTQsIDcyLCA5NCwgMC45Mik7XHJcbiRzaWRlYmFyX2l0ZW1fYnV0dG9uX2xhbmc6IHJnYmEoNTQsIDcyLCA5NCwgMCk7XHJcbiRtZWRpdW1fYmx1ZTogIzM2NDg1ZTtcclxuJGxpZ2h0X2JsdWVfaG92ZXI6ICMzNjQ4NWU7XHJcbiRsaWdodF9ibGFjazogIzNhM2EzYTtcclxuJGxpZ2h0X21lZHVpbV9ibGFjazogIzMwMzAzMDtcclxuJGxpZ2h0X2dyZXk6ICM5ZTllOWU7XHJcblxyXG5cclxuJGxpZ2h0X3doaXRlOiAjZjFmYWVlO1xyXG4kbWVkaXVtX2xpZ2h0X2JsdWU6ICM1MDg1YTc7XHJcbiRkYXJrX2JsdWU6ICMxZDM1NTc7XHJcbiRxdWlldF9ncmVlbjogIzJhOWQ4ZjtcclxuJHdhcm1fZ3JlZW46ICMyMWE1Yjg7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllChatsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-chats',
                templateUrl: './all-chats.component.html',
                styleUrls: ['./all-chats.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _services_chats_service__WEBPACK_IMPORTED_MODULE_4__["ChatsService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/chats/components/chat-details/chat-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/chats/components/chat-details/chat-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ChatDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDetailsComponent", function() { return ChatDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_chats_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/chats.service */ "./src/app/pages/chats/services/chats.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");












function ChatDetailsComponent_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (message_r1 == null ? null : message_r1.msg) ? message_r1.msg : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, message_r1.sentDate, "h:mm a"));
} }
function ChatDetailsComponent_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (message_r1 == null ? null : message_r1.msg) ? message_r1.msg : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 2, message_r1.sentDate, "h:mm a"));
} }
function ChatDetailsComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ChatDetailsComponent_ng_container_7_ng_container_1_Template, 7, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChatDetailsComponent_ng_container_7_ng_container_2_Template, 7, 5, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r1.sender == ctx_r0.firstSender);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r1.sender == ctx_r0.secondSender);
} }
class ChatDetailsComponent {
    constructor(chatService, formBuilder, toaster, activatedRoute, translate, render, document) {
        this.chatService = chatService;
        this.formBuilder = formBuilder;
        this.toaster = toaster;
        this.activatedRoute = activatedRoute;
        this.translate = translate;
        this.render = render;
        this.document = document;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.checkMessageBodyScrollHeight();
        // Fetch Form Data
        this.messageForm = this.formBuilder.group({
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            roomId: ['']
        });
        this.activatedRoute.params.subscribe(params => {
            console.log(params);
            this.getMessages(params.id);
        });
    }
    getMessages(roomId) {
        // Check Room Id exists
        if (roomId) {
            this.messageForm.get('roomId').setValue(roomId);
            this.chatService.getMessagesObservable(roomId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$))
                .subscribe((messages) => {
                // console.log('messages: ', messages);
                this.messages = [];
                messages.docs.forEach((e, i) => {
                    // Get ALl Message by e.data()
                    this.messages.push(e.data());
                });
                // Sort Messages Depending On Message Date
                this.messages.sort((a, b) => a.sentDate.localeCompare(b.sentDate));
                // console.log('after sort Messages : ', this.messages);
                // Check if the messages is not empty
                if (this.messages.length > 0) {
                    this.secondSender = 'admin';
                    for (let i = 0; i < this.messages.length - 1; i++) {
                        // check if firstSender And secondSender still empty
                        if (this.firstSender == null) {
                            // Check if the this sender equal to next sender
                            if (this.messages[i].sender != this.secondSender) {
                                this.firstSender = this.messages[i].sender;
                            }
                        }
                        /* Second Way If firstSender And SecondSender is Undefined
                        if (this.firstSender == null || this.secondSender == null) {
                          // Check if the this sender equal to next sender
                          if (this.messages[i].sender == this.messages[i + 1].sender) {
                            this.firstSender = this.messages[i].sender;
                          } else {
                            // check if this sender not equal to The stored firstSender
                            if (this.messages[i].sender != this.firstSender) {
                              this.secondSender = this.messages[i].sender;
                            } else {
                              this.secondSender = this.messages[i + 1].sender;
                            }
                          }
                        }*/
                    }
                }
            }, error => console.log('Error ', error), () => {
                // Sort Messages Depending On Message Date
                this.messages.sort((a, b) => a.sentDate.localeCompare(b.sentDate));
                console.log('after sort Messages : ', this.messages);
                // Check if the messages is not empty
                if (this.messages.length > 0) {
                    this.secondSender = 'admin';
                    for (let i = 0; i < this.messages.length - 1; i++) {
                        // check if firstSender And secondSender still empty
                        if (this.firstSender == null) {
                            // Check if the this sender equal to next sender
                            if (this.messages[i].sender != this.secondSender) {
                                this.firstSender = this.messages[i].sender;
                            }
                        }
                        /* Second Way If firstSender And SecondSender is Undefined
                        if (this.firstSender == null || this.secondSender == null) {
                          // Check if the this sender equal to next sender
                          if (this.messages[i].sender == this.messages[i + 1].sender) {
                            this.firstSender = this.messages[i].sender;
                          } else {
                            // check if this sender not equal to The stored firstSender
                            if (this.messages[i].sender != this.firstSender) {
                              this.secondSender = this.messages[i].sender;
                            } else {
                              this.secondSender = this.messages[i + 1].sender;
                            }
                          }
                        }*/
                    }
                    console.log('firstSender : ', this.firstSender);
                    console.log('secondSender : ', this.secondSender);
                }
            });
        }
    }
    // Scroll to latest message when messages display
    checkMessageBodyScrollHeight() {
        const elementExists = setInterval(() => {
            const messageBody = this.document.querySelector('.messages-body');
            if (messageBody.scrollHeight > 40) {
                messageBody.scrollTop = messageBody.scrollHeight;
                clearInterval(elementExists);
            }
        }, 100);
    }
    checkMessageDirectionForRtl() {
        if (true) {
            const elementExists = setInterval(() => {
                const messageBody = this.document.querySelector('.messages-body');
                if (messageBody.scrollHeight > 40) {
                    messageBody.scrollTop = messageBody.scrollHeight;
                    clearInterval(elementExists);
                }
            }, 100);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    onSubmit() {
        if (!this.messageForm.valid) {
            this.toaster.error('Error : Can\'t Send An Empty Message');
        }
        else {
            const formMessages = this.messageForm.getRawValue();
            console.log(formMessages);
            if (formMessages.roomId) {
                this.chatService.sendMessage(formMessages.roomId, formMessages.message, 'admin');
            }
            else {
                this.toaster.error('Error, Please Try Later');
            }
            this.messageForm.reset();
            this.getMessages(formMessages.roomId);
        }
    }
}
ChatDetailsComponent.ɵfac = function ChatDetailsComponent_Factory(t) { return new (t || ChatDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chats_service__WEBPACK_IMPORTED_MODULE_5__["ChatsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); };
ChatDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatDetailsComponent, selectors: [["app-chat-details"]], decls: 17, vars: 12, consts: [[1, "messages"], [1, "container"], [1, "text-center", "my-4"], [1, "col-12", "col-md-8", "mx-auto", "border", "mt-4"], [1, "messages-body", "my-3", "pt-3", "p-2"], [4, "ngFor", "ngForOf"], [1, "", 3, "formGroup", "ngSubmit"], [1, "input-group", "mb-3"], ["type", "text", "name", "message", "formControlName", "message", "aria-label", "Type here", "aria-describedby", "basic-addon2", 1, "form-control", 3, "placeholder"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "col-12", "col-sm-11", "col-md-10", "recieved-message", "text-white", "py-1", "px-2", "rounded", "bg-light-blue", "mr-custom-auto"], [1, "message-time"], [1, "col-12", "col-sm-11", "col-md-10", "recieved-message", "text-white", "py-1", "px-2", "rounded", "bg-grey-blue", "ml-custom-auto"]], template: function ChatDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ChatDetailsComponent_ng_container_7_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChatDetailsComponent_Template_form_ngSubmit_9_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "chat-room"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.messageForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, "type-here"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.messageForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 10, "send"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["@media (min-width: 992px) and (max-width: 1199px) {\n  .messages[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .messages[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .messages[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    background: none !important;\n    color: #21a5b8 !important;\n  }\n}\n@media (max-width: 575px) {\n  .messages[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n    background: none !important;\n    color: #21a5b8 !important;\n  }\n}\n.messages-body[_ngcontent-%COMP%] {\n  max-height: 70vh;\n  overflow-y: scroll;\n  direction: ltr;\n}\n.messages-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 3px;\n}\n.messages-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n.messages-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #ccc;\n}\n.messages-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #aaa;\n}\n.messages-body[_ngcontent-%COMP%]   .recieved-message[_ngcontent-%COMP%] {\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.messages-body[_ngcontent-%COMP%]   .recieved-message[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdHMvY29tcG9uZW50cy9jaGF0LWRldGFpbHMvRDpcXFNlcnZlcnNcXGRhc2hib2FyZHNcXHR1cmt5LWRlcGxveS9zcmNcXGFwcFxccGFnZXNcXGNoYXRzXFxjb21wb25lbnRzXFxjaGF0LWRldGFpbHNcXGNoYXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhdHMvY29tcG9uZW50cy9jaGF0LWRldGFpbHMvY2hhdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBREo7SUFFTSxpQkFBQTtFQ0FSO0FBQ0Y7QURDUTtFQUpKO0lBS00sZUFBQTtFQ0VSO0FBQ0Y7QUREUTtFQVBKO0lBUU0sZUFBQTtJQUNBLDJCQUFBO0lBQ0EseUJBQUE7RUNJUjtBQUNGO0FESFE7RUFaSjtJQWFNLGlCQUFBO0lBQ0EsMkJBQUE7SUFDQSx5QkFBQTtFQ01SO0FBQ0Y7QURIQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTUo7QURMSTtFQUNJLFVBQUE7QUNPUjtBRExJO0VBQ0ksbUJBQUE7QUNPUjtBRExJO0VBQ0ksZ0JBQUE7QUNPUjtBRExJO0VBQ0ksZ0JBQUE7QUNPUjtBRExJO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDT1I7QUROUTtFQUFnQixpQkFBQTtFQUFrQixnQkFBQTtBQ1UxQyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXRzL2NvbXBvbmVudHMvY2hhdC1kZXRhaWxzL2NoYXQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlcyB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6ICc5OTJweCcpIGFuZCAobWF4LXdpZHRoOiAnMTE5OXB4Jykge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAnNzY4cHgnKSBhbmQgKG1heC13aWR0aDogJzk5MXB4Jykge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogJzU3NnB4JykgYW5kIChtYXgtd2lkdGg6ICc3NjdweCcpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGNvbG9yOiAjMjFhNWI4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAnNTc1cHgnKSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGNvbG9yOiAjMjFhNWI4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5tZXNzYWdlcy1ib2R5IHtcclxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBkaXJlY3Rpb246IGx0cjtcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgfVxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbiAgICB9XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIH1cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhO1xyXG4gICAgfVxyXG4gICAgLnJlY2lldmVkLW1lc3NhZ2Uge1xyXG4gICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgICAgICAubWVzc2FnZS10aW1lIHsgZm9udC1zaXplOiAuN3JlbTsgZm9udC13ZWlnaHQ6IDEwMDt9XHJcbiAgICB9XHJcbn1cclxuIiwiQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5tZXNzYWdlcyBoMSB7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5tZXNzYWdlcyBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubWVzc2FnZXMgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6ICMyMWE1YjggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIC5tZXNzYWdlcyBoMSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjMjFhNWI4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLm1lc3NhZ2VzLWJvZHkge1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGRpcmVjdGlvbjogbHRyO1xufVxuLm1lc3NhZ2VzLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDNweDtcbn1cbi5tZXNzYWdlcy1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG4ubWVzc2FnZXMtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjY2NjO1xufVxuLm1lc3NhZ2VzLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2FhYTtcbn1cbi5tZXNzYWdlcy1ib2R5IC5yZWNpZXZlZC1tZXNzYWdlIHtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuLm1lc3NhZ2VzLWJvZHkgLnJlY2lldmVkLW1lc3NhZ2UgLm1lc3NhZ2UtdGltZSB7XG4gIGZvbnQtc2l6ZTogMC43cmVtO1xuICBmb250LXdlaWdodDogMTAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chat-details',
                templateUrl: './chat-details.component.html',
                styleUrls: ['./chat-details.component.scss']
            }]
    }], function () { return [{ type: _services_chats_service__WEBPACK_IMPORTED_MODULE_5__["ChatsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/chats/services/chats.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/chats/services/chats.service.ts ***!
  \*******************************************************/
/*! exports provided: ChatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsService", function() { return ChatsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _AdminConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../AdminConfig */ "./src/app/pages/AdminConfig.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin-service/token/token.service */ "./src/app/pages/admin-service/token/token.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");









class ChatsService {
    constructor(httpClient, tokenService, datePipe, firestore) {
        this.httpClient = httpClient;
        this.tokenService = tokenService;
        this.datePipe = datePipe;
        this.firestore = firestore;
    }
    static errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error || 'Server Error');
    }
    getAllChats() {
        return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_2__["AdminConfig"].chatsAPI, this.tokenService.httpOptions()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(ChatsService.errorHandler));
    }
    // This sends the message
    sendMessage(chatRoomId, message, clientId) {
        const chatMsg = {
            msg: message,
            sender: clientId,
            sentDate: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss', 'TZD').toString()
        };
        this.firestore.collection('chat_rooms')
            .doc(chatRoomId)
            .collection('messages').add(chatMsg);
    }
    // This Listens to messages changes in the chat room
    getMessagesObservable(chatRoomId) {
        if (chatRoomId) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.firestore.collection('chat_rooms')
                .doc(chatRoomId).collection('messages').get()));
        }
    }
}
ChatsService.ɵfac = function ChatsService_Factory(t) { return new (t || ChatsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"])); };
ChatsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatsService, factory: ChatsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _admin_service_token_token_service__WEBPACK_IMPORTED_MODULE_5__["TokenService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/chats/store/chat.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/chats/store/chat.actions.ts ***!
  \***************************************************/
/*! exports provided: loadChats, loadChatsSuccess, loadChatsFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadChats", function() { return loadChats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadChatsSuccess", function() { return loadChatsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadChatsFailure", function() { return loadChatsFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const loadChats = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Chat/API] Load Chats');
const loadChatsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Chat/API] Load Chats Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadChatsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Chat/API] Load Chats Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/pages/chats/store/chat.effects.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/chats/store/chat.effects.ts ***!
  \***************************************************/
/*! exports provided: ChatEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatEffects", function() { return ChatEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _chat_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.actions */ "./src/app/pages/chats/store/chat.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_chats_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/chats.service */ "./src/app/pages/chats/services/chats.service.ts");








class ChatEffects {
    constructor(actions$, chatService) {
        this.actions$ = actions$;
        this.chatService = chatService;
        this.loadChats$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_chat_actions__WEBPACK_IMPORTED_MODULE_2__["loadChats"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.chatService.getAllChats()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => _chat_actions__WEBPACK_IMPORTED_MODULE_2__["loadChatsSuccess"](response)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_chat_actions__WEBPACK_IMPORTED_MODULE_2__["loadChatsFailure"](error)))))));
    }
}
ChatEffects.ɵfac = function ChatEffects_Factory(t) { return new (t || ChatEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_chats_service__WEBPACK_IMPORTED_MODULE_5__["ChatsService"])); };
ChatEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatEffects, factory: ChatEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_chats_service__WEBPACK_IMPORTED_MODULE_5__["ChatsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/chats/store/chat.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/chats/store/chat.reducer.ts ***!
  \***************************************************/
/*! exports provided: chatsFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatsFeatureKey", function() { return chatsFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js");
/* harmony import */ var _chat_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.actions */ "./src/app/pages/chats/store/chat.actions.ts");



const chatsFeatureKey = 'chats';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    // additional entity state properties
    Data: undefined,
    error: undefined
});
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_chat_actions__WEBPACK_IMPORTED_MODULE_2__["loadChatsSuccess"], (state, action) => adapter.setAll(action.Data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_chat_actions__WEBPACK_IMPORTED_MODULE_2__["loadChatsFailure"], (state, action) => {
    return Object.assign(Object.assign({}, state), { error: action.error });
}));
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/pages/chats/store/chat.selector.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/chats/store/chat.selector.ts ***!
  \****************************************************/
/*! exports provided: chatsSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatsSelector", function() { return chatsSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _chat_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.reducer */ "./src/app/pages/chats/store/chat.reducer.ts");


const chatFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_chat_reducer__WEBPACK_IMPORTED_MODULE_1__["chatsFeatureKey"]);
const chatsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(chatFeatureState, _chat_reducer__WEBPACK_IMPORTED_MODULE_1__["selectAll"]);


/***/ })

}]);
//# sourceMappingURL=chats-chats-module-es2015.js.map
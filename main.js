(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ 2409);
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/post/post.component */ 3915);
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/posts/posts.component */ 4168);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile.component */ 7094);
/* harmony import */ var _services_post_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/post.resolver */ 6459);
/* harmony import */ var _services_profile_resolver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/profile.resolver */ 7678);











const routes = [
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
    },
    {
        path: '',
        canActivate: [src_app_services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService],
        component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__.MainComponent,
        children: [
            { path: 'posts', component: _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_4__.PostsComponent },
            {
                path: 'posts/:id',
                component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_3__.PostComponent,
                resolve: { post: _services_post_resolver__WEBPACK_IMPORTED_MODULE_6__.PostResolver },
            },
            {
                path: 'profile/:id',
                component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent,
                resolve: { user: _services_profile_resolver__WEBPACK_IMPORTED_MODULE_7__.ProfileResolver },
            },
            { path: '', redirectTo: 'posts', pathMatch: 'prefix' },
        ],
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
        providers: [_services_post_resolver__WEBPACK_IMPORTED_MODULE_6__.PostResolver, _services_profile_resolver__WEBPACK_IMPORTED_MODULE_7__.ProfileResolver],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_10__.PreloadAllModules }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _interceptors_session_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors/session.interceptor */ 7222);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ 7143);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ 2409);
/* harmony import */ var _components_post_modal_post_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/post-modal/post-modal.component */ 8068);
/* harmony import */ var _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/posts/posts.component */ 4168);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/post/post.component */ 3915);
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user/user.component */ 241);
/* harmony import */ var _components_user_current_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/user/current-user.component */ 1537);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ 7094);
/* harmony import */ var _components_post_card_post_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/post-card/post-card */ 3195);
/* harmony import */ var _components_tag_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/tag/tag */ 2899);
/* harmony import */ var _components_breadcrumbs_breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/breadcrumbs/breadcrumbs/breadcrumbs */ 2777);






















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__.MainComponent,
            _components_posts_posts_component__WEBPACK_IMPORTED_MODULE_6__.PostsComponent,
            _components_post_modal_post_modal_component__WEBPACK_IMPORTED_MODULE_5__.PostModalComponent,
            _components_post_post_component__WEBPACK_IMPORTED_MODULE_7__.PostComponent,
            _components_user_user_component__WEBPACK_IMPORTED_MODULE_8__.UserComponent,
            _components_user_current_user_component__WEBPACK_IMPORTED_MODULE_9__.CurrentUserComponent,
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__.ProfileComponent,
            _components_post_card_post_card__WEBPACK_IMPORTED_MODULE_11__.PostCardComponent,
            _components_tag_tag__WEBPACK_IMPORTED_MODULE_12__.TagComponent,
            _components_breadcrumbs_breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_13__.BreadcrumbsComponent,
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClientModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HTTP_INTERCEPTORS,
                useClass: _interceptors_session_interceptor__WEBPACK_IMPORTED_MODULE_2__.SessionInterceptor,
                multi: true,
            },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_17__.IonicRouteStrategy },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 6325:
/*!**********************************************!*\
  !*** ./src/app/components/base.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);




let BaseComponent = class BaseComponent {
    constructor() {
        this.subs = new Map();
        this.loading = false;
    }
    imgUrl(url) {
        if (!url.indexOf('/static')) {
            return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + url;
        }
        return url;
    }
    ngOnDestroy() {
        this.clearAllSubs();
    }
    clearSub(name = BaseComponent.defaultSubName) {
        if (this.subs.has(name)) {
            this.subs.get(name).forEach((s) => s.unsubscribe());
            this.subs.delete(name);
        }
    }
    clearAllSubs() {
        this.subs.forEach((_, name) => {
            this.clearSub(name);
        });
    }
    addSub(name, ...subs) {
        if (!name) {
            return;
        }
        const widthDefaultName = name instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription;
        const key = widthDefaultName
            ? BaseComponent.defaultSubName
            : name;
        if (!this.subs.has(key)) {
            this.subs.set(key, []);
        }
        if (widthDefaultName) {
            this.subs.get(key).push(name);
        }
        this.subs.get(key).push(...subs);
    }
};
BaseComponent.defaultSubName = 'default';
BaseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({ template: '' })
], BaseComponent);



/***/ }),

/***/ 2777:
/*!*******************************************************************!*\
  !*** ./src/app/components/breadcrumbs/breadcrumbs/breadcrumbs.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbsComponent": () => (/* binding */ BreadcrumbsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _breadcrumbs_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breadcrumbs.html?ngResource */ 7619);
/* harmony import */ var _breadcrumbs_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumbs.scss?ngResource */ 9132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base.component */ 6325);





let BreadcrumbsComponent = class BreadcrumbsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor() {
        super(...arguments);
        this.class = 'icl-breadcrumbs';
        this.items = [];
    }
};
BreadcrumbsComponent.propDecorators = {
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.HostBinding, args: ['class',] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
BreadcrumbsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-breadcrumbs',
        template: _breadcrumbs_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewEncapsulation.None,
        styles: [_breadcrumbs_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BreadcrumbsComponent);



/***/ }),

/***/ 7143:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 4437);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 9436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ 6325);







let LoginComponent = class LoginComponent extends _base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
    constructor(loginService, router) {
        super();
        this.loginService = loginService;
        this.router = router;
    }
    loginWithGoogle() {
        this.addSub(this.loginService.googleSignIn().subscribe(() => {
            this.router.navigateByUrl('/');
        }));
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 2409:
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component.html?ngResource */ 2840);
/* harmony import */ var _main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component.scss?ngResource */ 2132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ 6325);






let MainComponent = class MainComponent extends _base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
    constructor(loginService) {
        super();
        this.loginService = loginService;
    }
    get user() {
        return this.loginService.user;
    }
};
MainComponent.ctorParameters = () => [
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
MainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        template: _main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_main_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainComponent);



/***/ }),

/***/ 3195:
/*!***************************************************!*\
  !*** ./src/app/components/post-card/post-card.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostCardComponent": () => (/* binding */ PostCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _post_card_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-card.html?ngResource */ 3509);
/* harmony import */ var _post_card_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-card.scss?ngResource */ 2561);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ 6325);





let PostCardComponent = class PostCardComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor() {
        super(...arguments);
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
};
PostCardComponent.propDecorators = {
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    canDelete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    hideAuthor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    delete: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Output }]
};
PostCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-post-card',
        template: _post_card_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_post_card_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PostCardComponent);



/***/ }),

/***/ 8068:
/*!***************************************************************!*\
  !*** ./src/app/components/post-modal/post-modal.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostModalComponent": () => (/* binding */ PostModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _post_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-modal.component.html?ngResource */ 8119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var src_app_services_posts_servie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/posts.servie */ 517);
/* harmony import */ var src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/resource.service */ 7467);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ 6325);









let PostModalComponent = class PostModalComponent extends _base_component__WEBPACK_IMPORTED_MODULE_4__.BaseComponent {
    constructor(formBuilder, postsService, loginService, resourceService) {
        super();
        this.formBuilder = formBuilder;
        this.postsService = postsService;
        this.loginService = loginService;
        this.resourceService = resourceService;
        this.visible = false;
        this.afterSave = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.form = this.formBuilder.group({
            img: [],
            title: [],
            text: [],
            region: [],
            type: [],
        });
        this.$regions = this.resourceService.getRegions();
        this.$types = this.resourceService.getTypes();
    }
    open() {
        this.visible = true;
    }
    save() {
        this.form.markAllAsTouched();
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.addSub(this.postsService
            .create(Object.assign(Object.assign({}, this.form.value), { from: this.loginService.user }))
            .subscribe(() => {
            this.visible = false;
            this.loading = false;
            // this.form.reset();
            this.afterSave.emit();
        }));
    }
};
PostModalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_posts_servie__WEBPACK_IMPORTED_MODULE_2__.PostsService },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService },
    { type: src_app_services_resource_service__WEBPACK_IMPORTED_MODULE_3__.ResourceService }
];
PostModalComponent.propDecorators = {
    visible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    afterSave: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output }],
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonModal,] }]
};
PostModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        template: _post_modal_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        selector: 'app-post-modal',
    })
], PostModalComponent);



/***/ }),

/***/ 3915:
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostComponent": () => (/* binding */ PostComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _post_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.component.html?ngResource */ 1916);
/* harmony import */ var _post_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.component.scss?ngResource */ 3802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ 6325);






let PostComponent = class PostComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(activeRoute) {
        super();
        this.activeRoute = activeRoute;
        this.activeRoute.data.subscribe((data) => {
            this.post = data.post;
        });
    }
};
PostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
PostComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        template: _post_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_post_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PostComponent);



/***/ }),

/***/ 4168:
/*!*****************************************************!*\
  !*** ./src/app/components/posts/posts.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsComponent": () => (/* binding */ PostsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _posts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.component.html?ngResource */ 5835);
/* harmony import */ var _posts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.component.scss?ngResource */ 7062);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var src_app_services_posts_servie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/posts.servie */ 517);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.component */ 6325);









let PostsComponent = class PostsComponent extends _base_component__WEBPACK_IMPORTED_MODULE_4__.BaseComponent {
    constructor(postsService, activeRoute, loginService) {
        super();
        this.postsService = postsService;
        this.activeRoute = activeRoute;
        this.loginService = loginService;
        this.text = '';
        this.page = 0;
        this.posts = [];
        this.modalVisible = false;
        this.activeRoute.data.subscribe((data) => {
            this.modalVisible = !!data.new;
        });
    }
    get currentUser() {
        return this.loginService.user;
    }
    ngOnInit() {
        this.loadMore(0);
    }
    loadMore(page = this.page + 1) {
        this.addSub(this.postsService.list(page, 10, this.userId).subscribe((messages) => {
            if (messages.length) {
                this.page = page;
            }
            if (page === 0) {
                this.posts = messages;
            }
            else {
                this.posts = this.posts.concat(messages);
            }
            this.infinityScroll.complete();
        }));
    }
    delete() {
        this.addSub(this.postsService.delete(this.posts[this.delIndex]).subscribe(() => {
            this.posts.splice(this.delIndex, 1);
            this.delIndex = undefined;
        }));
    }
};
PostsComponent.ctorParameters = () => [
    { type: src_app_services_posts_servie__WEBPACK_IMPORTED_MODULE_3__.PostsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService }
];
PostsComponent.propDecorators = {
    userId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }],
    infinityScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonInfiniteScroll,] }]
};
PostsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-posts',
        template: _posts_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_posts_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PostsComponent);



/***/ }),

/***/ 7094:
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.component.html?ngResource */ 4424);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ 6325);





let ProfileComponent = class ProfileComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor(activeRoute) {
        super();
        this.activeRoute = activeRoute;
        this.activeRoute.data.subscribe((data) => {
            this.user = data.user;
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute }
];
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        template: _profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], ProfileComponent);



/***/ }),

/***/ 2899:
/*!***************************************!*\
  !*** ./src/app/components/tag/tag.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagComponent": () => (/* binding */ TagComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tag_scss_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tag.scss?ngResource */ 8894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ 6325);




let TagComponent = class TagComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor() {
        super(...arguments);
        this.primary = false;
        this.class = 'icl-tag';
    }
};
TagComponent.propDecorators = {
    primary: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding, args: ['class.primary',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostBinding, args: ['class',] }]
};
TagComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tag',
        template: '<ng-content></ng-content>',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
        styles: [_tag_scss_ngResource__WEBPACK_IMPORTED_MODULE_0__]
    })
], TagComponent);



/***/ }),

/***/ 1537:
/*!***********************************************************!*\
  !*** ./src/app/components/user/current-user.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentUserComponent": () => (/* binding */ CurrentUserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _current_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-user.component.html?ngResource */ 7332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ 4120);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ 241);





let CurrentUserComponent = class CurrentUserComponent extends _user_component__WEBPACK_IMPORTED_MODULE_2__.UserComponent {
    constructor(loginService) {
        super();
        this.loginService = loginService;
        this.user = this.loginService.user;
    }
    logout() {
        this.loginService.logout();
    }
};
CurrentUserComponent.ctorParameters = () => [
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService }
];
CurrentUserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-current-user',
        template: _current_user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], CurrentUserComponent);



/***/ }),

/***/ 241:
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component.html?ngResource */ 8649);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.component */ 6325);




let UserComponent = class UserComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__.BaseComponent {
    constructor() {
        super(...arguments);
        this.prefix = '';
    }
};
UserComponent.propDecorators = {
    link: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    prefix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    hideName: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
UserComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-user',
        template: _user_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], UserComponent);



/***/ }),

/***/ 7222:
/*!*****************************************************!*\
  !*** ./src/app/interceptors/session.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionInterceptor": () => (/* binding */ SessionInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/login.service */ 4120);







let SessionInterceptor = class SessionInterceptor {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    intercept(req, next) {
        return this.loginService.getToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.switchMap)((token) => {
            const newRequestToApi = req.clone({
                url: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + req.url,
                headers: req.headers.set('Authorization', `Bearer ${token}`),
            });
            return next.handle(newRequestToApi).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)({
                next: (resp) => { },
                error: (event) => {
                    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse && event.status === 401) {
                        this.loginService.setToken(undefined);
                        this.router.navigateByUrl('/login');
                        return;
                    }
                },
            }));
        }));
    }
};
SessionInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService }
];
SessionInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()
], SessionInterceptor);



/***/ }),

/***/ 4120:
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4383);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ 1784);
/* harmony import */ var _capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/preferences */ 5191);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);








const STORAGE_KEY = 'token';
let LoginService = class LoginService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuth.initialize({
            clientId: '564169523192-ral083ni5ft6rfmahepe4oenn5990hsa.apps.googleusercontent.com',
            scopes: ['profile', 'email'],
        });
    }
    setToken(token) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(_capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.set({ key: STORAGE_KEY, value: token })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(() => {
            this.token = token;
        }));
    }
    getToken() {
        if (this.token) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.token);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(_capacitor_preferences__WEBPACK_IMPORTED_MODULE_1__.Preferences.get({ key: STORAGE_KEY })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((tokenStorage) => tokenStorage.value));
    }
    canActivate() {
        return this.getToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((token) => {
            if (this.user) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.user);
            }
            else {
                return this.http.get('/private/user');
            }
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
            this.router.navigateByUrl('/login');
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((user) => {
            this.user = user;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((user) => !!user));
    }
    googleSignIn() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(_codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuth.signIn()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((user) => {
            console.log(user);
            return this.attemplGoogleAndLogin(user);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((user) => {
            this.setToken(user.token);
            this.user = user;
        }));
    }
    attemplGoogleAndLogin(user) {
        return this.http.post(`/login/google`, {
            token: user.authentication.idToken,
        });
    }
    get(id) {
        return this.http.get('/private/user/' + id);
    }
    logout() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(_codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuth.signOut()).subscribe(() => {
            this.setToken(undefined);
            this.router.navigateByUrl('/login');
        });
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injectable)({
        providedIn: 'root',
    })
], LoginService);



/***/ }),

/***/ 6459:
/*!*******************************************!*\
  !*** ./src/app/services/post.resolver.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostResolver": () => (/* binding */ PostResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _posts_servie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts.servie */ 517);



let PostResolver = class PostResolver {
    constructor(postService) {
        this.postService = postService;
    }
    resolve(route, state) {
        return this.postService.get(route.paramMap.get('id'));
    }
};
PostResolver.ctorParameters = () => [
    { type: _posts_servie__WEBPACK_IMPORTED_MODULE_0__.PostsService }
];
PostResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], PostResolver);



/***/ }),

/***/ 517:
/*!******************************************!*\
  !*** ./src/app/services/posts.servie.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostsService": () => (/* binding */ PostsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



let PostsService = class PostsService {
    constructor(http) {
        this.http = http;
        this.postUrl = '/private/post';
    }
    list(page = 0, pageSize = 10, userId) {
        const params = new URLSearchParams();
        params.set('skip', (page * pageSize).toString());
        params.set('limit', pageSize.toString());
        if (userId) {
            params.set('userId', userId);
        }
        return this.http.get(this.postUrl + `?${params}`);
    }
    create(post) {
        return this.http.post(this.postUrl, post);
    }
    delete(post) {
        // eslint-disable-next-line no-underscore-dangle
        return this.http.delete(`${this.postUrl}/${post._id}`);
    }
    get(id) {
        return this.http.get(`${this.postUrl}/${id}`);
    }
};
PostsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
PostsService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root',
    })
], PostsService);



/***/ }),

/***/ 7678:
/*!**********************************************!*\
  !*** ./src/app/services/profile.resolver.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileResolver": () => (/* binding */ ProfileResolver)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.service */ 4120);



let ProfileResolver = class ProfileResolver {
    constructor(loginService) {
        this.loginService = loginService;
    }
    resolve(route, state) {
        return this.loginService.get(route.paramMap.get('id'));
    }
};
ProfileResolver.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService }
];
ProfileResolver = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], ProfileResolver);



/***/ }),

/***/ 7467:
/*!**********************************************!*\
  !*** ./src/app/services/resource.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceService": () => (/* binding */ ResourceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8759);





let ResourceService = class ResourceService {
    constructor(http) {
        this.http = http;
    }
    getTypes() {
        if (this.regions) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.types);
        }
        return this.http.get('/private/types').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((res) => {
            this.types = res;
        }));
    }
    getRegions() {
        if (this.regions) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.regions);
        }
        return this.http.get('/private/regions').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((res) => {
            this.regions = res;
        }));
    }
};
ResourceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
ResourceService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], ResourceService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://89.108.114.231:3000',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-71f28cd7_js-node_modules_ionic_core_dist_esm_t-0c999b",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-71f28cd7_js-node_modules_ionic_core_dist_esm_t-0c999b",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";

/***/ }),

/***/ 9132:
/*!********************************************************************************!*\
  !*** ./src/app/components/breadcrumbs/breadcrumbs/breadcrumbs.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".icl-breadcrumbs {\n  color: var(--ion-text-color);\n  margin-bottom: 100px;\n  display: inline-block;\n}\n.icl-breadcrumbs .crumb {\n  color: var(--ion-text-color);\n  text-decoration: none;\n  position: relative;\n}\n.icl-breadcrumbs .crumb.link {\n  cursor: pointer;\n}\n.icl-breadcrumbs .crumb.link::after {\n  position: absolute;\n  content: \"\";\n  bottom: -4px;\n  left: 50%;\n  transform: translate(-50%);\n  background-color: #002846;\n  width: 100%;\n  transition: all 0.3s ease-in-out;\n  height: 2px;\n}\n.icl-breadcrumbs .crumb.link:hover::after {\n  width: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7QUFDRjtBQUNFO0VBQ0UsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFDSTtFQUNFLGVBQUE7QUFDTjtBQUNNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQUNSO0FBRU07RUFDRSxRQUFBO0FBQVIiLCJmaWxlIjoiYnJlYWRjcnVtYnMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY2wtYnJlYWRjcnVtYnMge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAuY3J1bWIge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAmLmxpbmsge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYm90dG9tOiAtNHB4O1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyODQ2O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 9436:
/*!******************************************************************!*\
  !*** ./src/app/components/login/login.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".centered {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 2132:
/*!****************************************************************!*\
  !*** ./src/app/components/main/main.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".logo {\n  margin: 0 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICBtYXJnaW46IDAgMThweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 2561:
/*!****************************************************************!*\
  !*** ./src/app/components/post-card/post-card.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".card .post-img {\n  height: 40%;\n  overflow: hidden;\n  position: relative;\n}\n.card .img {\n  transition: transform 0.3s ease;\n  width: 100%;\n}\n.card:hover .img {\n  transform: scale(1.1);\n}\n.card .tags {\n  left: 0px;\n  bottom: 50px;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QtY2FyZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUlFO0VBQ0UsK0JBQUE7RUFDQSxXQUFBO0FBRko7QUFNSTtFQUNFLHFCQUFBO0FBSk47QUFRRTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFOSiIsImZpbGUiOiJwb3N0LWNhcmQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuXHJcbiAgLnBvc3QtaW1nIHtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC5pbWcge1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICAuaW1nIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhZ3Mge1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYm90dG9tOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 3802:
/*!****************************************************************!*\
  !*** ./src/app/components/post/post.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@media (max-width: 768px) {\n  .header {\n    order: 1;\n  }\n}\n.header {\n  padding: 32px;\n}\n.header .tags {\n  margin-bottom: 40px;\n}\n.text {\n  padding: 0 32px;\n  max-width: 760px;\n  white-space: pre-wrap;\n  margin: 0 auto;\n  margin-top: 120px;\n}\n.post ion-grid,\n.post .img-col {\n  padding: 0;\n}\n.img {\n  overflow: hidden;\n  clip-path: polygon(0 0, 100% 0%, 100% 100%, 15% 100%);\n}\n.title {\n  font-size: 43px;\n  font-weight: 300;\n  line-height: 1.1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFFBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxhQUFBO0FBQUY7QUFFRTtFQUNFLG1CQUFBO0FBQUo7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBREY7QUFLRTs7RUFFRSxVQUFBO0FBRko7QUFNQTtFQUNFLGdCQUFBO0VBQ0EscURBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFIRiIsImZpbGUiOiJwb3N0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBvcmRlcjogMTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDMycHg7XHJcblxyXG4gIC50YWdze1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICBwYWRkaW5nOiAwIDMycHg7XHJcbiAgbWF4LXdpZHRoOiA3NjBweDtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTIwcHg7XHJcbn1cclxuXHJcbi5wb3N0IHtcclxuICBpb24tZ3JpZCxcclxuICAuaW1nLWNvbCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmltZyB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAlLCAxMDAlIDEwMCUsIDE1JSAxMDAlKTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDQzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS4xZW07XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 7062:
/*!******************************************************************!*\
  !*** ./src/app/components/posts/posts.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".post-img {\n  height: 160px;\n  overflow: hidden;\n}\n.post-img img {\n  width: 100%;\n  object-fit: cover;\n  object-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoicG9zdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC1pbWcge1xyXG4gIGhlaWdodDogMTYwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 8894:
/*!****************************************************!*\
  !*** ./src/app/components/tag/tag.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".icl-tag {\n  font-size: 14px;\n  padding: 2px 20px;\n  border: 2px solid var(--ion-color-secondary);\n  border-radius: 7px 50px 7px 50px;\n  background-color: transparent;\n  font-family: \"Inter\", sans-serif;\n  margin-right: 6px;\n  white-space: nowrap;\n}\n.icl-tag.primary {\n  background-color: var(--ion-color-secondary);\n  border-radius: 7px 50px 0 0;\n}\n.icl-tag.white {\n  background-color: #fff;\n  border-color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLDRDQUFBO0VBQ0EsMkJBQUE7QUFDSjtBQUVFO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtBQUFKIiwiZmlsZSI6InRhZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljbC10YWcge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiAycHggMjBweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBib3JkZXItcmFkaXVzOiA3cHggNTBweCA3cHggNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBmb250LWZhbWlseTogXCJJbnRlclwiLCBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICYucHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweCA1MHB4IDAgMDtcclxuICB9XHJcblxyXG4gICYud2hpdGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";

/***/ }),

/***/ 7619:
/*!********************************************************************************!*\
  !*** ./src/app/components/breadcrumbs/breadcrumbs/breadcrumbs.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ng-container *ngFor=\"let item of items; let last = last\">\r\n  <a class=\"crumb\" [class.link]=\"!!item.url\" [routerLink]=\"item.url && [item.url]\"> {{item.name}} </a>\r\n  <ion-icon *ngIf=\"!last\" name=\"chevron-forward-outline\"></ion-icon>\r\n</ng-container>\r\n";

/***/ }),

/***/ 4437:
/*!******************************************************************!*\
  !*** ./src/app/components/login/login.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-content>\r\n    <div class=\"centered\">\r\n      <img height=\"100\" width=\"100\" src=\"/assets/logo.svg\" />\r\n      <ion-button [expand]=\"false\" (click)=\"loginWithGoogle()\"\r\n        >Sign in with google</ion-button\r\n      >\r\n    </div>\r\n  </ion-content>\r\n</ion-app>\r\n";

/***/ }),

/***/ 2840:
/*!****************************************************************!*\
  !*** ./src/app/components/main/main.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-page class=\"ion-page\" id=\"main-content\">\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <img\r\n        class=\"logo\"\r\n        slot=\"start\"\r\n        height=\"48\"\r\n        width=\"48\"\r\n        src=\"/assets/logo.svg\"\r\n      />\r\n      <app-current-user slot=\"start\" *ngIf=\"user\"></app-current-user>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-menu-toggle>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n          </ion-button>\r\n        </ion-menu-toggle>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content class=\"ion-padding\">\r\n    <ion-router-outlet></ion-router-outlet>\r\n  </ion-content>\r\n</ion-page>\r\n<ion-menu-controller></ion-menu-controller>\r\n<ion-menu content-id=\"main-content\" side=\"end\">\r\n  <ion-content>\r\n    <ion-list>\r\n      <ion-menu-toggle auto-hide=\"false\">\r\n        <ion-item [routerLink]=\"['/posts']\" button>\r\n          <ion-label>Blog</ion-label>\r\n        </ion-item>\r\n        <ion-item target=\"_blank\" href=\"https://paktusin.github.io/\" button>\r\n          <ion-label>Career</ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-menu>\r\n";

/***/ }),

/***/ 3509:
/*!****************************************************************!*\
  !*** ./src/app/components/post-card/post-card.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-card class=\"card\">\r\n  <div class=\"post-img\" *ngIf=\"post.img\">\r\n    <img class=\"img\" referrerpolicy=\"no-referrer\" [src]=\"imgUrl(post.img)\" />\r\n    <div class=\"tags\">\r\n      <app-tag class=\"primary\">{{post.region}}</app-tag>\r\n      <app-tag class=\"white\">{{post.type}}</app-tag>\r\n    </div>\r\n  </div>\r\n  <ion-card-header>\r\n    <ion-card-subtitle class=\"inter\">\r\n      {{ post.createdAt | date: \"d LLLL YYYY\" }}\r\n    </ion-card-subtitle>\r\n    <ion-card-title color=\"primary\">{{ post.title }}</ion-card-title>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <div>\r\n      Author: <a [routerLink]=\"['/profile',post.from.id]\">{{post.from.name}}</a>\r\n    </div>\r\n    <div>{{ post.text }}...</div>\r\n  </ion-card-content>\r\n  <ion-toolbar>\r\n    <ion-button [routerLink]=\"['/posts', post._id]\" fill=\"clear\"\r\n      >Read more</ion-button\r\n    >\r\n    <ion-button\r\n      slot=\"end\"\r\n      fill=\"clear\"\r\n      (click)=\"delete.emit()\"\r\n      *ngIf=\"canDelete\"\r\n    >\r\n      <ion-icon name=\"trash-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-card>\r\n";

/***/ }),

/***/ 8119:
/*!****************************************************************************!*\
  !*** ./src/app/components/post-modal/post-modal.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-modal #modal [isOpen]=\"visible\" (willDismiss)=\"visible = false\">\r\n  <ng-template>\r\n    <ion-content class=\"ion-padding\" [formGroup]=\"form\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Image of the post</ion-label>\r\n        <ion-input\r\n          formControlName=\"img\"\r\n          type=\"text\"\r\n          placeholder=\"Enter img url\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Title of the post</ion-label>\r\n        <ion-input\r\n          required\r\n          formControlName=\"title\"\r\n          type=\"text\"\r\n          placeholder=\"Enter title\"\r\n        ></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Region</ion-label>\r\n        <ion-select required formControlName=\"region\">\r\n          <ion-select-option\r\n            *ngFor=\"let region of $regions | async\"\r\n            [value]=\"region\"\r\n            >{{ region }}</ion-select-option\r\n          >\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Type</ion-label>\r\n        <ion-select required formControlName=\"type\">\r\n          <ion-select-option\r\n            *ngFor=\"let type of $types | async\"\r\n            [value]=\"type\"\r\n            >{{ type }}</ion-select-option\r\n          >\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Text of the post</ion-label>\r\n        <ion-textarea\r\n          required\r\n          formControlName=\"text\"\r\n          placeholder=\"Enter text\"\r\n        ></ion-textarea>\r\n      </ion-item>\r\n    </ion-content>\r\n    <ion-footer>\r\n      <ion-toolbar>\r\n        <ion-button [disabled]=\"loading || form.invalid\" (click)=\"save()\"\r\n          >Save</ion-button\r\n        >\r\n        <ion-button slot=\"end\" fill=\"clear\" (click)=\"visible = false\"\r\n          >Cancel</ion-button\r\n        >\r\n      </ion-toolbar>\r\n    </ion-footer>\r\n  </ng-template>\r\n</ion-modal>\r\n";

/***/ }),

/***/ 1916:
/*!****************************************************************!*\
  !*** ./src/app/components/post/post.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content *ngIf=\"post\" class=\"post\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col sizeMd=\"5\" size=\"12\" class=\"header\">\r\n        <app-breadcrumbs\r\n          [items]=\"[{ url: '/posts', name: 'Home' }, { name: post.title }]\"\r\n        ></app-breadcrumbs>\r\n        <div class=\"tags\">\r\n          <app-tag class=\"primary\">{{ post.type }}</app-tag>\r\n          <app-tag>{{ post.region }}</app-tag>\r\n        </div>\r\n        <h3>{{ post.createdAt | date: \"d LLLL YYYY\" }}</h3>\r\n        <h1>\r\n          <ion-text class=\"title\" color=\"primary\">\r\n            {{ post.title }}\r\n          </ion-text>\r\n        </h1>\r\n        <!-- <app-user [link]=\"true\" [user]=\"post.from\" prefix=\"Author: \"></app-user> -->\r\n      </ion-col>\r\n      <ion-col sizeMd=\"7\" size=\"12\" class=\"img-col\">\r\n        <ion-img class=\"img\" [src]=\"imgUrl(post.img)\"></ion-img>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col class=\"text\">\r\n        {{ post.text }}\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";

/***/ }),

/***/ 5835:
/*!******************************************************************!*\
  !*** ./src/app/components/posts/posts.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\r\n  <ng-content></ng-content>\r\n  <ion-grid style=\"max-width: 1230px\">\r\n    <ion-row>\r\n      <ion-col\r\n        sizeMd=\"4\"\r\n        sizeSm=\"6\"\r\n        size=\"12\"\r\n        *ngFor=\"let post of posts; let index = index\"\r\n      >\r\n        <app-post-card\r\n          [post]=\"post\"\r\n          [canDelete]=\"userId === currentUser.id\"\r\n          (delete)=\"delIndex = index\"\r\n          [hideAuthor]=\"!!userId\"\r\n        ></app-post-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-infinite-scroll (ionInfinite)=\"loadMore()\">\r\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n<ion-fab\r\n  *ngIf=\"!userId || userId === currentUser.id\"\r\n  vertical=\"bottom\"\r\n  horizontal=\"center\"\r\n  slot=\"fixed\"\r\n>\r\n  <ion-fab-button (click)=\"modal.open()\">\r\n    <ion-icon name=\"add\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n<app-post-modal #modal (afterSave)=\"loadMore(0)\"></app-post-modal>\r\n<ion-modal\r\n  [isOpen]=\"delIndex !== undefined\"\r\n  (willDismiss)=\"delIndex = undefined\"\r\n>\r\n  <ng-template>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-button slot=\"start\" (click)=\"delete()\">Delete</ion-button>\r\n        <ion-title></ion-title>\r\n        <ion-button slot=\"end\" fill=\"clear\" (click)=\"delIndex = undefined\"\r\n          >Cancel</ion-button\r\n        >\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"ion-padding\">\r\n      Are you realy want to delete this post \"{{ posts[delIndex].text }}\"?\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-modal>\r\n";

/***/ }),

/***/ 4424:
/*!**********************************************************************!*\
  !*** ./src/app/components/profile/profile.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content *ngIf=\"user\">\r\n  <app-posts [userId]=\"user.id\">\r\n    <ion-card>\r\n      <ion-card-header>\r\n        <ion-avatar>\r\n          <img\r\n            referrerpolicy=\"no-referrer\"\r\n            [alt]=\"user.name\"\r\n            [src]=\"user.picture\"\r\n          />\r\n        </ion-avatar>\r\n        <ion-card-subtitle>Name:</ion-card-subtitle>\r\n        <ion-card-title>{{ user.name }}</ion-card-title>\r\n        <ion-card-subtitle>email:</ion-card-subtitle>\r\n        <ion-card-title>{{ user.email }}</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <h2 class=\"ion-text-center\">Users posts:</h2>\r\n  </app-posts>\r\n</ion-content>\r\n";

/***/ }),

/***/ 7332:
/*!************************************************************************!*\
  !*** ./src/app/components/user/current-user.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-popover trigger=\"current-user\" [dismissOnSelect]=\"true\">\r\n  <ng-template>\r\n    <ion-content>\r\n      <ion-list>\r\n        <ion-item [routerLink]=\"['/profile', user.id]\" [button]=\"true\"\r\n          >Profile</ion-item\r\n        >\r\n        <ion-item (click)=\"logout()\" [button]=\"true\">Logout</ion-item>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ng-template>\r\n</ion-popover>\r\n<app-user id=\"current-user\" [user]=\"user\"></app-user>\r\n";

/***/ }),

/***/ 8649:
/*!****************************************************************!*\
  !*** ./src/app/components/user/user.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-chip [routerLink]=\"link && ['/profile', user.id]\">\r\n  <ion-avatar>\r\n    <img referrerpolicy=\"no-referrer\" [alt]=\"user.name\" [src]=\"user.picture\" />\r\n  </ion-avatar>\r\n  <ion-label>{{ prefix }}{{ user.name }}</ion-label>\r\n</ion-chip>\r\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
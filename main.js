(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/User.ts":
/*!*************************!*\
  !*** ./src/app/User.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  \n  <router-outlet></router-outlet>\n  "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MyQuizApp';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _page_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-routing.module */ "./src/app/page-routing.module.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__["UserLoginComponent"],
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_8__["QuestionsComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_10__["HomePageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _page_routing_module__WEBPACK_IMPORTED_MODULE_9__["PageRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home-page works!\n  \n</p>\n"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/page-routing.module.ts":
/*!****************************************!*\
  !*** ./src/app/page-routing.module.ts ***!
  \****************************************/
/*! exports provided: PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRoutingModule", function() { return PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/user-login/user-login.component.ts");





var routes = [
    { path: 'questionpage', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_3__["QuestionsComponent"] },
    { path: 'loginPage', component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"] },
    { path: '', redirectTo: '/loginPage', pathMatch: 'full' }
];
var PageRoutingModule = /** @class */ (function () {
    function PageRoutingModule() {
    }
    PageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PageRoutingModule);
    return PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/questions/questions.component.css":
/*!***************************************************!*\
  !*** ./src/app/questions/questions.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9ucy9xdWVzdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/questions/questions.component.html":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<html>\n    \n  <body>\n    \n  <h3 class=\"heading\"> IT Tech quiz </h3>\n  <form name=\"quiz\">\n  <ol>\n  <div class = \"container\">\n  \n  <hr color=\"red\"/>\n  \n  <table>\n  <tr *ngFor=\"let book of questionService.qns\">\n\n    <li>{{book.Question1}}</li> \n    <li>{{book.option1}}</li>\n    <li>{{book.option2}}</li>\n    <li>{{book.option3}}</li>\n    <li>{{book.option4}}</li>\n \n  </table>\n  <div class = \"move\">\n \n  <button type=\"button\" class=\"btn btn-success submit\">Submit</button> \n  </div>\n  </div>\n  </ol>\n  </form>\n  </body>\n  </html> \t\n\n\n\n\n            \n\n  \n"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../quiz.service */ "./src/app/quiz.service.ts");




var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(router, questionService) {
        this.router = router;
        this.questionService = questionService;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionService.getQuestions().subscribe(function (data) {
            _this.questionService.qns = data;
        });
    };
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.css */ "./src/app/questions/questions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/quiz.service.ts":
/*!*********************************!*\
  !*** ./src/app/quiz.service.ts ***!
  \*********************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
        this.rootUrl = "assets/data/QuestionJson.json";
    }
    QuizService.prototype.getQuestions = function () {
        return this.http.get(this.rootUrl);
    };
    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/app/user-login.service.ts":
/*!***************************************!*\
  !*** ./src/app/user-login.service.ts ***!
  \***************************************/
/*! exports provided: UserLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginService", function() { return UserLoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var UserLoginService = /** @class */ (function () {
    function UserLoginService(http, router) {
        this.http = http;
        this.router = router;
        this.configUrl = "/assets/data/UserLoginDetails.json";
    }
    UserLoginService.prototype.getUser = function () {
        return this.http.get(this.configUrl);
    };
    /*loginUser( email:string,password: string) {
       var body = {
         email: email,
         password: password
       }
       return this.http.post(this.configUrl, body);
     }*/
    UserLoginService.prototype.loginUser = function (user) {
        return this.http.post(this.configUrl, user);
    };
    UserLoginService.prototype.logoutUser = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/loginpage']);
    };
    UserLoginService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    UserLoginService.prototype.loggedIn = function () {
        return !!localStorage.getItem('token');
    };
    UserLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserLoginService);
    return UserLoginService;
}());



/***/ }),

/***/ "./src/app/user-login/user-login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/user-login/user-login.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbG9naW4vdXNlci1sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/user-login/user-login.component.html":
/*!******************************************************!*\
  !*** ./src/app/user-login/user-login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body>    \n<nav class=\"navbar navbar-inverse bs-dark\" role=\"navigation\">\n    <div class=\"container-fluid\">\n        <a class=\"navbar-brand r\" href=\"#\">Brand_Name</a>\n    <div class=\"row\">\n    <div class=\"col-xs-4\">\n        <ul class=\"nav navbar-nav\">\n            <li><a href=\"Header%20n%20Footer.html\">Home</a></li>\n            <li><a href=\"Header%20n%20Footer.html\">Sign Up</a></li>\n            <li><a href=\"Header%20n%20Footer.html\">Contact</a></li>\n        </ul>\n        </div>\n        </div>\n    </div>\n    </nav>\n<div class=\"container-fluid bg\">\n    <div class=\"row\">\n        <div class=\"col-md-4 col-sm-4 col-xs-12\"></div>\n        <div class=\"col-md-4 col-sm-4 col-xs-12\">\n            <!-- Start -->\n        <form #newUserForm=\"ngForm\"  (ngSubmit)=\"onSubmit(newUserForm)\"  class=\"form-container\">\n               \n  <div class=\"form-group\">\n    <font color = \"white\"><label for=\"exampleInputEmail1\">Username Or Email</label></font>\n    <input type=\"email\"   class=\"form-control\"  id=\"exampleInputEmail1\" placeholder=\"Email\" [(ngModel)]=\"userModel.email\" #useremail=\"ngModel\" required [ngModelOptions]=\"{standalone: true}\">\n  </div>\n  <div class=\"form-group\"> \n    <input type=\"password\" class=\"form-control\"  id=\"exampleInputPassword1\" placeholder=\"Password\" [(ngModel)]=\"userModel.password\"  #userpassword=\"ngModel\" required [ngModelOptions]=\"{standalone: true}\">\n  </div>\n  <div class=\"checkbox\">\n    <label>\n      <font color = \"white\"><input type=\"checkbox\"> Remember me</font>\n    </label>\n  </div>\n  <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"!newUserForm.form.valid\">Login</button>\n  \n</form>\n            <!-- End -->\n        </div>\n    </div>\n    </div>\n</body>\n<footer class=\"foot\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <p>This is footer</p>\n        </div>\n        <div class=\"bottom-foot\">\n            <div class=\"col-md-5\">Copyrights @ Brainstormers11134 Trespassers will be prosecuted</div>\n            <div class=\"col-xs-7\">\n                <ul class=\"same-line\">\n                    <li><a href=\"Header%20n%20Footer.html\">Home</a></li>\n                    <li><a href=\"Header%20n%20Footer.html\">References</a></li>\n                    <li><a href=\"Header%20n%20Footer.html\">About</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/user-login/user-login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/user-login/user-login.component.ts ***!
  \****************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-login.service */ "./src/app/user-login.service.ts");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../User */ "./src/app/User.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(userloginservice, router) {
        this.userloginservice = userloginservice;
        this.router = router;
        this.loginUserData = {};
        this.isSuccess = false;
        this.userModel = new _User__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    /*loginUser()
    {
      
      this.userloginservice.loginUser(this.loginUserData)
      .subscribe(
                res=>console.log(res),
                err=>console.log(err))
    }*/
    UserLoginComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UserLoginComponent.prototype.getUsers = function () {
        var _this = this;
        this.userloginservice.getUser()
            .subscribe(function (users) { return _this.users = users; });
    };
    UserLoginComponent.prototype.validateCredentials = function (email, password) {
        var _this = this;
        this.users.forEach(function (element) {
            if (element.email == _this.userModel.email && element.password == _this.userModel.password) {
                _this.isSuccess = true;
            }
            else {
                alert(" invalid credentails");
            }
        });
        return this.isSuccess;
    };
    UserLoginComponent.prototype.onSubmit = function (email, password) {
        var _this = this;
        console.log("on submitt");
        console.log(this.validateCredentials(email, password));
        if (this.validateCredentials(email, password)) {
            console.log("after validation ");
            this.userloginservice.loginUser(this.userModel)
                .subscribe(function (res) {
                localStorage.setItem('token', res.token);
                _this.router.navigate(['/loginPage']);
            }, function (err) { return console.log(err); });
        }
    };
    UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.css */ "./src/app/user-login/user-login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_login_service__WEBPACK_IMPORTED_MODULE_2__["UserLoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular project\MyQuizApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
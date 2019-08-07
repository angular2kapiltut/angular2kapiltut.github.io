(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containernestedcmpnt/containernestedcmpnt.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containernestedcmpnt/containernestedcmpnt.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<employeecount  [all]=\"getTotalEmployessCount()\"\r\n[male]=\"getTotalMaleEmployessCount()\"\r\n[female]=\"getTotalFeMaleEmployessCount()\"></employeecount>\r\n<h3> Angular conitainer and nested components</h3>\r\n<div> \r\n   <table>\r\n    <thead>\r\n        <tr>\r\n               <th> Emp_Code </th>\r\n               <th> Name </th>\r\n               <th> Gender </th>\r\n               <th> DOB </th>\r\n               <th> Salary </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor= \"let employee of employees\">\r\n            <td> {{employee.code }} </td>\r\n            <td> {{employee.name }} </td>\r\n            <td> {{employee.gender}} </td>\r\n            <td> {{employee.DateofBirth}} </td>\r\n            <td> {{employee.salary }} </td>\r\n            <!--  <td> {{employee.salary | currency : 'USD' : true:'1.3.3' }} </td> -->\r\n        </tr>\r\n        <tr *ngIf=\"!employees || employees.length == 0 \">\r\n                <td colspan=\"5\"> no employess to display </td>\r\n        </tr>\r\n    </tbody>\r\n   </table>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/containernestedcmpnt/employeecount.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/containernestedcmpnt/employeecount.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"radioClass\">show : </span>\r\n\r\n<input type=\"radio\" name=\"options\">\r\n<span class=\"radioClass\">{{ \"All (\"+all+\")\" }}   </span>\r\n\r\n<input type=\"radio\" name=\"options\">\r\n<span class=\"radioClass\">{{ \"Male (\"+male+\")\" }}   </span>\r\n\r\n<input type=\"radio\" name=\"options\">\r\n<span class=\"radioClass\">{{ \"Female (\"+female+\")\" }}   </span>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custompipes/custompipes.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custompipes/custompipes.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<h3> Angular custom pipes</h3>\r\n<br><br>\r\n<div class=\"inline1\"> \r\n   <table>\r\n    <thead>\r\n        <tr>\r\n               <th> code </th>\r\n               <th> name </th>\r\n               <th> gender </th>\r\n               <th> DOB </th>\r\n               <th> salary </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor= \"let employee of employees;trackBy :trackByEmpCode \">\r\n            <td> {{employee.code | uppercase}} </td>\r\n            <td> {{employee.name | customepipesfortitle:employee.gender}} </td>\r\n            <td> {{employee.gender}} </td>\r\n            <td> {{employee.DateofBirth | date | uppercase}} </td>\r\n            <td> {{employee.salary | currency : 'USD' }} </td>\r\n            <!--  <td> {{employee.salary | currency : 'USD' : true:'1.3.3' }} </td> -->\r\n        </tr>\r\n        <tr *ngIf=\"!employees || employees.length == 0 \">\r\n                <td colspan=\"5\"> no employess to display </td>\r\n        </tr>\r\n    </tbody>\r\n   </table>\r\n   <br>\r\n  <button (click) = \"getEMployess()\">refresh employess</button>\r\n<br>\r\n</div>\r\n<!--\r\n<div class=\"inline1\">\r\n<table>\r\n    <thead>\r\n        <tr>\r\n               <th> code </th>\r\n               <th> name </th>\r\n               \r\n               <th> Index </th>\r\n             \r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor= \"let employee of employees;trackBy :trackByEmpCode;let i=index \">\r\n            <td> {{employee.code}} </td>\r\n            <td> {{employee.name}} </td>        \r\n            <td> {{i}}  </td>\r\n           \r\n               </tr>\r\n        <tr *ngIf=\"!employees || employees.length == 0 \">\r\n                <td colspan=\"5\"> no employess to display </td>\r\n        </tr>\r\n    </tbody>\r\n   </table>\r\n   <br>\r\n   <button (click) = \"getEMployess()\">refresh employess</button>\r\n</div>\r\n\r\n <br>\r\n <div class=\"inline1\">\r\n <table>\r\n    <thead>\r\n        <tr>\r\n               <th> code </th>\r\n               <th> name </th>\r\n               <th> Index </th>\r\n               <th> isFirst </th>\r\n               <th> isLast </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor= \"let employee of employees;trackBy :trackByEmpCode;let i=index;let isFirst=first;let isLast = last;let isEven=even;let isOdd=odd \">\r\n            <td> {{employee.code}} </td>\r\n            <td> {{employee.name}} </td>\r\n            <td> {{i}}  </td>\r\n            <td> {{isFirst}}  </td>\r\n            <td> {{isLast}}  </td>\r\n            <td> {{isEven}}  </td>\r\n            <td> {{isOdd}}  </td>\r\n       </tr>\r\n        <tr *ngIf=\"!employees || employees.length == 0 \">\r\n                <td colspan=\"5\"> no employess to display </td>\r\n        </tr>\r\n    </tbody>\r\n   </table>\r\n   <br>\r\n   <button (click) = \"getEMployess()\">refresh employess</button>\r\n <br>\r\n</div>\r\n-->\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ngfor/ngfor.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ngfor/ngfor.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 3px dotted brown\">\r\n<h3> Using ng for </h3>\r\n   <table>\r\n    <thead>\r\n        <tr>\r\n               <th> code </th>\r\n               <th> name </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor= \"let employee of employees\">\r\n            <td> {{employee.code}} </td>\r\n            <td> {{employee.name}} </td>\r\n        </tr>\r\n        <tr *ngIf=\"!employees || employees.length == 0 \">\r\n                <td colspan=\"5\"> no employess to display </td>\r\n        </tr>\r\n    </tbody>\r\n   </table>\r\n </div>\r\n <br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ngfortrackby/ngfortrackby.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ngfortrackby/ngfortrackby.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 3px dotted brown\">\r\n<h3> Using ng for track by</h3>\r\n   <table>\r\n    <thead>\r\n        <tr>\r\n               <th> code </th>\r\n               <th> name </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor= \"let employee of employees;trackBy :trackByEmpCode \">\r\n            <td> {{employee.code}} </td>\r\n            <td> {{employee.name}} </td>\r\n        </tr>\r\n        <tr *ngIf=\"!employees || employees.length == 0 \">\r\n                <td colspan=\"5\"> no employess to display </td>\r\n        </tr>\r\n    </tbody>\r\n   </table>\r\n   <br>\r\n  <button (click) = \"getEMployess()\">refresh employess</button>\r\n\r\n<br>\r\n<table>\r\n    <thead>\r\n        <tr>\r\n               <th> code </th>\r\n               <th> name </th>\r\n               <th> Index </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor= \"let employee of employees;trackBy :trackByEmpCode;let i=index \">\r\n            <td> {{employee.code}} </td>\r\n            <td> {{employee.name}} </td>\r\n            <td> {{i}}  </td>\r\n               </tr>\r\n        <tr *ngIf=\"!employees || employees.length == 0 \">\r\n                <td colspan=\"5\"> no employess to display </td>\r\n        </tr>\r\n    </tbody>\r\n   </table>\r\n   <br>\r\n   <button (click) = \"getEMployess()\">refresh employess</button>\r\n </div>\r\n <br>\r\n <table>\r\n    <thead>\r\n        <tr>\r\n               <th> code </th>\r\n               <th> name </th>\r\n               <th> Index </th>\r\n               <th> isFirst </th>\r\n               <th> isLast </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor= \"let employee of employees;trackBy :trackByEmpCode;let i=index;let isFirst=first;let isLast = last;let isEven=even;let isOdd=odd \">\r\n            <td> {{employee.code}} </td>\r\n            <td> {{employee.name}} </td>\r\n            <td> {{i}}  </td>\r\n            <td> {{isFirst}}  </td>\r\n            <td> {{isLast}}  </td>\r\n            <td> {{isEven}}  </td>\r\n            <td> {{isOdd}}  </td>\r\n       </tr>\r\n        <tr *ngIf=\"!employees || employees.length == 0 \">\r\n                <td colspan=\"5\"> no employess to display </td>\r\n        </tr>\r\n    </tbody>\r\n   </table>\r\n   <br>\r\n   <button (click) = \"getEMployess()\">refresh employess</button>\r\n <br>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pipes/pipes.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pipes/pipes.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<h3> Angular pipes</h3>\r\n<div class=\"inline\"> \r\n   <table>\r\n    <thead>\r\n        <tr>\r\n               <th> code </th>\r\n               <th> name </th>\r\n               <th> DOB </th>\r\n               <th> salary </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor= \"let employee of employees;trackBy :trackByEmpCode \">\r\n            <td> {{employee.code | uppercase}} </td>\r\n            <td> {{employee.name}} </td>\r\n            <td> {{employee.DateofBirth | date | uppercase}} </td>\r\n            <td> {{employee.salary | currency : 'USD' }} </td>\r\n            <!--  <td> {{employee.salary | currency : 'USD' : true:'1.3.3' }} </td> -->\r\n        </tr>\r\n        <tr *ngIf=\"!employees || employees.length == 0 \">\r\n                <td colspan=\"5\"> no employess to display </td>\r\n        </tr>\r\n    </tbody>\r\n   </table>\r\n  <button (click) = \"getEMployess()\">refresh employess</button>\r\n</div>\r\n\r\n<div class=\"inline\">\r\n<table>\r\n    <thead>\r\n        <tr>\r\n               <th> code </th>\r\n               <th> name </th>\r\n               \r\n               <th> Index </th>\r\n             \r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor= \"let employee of employees;trackBy :trackByEmpCode;let i=index \">\r\n            <td> {{employee.code}} </td>\r\n            <td> {{employee.name}} </td>        \r\n            <td> {{i}}  </td>\r\n           \r\n               </tr>\r\n        <tr *ngIf=\"!employees || employees.length == 0 \">\r\n                <td colspan=\"5\"> no employess to display </td>\r\n        </tr>\r\n    </tbody>\r\n   </table>\r\n   <button (click) = \"getEMployess()\">refresh employess</button>\r\n</div>\r\n <div class=\"inline\">\r\n <table>\r\n    <thead>\r\n        <tr>\r\n               <th> code </th>\r\n               <th> name </th>\r\n               <th> Index </th>\r\n               <th> isFirst </th>\r\n               <th> isLast </th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor= \"let employee of employees;trackBy :trackByEmpCode;let i=index;let isFirst=first;let isLast = last;let isEven=even;let isOdd=odd \">\r\n            <td> {{employee.code}} </td>\r\n            <td> {{employee.name}} </td>\r\n            <td> {{i}}  </td>\r\n            <td> {{isFirst}}  </td>\r\n            <td> {{isLast}}  </td>\r\n            <td> {{isEven}}  </td>\r\n            <td> {{isOdd}}  </td>\r\n       </tr>\r\n        <tr *ngIf=\"!employees || employees.length == 0 \">\r\n                <td colspan=\"5\"> no employess to display </td>\r\n        </tr>\r\n    </tbody>\r\n   </table>\r\n   <button (click) = \"getEMployess()\">refresh employess</button>\r\n</div>\r\n</div>\r\n<hr>\r\n<hr>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stylebinding/stylebinding.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stylebinding/stylebinding.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 3px dotted brown\">\r\n    <h4 style=\"color: blue\">https://github.com/kattakapilkumar/angular2tutorialv2/tree/master/src/app/stylebinding</h4>\r\n    <p>       \r\n1) in line style binging\r\n<br>\r\n2) style binding which are having unit extension in pixels\r\n<br>\r\n3) style binding with ngstlye\r\n    </p>\r\n\r\n\r\n<button style='color: red'>\r\n    button 1 with out style biding\r\n</button>\r\n<button style='color: red' [style.font-weight]=\"isBold ? 'BOLD':'normal'\">\r\n    button 2 with style biding\r\n</button>\r\n<br><br>\r\n<button style='color: red' [style.font-size.px]=\"fontsize\">\r\n    button 2 with pixes style biding - 2nd way of style binding\r\n</button>\r\n<br><br>\r\n<button style='color: red' [ngStyle]=\"addStyles()\">\r\n    button 2 with pixes style biding - with ng style\r\n</button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/twaybinding/twaybinding.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/twaybinding/twaybinding.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 3px dotted brown\">\r\n   Name : <input [value]='name'/>\r\n   <br/>\r\n   you entered : {{name}} <br>\r\n\r\n   Name : <input [value]='name' (input)='name=$event.target.value'/>\r\n   <br/>\r\n   using $event.targe : you entered : {{name}} <br>\r\n\r\n   Name : <input [(ngModel)]='name'/>\r\n   <br/>\r\n   using ng module you entered : {{name}} <br>\r\n\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.name = 'Angular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'my-app',
        template: `<h1>Hello {{name}}</h1>
  <stylebinding></stylebinding>
  <twaybinding></twaybinding>
  <ngfor></ngfor>
  <ngfortrackby></ngfortrackby>
  <pipes></pipes>
  <hr>
  <custompipes></custompipes>
  <hr>
  <containernestedcmpnt></containernestedcmpnt>
  <hr>`,
    })
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stylebinding_stylebinding_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stylebinding/stylebinding.component */ "./src/app/stylebinding/stylebinding.component.ts");
/* harmony import */ var _twaybinding_twaybinding_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./twaybinding/twaybinding.component */ "./src/app/twaybinding/twaybinding.component.ts");
/* harmony import */ var _ngfor_ngfor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ngfor/ngfor.component */ "./src/app/ngfor/ngfor.component.ts");
/* harmony import */ var _ngfortrackby_ngfortrackby_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ngfortrackby/ngfortrackby.component */ "./src/app/ngfortrackby/ngfortrackby.component.ts");
/* harmony import */ var _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/pipes.component */ "./src/app/pipes/pipes.component.ts");
/* harmony import */ var _custompipes_custompipes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custompipes/custompipes.component */ "./src/app/custompipes/custompipes.component.ts");
/* harmony import */ var _custompipes_cutompipes_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./custompipes/cutompipes.pipe */ "./src/app/custompipes/cutompipes.pipe.ts");
/* harmony import */ var _containernestedcmpnt_containernestedcmpnt_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./containernestedcmpnt/containernestedcmpnt.component */ "./src/app/containernestedcmpnt/containernestedcmpnt.component.ts");
/* harmony import */ var _containernestedcmpnt_employeecount_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./containernestedcmpnt/employeecount.component */ "./src/app/containernestedcmpnt/employeecount.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _stylebinding_stylebinding_component__WEBPACK_IMPORTED_MODULE_5__["stylebindingComponent"], _twaybinding_twaybinding_component__WEBPACK_IMPORTED_MODULE_6__["twaybindingComponent"], _ngfor_ngfor_component__WEBPACK_IMPORTED_MODULE_7__["ngforComponent"], _ngfortrackby_ngfortrackby_component__WEBPACK_IMPORTED_MODULE_8__["ngfortrackbyComponent"], _pipes_pipes_component__WEBPACK_IMPORTED_MODULE_9__["pipesComponent"], _custompipes_custompipes_component__WEBPACK_IMPORTED_MODULE_10__["custompipesComponent"], _custompipes_cutompipes_pipe__WEBPACK_IMPORTED_MODULE_11__["custompipes"], _containernestedcmpnt_containernestedcmpnt_component__WEBPACK_IMPORTED_MODULE_12__["containernestedcmpntComponent"], _containernestedcmpnt_employeecount_component__WEBPACK_IMPORTED_MODULE_13__["employeecountComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/containernestedcmpnt/containernestedcmpnt.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/containernestedcmpnt/containernestedcmpnt.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/* div.inline1 { float:left; } */\r\n\r\ntable {\r\n    color: brown;\r\n \r\n }\r\n\r\ntd {\r\n     border: 1px solid #369;\r\n     padding: 5px;\r\n }\r\n\r\nth {\r\n \r\n     border: 1px solid #369;\r\n     padding: 5px;\r\n } \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVybmVzdGVkY21wbnQvY29udGFpbmVybmVzdGVkY21wbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGdDQUFnQzs7QUFFaEM7SUFDSSxZQUFZOztDQUVmOztBQUNBO0tBQ0ksc0JBQXNCO0tBQ3RCLFlBQVk7Q0FDaEI7O0FBRUE7O0tBRUksc0JBQXNCO0tBQ3RCLFlBQVk7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWluZXJuZXN0ZWRjbXBudC9jb250YWluZXJuZXN0ZWRjbXBudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKiBkaXYuaW5saW5lMSB7IGZsb2F0OmxlZnQ7IH0gKi9cclxuXHJcbnRhYmxlIHtcclxuICAgIGNvbG9yOiBicm93bjtcclxuIFxyXG4gfVxyXG4gdGQge1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNjk7XHJcbiAgICAgcGFkZGluZzogNXB4O1xyXG4gfVxyXG4gXHJcbiB0aCB7XHJcbiBcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzY5O1xyXG4gICAgIHBhZGRpbmc6IDVweDtcclxuIH0gIl19 */"

/***/ }),

/***/ "./src/app/containernestedcmpnt/containernestedcmpnt.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/containernestedcmpnt/containernestedcmpnt.component.ts ***!
  \************************************************************************/
/*! exports provided: containernestedcmpntComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containernestedcmpntComponent", function() { return containernestedcmpntComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let containernestedcmpntComponent = class containernestedcmpntComponent {
    constructor() {
        this.employees = [
            { code: 'emp01', name: 'tom', gender: 'male', DateofBirth: '6/25/2018', salary: '40000' },
            { code: 'emp02', name: 'jay', gender: 'male', salary: '40000' },
            { code: 'emp03', name: 'parvathi', gender: 'male', DateofBirth: '31/06/22018', salary: '40000' },
            { code: 'emp04', name: 'jaimin', gender: 'male' },
            { code: 'emp07', name: 'parvathi', gender: 'female', DateofBirth: '31/06/22018', salary: '40000' },
            { code: 'emp07', name: 'parvathi', gender: 'female', DateofBirth: '31/06/22018', salary: '40000' }
        ];
    }
    getTotalEmployessCount() {
        return this.employees.length;
    }
    getTotalMaleEmployessCount() {
        return this.employees.filter(e => e.gender === "male").length;
    }
    getTotalFeMaleEmployessCount() {
        return this.employees.filter(e => e.gender === "female").length;
    }
};
containernestedcmpntComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'containernestedcmpnt',
        template: __webpack_require__(/*! raw-loader!./containernestedcmpnt.component.html */ "./node_modules/raw-loader/index.js!./src/app/containernestedcmpnt/containernestedcmpnt.component.html"),
        styles: [__webpack_require__(/*! ./containernestedcmpnt.component.css */ "./src/app/containernestedcmpnt/containernestedcmpnt.component.css")]
    })
], containernestedcmpntComponent);



/***/ }),

/***/ "./src/app/containernestedcmpnt/employeecount.component.css":
/*!******************************************************************!*\
  !*** ./src/app/containernestedcmpnt/employeecount.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".radioClass {\r\n\r\n    color: #369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: large;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFpbmVybmVzdGVkY21wbnQvZW1wbG95ZWVjb3VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFdBQVc7SUFDWCx5Q0FBeUM7SUFDekMsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVybmVzdGVkY21wbnQvZW1wbG95ZWVjb3VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhZGlvQ2xhc3Mge1xyXG5cclxuICAgIGNvbG9yOiAjMzY5O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/containernestedcmpnt/employeecount.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/containernestedcmpnt/employeecount.component.ts ***!
  \*****************************************************************/
/*! exports provided: employeecountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employeecountComponent", function() { return employeecountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let employeecountComponent = class employeecountComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], employeecountComponent.prototype, "all", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], employeecountComponent.prototype, "male", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], employeecountComponent.prototype, "female", void 0);
employeecountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'employeecount',
        template: __webpack_require__(/*! raw-loader!./employeecount.component.html */ "./node_modules/raw-loader/index.js!./src/app/containernestedcmpnt/employeecount.component.html"),
        styles: [__webpack_require__(/*! ./employeecount.component.css */ "./src/app/containernestedcmpnt/employeecount.component.css")]
    })
], employeecountComponent);



/***/ }),

/***/ "./src/app/custompipes/custompipes.component.css":
/*!*******************************************************!*\
  !*** ./src/app/custompipes/custompipes.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.inline1 { float:left; }\r\n\r\ntable {\r\n    color: brown;\r\n \r\n }\r\n\r\ntd {\r\n     border: 1px solid #369;\r\n     padding: 5px;\r\n }\r\n\r\nth {\r\n \r\n     border: 1px solid #369;\r\n     padding: 5px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tcGlwZXMvY3VzdG9tcGlwZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLFVBQVUsRUFBRTs7QUFFMUI7SUFDSSxZQUFZOztDQUVmOztBQUNBO0tBQ0ksc0JBQXNCO0tBQ3RCLFlBQVk7Q0FDaEI7O0FBRUE7O0tBRUksc0JBQXNCO0tBQ3RCLFlBQVk7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jdXN0b21waXBlcy9jdXN0b21waXBlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmlubGluZTEgeyBmbG9hdDpsZWZ0OyB9XHJcblxyXG50YWJsZSB7XHJcbiAgICBjb2xvcjogYnJvd247XHJcbiBcclxuIH1cclxuIHRkIHtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzY5O1xyXG4gICAgIHBhZGRpbmc6IDVweDtcclxuIH1cclxuIFxyXG4gdGgge1xyXG4gXHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgIzM2OTtcclxuICAgICBwYWRkaW5nOiA1cHg7XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/custompipes/custompipes.component.ts":
/*!******************************************************!*\
  !*** ./src/app/custompipes/custompipes.component.ts ***!
  \******************************************************/
/*! exports provided: custompipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custompipesComponent", function() { return custompipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let custompipesComponent = class custompipesComponent {
    constructor() {
        this.employees = [
            { code: 'emp01', name: 'tom', gender: 'male', DateofBirth: '6/25/2018', salary: '40000' },
            { code: 'emp02', name: 'jay', gender: 'male', salary: '40000' },
            { code: 'emp03', name: 'parvathi', gender: 'male', DateofBirth: '31/06/22018', salary: '40000' }
        ];
    }
    getEMployess() {
        this.employees = [
            { code: 'emp01', name: 'tom', gender: 'male', DateofBirth: '6/25/2018', salary: '40000' },
            { code: 'emp02', name: 'jay', gender: 'male', salary: '40000' },
            { code: 'emp03', name: 'parvathi', gender: 'male', DateofBirth: '31/06/22018', salary: '40000' },
            { code: 'emp04', name: 'jaimin', gender: 'male' }
        ];
    }
    trackByEmpCode(index, employee) {
        return employee.code;
    }
};
custompipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'custompipes',
        template: __webpack_require__(/*! raw-loader!./custompipes.component.html */ "./node_modules/raw-loader/index.js!./src/app/custompipes/custompipes.component.html"),
        styles: [__webpack_require__(/*! ./custompipes.component.css */ "./src/app/custompipes/custompipes.component.css")]
    })
], custompipesComponent);



/***/ }),

/***/ "./src/app/custompipes/cutompipes.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/custompipes/cutompipes.pipe.ts ***!
  \************************************************/
/*! exports provided: custompipes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custompipes", function() { return custompipes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let custompipes = class custompipes {
    transform(value, gender) {
        if (gender.toLowerCase() == 'male') {
            return "Mr." + value;
        }
        else {
            return "Miss." + value;
        }
    }
};
custompipes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'customepipesfortitle' //pipe name
    })
], custompipes);



/***/ }),

/***/ "./src/app/ngfor/ngfor.component.css":
/*!*******************************************!*\
  !*** ./src/app/ngfor/ngfor.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n   color: brown;\r\n\r\n}\r\ntd {\r\n    border: 1px solid #369;\r\n    padding: 5px;\r\n}\r\nth {\r\n\r\n    border: 1px solid #369;\r\n    padding: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmdmb3Ivbmdmb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtHQUNHLFlBQVk7O0FBRWY7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9uZ2Zvci9uZ2Zvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICBjb2xvcjogYnJvd247XHJcblxyXG59XHJcbnRkIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNjk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbnRoIHtcclxuXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzY5O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/ngfor/ngfor.component.ts":
/*!******************************************!*\
  !*** ./src/app/ngfor/ngfor.component.ts ***!
  \******************************************/
/*! exports provided: ngforComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngforComponent", function() { return ngforComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ngforComponent = class ngforComponent {
    constructor() {
        this.employees = [
            { code: 'emp01', name: 'tom'
            },
            {
                code: 'emp02', name: 'jay'
            },
            {
                code: 'emp03', name: 'parvathi'
            }
        ];
    }
};
ngforComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngfor',
        template: __webpack_require__(/*! raw-loader!./ngfor.component.html */ "./node_modules/raw-loader/index.js!./src/app/ngfor/ngfor.component.html"),
        styles: [__webpack_require__(/*! ./ngfor.component.css */ "./src/app/ngfor/ngfor.component.css")]
    })
], ngforComponent);



/***/ }),

/***/ "./src/app/ngfortrackby/ngfortrackby.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ngfortrackby/ngfortrackby.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    color: brown;\r\n \r\n }\r\n td {\r\n     border: 1px solid #369;\r\n     padding: 5px;\r\n }\r\n th {\r\n \r\n     border: 1px solid #369;\r\n     padding: 5px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmdmb3J0cmFja2J5L25nZm9ydHJhY2tieS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTs7Q0FFZjtDQUNBO0tBQ0ksc0JBQXNCO0tBQ3RCLFlBQVk7Q0FDaEI7Q0FFQTs7S0FFSSxzQkFBc0I7S0FDdEIsWUFBWTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL25nZm9ydHJhY2tieS9uZ2ZvcnRyYWNrYnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIGNvbG9yOiBicm93bjtcclxuIFxyXG4gfVxyXG4gdGQge1xyXG4gICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNjk7XHJcbiAgICAgcGFkZGluZzogNXB4O1xyXG4gfVxyXG4gXHJcbiB0aCB7XHJcbiBcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzY5O1xyXG4gICAgIHBhZGRpbmc6IDVweDtcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/ngfortrackby/ngfortrackby.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ngfortrackby/ngfortrackby.component.ts ***!
  \********************************************************/
/*! exports provided: ngfortrackbyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ngfortrackbyComponent", function() { return ngfortrackbyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ngfortrackbyComponent = class ngfortrackbyComponent {
    constructor() {
        this.employees = [
            { code: 'emp01', name: 'tom' },
            { code: 'emp02', name: 'jay' },
            { code: 'emp03', name: 'parvathi' }
        ];
    }
    getEMployess() {
        this.employees = [
            { code: 'emp01', name: 'tom' },
            { code: 'emp02', name: 'jay' },
            { code: 'emp03', name: 'parvathi' },
            { code: 'emp04', name: 'jaimin' }
        ];
    }
    trackByEmpCode(index, employee) {
        return employee.code;
    }
};
ngfortrackbyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ngfortrackby',
        template: __webpack_require__(/*! raw-loader!./ngfortrackby.component.html */ "./node_modules/raw-loader/index.js!./src/app/ngfortrackby/ngfortrackby.component.html"),
        styles: [__webpack_require__(/*! ./ngfortrackby.component.css */ "./src/app/ngfortrackby/ngfortrackby.component.css")]
    })
], ngfortrackbyComponent);



/***/ }),

/***/ "./src/app/pipes/pipes.component.css":
/*!*******************************************!*\
  !*** ./src/app/pipes/pipes.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.inline1 { float:left; }\r\n\r\ntable {\r\n    color: brown;\r\n \r\n }\r\n\r\ntd {\r\n     border: 1px solid #369;\r\n     padding: 5px;\r\n }\r\n\r\nth {\r\n \r\n     border: 1px solid #369;\r\n     padding: 5px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGlwZXMvcGlwZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLFVBQVUsRUFBRTs7QUFFMUI7SUFDSSxZQUFZOztDQUVmOztBQUNBO0tBQ0ksc0JBQXNCO0tBQ3RCLFlBQVk7Q0FDaEI7O0FBRUE7O0tBRUksc0JBQXNCO0tBQ3RCLFlBQVk7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9waXBlcy9waXBlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2LmlubGluZTEgeyBmbG9hdDpsZWZ0OyB9XHJcblxyXG50YWJsZSB7XHJcbiAgICBjb2xvcjogYnJvd247XHJcbiBcclxuIH1cclxuIHRkIHtcclxuICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzY5O1xyXG4gICAgIHBhZGRpbmc6IDVweDtcclxuIH1cclxuIFxyXG4gdGgge1xyXG4gXHJcbiAgICAgYm9yZGVyOiAxcHggc29saWQgIzM2OTtcclxuICAgICBwYWRkaW5nOiA1cHg7XHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/pipes/pipes.component.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/pipes.component.ts ***!
  \******************************************/
/*! exports provided: pipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipesComponent", function() { return pipesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let pipesComponent = class pipesComponent {
    constructor() {
        this.employees = [
            { code: 'emp01', name: 'tom', DateofBirth: '6/25/2018', salary: '40000' },
            { code: 'emp02', name: 'jay', salary: '40000' },
            { code: 'emp03', name: 'parvathi', DateofBirth: '31/06/22018', salary: '40000' }
        ];
    }
    getEMployess() {
        this.employees = [
            { code: 'emp01', name: 'tom' },
            { code: 'emp02', name: 'jay' },
            { code: 'emp03', name: 'parvathi' },
            { code: 'emp04', name: 'jaimin' }
        ];
    }
    trackByEmpCode(index, employee) {
        return employee.code;
    }
};
pipesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'pipes',
        template: __webpack_require__(/*! raw-loader!./pipes.component.html */ "./node_modules/raw-loader/index.js!./src/app/pipes/pipes.component.html"),
        styles: [__webpack_require__(/*! ./pipes.component.css */ "./src/app/pipes/pipes.component.css")]
    })
], pipesComponent);



/***/ }),

/***/ "./src/app/stylebinding/stylebinding.component.css":
/*!*********************************************************!*\
  !*** ./src/app/stylebinding/stylebinding.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0eWxlYmluZGluZy9zdHlsZWJpbmRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/stylebinding/stylebinding.component.ts":
/*!********************************************************!*\
  !*** ./src/app/stylebinding/stylebinding.component.ts ***!
  \********************************************************/
/*! exports provided: stylebindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylebindingComponent", function() { return stylebindingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let stylebindingComponent = class stylebindingComponent {
    constructor() {
        this.name = 'Angular';
        this.isBold = true;
        this.fontsize = 30;
        this.isItaisBoldlic = true;
    }
    addStyles() {
        let styles = {
            'font-size.px': this.fontsize,
            'font-style': this.isBold ? 'italic' : 'normal',
            'font-weight': this.isBold ? 'bold' : 'normal',
        };
        return styles;
    }
};
stylebindingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'stylebinding',
        template: __webpack_require__(/*! raw-loader!./stylebinding.component.html */ "./node_modules/raw-loader/index.js!./src/app/stylebinding/stylebinding.component.html"),
        styles: [__webpack_require__(/*! ./stylebinding.component.css */ "./src/app/stylebinding/stylebinding.component.css")]
    })
], stylebindingComponent);



/***/ }),

/***/ "./src/app/twaybinding/twaybinding.component.css":
/*!*******************************************************!*\
  !*** ./src/app/twaybinding/twaybinding.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3YXliaW5kaW5nL3R3YXliaW5kaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/twaybinding/twaybinding.component.ts":
/*!******************************************************!*\
  !*** ./src/app/twaybinding/twaybinding.component.ts ***!
  \******************************************************/
/*! exports provided: twaybindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twaybindingComponent", function() { return twaybindingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let twaybindingComponent = class twaybindingComponent {
    constructor() {
        this.name = 'jay';
    }
};
twaybindingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'twaybinding',
        template: __webpack_require__(/*! raw-loader!./twaybinding.component.html */ "./node_modules/raw-loader/index.js!./src/app/twaybinding/twaybinding.component.html"),
        styles: [__webpack_require__(/*! ./twaybinding.component.css */ "./src/app/twaybinding/twaybinding.component.css")]
    })
], twaybindingComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular2kapiltut.github.io\angular2kapiltut\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
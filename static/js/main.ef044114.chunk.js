(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_codenation_Desktop_learning_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_Users_codenation_Desktop_learning_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_Users_codenation_Desktop_learning_react_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_Users_codenation_Desktop_learning_react_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),_Users_codenation_Desktop_learning_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_logo_svg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(15),_logo_svg__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_6__),_App_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__),App=function(_Component){function App(){var _getPrototypeOf2,_this;Object(_Users_codenation_Desktop_learning_react_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,App);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return _this=Object(_Users_codenation_Desktop_learning_react_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,(_getPrototypeOf2=Object(_Users_codenation_Desktop_learning_react_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(App)).call.apply(_getPrototypeOf2,[this].concat(args))),_this.state={h1:"",buttons:["+","-","*","/","1","2","3","4","5","6","7","8","9",".","0"]},_this.clickOne=function(_){console.log("Do you work?");var e=_this.state.h1;e+=_,_this.setState({h1:e})},_this.clear=function(){console.log("cleared"),_this.setState({h1:""})},_this.evaluate=function(){try{var result=eval(_this.state.h1);_this.setState({h1:result})}catch(error){console.log(error)}},_this}return Object(_Users_codenation_Desktop_learning_react_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.a)(App,_Component),Object(_Users_codenation_Desktop_learning_react_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(App,[{key:"render",value:function(){var _=this;return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"wrapper"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"calc"},react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"display"},this.state.h1),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div",{className:"buttonContainer"},this.state.buttons.map((function(e){return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"button",onClick:function(){return _.clickOne("".concat(e))}},e)})),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"button",id:"clButton",name:"1",onClick:this.clear},"AC"),react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button",{className:"button",id:"equals",name:"1",onClick:this.evaluate},"="))))}}]),App}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=App},,,,,,function(_,e,t){_.exports=t(17)},,,,,function(_,e,t){},function(_,e,t){_.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),n=t(2),o=t.n(n),s=(t(14),t(3));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(s.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(_){_.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.ef044114.chunk.js.map
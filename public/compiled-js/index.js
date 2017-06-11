/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var pitcher_1 = __webpack_require__(24);
var PitchBox = (function (_super) {
    __extends(PitchBox, _super);
    function PitchBox(props) {
        var _this = _super.call(this, props) || this;
        _this.onPitchInClicked = function () {
            var newPitcher = {
                name: "New Pitcher",
                amount: _this.props.amount / (_this.props.pitchers.length + 1)
            };
            var newState = __assign({}, _this.state, { pitched: true, pitchers: _this.state.pitchers.concat([newPitcher]) });
            _this.setState(newState);
        };
        _this.togglePitchers = function () {
            var newState = __assign({}, _this.state, { showPitchers: !_this.state.showPitchers });
            _this.setState(newState);
        };
        _this.state = {
            pitched: false,
            pitchers: props.pitchers,
            showPitchers: false
        };
        return _this;
    }
    PitchBox.prototype.render = function () {
        var pitchersJsx = this.state.pitchers.map(function (p) {
            return (React.createElement(pitcher_1.Pitcher, { name: p.name, amount: p.amount }));
        });
        return (React.createElement("div", { className: "pitch-box" },
            React.createElement("div", { className: "pitch-money-box" }, "$" + this.props.amount.toFixed(2)),
            React.createElement("div", { className: "pitch-content" },
                !this.state.pitched ?
                    React.createElement("button", { className: "pitch-in-button", onClick: this.onPitchInClicked }, "Pitch in!")
                    : React.createElement("button", { className: "pitch-in-button" }, "Pitched in \u2713"),
                React.createElement("div", { className: "pitch-name" }, this.props.name),
                React.createElement("div", { className: "pitch-message" }, this.props.message),
                React.createElement("div", { className: "pitch-box-pitchers" }, this.state.showPitchers ? pitchersJsx : ""),
                React.createElement("div", { className: "show-pitchers" },
                    React.createElement("a", { onClick: this.togglePitchers },
                        " ",
                        this.state.showPitchers ? "Hide" : "Show",
                        " pitchers")))));
    };
    return PitchBox;
}(React.Component));
exports.PitchBox = PitchBox;


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var Pitcher = (function (_super) {
    __extends(Pitcher, _super);
    function Pitcher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pitcher.prototype.render = function () {
        return (React.createElement("span", { className: "pitch-box-pitcher" },
            React.createElement("span", { className: "pitcher-amount" },
                "$",
                this.props.amount.toFixed(2)),
            React.createElement("span", { className: "pitcher-name" }, this.props.name)));
    };
    return Pitcher;
}(React.Component));
exports.Pitcher = Pitcher;


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(6);
//import our component we made in the other hellocomponent.tsx file
var pitchbox_1 = __webpack_require__(21);
//import { IPitcherModel } from "./components/pitcher";
//this call renders the top level component (in this case the PitchBox) to the DOM
//we have to give it a place to render to, so we pass in a div with id="example"
//you can use your components just like html elements, with the properties as attributes
//test data: 
var pitchers = [{
        name: "Daniel Grocki",
        amount: 4.20
    }, {
        name: "Zoe Stein-Hansen",
        amount: 3.30
    }
];
ReactDOM.render(React.createElement(pitchbox_1.PitchBox, { name: "Brooks", amount: 25.30, message: "Test message", pitchers: pitchers }), document.getElementById("pitchbox-example"));


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
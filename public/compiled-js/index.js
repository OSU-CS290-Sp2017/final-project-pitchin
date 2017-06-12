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
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var expenselist_1 = __webpack_require__(24);
var ExpensePage = (function (_super) {
    __extends(ExpensePage, _super);
    function ExpensePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpensePage.prototype.render = function () {
        return (React.createElement("div", { className: "pitch-area" },
            React.createElement("div", { classID: "groceries", className: "pitch-container" },
                React.createElement(expenselist_1.ExpenseList, { expenses: this.props.groceries, name: "Groceries" })),
            React.createElement("div", { classID: "utilities", className: "pitch-container" },
                React.createElement(expenselist_1.ExpenseList, { expenses: this.props.utilities, name: "Utilities" })),
            React.createElement("div", { classID: "misc", className: "pitch-container" },
                React.createElement(expenselist_1.ExpenseList, { expenses: this.props.other, name: "Miscellaneous" }))));
    };
    return ExpensePage;
}(React.Component));
exports.ExpensePage = ExpensePage;


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
var React = __webpack_require__(2);
var pitchbox_1 = __webpack_require__(25);
var ExpenseList = (function (_super) {
    __extends(ExpenseList, _super);
    function ExpenseList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpenseList.prototype.render = function () {
        var expensesJSX = this.props.expenses.map(function (expense) {
            return (React.createElement(pitchbox_1.PitchBox, { name: expense.name, amount: expense.amount, pitchers: expense.pitchers, message: expense.message }));
        });
        return (React.createElement("div", null,
            React.createElement("h2", { className: "breakdown-header" }, this.props.name),
            expensesJSX));
    };
    return ExpenseList;
}(React.Component));
exports.ExpenseList = ExpenseList;


/***/ }),

/***/ 25:
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
var React = __webpack_require__(2);
var pitcher_1 = __webpack_require__(26);
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

/***/ 26:
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
var React = __webpack_require__(2);
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

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var ReactDOM = __webpack_require__(6);
var expensepage_1 = __webpack_require__(21);
function loadPitchData() {
    var getReq = new XMLHttpRequest();
    getReq.open("GET", "./getexpenses");
    getReq.onload = function (ev) {
        onDataLoaded(getReq.responseText);
    };
    getReq.send();
}
function onDataLoaded(body) {
    var json = JSON.parse(body);
    var expenses = separateExpenses(json);
    ReactDOM.render(React.createElement(expensepage_1.ExpensePage, { groceries: expenses.groceries, utilities: expenses.utilities, other: expenses.other }), document.getElementById("dynamic-pitches"));
}
function separateExpenses(data) {
    var groceries = data.filter(function (expense) {
        return expense.category == "G";
    });
    var misc = data.filter(function (expense) {
        return expense.category == "M";
    });
    var utils = data.filter(function (expense) {
        return expense.category == "U";
    });
    return {
        groceries: groceries,
        other: misc,
        utilities: utils
    };
}
loadPitchData();


/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
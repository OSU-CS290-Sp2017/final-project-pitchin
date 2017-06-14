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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.getName = function () {
        var initials = document.getElementsByClassName('active')[0].textContent;
        if (initials == 'BM')
            return 'Brooks';
        if (initials == 'CP')
            return 'Chandler';
        if (initials == 'DG')
            return 'Daniel';
        if (initials == 'ZS')
            return 'Zoe';
        return '';
    };
    return Helpers;
}());
exports.Helpers = Helpers;


/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
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
var React = __webpack_require__(1);
var expenselist_1 = __webpack_require__(27);
var addexpensemodal_1 = __webpack_require__(25);
var ExpensePage = (function (_super) {
    __extends(ExpensePage, _super);
    function ExpensePage(props) {
        var _this = _super.call(this) || this;
        _this.toggleAddModalVisible = function () {
            var newState = __assign({}, _this.state, { addModalVisible: !_this.state.addModalVisible });
            _this.setState(newState);
        };
        _this.addExpense = function (expense) {
            var newState = __assign({}, _this.state, { expenses: _this.state.expenses.concat([expense]), addModalVisible: !_this.state.addModalVisible });
            _this.setState(newState);
            _this.saveExpense(expense);
        };
        _this.state = {
            addModalVisible: false,
            expenses: props.expenses
        };
        document.getElementById("add-expense-button").onclick = _this.toggleAddModalVisible;
        document.getElementById("DG").addEventListener('click', function () { _this.refreshPitches(); });
        document.getElementById("BM").addEventListener('click', function () { _this.refreshPitches(); });
        document.getElementById("ZS").addEventListener('click', function () { _this.refreshPitches(); });
        document.getElementById("CP").addEventListener('click', function () {
            _this.refreshPitches();
        });
        return _this;
    }
    ExpensePage.prototype.refreshPitches = function () {
        var _this = this;
        //this is terrible code, only to hook up with daniels regular js
        setTimeout(function () {
            var newState = __assign({}, _this.state, { expenses: _this.state.expenses.slice() });
            _this.setState(newState);
        }, 50);
    };
    ExpensePage.prototype.saveExpense = function (expense) {
        var postReq = new XMLHttpRequest();
        postReq.open('POST', './addexpense');
        postReq.setRequestHeader('Content-Type', 'application/json');
        postReq.send(JSON.stringify(expense));
    };
    ExpensePage.prototype.separateExpenses = function (data) {
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
    };
    ExpensePage.prototype.render = function () {
        var splitExpenses = this.separateExpenses(this.state.expenses);
        return (React.createElement("div", null,
            React.createElement(addexpensemodal_1.AddExpenseModal, { onCancel: this.toggleAddModalVisible, onSubmit: this.addExpense, visible: this.state.addModalVisible }),
            React.createElement("div", { className: "pitch-area" },
                React.createElement("div", { classID: "groceries", className: "pitch-container" },
                    React.createElement(expenselist_1.ExpenseList, { expenses: splitExpenses.groceries, name: "Groceries" })),
                React.createElement("div", { classID: "utilities", className: "pitch-container" },
                    React.createElement(expenselist_1.ExpenseList, { expenses: splitExpenses.utilities, name: "Utilities" })),
                React.createElement("div", { classID: "misc", className: "pitch-container" },
                    React.createElement(expenselist_1.ExpenseList, { expenses: splitExpenses.other, name: "Miscellaneous" })))));
    };
    return ExpensePage;
}(React.Component));
exports.ExpensePage = ExpensePage;


/***/ }),
/* 23 */,
/* 24 */
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
var React = __webpack_require__(1);
var SegmentButton = (function (_super) {
    __extends(SegmentButton, _super);
    function SegmentButton(props) {
        var _this = _super.call(this, props) || this;
        _this.setSelected = function (sel) {
            var newState = {
                selected: sel
            };
            _this.setState(newState);
            _this.props.onSelect(sel);
        };
        _this.state = {
            selected: 0
        };
        return _this;
    }
    SegmentButton.prototype.render = function () {
        var _this = this;
        var buttonsJSX = this.props.segments.map(function (seg, idx) {
            return (React.createElement("button", { className: "seg-button " +
                    (idx == 0 ? "seg-button-first " : "") +
                    (idx == _this.props.segments.length - 1 ? "seg-button-last " : "") +
                    (idx == _this.state.selected ? "seg-button-selected " : ""), onClick: function () { return _this.setSelected(idx); } }, _this.props.segments[idx]));
        });
        return (React.createElement("span", null, buttonsJSX));
    };
    return SegmentButton;
}(React.Component));
exports.SegmentButton = SegmentButton;


/***/ }),
/* 25 */
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
var React = __webpack_require__(1);
var IExpense_1 = __webpack_require__(31);
var SegmentButton_1 = __webpack_require__(24);
var helpers_1 = __webpack_require__(15);
var AddExpenseModal = (function (_super) {
    __extends(AddExpenseModal, _super);
    function AddExpenseModal(props) {
        var _this = _super.call(this, props) || this;
        _this.setCategory = function (selected) {
            var category;
            switch (selected) {
                case 0:
                    category = IExpense_1.ExpenseCategory.Utilities;
                    break;
                case 1:
                    category = IExpense_1.ExpenseCategory.Groceries;
                    break;
                case 2:
                    category = IExpense_1.ExpenseCategory.Miscellaneous;
                    break;
                default:
                    category = IExpense_1.ExpenseCategory.Utilities;
                    break;
            }
            var newState = __assign({}, _this.state, { category: category });
            _this.setState(newState);
        };
        _this.onAmountChange = function (e) {
            var num = Math.abs(Number(e.currentTarget.value));
            var newState = __assign({}, _this.state, { amount: num });
            _this.setState(newState);
        };
        _this.onMessageChange = function (e) {
            var newState = __assign({}, _this.state, { message: e.currentTarget.value });
            _this.setState(newState);
        };
        _this.state = {
            name: helpers_1.Helpers.getName(),
            amount: 0,
            message: "",
            pitchers: [],
            category: IExpense_1.ExpenseCategory.Utilities,
            id: -1
        };
        return _this;
    }
    AddExpenseModal.prototype.resetForm = function () {
        var newState = __assign({}, this.state, { name: helpers_1.Helpers.getName(), amount: 0, message: "", category: IExpense_1.ExpenseCategory.Utilities });
        this.setState(newState);
    };
    AddExpenseModal.prototype.onOkClicked = function () {
        var newExpense = __assign({}, this.state, { name: helpers_1.Helpers.getName() });
        this.props.onSubmit(newExpense);
    };
    AddExpenseModal.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: this.props.visible ? "modal-backdrop" : "hidden" },
            React.createElement("div", { className: "modal" },
                React.createElement("h2", { className: "breakdown-header" }, "Add an expense"),
                React.createElement("div", { className: "modal-main" },
                    React.createElement("div", null,
                        React.createElement(SegmentButton_1.SegmentButton, { onSelect: this.setCategory, segments: ['Utilities', 'Groceries', 'Miscellaneous'] })),
                    React.createElement("div", null,
                        "Amount: $",
                        React.createElement("input", { className: "input-amount", type: "number", onChange: this.onAmountChange })),
                    React.createElement("div", null,
                        React.createElement("input", { className: "input-message", type: "text", onChange: this.onMessageChange, value: this.state.message, placeholder: "Message..." }))),
                React.createElement("div", { className: "modal-footer" },
                    React.createElement("button", { className: "button", onClick: this.props.onCancel }, "Cancel"),
                    React.createElement("button", { className: "button button-highlighted modal-button-add", onClick: function () {
                            _this.onOkClicked();
                            _this.resetForm();
                        } }, "Add")))));
    };
    return AddExpenseModal;
}(React.Component));
exports.AddExpenseModal = AddExpenseModal;


/***/ }),
/* 26 */,
/* 27 */
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
var React = __webpack_require__(1);
var pitchbox_1 = __webpack_require__(28);
var ExpenseList = (function (_super) {
    __extends(ExpenseList, _super);
    function ExpenseList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpenseList.prototype.render = function () {
        var expensesJSX = this.props.expenses.map(function (expense) {
            return (React.createElement(pitchbox_1.PitchBox, { name: expense.name, amount: expense.amount, pitchers: expense.pitchers, message: expense.message, id: expense.id }));
        });
        return (React.createElement("div", null,
            React.createElement("h2", { className: "breakdown-header" }, this.props.name),
            expensesJSX));
    };
    return ExpenseList;
}(React.Component));
exports.ExpenseList = ExpenseList;


/***/ }),
/* 28 */
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
var React = __webpack_require__(1);
var pitcher_1 = __webpack_require__(29);
var helpers_1 = __webpack_require__(15);
var PitchBox = (function (_super) {
    __extends(PitchBox, _super);
    function PitchBox(props) {
        var _this = _super.call(this, props) || this;
        _this.onPitchInClicked = function () {
            var newPitcher = {
                name: helpers_1.Helpers.getName(),
                amount: _this.props.amount / (_this.props.pitchers.length + 2)
            };
            var pitchers = _this.state.pitchers.map(function (p) {
                p.amount = _this.props.amount / (_this.props.pitchers.length + 2);
                return p;
            });
            pitchers = pitchers.concat(newPitcher);
            var newState = __assign({}, _this.state, { pitched: true, pitchers: pitchers });
            _this.setState(newState);
            _this.savePitchin(newPitcher);
        };
        _this.togglePitchers = function () {
            var newState = __assign({}, _this.state, { showPitchers: !_this.state.showPitchers });
            _this.setState(newState);
        };
        props.pitchers.forEach(function (p) {
            p.amount = props.amount / (props.pitchers.length + 1);
        });
        var pitched = false;
        props.pitchers.forEach(function (p) {
            if (p.name == helpers_1.Helpers.getName())
                pitched = true;
        });
        if (props.name == helpers_1.Helpers.getName())
            pitched = true;
        _this.state = {
            pitched: pitched,
            pitchers: props.pitchers,
            showPitchers: false
        };
        return _this;
    }
    PitchBox.prototype.componentWillReceiveProps = function (nextProps) {
        var pitched = false;
        this.state.pitchers.forEach(function (p) {
            if (p.name == helpers_1.Helpers.getName())
                pitched = true;
        });
        if (this.props.name == helpers_1.Helpers.getName())
            pitched = true;
        var newState = __assign({}, this.state, { pitched: pitched });
        this.setState(newState);
    };
    PitchBox.prototype.savePitchin = function (pitcher) {
        var postReq = new XMLHttpRequest();
        postReq.open('POST', './addpitcher/expense/' + this.props.id);
        postReq.setRequestHeader('Content-Type', 'application/json');
        postReq.send(JSON.stringify(pitcher));
    };
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
/* 29 */
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
var React = __webpack_require__(1);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(6);
var expensepage_1 = __webpack_require__(22);
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
    var expenses = json || [];
    ReactDOM.render(React.createElement(expensepage_1.ExpensePage, { expenses: expenses }), document.getElementById("dynamic-pitches"));
}
loadPitchData();


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ExpenseCategory = (function () {
    function ExpenseCategory() {
    }
    return ExpenseCategory;
}());
ExpenseCategory.Utilities = "U";
ExpenseCategory.Groceries = "G";
ExpenseCategory.Miscellaneous = "M";
exports.ExpenseCategory = ExpenseCategory;


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map
import * as React from "react";
import * as ReactDOM from "react-dom";

import { ExpensePage, IExpensePageModel } from './components/expensepage';
import { IPitcherModel } from "./models/IPitcherModel";

interface IExpense {
    name: string;
    amount: number;
    message: string;
    category: string;
    pitchers: IPitcherModel[];
}

function loadPitchData() {
    var getReq = new XMLHttpRequest();
    getReq.open("GET", "./getexpenses");
    getReq.onload = (ev) => {
        onDataLoaded(getReq.responseText);
    }
}

function onDataLoaded(body: string) {
    const json = JSON.parse(body);
    const expenses = separateExpenses(json);
    ReactDOM.render(
        <ExpensePage groceries={expenses.groceries} utilities={expenses.utilities} other={expenses.other} />,
        document.getElementById("dynamic-pitches"));
}

function separateExpenses(data: IExpense[]): IExpensePageModel {
    const groceries = data.filter((expense) => {
        expense.category == "G";
    });
    const misc = data.filter((expense) => {
        expense.category == "M";
    });
    const utils = data.filter((expense) => {
        expense.category == "U";
    });
    
    return {
        groceries: groceries, 
        other: misc,
        utilities: utils
    };
}

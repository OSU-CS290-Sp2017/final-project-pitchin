import * as React from "react";
import * as ReactDOM from "react-dom";

import { ExpensePage, IExpensePageModel } from './components/expensepage';
import { IPitcherModel } from "./models/IPitcherModel";
import { IExpense } from "./models/IExpense";

function loadPitchData() {
    var getReq = new XMLHttpRequest();
    getReq.open("GET", "./getexpenses");
    getReq.onload = (ev) => {
        onDataLoaded(getReq.responseText);
    }
    getReq.send();
}

function onDataLoaded(body: string) {
    const json = JSON.parse(body);
    const expenses = json as IExpense[] || [];
    ReactDOM.render(
        <ExpensePage expenses={expenses} />,
        document.getElementById("dynamic-pitches"));
}

loadPitchData();
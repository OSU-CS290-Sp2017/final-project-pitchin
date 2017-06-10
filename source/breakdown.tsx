import * as React from "react";
import * as ReactDOM from "react-dom";

import { BreakdownTable } from "./components/breakdowntable"
import { PitchBox } from "./components/pitchbox"
const debts = [ {
        name: "Daniel Grocki",
        amount: 4.20
    }, {
        name: "Zoe Stein-Hansen",
        amount: 3.30
    }
];

ReactDOM.render(
    <BreakdownTable debts={debts}/>,
    //<PitchBox pitchers={debts} name="Brooks" amount={25.30} message="Test message" />, 
    document.getElementById("breakdown-page-content")
);
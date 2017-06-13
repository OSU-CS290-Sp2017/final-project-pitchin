import * as React from "react";
import * as ReactDOM from "react-dom";

import { BreakdownPage } from "./components/breakdownpage"
import { PitchBox } from "./components/pitchbox"
const debts = {
    youOwe: [ {
            name: "Daniel Grocki",
            amount: 42.06
        }, {
            name: "Zoe Steine-Hanson",
            amount: 13.80
        }],
    owesYou: [ {
            name: "Chandler Peterson",
            amount: 52.21
        }, {
            name: "Bob",
            amount: 3.30
        }]
    };

ReactDOM.render(
    <BreakdownPage youOwe={debts.youOwe} owesYou={debts.owesYou} />,
    //<PitchBox pitchers={debts} name="Brooks" amount={25.30} message="Test message" />, 
    document.getElementById("breakdown-page-content")
);
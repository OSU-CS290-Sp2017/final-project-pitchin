import * as React from "react";
import * as ReactDOM from "react-dom";

//import our component we made in the other hellocomponent.tsx file
import { PitchPage } from "./components/pitchpage";
//import { IPitcherModel } from "./components/pitcher";

//this call renders the top level component (in this case the PitchBox) to the DOM
//we have to give it a place to render to, so we pass in a div with id="example"
//you can use your components just like html elements, with the properties as attributes

//test data: 
const pitchers = [ {
        name: "Daniel Grocki",
        amount: 4.20
    }, {
        name: "Zoe Stein-Hansen",
        amount: 3.30
    }
];

ReactDOM.render(
    <PitchPage expenses={} />,
    document.getElementById("pitchbox-example")
);
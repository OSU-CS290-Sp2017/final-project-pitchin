import * as React from "react";
import * as ReactDOM from "react-dom";

//import our component we made in the other hellocomponent.tsx file
import { HelloComponent } from "./components/hellocomponent";

//this call renders the top level component (in this case the HelloComponent) to the DOM
//we have to give it a place to render to, so we pass in a div with id="example"
//you can use your components just like html elements, with the properties as attributes
ReactDOM.render(
    <HelloComponent message="This message was passed in the constructor" />,
    document.getElementById("example")
);
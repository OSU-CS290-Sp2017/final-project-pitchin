import * as React from 'react';

//the properties that HelloComponent uses when being created
interface IHelloProps {
    message: string;
}

//the prototype for the state of the react component
interface IHelloState {
    name: string;
}

//Each component in react is basically a reusable bit of html with some 
//logic tied to it thanks to javascript

//export means it will be visible to any other file that wants to import it
export class HelloComponent extends React.Component<IHelloProps, IHelloState> {
    constructor(props: IHelloProps) {
        super(props);
        //only time you can directly change the state is in the constructor
        //otherwise, call this.setState()
        this.state = {
            name: ""
        }
    }

    onNameChanged = (ev: React.ChangeEvent<HTMLInputElement>) => {
        //you have to make a new object every time you set the state so react 
        //knows which parts of the component it needs to update
        const newState = {
            name: ev.currentTarget.value
        }

        //this will update the h1 tag with the current name
        this.setState(newState);
    }

    /* the render function is in every react component. it is called whenever 
    the dom needs to be refreshed, like when you change the state of the 
    component changes*/

    render() {
        //any html in parentheses can be converted to js :)
        return (
            //jsx always has to have single element at the top level, so we'll add a wrapper div
            //you can put javascript in braces {} inside the jsx.
            <div>
                <h1 className="hello-world">Hello {this.state.name}!</h1>
                <p>{this.props.message}</p>
                <input type="text" onChange={this.onNameChanged} value={this.state.name} placeholder="Write your name here" />
            </div>
        );
    }
}
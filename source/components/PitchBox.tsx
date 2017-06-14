import * as React from "react";
import { Pitcher } from "./pitcher";
import { IPitcherModel } from "../models/IPitcherModel";
import { IPitchBoxModel } from "../models/IPitchBoxModel"
import { Helpers } from "../helpers";

interface IPitchBoxState {
    pitched: boolean;
    pitchers: IPitcherModel[];
    showPitchers: boolean;
}

export class PitchBox extends React.Component<IPitchBoxModel, IPitchBoxState> {
    constructor(props: IPitchBoxModel) {
        super(props);
        props.pitchers.forEach((p) => {
            p.amount = props.amount / (props.pitchers.length + 1);
        });
        var pitched = false;
        props.pitchers.forEach((p) => {
            if (p.name == Helpers.getName())
                pitched = true;
        })
        if (props.name == Helpers.getName()) 
            pitched = true;
        this.state = {
            pitched: pitched,
            pitchers: props.pitchers,
            showPitchers: false
        }
    }

    componentWillReceiveProps(nextProps: IPitchBoxModel) {
        var pitched = false;
        this.state.pitchers.forEach((p) => {
            if (p.name == Helpers.getName())
                pitched = true;
        })
        if (this.props.name == Helpers.getName()) 
            pitched = true;
        const newState = {
            ...this.state,
            pitched: pitched
        }
        this.setState(newState);
    }

    onPitchInClicked = () => {
        const newPitcher = {
            name: Helpers.getName(),
            amount: this.props.amount / (this.props.pitchers.length + 2)
        };
        var pitchers = this.state.pitchers.map((p) => {
            p.amount = this.props.amount / (this.props.pitchers.length + 2);
            return p;
        });
        pitchers = pitchers.concat(newPitcher);
        const newState = {
            ...this.state,
            pitched: true,
            pitchers: pitchers
        };
        this.setState(newState);
        this.savePitchin(newPitcher);
    }

    savePitchin(pitcher: IPitcherModel) {
        var postReq = new XMLHttpRequest();
        postReq.open('POST', './addpitcher/expense/' + this.props.id);
        postReq.setRequestHeader('Content-Type', 'application/json');
        postReq.send(JSON.stringify(pitcher));
    }

    togglePitchers = () => {
        const newState = {
            ...this.state, 
            showPitchers: !this.state.showPitchers
        };
        this.setState(newState);
    }

    render() {
        const pitchersJsx = this.state.pitchers.map((p) => {
            return (
                <Pitcher name={p.name} amount={p.amount} />
            )
        })

        return (
        <div className="pitch-box">
            <div className="pitch-money-box">
                {"$" + this.props.amount.toFixed(2)}
            </div>
            <div className="pitch-content">
                {
                    !this.state.pitched ?
                        <button className="pitch-in-button" onClick={this.onPitchInClicked}>Pitch in!</button>
                    : <button className="pitch-in-button">Pitched in ✓</button>
                }
                <div className="pitch-name">
                    {this.props.name}
                </div>
                <div className="pitch-message">
                    {this.props.message}
                </div>
                <div className="pitch-box-pitchers">
                    { this.state.showPitchers ? pitchersJsx : ""}
                </div>
                <div className="show-pitchers">
                    <a onClick={this.togglePitchers}> {this.state.showPitchers ? "Hide" : "Show"} pitchers</a>
                </div>
            </div>

        </div>);
    }
}
import * as React from "react";
import { Pitcher, IPitcherModel } from "./pitcher";

export interface IPitchBoxModel {
    name: string;
    amount: number;
    message: string;
    pitchers: IPitcherModel[];
}

interface IPitchBoxState {
    pitched: boolean;
    pitchers: IPitcherModel[];
    showPitchers: boolean;
}

export class PitchBox extends React.Component<IPitchBoxModel, IPitchBoxState> {
    constructor(props: IPitchBoxModel) {
        super(props);
        this.state = {
            pitched: false,
            pitchers: props.pitchers,
            showPitchers: false
        }
    }

    onPitchInClicked = () => {
        const newPitcher = {
            name: "New Pitcher", //TODO: get name from cookies
            amount: this.props.amount / (this.props.pitchers.length + 1)
        };
        const newState = {
            ...this.state,
            pitched: true,
            pitchers: [...this.state.pitchers, newPitcher]
        };
        this.setState(newState);
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
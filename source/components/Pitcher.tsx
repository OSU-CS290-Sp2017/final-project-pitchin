import * as React from 'react';
import { IPitcherModel } from '../models/IPitcherModel';

export class Pitcher extends React.Component<IPitcherModel, undefined> {
    render() {
        return (
            <span className="pitch-box-pitcher">
                <span className="pitcher-amount">
                    ${this.props.amount.toFixed(2)}
                </span>
                <span className="pitcher-name">
                    {this.props.name}
                </span>
            </span>
        );
    }
}
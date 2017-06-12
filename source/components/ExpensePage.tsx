import * as React from 'react';

import { ExpenseList } from './expenselist';
import { IPitchBoxModel } from '../models/IPitchBoxModel';

export interface IExpensePageModel {
    groceries: IPitchBoxModel[];
    utilities: IPitchBoxModel[];
    other: IPitchBoxModel[];
}

export class ExpensePage extends React.Component<IExpensePageModel, undefined> {
    render() {
        return(
            <div className="pitch-area">
                <div classID="groceries" className="pitch-container">
                    <ExpenseList expenses={this.props.groceries} name="Groceries"/>
                </div>
                <div classID="utilities" className="pitch-container">
                    <ExpenseList expenses={this.props.utilities} name="Utilities"/>
                </div>
                <div classID="misc" className="pitch-container">
                    <ExpenseList expenses={this.props.other} name="Miscellaneous"/>
                </div>
            </div>
        )
    }
}

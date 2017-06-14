import * as React from 'react';

import { PitchBox } from './pitchbox';
import { IPitchBoxModel } from '../models/IPitchBoxModel';

interface IExpenses {
    name: string;
    expenses: IPitchBoxModel[];
}

export class ExpenseList extends React.Component<IExpenses, undefined> {
    render() {
        const expensesJSX = this.props.expenses.map((expense) => {
            return(<PitchBox 
                name={expense.name} 
                amount={expense.amount} 
                pitchers={expense.pitchers} 
                message={expense.message} />)
        });

        return (
            <div>
                <h2 className="breakdown-header">{this.props.name}</h2>
                {expensesJSX}
            </div>
        );
    }
}
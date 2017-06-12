import * as React from 'react';

import { PitchBox } from './pitchbox';
import { IPitchBoxModel } from '../models/IPitchBoxModel';

interface IExpenses {
    expenses: IPitchBoxModel[];
}

export class PitchPage extends React.Component<IExpenses, undefined> {
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
                {expensesJSX}
            </div>
        );
    }
}
import * as React from 'react';

import { ExpenseList } from './expenselist';
import { IPitchBoxModel } from '../models/IPitchBoxModel';
import { AddExpenseModal } from './addexpensemodal';
import { IExpense, ExpenseCategory } from '../models/IExpense'

export interface IExpensePageModel {
    expenses: IExpense[];
}

interface IExpensePageState {
    addModalVisible: boolean;
    expenses: IExpense[]
}

interface IExpensesSplit {
    groceries: IExpense[];
    utilities: IExpense[];
    other: IExpense[];
}

export class ExpensePage extends React.Component<IExpensePageModel, IExpensePageState> {
    constructor(props: IExpensePageModel) {
        super()
        this.state = {
            addModalVisible: false,
            expenses: props.expenses
        }
        document.getElementById("add-expense-button").onclick = this.toggleAddModalVisible;
    }

    toggleAddModalVisible = () => {
        const newState = {
            ...this.state,
            addModalVisible: !this.state.addModalVisible
        }
        this.setState(newState);
    }

    addExpense = (expense: IExpense) => {
        //TODO: post back to API
        const newState = {
            ...this.state,
            expenses: [...this.state.expenses, expense],
            addModalVisible: !this.state.addModalVisible
        }
        this.setState(newState);
    }

    separateExpenses(data: IExpense[]): IExpensesSplit {
        const groceries = data.filter((expense) => {
            return expense.category == "G";
        });
        const misc = data.filter((expense) => {
            return expense.category == "M";
        });
        const utils = data.filter((expense) => {
            return expense.category == "U";
        });
        
        return {
            groceries: groceries, 
            other: misc,
            utilities: utils
        };
    }

    render() {
        const splitExpenses = this.separateExpenses(this.state.expenses);
        return(
            <div>
                <AddExpenseModal onCancel={this.toggleAddModalVisible} onSubmit={this.addExpense} visible={this.state.addModalVisible} />
                <div className="pitch-area">
                    <div classID="groceries" className="pitch-container">
                        <ExpenseList expenses={splitExpenses.groceries} name="Groceries"/>
                    </div>
                    <div classID="utilities" className="pitch-container">
                        <ExpenseList expenses={splitExpenses.utilities} name="Utilities"/>
                    </div>
                    <div classID="misc" className="pitch-container">
                        <ExpenseList expenses={splitExpenses.other} name="Miscellaneous"/>
                    </div>
                </div>
            </div>
        )
    }
}

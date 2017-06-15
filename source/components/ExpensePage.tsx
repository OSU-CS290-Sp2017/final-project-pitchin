import * as React from 'react';

import { ExpenseList } from './expenselist';
import { IPitchBoxModel } from '../models/IPitchBoxModel';
import { AddExpenseModal } from './addexpensemodal';
import { IExpense, ExpenseCategory } from '../models/IExpense';

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
        document.getElementById("DG").addEventListener('click', () => { this.refreshPitches() });
        document.getElementById("BM").addEventListener('click', () => { this.refreshPitches() });
        document.getElementById("ZS").addEventListener('click', () => { this.refreshPitches() });
        document.getElementById("CP").addEventListener('click', () => { 
            this.refreshPitches() 
        });
    }

    refreshPitches() {
        //this is terrible code, only to hook up with daniels regular js
        setTimeout(() => {
            const newState = {
            ...this.state, 
            expenses: this.state.expenses.slice()
        };
        this.setState(newState);
        }, 50);
    }

    toggleAddModalVisible = () => {
        const newState = {
            ...this.state,
            addModalVisible: !this.state.addModalVisible
        }
        this.setState(newState);
    }

    addExpense = (expense: IExpense) => {
        const newState = {
            ...this.state,
            expenses: [...this.state.expenses, expense],
            addModalVisible: !this.state.addModalVisible
        }
        this.setState(newState);
        this.saveExpense(expense);
    }

    saveExpense(expense: IExpense) {
        var postReq = new XMLHttpRequest();
        postReq.open('POST', './addexpense');
        postReq.setRequestHeader('Content-Type', 'application/json');
        postReq.send(JSON.stringify(expense));
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

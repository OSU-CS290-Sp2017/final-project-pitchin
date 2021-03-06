import * as React from 'react';

import { IExpense, ExpenseCategory } from '../models/IExpense'
import { SegmentButton } from './SegmentButton';
import { Helpers } from '../helpers';

interface IAddExpenseProps {
    visible: boolean;
    onSubmit(pitchbox: IExpense): void;
    onCancel(): void;
}

export class AddExpenseModal extends React.Component<IAddExpenseProps, IExpense> {
    constructor(props: IAddExpenseProps) {
        super(props);
        this.state = {
            name: Helpers.getName(), //TODO: read name from cookies
            amount: 0,
            message: "",
            pitchers: [],
            category: ExpenseCategory.Utilities,
            id: -1
        }
    }

    setCategory = (selected: number) => {
        var category: string;
        switch (selected) {
            case 0:
                category = ExpenseCategory.Utilities;
                break;
            case 1:
                category = ExpenseCategory.Groceries;
                break;
            case 2:
                category = ExpenseCategory.Miscellaneous;
                break;
            default:
                category = ExpenseCategory.Utilities;
                break;
        }
        const newState = {
            ...this.state,
            category: category
        }
        this.setState(newState);
    }

    onAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const num = Math.abs(Number(e.currentTarget.value));
        const newState = {
            ...this.state,
            amount: num
        }
        this.setState(newState);
    }

    onMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newState = {
            ...this.state,
            message: e.currentTarget.value
        }
        this.setState(newState);
    }

    resetForm() {
        const newState = {
            ...this.state,
            name: Helpers.getName(), //TODO: read name from cookies
            amount: 0,
            message: "",
            category: ExpenseCategory.Utilities,
        }
        this.setState(newState);
    }

    onOkClicked() {
        const newExpense = {
            ...this.state,
            name: Helpers.getName()
        }
        this.props.onSubmit(newExpense);
    }

    render() {
        return (
            <div className={this.props.visible ? "modal-backdrop" : "hidden"}>
                <div className="modal">
                    <h2 className="breakdown-header">
                        Add an expense
                    </h2>
                    <div className="modal-main">
                        <div>
                            <SegmentButton onSelect={this.setCategory} segments={['Utilities', 'Groceries', 'Miscellaneous']}/>
                        </div>
                        <div>
                            Amount: $
                            <input className="input-amount" type="number" onChange={this.onAmountChange} />
                        </div>
                        <div>
                            <input className="input-message" type="text" onChange={this.onMessageChange} value={this.state.message} placeholder="Message..."/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="button" onClick={this.props.onCancel}>Cancel</button>
                        <button className="button button-highlighted modal-button-add" 
                        onClick={() => {
                            this.onOkClicked(); 
                            this.resetForm();}
                        }>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}
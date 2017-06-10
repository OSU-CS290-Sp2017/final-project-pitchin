import * as React from 'react';
import { BreakdownTable, IDebtModel } from './breakdowntable';

interface IBreakdownProps {
    youOwe: IDebtModel[],
    owesYou: IDebtModel[]
}

export class BreakdownPage extends React.Component<IBreakdownProps, undefined> {
    calcTotal(debtList: IDebtModel[]): number {
        var total = 0;
        debtList.forEach(debt => {
            total += debt.amount;
        });
        return total;
    }

    render() {
        const youOweSection = (
            <div className="breakdown-section">
                <h2 className="breakdown-header">
                    You owe a total of ${this.calcTotal(this.props.youOwe).toFixed(2)} to {this.props.youOwe.length} {this.props.youOwe.length == 1 ? "person" : "people"}.
                </h2>
                <BreakdownTable debts={this.props.youOwe} />
            </div>
        );
        const owesYouSection = (
            <div className="breakdown-section">
                <h2 className="breakdown-header">
                    {this.props.owesYou.length} {this.props.youOwe.length == 1 ? "person owes" : "people owe"} you a total of ${this.calcTotal(this.props.owesYou).toFixed(2)}.
                </h2>
                <BreakdownTable debts={this.props.owesYou} />
            </div>
        );
        const netMoney = this.calcTotal(this.props.owesYou) 
            - this.calcTotal(this.props.youOwe);
        return (
            <div className="breakdown-container">
                {this.props.youOwe.length == 0 ? "" : youOweSection}
                {this.props.owesYou.length == 0 ? "" : owesYouSection}
                <div className="breakdown-section breakdown-summary">
                    Overall, you {netMoney > 0 ? "gained" : "spent"} ${Math.abs(netMoney).toFixed(2)}
                </div>
            </div>
        );
    }
}
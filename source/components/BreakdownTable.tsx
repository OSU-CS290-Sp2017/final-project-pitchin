import * as React from 'React';

export interface IDebtModel {
    amount: number;
    name: string;
}

interface IBreakdownTableProps {
    debts: IDebtModel[];
}

export class BreakdownTable extends React.Component<IBreakdownTableProps, undefined> {
    render() {
        const debtsContents = this.props.debts.map((debt, index) => {
            return (
            <tr className="debts-table-row" key={index}>
                <td className="debts-table-name">{debt.name}</td>
                <td className="debts-table-amount">${debt.amount.toFixed(2)}</td>
            </tr>)
        });
        return (
            <table className="debts-table">
                {debtsContents}
            </table>
        );
    }
}
import { IPitcherModel } from "./IPitcherModel";

export interface IExpense {
    name: string;
    amount: number;
    message: string;
    category: string;
    pitchers: IPitcherModel[];
}

export class ExpenseCategory {
    static Utilities = "U";
    static Groceries = "G";
    static Miscellaneous = "M";
}
import { IPitcherModel } from "./IPitcherModel";

export interface IPitchBoxModel {
    name: string;
    amount: number;
    message: string;
    pitchers: IPitcherModel[];
}

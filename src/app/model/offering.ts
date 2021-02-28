export class OfferingModel {
    constructor( public name:string, public amount:number){}

}

export interface IOffering {
    name: string;
    amount: number;
}
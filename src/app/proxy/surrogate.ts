import { IHuman } from './ihuman';

export class Surrogate implements IHuman {
    private operator: IHuman;

    constructor(operator: IHuman) {
        this.operator = operator;
    }

    public setGreeting(speech: string): void {
        this.operator.setGreeting(speech);
    }

    public getGreeting(): string {
       return this.operator.getGreeting();
    }
}

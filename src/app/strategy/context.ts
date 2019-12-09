import { Srtategy } from './strategy';

export class Context {
    private strategy: Srtategy;
    public array = [];

    constructor(strategy: Srtategy, array: number[]) {
        this.strategy = strategy;
        this.array = array;
    }

    public sort(): number[] {
        return this.strategy.sort(this.array);
    }
}

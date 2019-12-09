import { Mediator } from './mediator';

export abstract class Colleague {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }
}

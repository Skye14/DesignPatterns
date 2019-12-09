import { Colleague } from './colleague';
import { Mediator } from './mediator';

export class Shop extends Colleague {
    private name = 'Shop';

    constructor(mediator: Mediator) {
        super(mediator);
    }

    public sellKetchup(message: string): string {
        return `${message} ${this.name} sells ketchup.`;
    }
}

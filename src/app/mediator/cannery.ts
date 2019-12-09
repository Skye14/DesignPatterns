import { Mediator } from './mediator';
import { Colleague } from './colleague';

export class Cannery extends Colleague {
    private name = 'Cannery';
    private ketchup = 'ketchup';

    constructor(mediator: Mediator) {
        super(mediator);
    }

    public makeKetchup(message: string): void {
        const msg = `${message} ${this.name} made ${this.ketchup}. `;
        this.mediator.send(msg, this);
    }
}

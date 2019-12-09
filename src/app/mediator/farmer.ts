import { Colleague } from './colleague';
import { Mediator } from './mediator';

export class Farmer extends Colleague {
    private name = 'Farmer';
    private tomatos = 'tomatoes';

    constructor(mediator: Mediator) {
        super(mediator);
    }

    public growTomato(): void {
        const message = `${this.name} has grown ${this.tomatos}.`;
        this.mediator.send(message, this);
    }
}

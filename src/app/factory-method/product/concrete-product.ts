import { AbstractProduct } from './abstract-product';

export class ConcreteProduct extends AbstractProduct {

    constructor() {
        super();
    }

    public getMessage(): string {
        return 'Concrete product was created';
    }
}

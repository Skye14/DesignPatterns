import { Colleague } from './colleague';

export abstract class Mediator {
    public abstract send(message: string, colleague: Colleague): void;
}

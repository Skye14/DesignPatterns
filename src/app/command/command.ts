import { Reciever } from './reciever';

export abstract class Command {
    protected reciever: Reciever;

    constructor(reciever: Reciever) {
        this.reciever = reciever;
    }

    public abstract execute(): string;
}

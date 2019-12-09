import { Reciever } from './reciever';
import { Command } from './command';

export class ConcreteCommand extends Command {
    private message = `Command completed`;

    constructor(reciver: Reciever) {
        super(reciver);
    }

    public execute(): string {
        return this.reciever.action(this.message);
    }
}

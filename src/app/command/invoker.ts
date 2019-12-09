import { Command } from './command';

export class Invoker {
    private command: Command;

    public storeCommand(command: Command): void {
        this.command = command;
    }

    public executeCommand(): string {
       return this.command.execute();
    }
}

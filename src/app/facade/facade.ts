import { SubSystemA } from './subsystem-a';
import { SubSystemB } from './subsystem-b';
import { SubSystemC } from './subsystem-c';

export class Facade {
    private command: string;
    private subSystemA: SubSystemA;
    private subSystemB: SubSystemB;
    private subSystemC: SubSystemC;

    constructor() {
        this.subSystemA = new SubSystemA();
        this.subSystemB = new SubSystemB();
        this.subSystemC = new SubSystemC();
    }

    public getCommandAB(): string {
        this.command = `${this.subSystemA.getCommand()} and ${this.subSystemB.getCommand()} were generated!`;
        return this.command;
    }

    public getCommandBC(): string {
        this.command = `${this.subSystemB.getCommand()} and ${this.subSystemC.getCommand()} were generated!`;
        return this.command;
    }
}

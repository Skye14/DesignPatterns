import { Memento } from './memento';

export class Originator {
    public state: string;

    public setMemento(memento: Memento): void {
        this.state = memento.state;
    }

    public createMemento(): Memento {
        return new Memento(this.state);
    }
}

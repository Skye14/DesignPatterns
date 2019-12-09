import { Human } from './human';

export abstract class State {
    public message: string;
    public abstract handle(human: Human): void;
}

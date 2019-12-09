import { State } from './state';

export class Human {
    public name: string;
    public state: State;

    constructor(name: string, state: State) {
        this.name = name;
        this.state = state;
    }

    public request(): void {
        this.state.handle(this);
    }
}

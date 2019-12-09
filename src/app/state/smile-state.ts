import { Human } from './human';
import { State } from './state';
import { SadnessState } from './sadness-state';

export class SmileState extends State {
    public message = `smile`;

    public handle(human: Human): void {
        human.state = new SadnessState();
    }
}

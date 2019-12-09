import { State } from './state';
import { Human } from './human';
import { SmileState } from './smile-state';

export class SadnessState extends State  {
    public message = `sadness`;

    public handle(human: Human): void {
        human.state = new SmileState();
    }
}

import { Flyweight } from './flyweight';

export class ActorMikeMyers extends Flyweight {

    public greeting(speech: string): string {
        return speech;
    }
}

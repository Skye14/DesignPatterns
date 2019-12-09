import { Flyweight } from './flyweight';

export class RoleAustinPowers extends Flyweight {
    private flyweight: Flyweight;

    constructor(flyweight: Flyweight) {
        super();
        this.flyweight = flyweight;
    }

    public greeting(speech: string): string {
        return speech;
    }
}

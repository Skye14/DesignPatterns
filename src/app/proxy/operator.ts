import { IHuman } from './ihuman';

export class Operator implements IHuman {
    private greeting: string;

    public setGreeting(speech: string): void {
        this.greeting = speech;
    }

    public getGreeting(): string {
        return this.greeting;
    }
}

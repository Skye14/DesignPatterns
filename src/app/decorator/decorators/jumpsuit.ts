import { Decorator } from './decorator';

export class Jumpsuit extends Decorator {
    private message: string;

    public operation(): void {
        super.operation();
        this.message = 'Jumpsuit was dressed';
    }

    public getMessage(): string {
        return this.message;
    }
}

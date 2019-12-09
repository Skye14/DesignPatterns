import { Decorator } from './decorator';

export class Propeller extends Decorator {
    private message: string;

    public operation(): void {
        super.operation();
        this.message = 'The propeller was wearing';
    }

    public getMessage(): string {
        return this.message;
    }
}

import { AbstractEntity } from './abstract-entity';

export class Carlson extends AbstractEntity {
    private message: string;

    public operation(): void {
        this.message = 'Carlson woke up!';
    }

    public getMessage(): string {
        return this.message;
    }
}

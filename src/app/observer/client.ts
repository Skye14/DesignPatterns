import { IObserver } from './iobserver';

export class Client implements IObserver {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    sendEmail(): string {
        return `Sending a mail to ${this.name}`;
    }

}

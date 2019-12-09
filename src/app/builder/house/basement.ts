export class Basement {
    private message: string;

    constructor() {
        this.message = 'The basement is built.';
    }

    getMessage(): string {
       return this.message;
    }

}

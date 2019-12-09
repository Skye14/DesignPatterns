export class Roof {
    private message: string;

    constructor() {
        this.message = 'The roof is built.';
    }

    public getMessage(): string {
        return this.message;
    }
}

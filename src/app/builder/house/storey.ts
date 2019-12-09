export class Storey {
    private message: string;

    constructor() {
        this.message = 'The storey is built.';
    }

    public getMessage(): string {
       return this.message;
    }
}

import { Handler } from './handler';

export class ConcreteHandler2 extends Handler {

    public handleRequest(request: number): void {
        if (request === 2) {
            this.rezult = `Request processed by concrete handler 2`;
        } else if (this.successor !== null) {
            this.successor.handleRequest(request);
        }
    }

}

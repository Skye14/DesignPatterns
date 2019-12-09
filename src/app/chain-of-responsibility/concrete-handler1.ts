import { Handler } from './handler';

export class ConcreteHandler1 extends Handler {

    public handleRequest(request: number): void {
        if (request === 1) {
            this.rezult = `Request processed by concrete handler 1`;
        } else if (this.successor !== null) {
            this.successor.handleRequest(request);
        }
    }

}

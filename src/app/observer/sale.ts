import { IObserver } from './iobserver';

export class Sale {
    private observers: IObserver[];

    constructor() {
        this.observers = [];
    }

    addObserver(ob: IObserver): void {
        this.observers.push(ob);
    }

    notifyObservers(): string[] {
        const result = [];
        this.observers.map((observer) =>
            result.push(observer.sendEmail())
        );

        return result;
    }

}

import { Component } from '@angular/core';

import { ConcreteHandler1 } from '../concrete-handler1';
import { ConcreteHandler2 } from './../concrete-handler2';

@Component({
    selector: 'app-base-chain-of-responsibility',
    templateUrl: './base-chain-of-responsibility.component.html',
    styleUrls: ['./base-chain-of-responsibility.component.css']
})
export class BaseChainOfResponsibilityComponent {

    private handler1 = new ConcreteHandler1();
    private handler2 = new ConcreteHandler2();

    constructor() {
        this.handler1.successor = this.handler2;
    }

    public getResponseFromHandler1(): void {
        this.handler1.handleRequest(1);
    }

    public getResponseFromHandler2(): void {
        this.handler2.handleRequest(2);
    }

}

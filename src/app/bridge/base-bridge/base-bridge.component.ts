import { RefinedAbstractionComponent } from './../abstraction/refined-abstraction/refined-abstraction.component';
import { Component } from '@angular/core';
import { AbstractionComponent } from '../abstraction/abstraction.component';
import { ConcreteImplementerAComponent } from '../implementer/concrete-implementer-a/concrete-implementer-a.component';
import { ConcreteImplementerBComponent } from '../implementer/concrete-implementer-b/concrete-implementer-b.component';

@Component({
    selector: 'app-base-bridge',
    templateUrl: './base-bridge.component.html',
    styleUrls: ['./base-bridge.component.css']
})
export class BaseBridgeComponent {
    public abstraction: AbstractionComponent;
    public implementerA: string;
    public implementerB: string;

    constructor() { }

    public getConcreteImplementerA(): void {
        this.abstraction = new RefinedAbstractionComponent(new ConcreteImplementerAComponent());
        this.implementerA = this.abstraction.operation();

    }

    public getConcreteImplementerB(): void {
        this.abstraction = new RefinedAbstractionComponent(new ConcreteImplementerBComponent());
        this.implementerB = this.abstraction.operation();
    }

}

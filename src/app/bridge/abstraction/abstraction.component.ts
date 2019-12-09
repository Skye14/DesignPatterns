import { Component } from '@angular/core';
import { ImplementerComponent } from '../implementer/implementer.component';

@Component({
    selector: 'app-abstraction',
    templateUrl: './abstraction.component.html',
    styleUrls: ['./abstraction.component.css']
})
export abstract class AbstractionComponent {

    protected implementer: ImplementerComponent;

    constructor(imp: ImplementerComponent) {
        this.implementer = imp;
    }

    public operation(): string {
        return this.implementer.operationImp();
    }

}

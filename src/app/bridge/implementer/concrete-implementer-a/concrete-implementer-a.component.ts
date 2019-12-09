import { Component } from '@angular/core';
import { ImplementerComponent } from '../implementer.component';

@Component({
    selector: 'app-concrete-implementer-a',
    templateUrl: './concrete-implementer-a.component.html',
    styleUrls: ['./concrete-implementer-a.component.css']
})
export class ConcreteImplementerAComponent extends ImplementerComponent {

    constructor() {
        super();
    }

    public operationImp(): string {
        return 'Concrete Implementer A';
    }

}

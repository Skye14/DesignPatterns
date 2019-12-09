import { Component } from '@angular/core';
import { ImplementerComponent } from '../implementer.component';

@Component({
    selector: 'app-concrete-implementer-b',
    templateUrl: './concrete-implementer-b.component.html',
    styleUrls: ['./concrete-implementer-b.component.css']
})
export class ConcreteImplementerBComponent extends ImplementerComponent {

    constructor() {
        super();
    }

    public operationImp(): string {
        return 'Concrete Implementer B';
    }

}

import { Component } from '@angular/core';
import { AbstractionComponent } from '../abstraction.component';
import { ImplementerComponent } from '../../implementer/implementer.component';

@Component({
    selector: 'app-refined-abstraction',
    templateUrl: './refined-abstraction.component.html',
    styleUrls: ['./refined-abstraction.component.css']
})
export class RefinedAbstractionComponent extends AbstractionComponent {

    constructor(imp: ImplementerComponent) {
        super(imp);
    }

    public operation(): string {
        return super.operation();
    }

}

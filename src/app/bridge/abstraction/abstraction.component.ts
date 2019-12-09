import { ImplementerComponent } from '../implementer/implementer.component';

export abstract class AbstractionComponent {

    protected implementer: ImplementerComponent;

    constructor(imp: ImplementerComponent) {
        this.implementer = imp;
    }

    public operation(): string {
        return this.implementer.operationImp();
    }

}

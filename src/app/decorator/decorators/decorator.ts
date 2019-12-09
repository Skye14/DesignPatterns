import { AbstractEntity } from '../entity/abstract-entity';

export abstract class Decorator extends AbstractEntity {

    public entity: AbstractEntity;

    public operation(): void {
        if (this.entity) {
            this.entity.operation();
        }
    }
}

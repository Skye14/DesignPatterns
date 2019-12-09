import { Element } from './element';
import { Visitor } from './visitor';

export class BoysHouse extends Element {
    public gift: string;

    public accept(visitor: Visitor): void {
        visitor.visitBoysHouse(this);
    }

    public giveCar(gift: string): void {
        this.gift = gift;
    }
}

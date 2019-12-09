import { Element } from './element';
import { Visitor } from './visitor';

export class GirlsHouse extends Element {
    public gift: string;

    public accept(visitor: Visitor): void {
        visitor.visitGirlsHouse(this);
    }

    public giveDress(gift: string): void {
        this.gift = gift;
    }
}

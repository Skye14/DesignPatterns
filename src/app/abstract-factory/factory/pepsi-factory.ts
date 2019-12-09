import { PepsiWater } from '../water/pepsi-water';
import { AbstractFactory } from './abstract-factory';
import { AbstractWater } from '../water/abstart-water';
import { AbstractBottle } from '../bottle/abstract-bottle';
import { PepsiBottle } from '../bottle/pepsi-bottle';

export class PepsiFactory extends AbstractFactory {
    constructor() {
        super();
    }

    public createWater(): AbstractWater {
        return new PepsiWater();
    }

    public createBottle(): AbstractBottle {
        return new PepsiBottle();
    }
}

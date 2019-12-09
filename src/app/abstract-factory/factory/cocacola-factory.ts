import { CocacolaWater } from '../water/cocacola-water';
import { AbstractFactory } from './abstract-factory';
import { AbstractWater } from '../water/abstart-water';
import { AbstractBottle } from '../bottle/abstract-bottle';
import { CocacolaBottle } from '../bottle/cocacola-bottle';

export class CocacolaFactory extends AbstractFactory {
    constructor() {
        super();
    }

    public createWater(): AbstractWater {
        return new CocacolaWater();
    }

    public createBottle(): AbstractBottle {
        return new CocacolaBottle();
    }
}

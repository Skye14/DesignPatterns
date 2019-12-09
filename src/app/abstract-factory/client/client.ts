import { AbstractWater } from '../water/abstart-water';
import { AbstractBottle } from '../bottle/abstract-bottle';
import { AbstractFactory } from '../factory/abstract-factory';

export class Client {
    private water: AbstractWater;
    private bottle: AbstractBottle;

    constructor(factory: AbstractFactory) {
        this.water = factory.createWater();
        this.bottle = factory.createBottle();
    }

    public run(): string {
        return this.bottle.interact();
    }
}

import { AbstractWater } from '../water/abstart-water';
import { AbstractBottle } from '../bottle/abstract-bottle';

export abstract class AbstractFactory {
    public abstract createWater(): AbstractWater;
    public abstract createBottle(): AbstractBottle;
}

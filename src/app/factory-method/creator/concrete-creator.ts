import { ConcreteProduct } from './../product/concrete-product';
import { AbstractCreator } from './abstract-creator';
import { AbstractProduct } from '../product/abstract-product';

export class ConcreteCreator extends AbstractCreator {
    public factoryMethod(): AbstractProduct {
        return new ConcreteProduct();
    }
}

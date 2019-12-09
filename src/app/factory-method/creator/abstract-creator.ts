import { AbstractProduct } from '../product/abstract-product';

export abstract class AbstractCreator {
    public abstract factoryMethod(): AbstractProduct;
}

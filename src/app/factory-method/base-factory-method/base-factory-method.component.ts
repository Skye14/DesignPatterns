import { ConcreteProduct } from './../product/concrete-product';
import { Component } from '@angular/core';
import { ConcreteCreator } from '../creator/concrete-creator';

@Component({
    selector: 'app-base-factory-method',
    templateUrl: './base-factory-method.component.html',
    styleUrls: ['./base-factory-method.component.css']
})
export class BaseFactoryMethodComponent {
    public creator: ConcreteCreator;
    public product: ConcreteProduct;
    public message: string;

    constructor() { }

    public getConcreteProduct(): void {
        this.creator = new ConcreteCreator();
        this.product = this.creator.factoryMethod();
        this.message = this.product.getMessage();
    }

}

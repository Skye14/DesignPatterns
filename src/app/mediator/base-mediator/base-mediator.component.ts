import { Shop } from './../shop';
import { Cannery } from './../cannery';
import { Farmer } from './../farmer';
import { ConcreteMediator } from './../concrete-mediator';
import { Component } from '@angular/core';

@Component({
    selector: 'app-base-mediator',
    templateUrl: './base-mediator.component.html',
    styleUrls: ['./base-mediator.component.css']
})
export class BaseMediatorComponent {
    public mediator = new ConcreteMediator();
    private farmer: Farmer;
    private cannery: Cannery;
    public result1: string;

    public getResult(): void {
        this.farmer = new Farmer(this.mediator);
        this.cannery = new Cannery(this.mediator);
        this.mediator.farmer = this.farmer;
        this.mediator.cannery = this.cannery;
        this.farmer.growTomato();
    }
}

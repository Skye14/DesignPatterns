import { House } from './../house/house';
import { ConcreteBuilder } from './../builder/concrete-builder';
import { Foreman } from './../foreman';
import { Component } from '@angular/core';
import { AbstractBuilder } from '../builder/abstract-builder';

@Component({
    selector: 'app-base-builder',
    templateUrl: './base-builder.component.html',
    styleUrls: ['./base-builder.component.css']
})
export class BaseBuilderComponent {

    private builder: AbstractBuilder;
    private foreman: Foreman;
    private house: House;
    public partsOfHouse = [];

    constructor() { }

    public onBuildHouse(): void {
        this.builder = new ConcreteBuilder();
        this.foreman = new Foreman(this.builder);
        this.house = this.builder.getResult();
        this.foreman.construct();
        this.house = this.builder.getResult();
        this.partsOfHouse = this.house.getPartsOfHouse();
    }

}

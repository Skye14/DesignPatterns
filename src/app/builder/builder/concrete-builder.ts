import { Roof } from './../house/roof';
import { Storey } from './../house/storey';
import { House } from './../house/house';
import { AbstractBuilder } from './abstract-builder';
import { Basement } from '../house/basement';

export class ConcreteBuilder extends AbstractBuilder {
    public house = new House();

    public buildBasement(): void {
        const basement = new Basement();
        this.house.add(basement.getMessage());
    }

    public buildStorey(): void {
        const storey = new Storey();
        this.house.add(storey.getMessage());
    }

    public buildRoof(): void {
        const roof = new Roof();
        this.house.add(roof.getMessage());
    }

    public getResult(): House {
        return this.house;
    }
}

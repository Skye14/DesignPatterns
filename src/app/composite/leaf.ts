import { AbstractComponent } from './abstract-component';

export class Leaf extends AbstractComponent {
    constructor(name: string) {
        super(name);
    }

    public operation(): void {
       console.log(this.name);
    }

    public add(component: AbstractComponent): void {
        throw new Error('Method not implemented.');
    }

    public remove(component: AbstractComponent): void {
        throw new Error('Method not implemented.');
    }

    public getChild(index: number): AbstractComponent {
        throw new Error('Method not implemented.');
    }
}

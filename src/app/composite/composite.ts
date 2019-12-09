import { AbstractComponent } from './abstract-component';

export class Composite extends AbstractComponent {
    private nodes = [];

    constructor(name: string) {
        super(name);
    }

    public operation(): void {
        console.log(this.name);
        this.nodes.forEach(element => {
            element.operation();
        });
    }

    public add(component: AbstractComponent): void {
        this.nodes.push(component);
    }

    public remove(component: AbstractComponent): void {
        for (const ind of this.nodes) {
            if (this.nodes[ind] === component) {
                delete this.nodes[ind];
            }
        }
    }

    public getChild(index: number): AbstractComponent {
        return this.nodes[index];
    }
}

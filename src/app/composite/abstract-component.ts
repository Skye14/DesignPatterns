export abstract class AbstractComponent {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    public abstract operation(): void;
    public abstract add(component: AbstractComponent): void;
    public abstract remove(component: AbstractComponent): void;
    public abstract getChild(index: number): AbstractComponent;
}

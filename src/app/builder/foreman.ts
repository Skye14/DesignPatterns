import { AbstractBuilder } from './builder/abstract-builder';

export class Foreman {
    public builder: AbstractBuilder;

    constructor(builder: AbstractBuilder) {
        this.builder = builder;
    }

    public construct(): void {
        this.builder.buildBasement();
        this.builder.buildStorey();
        this.builder.buildRoof();
    }
}

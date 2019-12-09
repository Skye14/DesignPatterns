import { House } from '../house/house';

export abstract class AbstractBuilder {
    public abstract buildBasement(): void;
    public abstract buildStorey(): void;
    public abstract buildRoof(): void;
    public abstract getResult(): House;
}

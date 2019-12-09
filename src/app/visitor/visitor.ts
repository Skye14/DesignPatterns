import { BoysHouse } from './boys-house';
import { GirlsHouse } from './girls-house';

export abstract class Visitor {
    public abstract visitBoysHouse(boysHouse: BoysHouse): void;
    public abstract visitGirlsHouse(girlsHouse: GirlsHouse): void;
}

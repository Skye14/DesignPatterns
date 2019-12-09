import { GirlsHouse } from './girls-house';
import { Visitor } from './visitor';
import { BoysHouse } from './boys-house';

export class Santa extends Visitor {
    private giftForBoy = 'car';
    private giftForGirls = 'dress';

    public visitBoysHouse(boysHouse: BoysHouse): void {
        boysHouse.giveCar(this.giftForBoy);
    }

    public visitGirlsHouse(girlsHouse: GirlsHouse): void {
        girlsHouse.giveDress(this.giftForGirls);
    }
}

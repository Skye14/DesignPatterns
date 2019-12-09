import { Shop } from './shop';
import { Cannery } from './cannery';
import { Farmer } from './farmer';
import { Mediator } from './mediator';
import { Colleague } from './colleague';

export class ConcreteMediator extends Mediator {
    public farmer: Farmer;
    public cannery: Cannery;
    public shop: Shop;
    public result: string;

    public send(message: string, colleague: Colleague): void {
        if (colleague === this.farmer) {
            this.cannery.makeKetchup(message);
        } else if (colleague === this.cannery) {
            this.shop = new Shop(this);
            this.result = this.shop.sellKetchup(message);
        }
    }
}

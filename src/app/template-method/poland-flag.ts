import { TwoColorFlag } from './two-color-flag';

export class PolandFlag extends TwoColorFlag {

    protected createTopPartOfFlag(): void {
        this.flag.color1 = 'white';
    }

    protected createBottomPartOfFlag(): void {
        this.flag.color2 = 'red';
    }
}

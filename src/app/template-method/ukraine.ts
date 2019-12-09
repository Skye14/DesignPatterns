import { TwoColorFlag } from './two-color-flag';

export class UkraineFlag extends TwoColorFlag {

    protected createTopPartOfFlag(): void {
        this.flag.color1 = 'blue';
    }

    protected createBottomPartOfFlag(): void {
        this.flag.color2 = 'yellow';
    }
}

import { AbstractBottle } from './abstract-bottle';

export class CocacolaBottle extends AbstractBottle {

    public interact(): string {
        return `CocaCola interact with CocaCola water`;
    }
}

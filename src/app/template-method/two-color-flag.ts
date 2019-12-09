export abstract class TwoColorFlag {
    public flag = { color1: '', color2: '' };

    public createFlag(): void {
        this.createTopPartOfFlag();
        this.createBottomPartOfFlag();
    }

    protected abstract createTopPartOfFlag(): void;
    protected abstract createBottomPartOfFlag(): void;
}

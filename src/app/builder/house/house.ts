export class House {
    private parts = [];

    public add(part: string): void {
        this.parts.push(part);
    }

    public getPartsOfHouse(): any[] {
        return this.parts;
    }
}

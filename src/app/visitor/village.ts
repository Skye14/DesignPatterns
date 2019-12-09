import { Element } from './element';
import { Visitor } from './visitor';

export class Village {
    private elements = new Array();

    public add(el: Element): void {
        this.elements.push(el);
    }

    public remove(el: Element): void {
        for (const key in this.elements) {
            if (this.elements.hasOwnProperty(key)) {
                if (this.elements[key] === el) {
                    delete this.elements[key];
                }
            }
        }
    }

    public accept(visitor: Visitor): void {
        this.elements.forEach(el => {
            el.accept(visitor);
        });
    }
}

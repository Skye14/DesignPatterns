import { Component } from '@angular/core';
import { WordsCollection } from '../words-collection';

@Component({
    selector: 'app-base-iterator',
    templateUrl: './base-iterator.component.html',
    styleUrls: ['./base-iterator.component.css']
})
export class BaseIteratorComponent {
    private collection: WordsCollection;
    private iterator: any;
    private reverseIterator: any;
    public iteratorArr: Array<string>;
    public reverseIteratorArr: Array<string>;

    constructor() {
        this.collection = new WordsCollection();
        this.collection.addItem('First');
        this.collection.addItem('Second');
        this.collection.addItem('Third');
        this.collection.addItem('Fourth');
        this.collection.addItem('Fifth');
    }

    public getIterator(): void {
        this.iteratorArr = [];
        this.iterator = this.collection.getIterator();
        while (this.iterator.valid()) {
            this.iteratorArr.push(this.iterator.next());
        }
    }

    public getReverseIterator(): void {
        this.reverseIteratorArr = [];
        this.reverseIterator = this.collection.getReverseIterator();
        while (this.reverseIterator.valid()) {
            this.reverseIteratorArr.push(this.reverseIterator.next());
        }
    }

}

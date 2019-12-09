import { SelectionSort } from './../selection-sort';
import { Component } from '@angular/core';

import { BubbleSort } from '../bubble-sort';
import { Context } from '../context';

@Component({
    selector: 'app-base-strategy',
    templateUrl: './base-strategy.component.html',
    styleUrls: ['./base-strategy.component.css']
})
export class BaseStrategyComponent {
    public value: string;
    public bubbleSortArray = [];
    public selectionSortArray = [];
    public insertionSortArray = [];

    private createArray(): number[] {
        let array = [];
        if (this.value) {
            array = String(this.value).split('');
        }
        return array;
    }

    public getBubbleSort(): void {
        this.bubbleSortArray = this.createArray();
        const bubbleSort = new BubbleSort();
        const context1 = new Context(bubbleSort, this.bubbleSortArray);
        context1.sort();
    }

    public getSelectionSort(): void {
        this.selectionSortArray = this.createArray();
        const selectionSort = new SelectionSort();
        const context2 = new Context(selectionSort, this.selectionSortArray);
        context2.sort();
    }

    public getInsertionSort(): void {
        this.insertionSortArray = this.createArray();
        const insertionSort = new SelectionSort();
        const context3 = new Context(insertionSort, this.insertionSortArray);
        context3.sort();
    }

}

import { Component, OnInit } from '@angular/core';
import { SingletonComponent } from '../singleton/singleton.component';

@Component({
    selector: 'app-base-singleton',
    templateUrl: './base-singleton.component.html',
    styleUrls: ['./base-singleton.component.css']
})
export class BaseSingletonComponent implements OnInit {

    public object1: SingletonComponent;
    public object2: SingletonComponent;
    public message = '';

    constructor() { }

    ngOnInit() {
    }

    public onGetSingletonObj1(): void {
        this.object1 = SingletonComponent.instance();
    }

    public onGetSingletonObj2(): void {
        this.object2 = SingletonComponent.instance();
    }

    public getRezult(): void {
        if (!this.object1 && !this.object2) {
            this.message = 'The objects are empty';
        } else if (JSON.stringify(this.object1) === JSON.stringify(this.object2)) {
            this.message = 'Yes, the objects are equal';
        } else {
            this.message = 'No, the objects are not equal';
        }
    }

}

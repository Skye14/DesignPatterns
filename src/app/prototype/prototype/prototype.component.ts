import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-prototype',
    templateUrl: './prototype.component.html',
    styleUrls: ['./prototype.component.css']
})
export class PrototypeComponent implements OnInit {

    private CLASS_NAME: string;
    private STATE: string;

    constructor() { }

    ngOnInit() {
    }

    public get className(): string {
        return this.CLASS_NAME;
    }

    public setClassName(className: string): void {
        this.CLASS_NAME = className;
    }

    public get state(): string {
        return this.STATE;
    }

    public setState(state: string): void {
        this.STATE = state;
    }

    public getClone(): PrototypeComponent {
        return new PrototypeComponent();
    }
}

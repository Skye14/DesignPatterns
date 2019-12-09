import { Component } from '@angular/core';

@Component({
    selector: 'app-implementer',
    templateUrl: './implementer.component.html',
    styleUrls: ['./implementer.component.css']
})
export abstract class ImplementerComponent {

    constructor() { }

    abstract operationImp(): string;

}

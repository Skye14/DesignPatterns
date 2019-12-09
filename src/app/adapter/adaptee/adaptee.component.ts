import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-adaptee',
    templateUrl: './adaptee.component.html',
    styleUrls: ['./adaptee.component.css']
})
export class AdapteeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    public specificRequest(): string {
        return 'Specific Request';
    }

}

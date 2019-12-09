import { Component } from '@angular/core';
import { AdapterComponent } from '../adapter/adapter.component';

@Component({
    selector: 'app-target',
    templateUrl: './target.component.html',
    styleUrls: ['./target.component.css']
})
export class TargetComponent {
    public target: AdapterComponent;
    public message: string;

    constructor() {
        this.target = new AdapterComponent();
    }

    public getMessage(): void {
        this.message = this.target.request();
    }

}

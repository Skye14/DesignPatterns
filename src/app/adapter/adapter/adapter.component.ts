import { Component } from '@angular/core';
import { Target } from '../target';
import { AdapteeComponent } from '../adaptee/adaptee.component';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
    selector: 'app-adapter',
    templateUrl: './adapter.component.html',
    styleUrls: ['./adapter.component.css']
})
export class AdapterComponent extends Target {
    private adaptee = new AdapteeComponent();

    public request(): string {
        return this.adaptee.specificRequest();
    }

}

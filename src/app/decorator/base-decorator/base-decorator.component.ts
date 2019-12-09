import { Propeller } from './../decorators/propeller';
import { Jumpsuit } from './../decorators/jumpsuit';
import { Carlson } from './../entity/carlson';
import { Component } from '@angular/core';

@Component({
    selector: 'app-base-decorator',
    templateUrl: './base-decorator.component.html',
    styleUrls: ['./base-decorator.component.css']
})
export class BaseDecoratorComponent {
    public carlson: Carlson;
    public jumpsuit: Jumpsuit;
    public propeller: Propeller;

    public wakeUpCarlson(): void {
        this.carlson = new Carlson();
        this.carlson.operation();
    }

    public putOnJumpsuit(): void {
        this.jumpsuit = new Jumpsuit();
        this.jumpsuit.entity = this.carlson;
        this.jumpsuit.operation();
    }

    public putOnPropeller(): void {
        this.propeller = new Propeller();
        this.propeller.entity = this.jumpsuit;
        this.propeller.operation();
    }
}

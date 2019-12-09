import { Component, OnInit } from '@angular/core';
import { PrototypeComponent } from '../prototype/prototype.component';

@Component({
    selector: 'app-main-prototype',
    templateUrl: './main-prototype.component.html',
    styleUrls: ['./main-prototype.component.css']
})
export class MainPrototypeComponent implements OnInit {

    public prototype: PrototypeComponent;
    public human: PrototypeComponent;
    public man: PrototypeComponent;
    public woman: PrototypeComponent;

    constructor() { }

    ngOnInit() {
    }

    public onGetPrototype(): void {
        this.prototype = new PrototypeComponent();
        this.prototype.setClassName('Biological system');
        this.prototype.setState('');
        console.log(this.prototype.className, this.prototype.state);
    }

    public onGetHuman(): void {
        if (this.prototype) {
            this.human = this.prototype.getClone();
            this.human.setClassName('Human');
            this.human.setState('Common signs of a person');
        }
    }

    public onGetMan(): void {
        if (this.human) {
            this.man = this.human.getClone();
            this.man.setClassName('Man');
            this.man.setState('Male signs');
        }
    }

    public onGetWoman(): void {
        if (this.human) {
            this.woman = this.man.getClone();
            this.woman.setClassName('Woman');
            this.woman.setState('Female signs');
        }
    }
}

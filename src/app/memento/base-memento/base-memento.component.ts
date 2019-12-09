import { Caretaker } from './../caretaker';
import { Originator } from './../originator';
import { Component } from '@angular/core';

@Component({
    selector: 'app-base-memento',
    templateUrl: './base-memento.component.html',
    styleUrls: ['./base-memento.component.css']
})
export class BaseMementoComponent {
    private originator = new Originator();
    private caretaker: Caretaker;
    public state: string;
    public transferState: string;
    public changedState: string;
    public pickUpState: string;

    public setState(): void {
        this.originator.state = 'on';
        this.state = this.originator.state;
    }

    public transferStateToCaretaker(): void {
        this.caretaker = new Caretaker();
        this.caretaker.memento = this.originator.createMemento();
        this.transferState = this.originator.state;
    }

    public changeState(): void {
        this.originator.state = 'off';
        this.changedState = this.originator.state;
    }

    public pickUpStateFromCaretaker(): void {
        if (this.originator.state) {
            this.originator.setMemento(this.caretaker.memento);
            this.pickUpState = this.originator.state;
        }
    }
}

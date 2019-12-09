import { SmileState } from './../smile-state';
import { Human } from './../human';
import { Component } from '@angular/core';
import { SadnessState } from '../sadness-state';

@Component({
    selector: 'app-base-state',
    templateUrl: './base-state.component.html',
    styleUrls: ['./base-state.component.css']
})
export class BaseStateComponent {
    private man = new Human('Mickey', new SadnessState());
    private woman = new Human('Minnie', new SmileState());
    public manState: string;
    public womanState: string;

    public changeStateOfMan(): void {
        this.man.request();
        this.manState = `${this.man.name}'s state: ${this.man.state.message}`;
    }

    public changeStateOfWoman(): void {
        this.woman.request();
        this.womanState = `${this.woman.name}'s state: ${this.woman.state.message}`;
    }

}

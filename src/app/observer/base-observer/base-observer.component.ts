import { Component } from '@angular/core';
import { Sale } from '../sale';
import { Client } from '../client';

@Component({
    selector: 'app-base-observer',
    templateUrl: './base-observer.component.html',
    styleUrls: ['./base-observer.component.css']
})
export class BaseObserverComponent {
    public emailsList: string[];

    public sendEmails(): void {
        const blackFriday = new Sale();

        const clientA = new Client('Skye', 'skye@email.com');
        const clientB = new Client('MrBear', 'mrbear@email.com');
        const clientC = new Client('Captain Price', 'captainprice@email.com');

        blackFriday.addObserver(clientA);
        blackFriday.addObserver(clientB);
        blackFriday.addObserver(clientC);

        this.emailsList = blackFriday.notifyObservers();
    }
}

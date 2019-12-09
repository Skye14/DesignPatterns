import { Client } from './../client/client';
import { Component } from '@angular/core';
import { CocacolaFactory } from '../factory/cocacola-factory';
import { PepsiFactory } from '../factory/pepsi-factory';

@Component({
    selector: 'app-base-abstact-factory',
    templateUrl: './base-abstact-factory.component.html',
    styleUrls: ['./base-abstact-factory.component.css']
})
export class BaseAbstactFactoryComponent {

    public client: Client;
    public cocacolaMessage: string;
    public pepsiMessage: string;

    constructor() { }

    public getCocaCola(): void {
        this.client = new Client(new CocacolaFactory());
        this.cocacolaMessage = this.client.run();
    }

    public getPepsi(): void {
        this.client = new Client(new PepsiFactory());
        this.pepsiMessage = this.client.run();
    }

}

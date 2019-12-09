import { Facade } from './../facade';
import { Component } from '@angular/core';

@Component({
    selector: 'app-base-facade',
    templateUrl: './base-facade.component.html',
    styleUrls: ['./base-facade.component.css']
})
export class BaseFacadeComponent {
    private facade = new Facade();
    public commandAB: string;
    public commandBC: string;

    public getCommandAB(): void {
        this.commandAB = this.facade.getCommandAB();
    }

    public getCommandBC(): void {
        this.commandBC = this.facade.getCommandBC();
    }

}

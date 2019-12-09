import { Component } from '@angular/core';

import { Invoker } from './../invoker';
import { ConcreteCommand } from './../concrete-command';
import { Reciever } from './../reciever';

@Component({
    selector: 'app-base-command',
    templateUrl: './base-command.component.html',
    styleUrls: ['./base-command.component.css']
})
export class BaseCommandComponent {
    private reciever = new Reciever();
    private command: ConcreteCommand;
    private invoker: Invoker;
    public message: string;

    public execute(): void {
        this.command = new ConcreteCommand(this.reciever);
        this.invoker = new Invoker();

        this.invoker.storeCommand(this.command);
        this.invoker.executeCommand();
        this.message = this.invoker.executeCommand();
    }

}

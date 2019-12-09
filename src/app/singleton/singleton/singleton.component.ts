import { Component } from '@angular/core';

@Component({
    selector: 'app-singleton',
    templateUrl: './singleton.component.html',
    styleUrls: ['./singleton.component.css']
})
export class SingletonComponent {
    static uniqueInstance: SingletonComponent;
    private MESSAGE = '';

    protected constructor() {
    }

    static instance(): SingletonComponent {
        if (!SingletonComponent.uniqueInstance) {
            SingletonComponent.uniqueInstance = new SingletonComponent();
        }
        return SingletonComponent.uniqueInstance;
    }

    public get message(): string {
        return this.MESSAGE = 'Singleton was created ';
    }

}

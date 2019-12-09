import { Surrogate } from './../surrogate';
import { Operator } from './../operator';
import { IHuman } from './../ihuman';
import { Component } from '@angular/core';

@Component({
    selector: 'app-base-proxy',
    templateUrl: './base-proxy.component.html',
    styleUrls: ['./base-proxy.component.css']
})
export class BaseProxyComponent {
    private bruce: IHuman;
    private surrogate: IHuman;
    public bruceGreeting: string;
    public surrogateGreeting: string;

    public createOperator(): void {
        this.bruce = new Operator();
        this.bruce.setGreeting(`Hello! I'm Bruce Willis`);
        this.bruceGreeting = this.bruce.getGreeting();
    }

    public createSurrogate(): void {
        if (this.bruce) {
            this.surrogate = new Surrogate(this.bruce);
            this.surrogate.setGreeting(`Hello! I'm Bruce's surrogate...`);
            this.surrogateGreeting = this.surrogate.getGreeting();
        }
    }

}

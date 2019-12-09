import { Component } from '@angular/core';

import { UkraineFlag } from './../ukraine';
import { PolandFlag } from './../poland-flag';

@Component({
    selector: 'app-base-template-method',
    templateUrl: './base-template-method.component.html',
    styleUrls: ['./base-template-method.component.css']
})
export class BaseTemplateMethodComponent {
    public polandFlag: PolandFlag;
    public ukraineFlag: UkraineFlag;

    public createPolandFlag(): void {
        this.polandFlag = new PolandFlag();
        this.polandFlag.createFlag();
    }

    public createUkraineFlag(): void {
        this.ukraineFlag = new UkraineFlag();
        this.ukraineFlag.createFlag();
    }

}

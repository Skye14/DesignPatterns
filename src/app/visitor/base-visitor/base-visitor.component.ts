import { Component } from '@angular/core';

import { Santa } from './../santa';
import { GirlsHouse } from './../girls-house';
import { Village } from './../village';
import { BoysHouse } from '../boys-house';

@Component({
    selector: 'app-base-visitor',
    templateUrl: './base-visitor.component.html',
    styleUrls: ['./base-visitor.component.css']
})
export class BaseVisitorComponent {
    private village = new Village();
    public boysHouse = new BoysHouse();
    public girlsHouse = new GirlsHouse();

    public getGifts(): void {
        this.village.add(this.boysHouse);
        this.village.add(this.girlsHouse);
        this.village.accept(new Santa());
    }

}

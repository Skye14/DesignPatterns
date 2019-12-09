import { RoleDoctorEvil } from './../role-doctor-evil';
import { RoleAustinPowers } from './../role-austin-powers';
import { ActorMikeMyers } from './../actor-mike-myers';
import { Component } from '@angular/core';

@Component({
    selector: 'app-base-flyweight',
    templateUrl: './base-flyweight.component.html',
    styleUrls: ['./base-flyweight.component.css']
})
export class BaseFlyweightComponent {
    private mike: ActorMikeMyers;
    private austin: RoleAustinPowers;
    private drEvil: RoleDoctorEvil;

    public mikeGreeting: string;
    public austinGreeting: string;
    public drEvilGreeting: string;

    public createMike(): void {
        this.mike = new ActorMikeMyers();
        this.mikeGreeting = this.mike.greeting(`Hello! I'm Mike Myers`);
    }

    public createAustin(): void {
        this.austin = new RoleAustinPowers(this.mike);
        this.austinGreeting = this.austin.greeting(`Hello! I'm Austin Powers`);
    }

    public createDrEvil(): void {
        this.drEvil = new RoleDoctorEvil(this.mike);
        this.drEvilGreeting = this.drEvil.greeting(`Hello! I'm Doctor Evil`);
    }
}

import { Leaf } from './../leaf';
import { Composite } from './../composite';
import { Component } from '@angular/core';

@Component({
    selector: 'app-base-composite',
    templateUrl: './base-composite.component.html',
    styleUrls: ['./base-composite.component.css']
})
export class BaseCompositeComponent {

    public root: Composite;
    public branch1: Composite;
    public branch2: Composite;
    public leaf1: Leaf;
    public leaf2: Leaf;

    public createRoot(): void {
        this.root = new Composite('ROOT');
    }

    public createBranch1(): void {
        if (this.root) {
            this.branch1 = new Composite('BRANCH 1');
            this.root.add(this.branch1);
        }
    }

    public createBranch2(): void {
        if (this.root) {
            this.branch2 = new Composite('BRANCH 2');
            this.root.add(this.branch2);
        }
    }

    public createLeaf1(): void {
        if (this.branch1) {
            this.leaf1 = new Composite('LEAF 1');
            this.branch1.add(this.leaf1);
        }
    }

    public createLeaf2(): void {
        if (this.branch2) {
            this.leaf2 = new Composite('LEAF 2');
            this.branch2.add(this.leaf2);
        }
    }
}

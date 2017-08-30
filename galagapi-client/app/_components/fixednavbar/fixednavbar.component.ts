
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'fixednavbar',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'fixednavbar.component.html'

})
export class FixedNavbarComponent {
    name: string;
    constructor() {
        this.name = 'Max'
    }
    sayMyName() {
        console.log('My name is', this.name)
    }
}
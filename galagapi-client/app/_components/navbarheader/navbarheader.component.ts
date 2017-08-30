
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbarheader',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'navbarheader.component.html'

})
export class NavbarHeaderComponent {
    name: string;
    constructor() {
        this.name = 'Max'
    }
    sayMyName() {
        console.log('My name is', this.name)
    }
}
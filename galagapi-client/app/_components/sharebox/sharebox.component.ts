
import {Component, ViewEncapsulation} from '@angular/core';
import {Idea} from '../../_models/modelidea';
import {IdeaComponent} from '../../_components/idea/idea.component'

@Component({
    moduleId: module.id,
    selector: 'sharebox',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'sharebox.component.html'

})

export class ShareBoxComponent {
    newIdea: Idea;

    ngOnInit() {
        this.newIdea = new Idea();

    }
    constructor(private ideaComponent: IdeaComponent) {

    }
    createIdea(idea: Idea): void {
        this.ideaComponent.onAddIdea(idea);

    }
}
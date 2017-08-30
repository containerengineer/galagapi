
import {Component, ViewEncapsulation} from '@angular/core';
import {Idea} from '../../_models/modelidea';
import {IdeaService} from '../../_services/ideaservice/idea.service'

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
     constructor(private ideaService: IdeaService) {

    }
createIdea(idea: Idea): void {
        
        this.ideaService.createIdea(idea)
            .then(idea => {
                 
            });
    }
    
}
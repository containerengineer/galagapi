import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';


import {Idea} from '../../_models/modelidea';
import {IdeaDataService} from '../../_services/ideaservice/idea-data.service'


import {Injectable} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: '[idea]',
    templateUrl: 'idea.component.html'

})
@Injectable()
export class IdeaComponent implements OnInit {

    ideas: Idea[] = [];
    newIdea: Idea;


    constructor(
        private ideaDataService: IdeaDataService
    ) {
    }

    public ngOnInit() {
        this.newIdea = new Idea();
        this.ideaDataService
            .getAllIdeas()
            .subscribe(
            (ideas) => {
                this.ideas = ideas;
            }
            );



    }

    onAddIdea(idea: Idea) {
        this.ideaDataService
            .addIdea(idea)
            .subscribe(
            (newIdea) => {
                this.ideas.unshift(newIdea);
            }
            );
    }



    onRemoveIdea(idea: Idea) {
        this.ideaDataService
            .deleteIdeaById(idea.id)
            .subscribe(
            (_) => {
                this.ideas = this.ideas.filter((t) => t.id !== idea.id);
            }
            );
    }

}

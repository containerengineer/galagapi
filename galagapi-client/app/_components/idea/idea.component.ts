import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Component, OnInit, Input} from '@angular/core';
import {Router, Params} from '@angular/router';
import {Location} from '@angular/common';

import {Idea} from '../../_models/modelidea';
import {IdeaService} from '../../_services/ideaservice/idea.service'
import {Observable} from 'rxjs/Observable';


@Component({
    moduleId: module.id,
    selector: '[idea]',
    templateUrl: 'idea.component.html' 
 
})
export class IdeaComponent implements OnInit {
  @Input()
   public  idea: Idea;

    ideas: Observable<Idea[]>;
    selectedIdea: Idea;

    constructor(
        private ideaService: IdeaService,
        private router: Router,
        private location: Location
    ) {}


    ngOnInit(): void {
     //   this.route.params.switchMap((params: Params) => this.ideaService.getIdea(+params['id']))
       //     .subscribe(idea => this.idea = idea);
        
                this.ideas = this.ideaService.getIdeas();

   
     }
    updateIdea(): void {
        this.ideaService.updateIdea(this.idea);
        this.goBack();
    }

    deleteIdea(idea: Idea): void {
        this.ideaService
            .deleteIdea(idea)
            .then(() => {
               //  this.ideas = this.ideas.filter(b => b !== idea);
                if (this.selectedIdea === idea) {this.selectedIdea = null;}
            });
    }

    showInfo(idea: Idea): void {
        this.selectedIdea = idea;
        this.router.navigate(['/information', this.selectedIdea.id]);
    }
     goBack(): void {
        this.location.back();
    }

}
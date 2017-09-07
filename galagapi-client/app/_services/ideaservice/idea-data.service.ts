import { Injectable } from '@angular/core';
import {Idea} from '../../_models/modelidea';

import {IdeaService } from './idea.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class IdeaDataService {

  constructor(
      private api: IdeaService
  ) {
  }

  // Simulate POST /ideas
  addIdea(idea: Idea): Observable<Idea> {
    return this.api.createIdea(idea);
  }

  // Simulate DELETE /ideas/:id
  deleteIdeaById(ideaId: number): Observable<Idea> {
    return this.api.deleteIdeaById(ideaId);
  }

  // Simulate PUT /ideas/:id
  updateIdea(idea: Idea): Observable<Idea> {
    return this.api.updateIdea(idea);
  }

  // Simulate GET /ideas
  getAllIdeas(): Observable<Idea[]> {
    return this.api.getAllIdeas();
  }

  // Simulate GET /ideas/:id
  getIdeaById(ideaId: number): Observable<Idea> {
    return this.api.getIdeaById(ideaId);
  }
 

}

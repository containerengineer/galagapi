 

import {Idea} from '../../_models/modelidea';
 
 import { Injectable } from '@angular/core';
import { environment } from '../../_environments/environment';
import { Http, Response,RequestOptions, Headers } from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;
const headers = new Headers({ 'Content-Type': 'application/json' });
const options = new RequestOptions( {headers: headers});
@Injectable()
export class  IdeaService {

  constructor(
    private http: Http
  ) {
  }

  public getAllIdeas(): Observable<Idea[]> {
    return this.http
      .get(API_URL + '/ideas')
      .map(response => {
        const ideas = response.json();
        return ideas.map((idea: Idea) => new Idea(idea));
      })
      .catch(this.handleError);
  }

  public createIdea(idea: Idea): Observable<Idea> {
    return this.http
      .post(API_URL + '/idea', idea, options)
      .map(response => {
        return new Idea(response.json());
      })
      .catch(this.handleError);
  }

  public getIdeaById(ideaId: number): Observable<Idea> {
    return this.http
      .get(API_URL + '/idea/' + ideaId)
      .map(response => {
        return new Idea(response.json());
      })
      .catch(this.handleError);
  }

  public updateIdea(idea: Idea): Observable<Idea> {
    return this.http
      .put(API_URL + '/idea/' + idea.id, idea)
      .map(response => {
        return new Idea(response.json());
      })
      .catch(this.handleError);
  }

  public deleteIdeaById(ideaId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/idea/' + ideaId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}

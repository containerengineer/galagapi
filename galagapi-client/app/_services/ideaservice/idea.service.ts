import {Injectable} from '@angular/core';

import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Idea} from '../../_models/modelidea';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class IdeaService {

    constructor(private http: Http) {

    }

    private headers = new Headers({'Content-Type': 'application/json'});
    private ideasUrl = 'http://localhost:8080/user/ideas';
    private ideaUrl = 'http://localhost:8080/user/idea';
    private  ideas: Observable<Idea[]>;
    getIdeas(): Observable<Idea[]> {
        
        this.ideas= this.http.get(this.ideasUrl)
            .map(res => res.json());
        
      return this.ideas;

    }

    getIdeasO() {
        return this.http.get(this.ideasUrl)
            .map(res => res.json())
            .subscribe((data) => {
                return data;
            });
    }
    getIdea(id: number): Promise<Idea> {
        const url = `${this.ideaUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Idea)
            .catch(this.handleError);
    }


    createIdea(idea: Idea): Promise<Idea> {
        return this.http
            .post(this.ideaUrl, JSON.stringify(idea), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data as Idea)
            .catch(this.handleError);
    }

    updateIdea(idea: Idea): Promise<Idea> {
        const url = `${this.ideaUrl}/${idea.id}`;
        return this.http
            .put(url, JSON.stringify(idea), {headers: this.headers})
            .toPromise()
            .then(() => idea)
            .catch(this.handleError);
    }

    deleteIdea(idea: Idea): Promise<void> {
        const url = `${this.ideaUrl}/${idea.id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var modelidea_1 = require("../../_models/modelidea");
var core_1 = require("@angular/core");
var environment_1 = require("../../_environments/environment");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
var API_URL = environment_1.environment.apiUrl;
var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
var options = new http_1.RequestOptions({ headers: headers });
var IdeaService = /** @class */ (function () {
    function IdeaService(http) {
        this.http = http;
    }
    IdeaService.prototype.getAllIdeas = function () {
        return this.http
            .get(API_URL + '/ideas')
            .map(function (response) {
            var ideas = response.json();
            return ideas.map(function (idea) { return new modelidea_1.Idea(idea); });
        })
            .catch(this.handleError);
    };
    IdeaService.prototype.createIdea = function (idea) {
        return this.http
            .post(API_URL + '/idea', idea, options)
            .map(function (response) {
            return new modelidea_1.Idea(response.json());
        })
            .catch(this.handleError);
    };
    IdeaService.prototype.getIdeaById = function (ideaId) {
        return this.http
            .get(API_URL + '/idea/' + ideaId)
            .map(function (response) {
            return new modelidea_1.Idea(response.json());
        })
            .catch(this.handleError);
    };
    IdeaService.prototype.updateIdea = function (idea) {
        return this.http
            .put(API_URL + '/idea/' + idea.id, idea)
            .map(function (response) {
            return new modelidea_1.Idea(response.json());
        })
            .catch(this.handleError);
    };
    IdeaService.prototype.deleteIdeaById = function (ideaId) {
        return this.http
            .delete(API_URL + '/idea/' + ideaId)
            .map(function (response) { return null; })
            .catch(this.handleError);
    };
    IdeaService.prototype.handleError = function (error) {
        console.error('ApiService::handleError', error);
        return Observable_1.Observable.throw(error);
    };
    IdeaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], IdeaService);
    return IdeaService;
}());
exports.IdeaService = IdeaService;
//# sourceMappingURL=idea.service.js.map
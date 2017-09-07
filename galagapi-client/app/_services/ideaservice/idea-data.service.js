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
var core_1 = require("@angular/core");
var idea_service_1 = require("./idea.service");
var IdeaDataService = /** @class */ (function () {
    function IdeaDataService(api) {
        this.api = api;
    }
    // Simulate POST /ideas
    IdeaDataService.prototype.addIdea = function (idea) {
        return this.api.createIdea(idea);
    };
    // Simulate DELETE /ideas/:id
    IdeaDataService.prototype.deleteIdeaById = function (ideaId) {
        return this.api.deleteIdeaById(ideaId);
    };
    // Simulate PUT /ideas/:id
    IdeaDataService.prototype.updateIdea = function (idea) {
        return this.api.updateIdea(idea);
    };
    // Simulate GET /ideas
    IdeaDataService.prototype.getAllIdeas = function () {
        return this.api.getAllIdeas();
    };
    // Simulate GET /ideas/:id
    IdeaDataService.prototype.getIdeaById = function (ideaId) {
        return this.api.getIdeaById(ideaId);
    };
    IdeaDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [idea_service_1.IdeaService])
    ], IdeaDataService);
    return IdeaDataService;
}());
exports.IdeaDataService = IdeaDataService;
//# sourceMappingURL=idea-data.service.js.map
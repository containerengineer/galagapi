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
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var modelidea_1 = require("../../_models/modelidea");
var idea_data_service_1 = require("../../_services/ideaservice/idea-data.service");
var core_2 = require("@angular/core");
var IdeaComponent = /** @class */ (function () {
    function IdeaComponent(ideaDataService) {
        this.ideaDataService = ideaDataService;
        this.ideas = [];
    }
    IdeaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newIdea = new modelidea_1.Idea();
        this.ideaDataService
            .getAllIdeas()
            .subscribe(function (ideas) {
            _this.ideas = ideas;
        });
    };
    IdeaComponent.prototype.onAddIdea = function (idea) {
        var _this = this;
        this.ideaDataService
            .addIdea(idea)
            .subscribe(function (newIdea) {
            _this.ideas.unshift(newIdea);
        });
    };
    IdeaComponent.prototype.onRemoveIdea = function (idea) {
        var _this = this;
        this.ideaDataService
            .deleteIdeaById(idea.id)
            .subscribe(function (_) {
            _this.ideas = _this.ideas.filter(function (t) { return t.id !== idea.id; });
        });
    };
    IdeaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: '[idea]',
            templateUrl: 'idea.component.html'
        }),
        core_2.Injectable(),
        __metadata("design:paramtypes", [idea_data_service_1.IdeaDataService])
    ], IdeaComponent);
    return IdeaComponent;
}());
exports.IdeaComponent = IdeaComponent;
//# sourceMappingURL=idea.component.js.map
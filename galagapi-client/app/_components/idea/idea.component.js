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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var modelidea_1 = require("../../_models/modelidea");
var idea_service_1 = require("../../_services/ideaservice/idea.service");
var IdeaComponent = (function () {
    function IdeaComponent(ideaService, router, location) {
        this.ideaService = ideaService;
        this.router = router;
        this.location = location;
    }
    IdeaComponent.prototype.ngOnInit = function () {
        //   this.route.params.switchMap((params: Params) => this.ideaService.getIdea(+params['id']))
        //     .subscribe(idea => this.idea = idea);
        this.ideas = this.ideaService.getIdeas();
    };
    IdeaComponent.prototype.updateIdea = function () {
        this.ideaService.updateIdea(this.idea);
        this.goBack();
    };
    IdeaComponent.prototype.deleteIdea = function (idea) {
        var _this = this;
        this.ideaService
            .deleteIdea(idea)
            .then(function () {
            //  this.ideas = this.ideas.filter(b => b !== idea);
            if (_this.selectedIdea === idea) {
                _this.selectedIdea = null;
            }
        });
    };
    IdeaComponent.prototype.showInfo = function (idea) {
        this.selectedIdea = idea;
        this.router.navigate(['/information', this.selectedIdea.id]);
    };
    IdeaComponent.prototype.goBack = function () {
        this.location.back();
    };
    return IdeaComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", modelidea_1.Idea)
], IdeaComponent.prototype, "idea", void 0);
IdeaComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: '[idea]',
        templateUrl: 'idea.component.html'
    }),
    __metadata("design:paramtypes", [idea_service_1.IdeaService,
        router_1.Router,
        common_1.Location])
], IdeaComponent);
exports.IdeaComponent = IdeaComponent;
//# sourceMappingURL=idea.component.js.map
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
var modelidea_1 = require("../../_models/modelidea");
var idea_service_1 = require("../../_services/ideaservice/idea.service");
var ShareBoxComponent = (function () {
    function ShareBoxComponent(ideaService) {
        this.ideaService = ideaService;
    }
    ShareBoxComponent.prototype.ngOnInit = function () {
        this.newIdea = new modelidea_1.Idea();
    };
    ShareBoxComponent.prototype.createIdea = function (idea) {
        this.ideaService.createIdea(idea)
            .then(function (idea) {
        });
    };
    return ShareBoxComponent;
}());
ShareBoxComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sharebox',
        encapsulation: core_1.ViewEncapsulation.None,
        templateUrl: 'sharebox.component.html'
    }),
    __metadata("design:paramtypes", [idea_service_1.IdeaService])
], ShareBoxComponent);
exports.ShareBoxComponent = ShareBoxComponent;
//# sourceMappingURL=sharebox.component.js.map
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
var modelchatuser_1 = require("../../_models/modelchatuser");
var ChatUserComponent = (function () {
    function ChatUserComponent() {
    }
    ChatUserComponent.prototype.ngOnInit = function () {
    };
    return ChatUserComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", modelchatuser_1.ChatUser)
], ChatUserComponent.prototype, "chat_user", void 0);
ChatUserComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'chatuser',
        templateUrl: 'chatuser.component.html'
    })
], ChatUserComponent);
exports.ChatUserComponent = ChatUserComponent;
//# sourceMappingURL=chatuser.component.js.map
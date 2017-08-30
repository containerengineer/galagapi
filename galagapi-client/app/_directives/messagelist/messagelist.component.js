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
var messagebox_service_1 = require("../../_services/messageboxservice/messagebox.service");
var MessageListComponent = (function () {
    function MessageListComponent(messageBoxService) {
        this.messageBoxService = messageBoxService;
    }
    MessageListComponent.prototype.getMessages = function () {
        var _this = this;
        this.messageBoxService.getMessages().then(function (messages) { return _this.messages = messages; });
    };
    MessageListComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessageListComponent.prototype.onSelect = function (message) {
        this.selectedMessage = message;
    };
    return MessageListComponent;
}());
MessageListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'messagelist',
        templateUrl: 'messagelist.component.html',
        providers: [messagebox_service_1.MessageBoxService]
    }),
    __metadata("design:paramtypes", [messagebox_service_1.MessageBoxService])
], MessageListComponent);
exports.MessageListComponent = MessageListComponent;
//# sourceMappingURL=messagelist.component.js.map
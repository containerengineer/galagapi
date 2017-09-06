"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
// used to create fake backend
var index_1 = require("./_helpers/index");
var testing_1 = require("@angular/http/testing");
var http_2 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var index_2 = require("./_directives/alert/index");
var index_3 = require("./_directives/chatwindow/index");
var index_4 = require("./_directives/chatlist/index");
var index_5 = require("./_directives/chatuser/index");
var index_6 = require("./_directives/messagelist/index");
var index_7 = require("./_directives/messageuser/index");
var index_8 = require("./_directives/toolbar/index");
var index_9 = require("./_guards/index");
var index_10 = require("./_services/index");
var index_11 = require("./home/index");
var index_12 = require("./login/index");
var index_13 = require("./_components/navbarheader/index");
var index_14 = require("./_components/fixednavbar/index");
var index_15 = require("./_components/coverprofile/index");
var index_16 = require("./_components/sharebox/index");
var index_17 = require("./_components/announce/index");
var index_18 = require("./_components/commentpanel/index");
var index_19 = require("./_components/idea/index");
var index_20 = require("./_components/ngcollapsebasic/index");
var index_21 = require("./_components/personinfo/index");
var index_22 = require("./_components/navbaruser/index");
var index_23 = require("./_components/navbarform/index");
var index_24 = require("./timeline/index");
var index_25 = require("./register/index");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing,
                ng_bootstrap_1.NgbModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                index_2.AlertComponent,
                index_8.ToolbarComponent,
                index_3.ChatWindowComponent,
                index_4.ChatListComponent,
                index_5.ChatUserComponent,
                index_6.MessageListComponent,
                index_7.MessageUserComponent,
                index_11.HomeComponent,
                index_12.LoginComponent,
                index_24.TimelineComponent,
                index_25.RegisterComponent,
                index_16.ShareBoxComponent,
                index_17.AnnounceComponent,
                index_18.CommentPanelComponent,
                index_13.NavbarHeaderComponent,
                index_14.FixedNavbarComponent,
                index_15.CoverProfileComponent,
                index_20.NgbdCollapseBasic,
                index_21.PersonInfoComponent,
                index_22.NavbarUserComponent,
                index_23.NavbarFormComponent,
                index_19.IdeaComponent
            ],
            providers: [
                index_9.AuthGuard,
                index_10.AlertService,
                index_10.AuthenticationService,
                index_10.UserService,
                index_10.IdeaService,
                // providers used to create fake backend
                index_1.fakeBackendProvider,
                testing_1.MockBackend,
                http_2.BaseRequestOptions
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
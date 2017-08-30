"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./login/index");
var index_3 = require("./timeline/index");
var index_4 = require("./_components/ngcollapsebasic/index");
var index_5 = require("./_components/idea/index");
var index_6 = require("./register/index");
var index_7 = require("./_guards/index");
var appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_7.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'timeline', component: index_3.TimelineComponent },
    { path: 'ngcollapsebasic', component: index_4.NgbdCollapseBasic },
    { path: 'register', component: index_6.RegisterComponent },
    { path: 'information/:id', component: index_5.IdeaComponent },
    { path: 'idea/:id', component: index_5.IdeaComponent },
    { path: 'ideas', component: index_5.IdeaComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
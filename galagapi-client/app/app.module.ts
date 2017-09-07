

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


// used to create fake backend
import {fakeBackendProvider} from './_helpers/index';
import {MockBackend} from '@angular/http/testing';
import {BaseRequestOptions} from '@angular/http';

import {AppComponent} from './app.component';
import {routing} from './app.routing';

import {AlertComponent} from './_directives/alert/index';
import {ChatWindowComponent} from './_directives/chatwindow/index';

import {ChatListComponent} from './_directives/chatlist/index';
import {ChatUserComponent} from './_directives/chatuser/index';

import {MessageListComponent} from './_directives/messagelist/index';
import {MessageUserComponent} from './_directives/messageuser/index';

import {ToolbarComponent} from './_directives/toolbar/index';



import {AuthGuard} from './_guards/index';
import {AlertService, AuthenticationService, UserService, IdeaService, IdeaDataService} from './_services/index';
import {HomeComponent} from './home/index';
import {LoginComponent} from './login/index';
import {NavbarHeaderComponent} from './_components/navbarheader/index';
import {FixedNavbarComponent} from './_components/fixednavbar/index';
import {CoverProfileComponent} from './_components/coverprofile/index';
import {ShareBoxComponent} from './_components/sharebox/index';
import {AnnounceComponent} from './_components/announce/index';
import {CommentPanelComponent} from './_components/commentpanel/index';

import {IdeaComponent} from './_components/idea/index';

import {NgbdCollapseBasic} from './_components/ngcollapsebasic/index';
 
import {PersonInfoComponent} from './_components/personinfo/index';
import {NavbarUserComponent} from './_components/navbaruser/index';
import {NavbarFormComponent} from './_components/navbarform/index';

import {TimelineComponent} from './timeline/index';
import {RegisterComponent} from './register/index';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        NgbModule.forRoot()
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        ToolbarComponent,
        ChatWindowComponent,
        ChatListComponent,
        ChatUserComponent,
        MessageListComponent,
        MessageUserComponent,
        HomeComponent,
        LoginComponent,
        TimelineComponent,
        RegisterComponent,
        ShareBoxComponent,
        AnnounceComponent,
        CommentPanelComponent,
        NavbarHeaderComponent,
        FixedNavbarComponent,
        CoverProfileComponent,
        NgbdCollapseBasic,
 
        PersonInfoComponent,
        NavbarUserComponent,
        NavbarFormComponent,
        IdeaComponent
  

    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        IdeaService,
        IdeaDataService,
        IdeaComponent,
        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
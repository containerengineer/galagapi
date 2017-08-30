import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import {TimelineComponent } from './timeline/index';
import {NgbdCollapseBasic} from './_components/ngcollapsebasic/index'; 
import {IdeaComponent} from './_components/idea/index'; 
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    {path: 'timeline', component: TimelineComponent },
    {path: 'ngcollapsebasic', component: NgbdCollapseBasic },

    { path: 'register', component: RegisterComponent },
   {path: 'information/:id', component: IdeaComponent },
    {path: 'idea/:id', component: IdeaComponent },
     {path: 'ideas', component: IdeaComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' },
 
];

export const routing = RouterModule.forRoot(appRoutes);
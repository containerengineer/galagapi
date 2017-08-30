import { Component, Input } from '@angular/core';
import {ChatUser} from '../../_models/modelchatuser';


 
@Component({
    moduleId: module.id,
    selector: 'chatuser',
    templateUrl: 'chatuser.component.html'
})

export class ChatUserComponent {
    @Input()
    public chat_user: ChatUser;
    
    ngOnInit() {
  

     }
}
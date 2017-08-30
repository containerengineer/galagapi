import { Component, Input } from '@angular/core';
import {Message} from '../../_models/modelmessage';


 
@Component({
    moduleId: module.id,
    selector: 'messageuser',
    templateUrl: 'messageuser.component.html'
})

export class MessageUserComponent {
    @Input()
    public message_user: Message;
    
    ngOnInit() {
  

     }
}
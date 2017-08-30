import { Component } from '@angular/core';
 import {MessageBoxService} from '../../_services/messageboxservice/messagebox.service';
import {Message} from '../../_models/modelmessage';

 
@Component({
    moduleId: module.id,
    selector: 'messagelist',
    templateUrl: 'messagelist.component.html',
    providers: [MessageBoxService]
})

export class MessageListComponent {
 
    messages: Message[];
    selectedMessage: Message;
    constructor(private messageBoxService: MessageBoxService) { }

    getMessages(): void {
        this.messageBoxService.getMessages().then(messages => this.messages = messages);
    }

  ngOnInit(): void {
      this.getMessages()
  }

  onSelect(message: Message): void {
    this.selectedMessage = message;
  }
}
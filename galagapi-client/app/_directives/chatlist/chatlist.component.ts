import { Component } from '@angular/core';
 import {ChatUserService} from '../../_services/chatuserservice/chatuser.service';
 import {ChatUser} from '../../_models/modelchatuser';

 
@Component({
    moduleId: module.id,
    selector: 'chatlist',
    templateUrl: 'chatlist.component.html',
    providers: [ChatUserService]
})

export class ChatListComponent {
 
    chat_users: ChatUser[];
    selectedChatUser: ChatUser;
    constructor(private chatUserService: ChatUserService) { }

    getChatUsers(): void {
        this.chatUserService.getChatUsers().then(chat_users => this.chat_users = chat_users);
    }

  ngOnInit(): void {
      this.getChatUsers();
  }

  onSelect(chatUser: ChatUser): void {
    this.selectedChatUser = chatUser;
  }
}
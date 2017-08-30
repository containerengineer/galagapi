import { Injectable } from '@angular/core';

import {ChatUser} from '../../_models/modelchatuser';
import {CHATUSERS} from '../../_services/chatuserservice/mock-chatusers';

@Injectable()
export class ChatUserService {
    getChatUsers(): Promise<ChatUser[]> {
        return Promise.resolve(CHATUSERS);
  }

  // See the "Take it slow" appendix
    getChatUsersSlowly(): Promise<ChatUser[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getChatUsers()), 2000);
    });
  }
}


 
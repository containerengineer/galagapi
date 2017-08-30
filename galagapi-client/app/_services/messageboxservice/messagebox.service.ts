import { Injectable } from '@angular/core';

import {Message} from '../../_models/modelmessage';
import {MESSAGES} from '../../_services/messageboxservice/mock-messages';

@Injectable()
export class MessageBoxService {
    getMessages(): Promise<Message[]> {
        return Promise.resolve(MESSAGES);
  }

  // See the "Take it slow" appendix
    getChatUsersSlowly(): Promise<Message[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getMessages()), 2000);
    });
  }
}


 
import { MessagePriority, MessageType } from '../enum/message.enum';

export interface Message {
  priority: MessagePriority;
  type: MessageType;
  deleteWarning: boolean;
  ackMessage: boolean;
  moveToInbox: boolean;
  data: any;
}

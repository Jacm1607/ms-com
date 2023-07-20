import { MessageId } from "../value-objects/MessageId";
import { MessageContent } from "../value-objects/MessageContent";
import { MessageStatus } from "../value-objects/MessageStatus";
import { Message } from "../entities/MessageEntity";

export class MessageFactory {
  createMessage(
    messageId: MessageId,
    senderId: string,
    receiverId: string,
    content: MessageContent,
    createdAt: Date,
    status: MessageStatus,
  ): Message {
    return new Message(messageId, senderId, receiverId, content, createdAt, status);
  }
}

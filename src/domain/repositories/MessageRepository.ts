import { Message } from "../entities/MessageEntity";

export interface MessageRepository {
  createMessage(message: Message): Promise<Message>;
  findAllMessages(): Promise<Message[]>;
  findMessageById(messageId: string): Promise<Message | null>;
  updateMessageStatus(messageId: string, status: string): Promise<Message | null>;
  deleteMessage(messageId: string): Promise<Message | null>;
}

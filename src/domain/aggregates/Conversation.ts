import { Message } from "../entities/MessageEntity";

export class Conversation {
  private messages: Message[] = [];

  constructor(public readonly conversationId: string) {}

  addMessage(message: Message): void {
    this.messages.push(message);
  }

  getMessages(): Message[] {
    return this.messages.slice();
  }
}

import { Conversation } from "../aggregates/Conversation";

export class ConversationFactory {
  createConversation(conversationId: string): Conversation {
    return new Conversation(conversationId);
  }
}

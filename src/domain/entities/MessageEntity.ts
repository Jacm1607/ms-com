export class Message {
  constructor(
    public messageId: any,
    public senderId: string,
    public receiverId: string,
    public content: any,
    public createdAt: Date,
    public status: any,
  ) {}
}

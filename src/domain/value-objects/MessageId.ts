export class MessageId {
    constructor(private readonly value: string) {
      // Aquí se pueden agregar validaciones relacionadas con el identificador del mensaje
    }
  
    getValue(): string {
      return this.value;
    }
  }
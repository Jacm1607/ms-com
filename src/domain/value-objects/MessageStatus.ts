export class MessageStatus {
    constructor(private readonly value: string) {
      // Aquí se pueden agregar validaciones relacionadas con el estado del mensaje
    }
  
    getValue(): string {
      return this.value;
    }
  }
  
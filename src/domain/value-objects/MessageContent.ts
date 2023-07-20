export class MessageContent {
    constructor(private readonly value: string) {
      // Aquí se pueden agregar validaciones relacionadas con el contenido del mensaje, longitud, formato, etc.
    }
  
    getValue(): string {
      return this.value;
    }
  }
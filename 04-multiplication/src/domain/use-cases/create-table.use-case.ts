export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor(/**
   * DI - Dependency Injection
   */) {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    //Aqui ejecutamos el caso de uso
    let outputMessage = "";
    for (let index = 1; index <= limit; index++) {
      const line = `${base} x ${index} = ${base * index}\n`;
      outputMessage += line;
    }

    return outputMessage;
  }
}

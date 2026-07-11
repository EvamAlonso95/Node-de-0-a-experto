"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
class CreateTable {
    constructor( /**
     * DI - Dependency Injection
     */) { }
    execute({ base, limit = 10 }) {
        //Aqui ejecutamos el caso de uso
        let outputMessage = "";
        for (let index = 1; index <= limit; index++) {
            const line = `${base} x ${index} = ${base * index}\n`;
            outputMessage += line;
        }
        return outputMessage;
    }
}
exports.CreateTable = CreateTable;

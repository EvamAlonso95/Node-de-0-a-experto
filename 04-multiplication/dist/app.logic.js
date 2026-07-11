"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const yargs_plugin_1 = require("./config/plugins/yargs.plugin");
const { b: base, l: limit, s: showTable } = yargs_plugin_1.yarg;
let outputMessage = "";
const header = `
=========================
    Tabla del ${base}
=========================\n`;
for (let index = 1; index <= limit; index++) {
    const line = `${base} x ${index} = ${base * index}\n`;
    outputMessage += line;
}
outputMessage = header + outputMessage;
if (showTable) {
    console.log(outputMessage);
}
const outputPath = `outputs`;
(0, fs_1.mkdirSync)(outputPath, { recursive: true });
(0, fs_1.writeFileSync)(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log("File created!");

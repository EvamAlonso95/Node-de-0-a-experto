import { writeFileSync, mkdirSync } from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const { b: base, l: limit, s: showTable } = yarg;

let outputMessage: string = "";
const header: string = `
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

mkdirSync(outputPath, { recursive: true });
writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log("File created!");

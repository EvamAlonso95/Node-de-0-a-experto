import yargs from "yargs";
import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(yarg);

//* AutoInvocada
(async () => {
  await main();
  //   console.log("Fin de programa");
})();

async function main() {
  const {
    b: base,
    l: limit,
    s: showTable,
    n: fileName,
    d: fileDestination,
  } = yarg;
  ServerApp.run({ base, limit, showTable, fileDestination, fileName });
}

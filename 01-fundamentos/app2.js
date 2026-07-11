const fs = require("fs");

const data = fs.readFileSync("README.md", "utf8");

const newData = data.replace(/React/gi, "Angular");

//Escribir nuevo archivo
fs.writeFileSync("README-Ang.md", newData);

const fs = require("fs");

const content = fs.readFileSync("README.md", "utf8");

const wordCount = content.split(" ");

// const wordReactCount = wordCount.filter((word) => word.includes("react"));

//EXPRESION REGULAR
const wordReactCount = content.match(/react/gi || []).length;

console.log("Palabras React:", wordReactCount); //case insensitive

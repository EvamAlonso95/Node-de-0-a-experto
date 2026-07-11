console.log(process.env); //podemos apuntar a las variables de entorno

const { SHELL } = process.env;

// console.log(SHELL);

const characters = ["Flash", "Superman", "GreenLantern", "Batman"];

const [, , , batman] = characters;

console.log(batman);

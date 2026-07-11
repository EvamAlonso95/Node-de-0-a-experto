// import { getUUID, getAge } from "../plugins/index.js";
// import { buildMakePerson } from "./js-foundation/05-factory.js";
// import { getPokemonById } from "./js-foundation/06-promises.js";

import { buildLogger } from "../plugins/logger.plugin.js";

// import { buildLogger } from "../plugins/index.js";

export const name: string = " Eva";
console.log(name);

//! Referencia a los logs
const logger = buildLogger("app.ts");
logger.log("Hola Mundo");
// logger.error("Esto es un error");

//! Referencia a las promesas y async
// getPokemonById(5)
//   .then((pokemon) => console.log({ pokemon }))
//   .catch((err) => console.log("Por favor, inserte id del pokemon"));

//! - Regerencia a la fincion factory y uso
// const makePerson = buildMakePerson({ getAge, getUUID });

// const obj = { name: "eva", birthdate: "1995-11-08" };

// const eva = makePerson(obj);

// console.log(eva);

//!Referencia a las funciones callback y arrow
// const id = 2;

// getUserById(id, (error, user) => {
//   if (error) {
//     throw new Error("User not found with id", id);
//   }

//   console.log(user);
// });

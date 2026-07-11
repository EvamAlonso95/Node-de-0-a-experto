// Factory es una función que crea otra funcion

// import { getUUID } from "../../plugins/get-id.plugins.js";
// import { getAge } from "../../plugins/get-age.plugin.js";

const buildMakePerson = ({ getAge, getUUID }) => {
  return ({ name, birthdate }) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };

  const person = {
    name: "John",
    birthdate: " 1995-11-08",
  };
};

// const john = buildPerson(person);

// console.log(john);

export { buildMakePerson };

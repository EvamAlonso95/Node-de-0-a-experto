import { buildMakePerson } from "../../src/js-foundation/05-factory";

describe("Factory", () => {
  // 1. Arrange - Preparamos lo que vamos a probar
  const getUUID = () => "1234";
  const getAge = () => 35;
  test("buildMakePerson should return a function", () => {
    // 2. Act - Ejecucion que vamos a probar
    const makePerson = buildMakePerson({ getUUID, getAge });
    // 3. Assert - Evaluamos
    expect(typeof makePerson).toBe("function");
  });

  test("makePerson shoul return a Person", () => {
    const makePerson = buildMakePerson({ getUUID, getAge });
    const johnDoe = makePerson({ name: "John Doe", birthdate: "1985-10-21" });
    // console.log(johnDoe);

    expect(johnDoe).toEqual({
      id: "1234",
      name: "John Doe",
      birthdate: "1985-10-21",
      age: 35,
    });
  });
});

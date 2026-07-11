import { getAge } from "../../src/plugins";

describe("get-age.plugin", () => {
  test("getAge() should return the age of a person", () => {
    // 1. Arrange - Preparamos lo que vamos a probar
    const birthdate = "1985-10-21";
    // 2. Act - Ejecucion que vamos a probar
    const age = getAge(birthdate);
    // 3. Assert - Evaluamos
    expect(typeof age).toBe("number");
  });

  test("getAge() should return current age", () => {
    const birthdate = "1985-10-21";
    // 2. Act - Ejecucion que vamos a probar
    const age = getAge(birthdate);
    const calculatedAge =
      new Date().getFullYear() - new Date(birthdate).getFullYear();

    expect(age).toBe(calculatedAge);
  });

  test("should return 0 years", () => {
    const spy = jest.spyOn(Date.prototype, "getFullYear").mockReturnValue(1995);

    const birthdate = "1995-10-21";
    const age = getAge(birthdate);
    // console.log({ age });
    expect(age).toBe(0);
  });
});

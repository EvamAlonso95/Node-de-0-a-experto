import { characters } from "../../src/js-foundation/02-destructuring";

describe("Destructuring", () => {
  test("characters should containt Flash, Superman", () => {
    // 1. Arrange - Preparamos lo que vamos a probar
    // 2. Act - Ejecucion que vamos a probar
    // 3. Assert - Evaluamos
    expect(characters).toContain("Flash");
    expect(characters).toContain("Superman");
  });

  test("first character should be Flash, and second Superman", () => {
    // 1. Arrange - Preparamos lo que vamos a probar
    const [flash, superman] = characters;

    // 2. Act - Ejecucion que vamos a probar
    // 3. Assert - Evaluamos
    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");
  });
});

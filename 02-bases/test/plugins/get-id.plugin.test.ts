import { getUUID } from "../../src/plugins";

describe("getId.plugin", () => {
  test("should return a UUID", () => {
    // 1. Arrange - Preparamos lo que vamos a probar
    const uuid = getUUID();
    // 2. Act - Ejecucion que vamos a probar
    // 3. Assert - Evaluamos
    expect(typeof uuid).toBe("string");
    expect(uuid.length).toBe(36);
  });
});

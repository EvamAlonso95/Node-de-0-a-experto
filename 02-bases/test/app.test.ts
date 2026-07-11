// A A A
describe("Test in the App File", () => {
  test("shoul be 30", () => {
    // 1. Arrange - Preparamos lo que vamos a probar
    const num1 = 10;
    const num2 = 20;

    // 2. Act - Ejecucion que vamos a probar
    const result = num1 + num2;

    // 3. Assert - Evaluamos
    expect(result).toBe(30);
  });
});

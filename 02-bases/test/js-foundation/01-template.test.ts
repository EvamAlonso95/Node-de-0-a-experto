import { emailTemplate } from "../../src/js-foundation/01-template";

describe("EmailTemplate", () => {
  test("emailTemplate should contain a greeting", () => {
    // 1. Arrange - Preparamos lo que vamos a probar

    // 2. Act - Ejecucion que vamos a probar
    // 3. Assert - Evaluamos
    expect(emailTemplate).toContain("Hi, ");
  });

  test("emailTemplate should contain {{name}} and {{orderId}}", () => {
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);
  });
});

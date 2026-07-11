import { getUserById } from "../../src/js-foundation/03-callbacks";

describe("Callback", () => {
  test("getUserById should return an error if user does not exist", (done) => {
    // 1. Arrange - Preparamos lo que vamos a probar

    const id = 10;
    // 2. Act - Ejecucion que vamos a probar
    getUserById(id, (err, user) => {
      // 3. Assert - Evaluamos
      expect(err).toBe(`User not found with id ${id}`);
      expect(user).toBeUndefined();
      done();
    });
  });

  test("getUserById should return John Doe", () => {
    // 1. Arrange - Preparamos lo que vamos a probar
    const id = 1;

    // 2. Act - Ejecucion que vamos a probar
    getUserById(id, (err, user) => {
      // 3. Assert - Evaluamos
      expect(err).toBeUndefined();
      expect(user).toStrictEqual({
        id: 1,
        name: "John Doe",
      });
      expect(user?.name).toBe("John Doe");
    });
  });
});

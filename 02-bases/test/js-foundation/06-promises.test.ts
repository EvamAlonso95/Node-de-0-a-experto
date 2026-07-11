import { getPokemonById } from "../../src/js-foundation/06-promises";

describe("Promises", () => {
  test("getPokemonById should return a pokemon", async () => {
    // 1. Arrange - Preparamos lo que vamos a probar
    const pokemonId = 1;
    // 2. Act - Ejecucion que vamos a probar
    const pokemonName = await getPokemonById(pokemonId);

    // 3. Assert - Evaluamos
    expect(pokemonName).toBe("bulbasaur");
  });

  test("should return an error if pokemon does not exist", async () => {
    // 1. Arrange - Preparamos lo que vamos a probar
    const pokemonId = 1000000000;
    // 2. Act - Ejecucion que vamos a probar
    try {
      await getPokemonById(pokemonId);
      // 3. Assert - Evaluamos
      expect(true).toBeFalsy(); //Para asegurarnos de que esto nunca se ejecute
    } catch (error) {
      expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
    }
  });
});

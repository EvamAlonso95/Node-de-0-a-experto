import { jest, describe, test, expect } from "@jest/globals";
import { Server } from "../src/presentation/server";

jest.mock("../src/presentation/server");

describe("Testing App.ts", () => {
  test("should call server with arguments and start", async () => {
    await import("../src/app");

    expect(Server).toHaveBeenCalledTimes(1);
  });
});

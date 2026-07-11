import { buildLogger } from "../../src/plugins";
import { logger as wistonLogger } from "../../src/plugins/logger.plugin";

describe("logger-plugin", () => {
  test("buildLogger should return a function logger", () => {
    const logger = buildLogger("test");

    expect(typeof logger.log).toBe("function");
    expect(typeof logger.error).toBe("function");
  });

  test("blogger.log should log a message", () => {
    // Preparacion
    const wistonLoggerMock = jest.spyOn(wistonLogger, "log");
    const message = "test message";
    const service = "test service";

    const logger = buildLogger(service);

    // Estimulo
    logger.log(message);

    expect(wistonLoggerMock).toHaveBeenCalledWith(
      "info",
      expect.objectContaining({ level: "info", message, service }),
    );
  });
});

import mongoose from "mongoose";
import { envs } from "../../../config/plugins/envs.plugin";
import { MongoDataBase } from "../init";
import { LogModel } from "./log.model";

describe("Pruebas log.model.ts", () => {
  beforeAll(async () => {
    await MongoDataBase.connect({
      dbName: envs.MONGO_DB_NAME,
      mongoUrl: envs.MONGO_URL,
    });
  });

  afterAll(() => {
    mongoose.connection.close();
  });

  test("should return LogModel", async () => {
    const logData = {
      origin: "log.model.test.ts",
      message: "test-message",
      level: "low",
    };

    const log = await LogModel.create(logData);
    expect(log).toEqual(
      expect.objectContaining({
        ...logData,
        id: expect.any(String),
        createdAt: expect.any(Date),
      }),
    );
  });

  test("should return the schema object", () => {
    const schema = LogModel.schema.obj;

    expect(schema).toEqual(
      expect.objectContaining({
        message: expect.objectContaining({
          type: expect.any(Function),
          require: true,
        }),
        level: expect.objectContaining({
          type: expect.any(Function),
          enum: ["low", "medium", "high"],
          default: "low",
        }),
        origin: expect.objectContaining({ type: expect.any(Function) }),
        createdAt: expect.objectContaining({ type: expect.any(Function) }),
      }),
    );
  });
});

import { after } from "node:test";
import { MongoDataBase } from "./init";
import mongoose from "mongoose";

describe("init MongoDB", () => {
  afterAll(() => {
    mongoose.connection.close();
  });

  test("should connect to MongoDB", async () => {
    console.log(process.env.MONGO_URL, process.env.MONGO_DB_NAME);

    const connected = await MongoDataBase.connect({
      dbName: process.env.MONGO_DB_NAME!,
      mongoUrl: process.env.MONGO_URL!,
    });

    expect(connected).toBeTruthy();
  });

  test("should throw an error", async () => {
    try {
      const connected = await MongoDataBase.connect({
        dbName: process.env.MONGO_DB_NAME!,
        mongoUrl: "postgresql://postgres:123456@safasfsaf:5432/NOC",
      });

      expect(true).toBe(false);
    } catch (error) {}
  });
});

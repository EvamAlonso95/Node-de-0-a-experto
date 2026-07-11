import mongoose from "mongoose";

interface ConnectionOptions {
  mongoUrl: string;
  dbName: string;
}

export class MongoDatabase {
  static async connect(connectionOptions: ConnectionOptions) {
    const { mongoUrl, dbName: dbName } = connectionOptions;

    try {
      await mongoose.connect(mongoUrl, {
        dbName,
      });

      return true;
    } catch (error) {
      console.log("Mongo connection error");

      throw error;
    }
  }

  static async disconnect() {
    await mongoose.disconnect();
  }
}

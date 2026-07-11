import mongoose from "mongoose";

//* El esquema se utiliza para crear el modelo, el modelo es cómo vamos a interacturar con MONGO

const logSchema = new mongoose.Schema({
  message: {
    type: String,
    require: true,
  },
  level: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "low",
  },
  origin: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const LogModel = mongoose.model("Log", logSchema);

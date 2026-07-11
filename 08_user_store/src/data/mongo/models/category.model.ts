import mongoose, { Schema } from "mongoose";

//* Esquemas son las normas con las que grabaremos nuestros datos
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
  available: {
    type: Boolean,
    default: false,
  },
  user: {
    type: Schema.Types.ObjectId, //* Tipo especial para insertar algo que tiene un id de mongo
    ref: "User",
    required: true,
  },
});

categorySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret, options) {
    delete (ret as any)._id;
    return ret;
  },
});

export const CategoryModel = mongoose.model("Category", categorySchema);

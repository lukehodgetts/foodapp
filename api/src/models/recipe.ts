import mongoose, { Document } from "mongoose";

interface Recipe extends Document {
  id: number;
  label: string;
  calories: number;
  ingredientLines: string[];
  yield: number;
  image: string;
}

const recipeSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  ingredientLines: {
    type: [String],
    required: true,
  },
  yield: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default mongoose.model<Recipe>("Recipe", recipeSchema, "recipes");

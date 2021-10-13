import mongoose, { Document } from "mongoose";

interface Recipe extends Document {
  id: number;
  name: string;
  calories: number;
  ingredients: string[];
  servings: number;
}

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  servings: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<Recipe>("Recipe", recipeSchema, "recipes");

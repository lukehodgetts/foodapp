import {
  NextFunction,
  RequestHandler,
  Router,
  Request,
  Response,
} from "express";
import Recipe from "../models/recipe";
const router = Router();

//get all
router.get("/", async (req, res) => {
  const recipe = await Recipe.find();

  res.send(recipe);
});

//create one
router.post("/", async (req, res) => {
  const { id, name, calories, ingredients, servings, image } = req.body;

  const recipe = new Recipe({
    name,
    calories,
    servings,
    ingredients,
    image,
  });

  await recipe.save();

  res.send({ data: recipe, message: "recipe saved" });
});

//delete one
router.delete("/:id", async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if (recipe) {
    await recipe.delete();
    res.send(req.params.id);
  } else {
    res.status(404).send({ message: "recipe not found" });
  }
});

export default router;

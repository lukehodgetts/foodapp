import {
  NextFunction,
  RequestHandler,
  Router,
  Request,
  Response,
} from "express";
import axios from "axios";
import Recipe from "../models/recipe";
import recipe from "../models/recipe";
const router = Router();

//get all
router.get("/", async (req, res) => {
  if (
    typeof req.query.search !== "string" ||
    typeof req.query.to !== "string" ||
    typeof req.query.from !== "string"
  )
    return res.send("Invalid input").status(500);

  const recipes = await Recipe.find({
    label: { $regex: req.query.search },
  })
    .skip(parseInt(req.query.from))
    .limit(12);

  const to = parseInt(req.query.to) - recipes.length;
  const from =
    parseInt(req.query.from) - recipes.length < 0
      ? 0
      : parseInt(req.query.from) - recipes.length;

  console.log(req.query);

  const data = await axios.get(
    "https://edamam-recipe-search.p.rapidapi.com/search",
    {
      params: {
        q: req.query.search,
        to,
        from,
      },
      headers: {
        "x-rapidapi-key": process.env.RAPID_API_KEY || "",
        "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
      },
    }
  );

  if (typeof req.query.search !== "string") return res.json(data.data);

  const formattedRecipes = recipes.map((recipe) => {
    return { recipe };
  });

  console.log(recipes);
  res.json({ ...data.data, hits: [...formattedRecipes, ...data.data.hits] });
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

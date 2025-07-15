console.log("=======1.5 Recipe Management=======");

function fastestRecipe(recipes) {
  if (!recipes.length) {
    console.log("No recipes available.");
    return;
  }

  let fastest = recipes[0];
  for (let i = 1; i < recipes.length; i++) {
    if (recipes[i].prepTime < fastest.prepTime) {
      fastest = recipes[i];
    }
  }

  console.log(
    `The fastest recipe to cook would be: ${
      fastest.recipeName
    }, it would take only ${
      fastest.prepTime
    } minutes and needs the following ingredients: ${fastest.ingredients.join(
      ", "
    )}`
  );
}

let recipeList = [
  {
    recipeName: "Spaghetti",
    prepTime: 30,
    ingredients: ["spaghetti", "tomato sauce", "garlic"],
  },
  {
    recipeName: "Salad",
    prepTime: 10,
    ingredients: ["lettuce", "tomato", "cucumber", "olive oil"],
  },
  {
    recipeName: "Pancakes",
    prepTime: 20,
    ingredients: ["flour", "milk", "eggs", "sugar"],
  },
];

fastestRecipe(recipeList);

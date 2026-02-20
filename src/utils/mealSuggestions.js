export function getSuggestedMeals(meals, child) {
  if (!meals || !child) return [];
  const activeMeals = meals.filter((meal) => meal.isActive);
  const safeMeals = activeMeals.filter(
    (meal) =>
      !meal.allergens.some((allergen) =>
        child.allergens.includes(allergen)
      )
  );
  const preferred = [];
  const others = [];

  safeMeals.forEach((meal) => {
    if (meal.dietaryTags.includes(child.dietaryPreference)) {
      preferred.push(meal);
    } else {
      others.push(meal);
    }
  });

  return [...preferred, ...others].slice(0, 3);
}

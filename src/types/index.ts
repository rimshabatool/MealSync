export interface Meal {
  id: string;
  name: string;
  price: number;
  cuisineTag: string;
  allergens: string[];
  dietaryTags: string[];
  isActive: boolean;
}

export interface Child {
  id: string;
  name: string;
  allergens: string[];
  dietaryPreference: string;
}

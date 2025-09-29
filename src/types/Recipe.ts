export interface Recipe {
  id: number;
  title: string;
  category: 'main' | 'side' | 'soup' | 'dessert';
  time: number;
  image: string;
  tags: string[];
  ingredients: string[];
  instructions: string[];
  description: string;
}

export type RecipeCategory = Recipe['category'];

export interface RecipeFilters {
  searchTerm: string;
  category: RecipeCategory | '';
  time: string;
}
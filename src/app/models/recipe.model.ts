export interface Recipe {
  label: string;
  image: string;
  url: string;
  dietLabels: string[];
  yield: number;
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  calories: number;
  totalTime: number;
  cuisineType: string[];
  totalNutrients: Nutrients;
}


export interface NutrientDetail {
  label: string;
  quantity: number;
  unit: string;
}

export interface Nutrients {
  [key: string]: NutrientDetail;
}

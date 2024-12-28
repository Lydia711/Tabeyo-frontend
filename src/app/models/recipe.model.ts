export interface Recipe {
  uri: string;
  label: string;
  image: string;
  source: string;
  url: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  totalNutrients: Nutrients;
  totalDaily: Nutrients;
  digest: Digest[];
}

export interface Ingredient {
  text: string;
  weight: number;
  foodId?: string;
}

export interface NutrientDetail {
  label: string;
  quantity: number;
  unit: string;
}

export interface Nutrients {
  [key: string]: NutrientDetail;
}

export interface Digest {
  label: string;
  tag: string;
  schemaOrgTag: string | null;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
}

import { Recipe } from "../app/models/recipe.model";

export function splitMinutes(recipe: Recipe): { hours: number; minutes: number } {
  const hours = Math.floor(recipe.totalTime / 60);
  const minutes = recipe.totalTime % 60;
  return { hours, minutes };
}
export function getCautions(recipe: Recipe): string {
  return recipe.cautions.join(', ');
}
export function getHealthLabels(recipe: Recipe): string {
  return recipe.healthLabels.join(', ');
}

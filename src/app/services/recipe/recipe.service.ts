import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { SearchParams } from '../../models/search-params.model';
import { Recipe } from '../../models/recipe.model';
import { Observable, map, tap } from 'rxjs';
import { RecipeReponse } from '../../models/recipe-response';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private apiService: ApiService) { }

  getRecipes(searchParams: SearchParams, authToken: string): Observable<Recipe[]> {

    const httpParams: Record<string, string> = {};

    if (searchParams.ingredients?.length) {
      //To-do: undo testing code
      httpParams['ingredients'] = searchParams.ingredients.join(',');
//        "mango, coconut, rice, green chilli, cashews, cucumbers, fish sauce, lime juice";//
    }

    if (searchParams.cuisine) {
      httpParams['cuisine'] = searchParams.cuisine;
    }

    const headers = {
      'Authorization': `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    };

    var endpoint: string = searchParams.strictSearch ? "recipes/strict" : "recipes";

    return this.apiService.get<RecipeReponse>(endpoint, httpParams, headers).pipe(
      tap(response => console.log('Raw API response: ', response)),
      map((response) => {
        if (!response?.recipes) {
          return [];
        }

        return response.recipes.map(recipe => {
          const mappedRecipe: Recipe = {
            label: recipe.label,
            image: recipe.image,
            url: recipe.url,
            dietLabels: recipe.dietLabels,
            portions: recipe.portions,
            healthLabels: recipe.healthLabels,
            cautions: recipe.cautions,
            ingredientLines: recipe.ingredientLines,
            calories: Math.round(recipe.calories / recipe.portions),
            totalTime: recipe.totalTime,
            cuisineType: recipe.cuisineType,
            totalNutrients: recipe.totalNutrients,
            missingIngredients: recipe.missingIngredients

          };
          return mappedRecipe;
        });
      }),
      tap(recipes => console.log('Transformed Recipes:', recipes)),
    )
  }
}

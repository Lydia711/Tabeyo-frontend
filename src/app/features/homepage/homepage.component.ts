import { Component } from '@angular/core';
import { IngredientSearchComponent } from "../../shared/ingredient-search/ingredient-search.component";
import { RecipeService } from '../../services/recipe/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { SearchParams } from '../../models/search-params.model';
import { FetchedRecipesComponent } from '../../shared/fetched-recipes/fetched-recipes.component';

@Component({
  selector: 'app-homepage',
  imports: [IngredientSearchComponent, FetchedRecipesComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) { }

  async handleSearch(searchParams: SearchParams) {
    try {
      console.log("search params: " + searchParams.cuisine + ", " + searchParams.ingredients + ", " + searchParams.strictSearch);
      const recipes = await this.recipeService.getRecipes(searchParams, "").subscribe({
        next: (fetchedRecipes: Recipe[]) => {
          this.recipes = fetchedRecipes;
        }
      })
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }
}

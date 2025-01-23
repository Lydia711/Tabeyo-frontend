import { Component } from '@angular/core';
import { IngredientSearchComponent } from "../../shared/ingredient-search/ingredient-search.component";
import { RecipeService } from '../../services/recipe/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { SearchParams } from '../../models/search-params.model';
import { FetchedRecipesComponent } from '../../shared/fetched-recipes/fetched-recipes.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  imports: [IngredientSearchComponent, FetchedRecipesComponent, SpinnerComponent, CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  recipes: Recipe[] = [];
  isLoading: boolean = false;
  noRecipesFatched: boolean = false;
  recipeFetchError: boolean = false;

  constructor(private recipeService: RecipeService) { }

  async handleSearch(searchParams: SearchParams) {

    this.isLoading = true;
    this.recipeFetchError = false;
    this.noRecipesFatched = false;


    try {
      const recipes = await this.recipeService.getRecipes(searchParams, "").subscribe({
        next: (fetchedRecipes: Recipe[]) => {
          this.recipes = fetchedRecipes;
          if (fetchedRecipes.length === 0)
            this.noRecipesFatched = true;
          else
            this.noRecipesFatched = false;
        },
        error: (error) => {
          console.error('Error fetching recipes: ', error);
          this.recipeFetchError = true;
          this.isLoading = false;
        },
        complete: () => {
          this.recipeFetchError = false;
          this.isLoading = false;
        }
      });

    } catch (error) {
      console.error('Error fetching recipes: ', error);
    }





    /*
    try {
      console.log("Homepage search params:- cuisine: " + searchParams.cuisine + ", ingredients: " + searchParams.ingredients + ", strict?: " + searchParams.strictSearch + ", " + searchParams.healthLabels.size);


      const recipes = await this.recipeService.getRecipes(searchParams, "").subscribe({
        next: (fetchedRecipes: Recipe[]) => {
          this.recipes = fetchedRecipes;
        }
      })
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }*/
  }
}

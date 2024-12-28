import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe/recipe.service';
import { RecipeUiService } from '../../services/recipe-ui/recipe-ui.service';
import { IngredientComponentComponent } from '../ingredient-component/ingredient-component.component';

@Component({
  selector: 'app-fetched-recipes',
  imports: [IngredientComponentComponent],
  templateUrl: './fetched-recipes.component.html',
  styleUrl: './fetched-recipes.component.scss'
})
export class FetchedRecipesComponent {
  @Input() recipes: Recipe[] = [];

  constructor(
    private recipeUiService: RecipeUiService
  ) { }

  openRecipe(clickedRecipe: Recipe) {
    this.recipeUiService.showRecipe(clickedRecipe);
  }
}

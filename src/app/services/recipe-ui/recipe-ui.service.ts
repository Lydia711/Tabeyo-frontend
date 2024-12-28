import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeUiService {
  private selectedRecipeSource = new BehaviorSubject<Recipe | null>(null);
  selectedRecipe$ = this.selectedRecipeSource.asObservable();

  showRecipe(clickedRecipe: Recipe) {
    this.selectedRecipeSource.next(clickedRecipe);
  }
}

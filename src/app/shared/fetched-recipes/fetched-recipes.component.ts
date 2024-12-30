import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe/recipe.service';
import { RecipeComponentComponent } from '../recipe-component/recipe-component.component';

@Component({
  selector: 'app-fetched-recipes',
  imports: [RecipeComponentComponent],
  templateUrl: './fetched-recipes.component.html',
  styleUrl: './fetched-recipes.component.scss'
})
export class FetchedRecipesComponent {
  @Input() recipes: Recipe[] = [];

}

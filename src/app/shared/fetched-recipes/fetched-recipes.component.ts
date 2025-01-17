import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe/recipe.service';
import { RecipeComponentComponent } from '../recipe-component/recipe-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fetched-recipes',
  imports: [RecipeComponentComponent, CommonModule],
  templateUrl: './fetched-recipes.component.html',
  styleUrl: './fetched-recipes.component.scss'
})
export class FetchedRecipesComponent implements OnInit {
  @Input() recipes: Recipe[] = [];
  sortedRecipes: Recipe[] = [];

  ngOnInit() {
    this.sortRecipes();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['recipes']) {
      this.sortRecipes();
    }
  }
  sortRecipes() {
    this.sortedRecipes = [...this.recipes].sort((a, b) => {
      return a.missingIngredients.length - b.missingIngredients.length;
    });
  }
}

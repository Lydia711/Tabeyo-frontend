import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { splitMinutes, getCautions } from '../../../utils/helperFunctions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-details',
  imports: [CommonModule],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent {

  splitMinutes = splitMinutes;
  getCautions = getCautions;
  macroNutrients: string[] = ['PROCNT', 'FAT', 'CHOCDF'];

  @Input() recipe: Recipe = {
    label: "",
    image: "",
    url: "",
    dietLabels: [],
    portions: 0,
    healthLabels: [],
    cautions: [],
    ingredientLines: [],
    calories: 0,
    totalTime: 0,
    cuisineType: [],
    totalNutrients: {},
    missingIngredients: []
  };


}

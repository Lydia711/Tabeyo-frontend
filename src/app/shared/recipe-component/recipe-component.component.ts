import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { splitMinutes, getCautions } from '../../../utils/helperFunctions';

@Component({
  selector: 'app-recipe-component',
  imports: [CommonModule, RecipeDetailsComponent],
  templateUrl: './recipe-component.component.html',
  styleUrl: './recipe-component.component.scss'
})
export class RecipeComponentComponent {

  splitMinutes = splitMinutes;
  getCautions = getCautions;

  @Input() recipe: Recipe = {
    label: "Tropical Mango Rice Pudding",
    image: "https://example.com/mango_rice_pudding.jpg",
    url: "https://example.com/mango-rice-pudding-recipe",
    dietLabels: ["Vegetarian", "Gluten-Free"],
    yield: 4,
    healthLabels: ["Low-Fat", "Dairy-Free"],
    cautions: ["Tree Nuts", "deez nuts", "deez other nuts"],
    ingredientLines: [
      "1 cup cooked jasmine rice",
      "1 cup coconut milk",
      "1/4 cup sugar",
      "1 ripe mango, diced",
      "1/4 tsp salt",
      "Optional: toasted coconut flakes for garnish"
    ],
    calories: 450,
    totalTime: 30,
    cuisineType: ["Asian"],
    totalNutrients: {
      "ENERC_KCAL": {
        label: "Energy",
        quantity: 450,
        unit: "kcal"
      },
      "FAT": {
        label: "Fat",
        quantity: 12,
        unit: "g"
      },
      "CHOCDF": {
        label: "Carbohydrates",
        quantity: 75,
        unit: "g"
      },
      "PROCNT": {
        label: "Protein",
        quantity: 6,
        unit: "g"
      },
      "FIBTG": {
        label: "Fiber",
        quantity: 3,
        unit: "g"
      }
    }
  };

}

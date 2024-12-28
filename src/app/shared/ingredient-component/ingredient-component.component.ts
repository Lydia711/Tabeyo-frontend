import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';

@Component({
  selector: 'app-ingredient-component',
  imports: [CommonModule, RecipeDetailsComponent],
  templateUrl: './ingredient-component.component.html',
  styleUrl: './ingredient-component.component.scss'
})
export class IngredientComponentComponent {
  @Input() recipe: Recipe = {
    uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_1234567890abcdef",
    label: "Chicken Curry",
    image: "https://www.sandravalvassori.com/wp-content/uploads/2024/04/Chicken-Sweet-Potato-Curry-1251-4.jpg",
    source: "Delicious Recipes",
    url: "http://www.deliciousrecipes.com/chicken-curry",
    yield: 4,
    dietLabels: ["High-Protein", "Low-Carb"],
    healthLabels: ["Gluten-Free", "Dairy-Free"],
    cautions: ["Peanuts"],
    ingredientLines: [
      "1 lb chicken breast, cubed",
      "1 tbsp olive oil",
      "1 onion, diced",
      "2 cloves garlic, minced"
    ],
    ingredients: [
      { text: "1 lb chicken breast, cubed", weight: 453.6 },
      { text: "1 tbsp olive oil", weight: 13.5 }
    ],
    calories: 480,
    totalWeight: 993,
    totalTime: 90,
    totalNutrients: {
      ENERC_KCAL: { label: "Energy", quantity: 480, unit: "kcal" },
      FAT: { label: "Fat", quantity: 35, unit: "g" }
    },
    totalDaily: {
      ENERC_KCAL: { label: "Energy", quantity: 24, unit: "%" },
      FAT: { label: "Fat", quantity: 54, unit: "%" }
    },
    digest: [
      { label: "Fat", tag: "FAT", schemaOrgTag: "fatContent", total: 35, hasRDI: true, daily: 54, unit: "g" }
    ]
  };
  splitMinutes(): { hours: number; minutes: number } {
    const hours = Math.floor(this.recipe.totalTime / 60);
    const minutes = this.recipe.totalTime % 60;
    return { hours, minutes };
  }
  getCautions(): string {
    return this.recipe.cautions.join(', ');
  }
}

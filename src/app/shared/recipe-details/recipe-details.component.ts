import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-details',
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent {
  @Input() recipe: Recipe = {
    uri: '',
    label: '',
    image: '',
    source: '',
    url: '',
    yield: 0,
    dietLabels: [],
    healthLabels: [],
    cautions: [],
    ingredientLines: [],
    ingredients: [],
    calories: 0,
    totalWeight: 0,
    totalTime: 0,
    totalNutrients: {
      energy: { label: 'Energy', quantity: 0, unit: 'kcal' },
      fat: { label: 'Fat', quantity: 0, unit: 'g' },
      protein: { label: 'Protein', quantity: 0, unit: 'g' },
      carbs: { label: 'Carbohydrates', quantity: 0, unit: 'g' }
    },
    totalDaily: {
      energy: { label: 'Energy', quantity: 0, unit: '%' },
      fat: { label: 'Fat', quantity: 0, unit: '%' },
      protein: { label: 'Protein', quantity: 0, unit: '%' },
      carbs: { label: 'Carbohydrates', quantity: 0, unit: '%' }
    },
    digest: []
  };


}

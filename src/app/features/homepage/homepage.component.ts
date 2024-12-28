import { Component } from '@angular/core';
import { IngredientSearchComponent } from "../../shared/ingredient-search/ingredient-search.component";
import { IngredientComponentComponent } from "../../shared/ingredient-component/ingredient-component.component";
import { FetchedRecipesComponent } from '../../shared/fetched-recipes/fetched-recipes.component';

@Component({
  selector: 'app-homepage',
  imports: [IngredientSearchComponent, FetchedRecipesComponent, IngredientComponentComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}

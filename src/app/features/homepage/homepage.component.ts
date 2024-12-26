import { Component } from '@angular/core';
import { IngredientSearchComponent } from "../../shared/ingredient-search/ingredient-search.component";
import { IngredientComponentComponent } from "../../shared/ingredient-component/ingredient-component.component";

@Component({
  selector: 'app-homepage',
  imports: [IngredientSearchComponent, IngredientComponentComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}

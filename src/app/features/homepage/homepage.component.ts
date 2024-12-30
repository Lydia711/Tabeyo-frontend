import { Component } from '@angular/core';
import { IngredientSearchComponent } from "../../shared/ingredient-search/ingredient-search.component";

@Component({
  selector: 'app-homepage',
  imports: [IngredientSearchComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}

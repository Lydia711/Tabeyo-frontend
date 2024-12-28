import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe/recipe.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-ingredient-search',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ingredient-search.component.html',
  styleUrl: './ingredient-search.component.scss',
})
export class IngredientSearchComponent {

  searchText: FormControl = new FormControl('');
  chosenIngredients: string[] = []

  testIngredients: string[] = ["rice", "chicken", "mango", "chocolate", "pasta", "tomato"]
  filteredItems:string[] = [];

  //recipes: Recipe[] = ["5alasoona", "ba2a", "et5ana2t"];
  recipes: string[] = ["5alasoona", "ba2a", "et5ana2t"];
  

  chosenCuisine:string = "teez";
  cuisines:string[] = ["Japanese", "Asian", "Italian", "Mediterranean"];

  strictIngredients:boolean = false;


  selectCuisine(cuisine: string): void {
    this.chosenCuisine = cuisine;
    console.log(`Selected Cuisine: ${this.chosenCuisine}`);
  }
  
  fetchRecipes():void{
    const authToken = 'your-auth-token';
    this.recipeService.getRecipes(this.chosenIngredients, this.chosenCuisine, authToken).subscribe(
      (response) => {
        this.recipes = response;
        console.log('Recipes: ', this. recipes);
      },
      (error) => {
        console.error('Error fetching recipes:', error);
      }
    )
  }
  

  constructor(private recipeService:RecipeService) {
    this.searchText.valueChanges.subscribe(value => {
      this.filterItems(value);
    });
  }


  filterItems(query: string) {
    if (query) {
      this.filteredItems = this.testIngredients.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      this.filteredItems = [];
    }
  }

  
  selectItem(item: string) {
    this.searchText.setValue(item);
    this.filteredItems = [];
    this.addItem();
  }


  addItem(){
    const inputText = this.searchText.value.trim();
    if(inputText !== ''){
      if(!this.chosenIngredients.includes(inputText.toLowerCase()))
          this.chosenIngredients.push(inputText);
      this.searchText.setValue('');
    }
  }

  removeItem(index:number){
    this.chosenIngredients.splice(index,1);
  }
}

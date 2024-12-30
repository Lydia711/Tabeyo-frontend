import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { HttpClient } from '@angular/common/http';
import * as AvailableIngredients from '../../../assets/ingredients.json';
import * as Cuisines from '../../../assets/cuisines.json';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-ingredient-search',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ingredient-search.component.html',
  styleUrl: './ingredient-search.component.scss',
})
export class IngredientSearchComponent implements OnInit {

  ingredients: string[] = [];
  filteredIngredients: string[] = [];
  searchControl = new FormControl('');
  showSuggestions = false;
  selectedIndex = -1;
  chosenIngredients:string[] = []
  chosenCuisine:string = "";
  cuisines:string[] = [];

  fetchedRecipes: Recipe[] = [];
  strictIngredients: boolean = false;

  ngOnInit(): void {
    /*this.availableIngredients = (AvailableIngredients as any).ingredients;*/
    this.cuisines = (Cuisines as any).cuisines;

    this.loadIngredients();

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      this.filterIngredients(searchTerm ?? '');
    });
  }

  private async loadIngredients() {
    this.ingredients = AvailableIngredients.ingredients;
    this.filteredIngredients = [...this.ingredients]; 
  }

  private filterIngredients(searchTerm: string) {
    if (!searchTerm) {
      this.filteredIngredients = [...this.ingredients];
      this.showSuggestions = false;
      return;
    }

    searchTerm = searchTerm.toLowerCase();
    this.filteredIngredients = this.ingredients.filter(ingredient =>
      ingredient.toLowerCase().includes(searchTerm)
    );
    this.showSuggestions = true;
  }

  selectCuisine(cuisine: string): void {
    this.chosenCuisine = cuisine;
    console.log(`Selected Cuisine: ${this.chosenCuisine}`);
  }

  addIngredient(ingredient: string) {
    if (!this.chosenIngredients.includes(ingredient)) {
      this.chosenIngredients.push(ingredient);
    }
    this.searchControl.setValue('');
    this.showSuggestions = false;
    this.selectedIndex = -1;
  }

  removeItem(index: number) {
    this.chosenIngredients.splice(index, 1);
  }
}

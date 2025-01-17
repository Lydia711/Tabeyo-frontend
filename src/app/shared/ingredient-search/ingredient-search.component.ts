import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from '../../services/recipe/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { SearchParams } from '../../models/search-params.model';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import * as AvailableIngredients from '../../../assets/ingredients.json';
import * as Cuisines from '../../../assets/cuisines.json';
import * as Health from '../../../assets/health.json';
import { MultiSelectDropdownComponent } from '../multi-select-dropdown/multi-select-dropdown.component';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-ingredient-search',
  imports: [ReactiveFormsModule, CommonModule, MultiSelectDropdownComponent, DropdownComponent],
  templateUrl: './ingredient-search.component.html',
  styleUrl: './ingredient-search.component.scss',
})
export class IngredientSearchComponent implements OnInit {

  @Output() searchTriggered = new EventEmitter<SearchParams>();

  ingredients: string[] = [];
  filteredIngredients: string[] = [];
  searchControl = new FormControl('');
  showSuggestions = false;
  selectedIndex = -1;
  chosenIngredients: string[] = [];
  selectedCuisine:string = "";
  cuisines: string[] = [];
  healthLabels: string[] = [];
  selectedHealthLabels: Set<string> = new Set<string>();

  fetchedRecipes: Recipe[] = [];
  strictSearch: boolean = false;

  ngOnInit(): void {
    this.loadCuisines();
    this.loadIngredients();
    this.loadHealthLabels();

    this.searchControl.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe(searchTerm => {
      this.filterIngredients(searchTerm ?? '');
    });
  }

  private async loadIngredients() {
    this.ingredients = (AvailableIngredients as any).ingredients;
    this.filteredIngredients = [...this.ingredients]; 
  }
  private async loadCuisines() {
    this.cuisines = (Cuisines as any).cuisines;
  }
  private async loadHealthLabels() {
    this.healthLabels = (Health as any).health;
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
    this.selectedCuisine = cuisine;
  }

  addIngredient(ingredient: string) {
    if (!this.chosenIngredients.includes(ingredient)) {
      this.chosenIngredients.push(ingredient);
    }
    this.searchControl.setValue('');
    this.showSuggestions = false;
    this.selectedIndex = -1;
  }

  removeItem(itemToRemove: string): void {
    this.chosenIngredients = this.chosenIngredients.filter(
      item => item !== itemToRemove
    );
  }

  trackByFn(index: number, item: string): string {
    return item;
  }
  toggleStrictSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.strictSearch = inputElement.checked;
  }
  // TO-DO: fetch recipes
  startSearch() {
    if (!this.chosenIngredients) {
      return;
    }
    console.log("params are: ", this.chosenIngredients, ", ", this.cuisines.includes(this.selectedCuisine) ? this.selectedCuisine : "", ", ", this.strictSearch);

    var params: SearchParams = {
      ingredients: [...this.chosenIngredients],
      cuisine: (this.cuisines.includes(this.selectedCuisine) && this.selectedCuisine != "Anywhere") ? this.selectedCuisine : "",
      strictSearch: this.strictSearch,
      healthLabels: this.selectedHealthLabels
    }
    this.searchTriggered.emit(params);
  }

  onDietaryRestrictionChange(selectedHealthLabels: Set<string>) {
    this.selectedHealthLabels = selectedHealthLabels;
  }
  onCuisineChange(selectedCuisine: string) {
    this.selectedCuisine = selectedCuisine;
  }
}

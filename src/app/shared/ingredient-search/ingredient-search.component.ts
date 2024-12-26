import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingredient-search',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ingredient-search.component.html',
  styleUrl: './ingredient-search.component.scss'
})
export class IngredientSearchComponent {

  searchText: FormControl = new FormControl('');
  chosenItems: string[] = []

  testIngredients: string[] = ["rice", "chicken", "mango", "chocolate", "pasta", "tomato"]
  filteredItems:string[] = [];

  constructor() {
    // Subscribe to changes in the input field
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
      if(!this.chosenItems.includes(inputText.toLowerCase()))
          this.chosenItems.push(inputText);
      this.searchText.setValue('');
    }
  }

  removeItem(index:number){
    this.chosenItems.splice(index,1);
  }
}

import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private apiService: ApiService) {}

  getRecipes(ingredients: string[], cuisine: string, authToken:String){
    const params = {
      ingredients: ingredients.join(', '), // Join ingredients with a comma
      cuisine: cuisine,
    };

    const headers = {
      'Authorization': `Bearer ${authToken}`, // Token for authentication
      'Content-Type': 'application/json', // Standard header for JSON
      "Referrer-Policy": "strict-origin-when-cross-origin"
    };

    return this.apiService.get<any>('recipes',params, headers);
  }
}

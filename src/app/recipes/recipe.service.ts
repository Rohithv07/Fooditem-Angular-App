import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

import { Ingredient } from '../shared/ingredient.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
		new Recipe('Biriyani', 'Delicious', 'https://www.thespruceeats.com/thmb/ZunmTodJtTh5qOfWJfxiksmO0MI=/1885x1414/smart/filters:no_upscale()/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg', 
			[new Ingredient('Chicken', 1),
			new Ingredient('Rice', 2)]),
		new Recipe('Veg Biriyani', 'Delicious', 'https://www.thespruceeats.com/thmb/ZunmTodJtTh5qOfWJfxiksmO0MI=/1885x1414/smart/filters:no_upscale()/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg', 
			[new Ingredient('Chicken', 1),
			new Ingredient('Rice', 2)])
	];

	constructor(private shoppingListService: ShoppingListService) {}

	getRecipe() {
		return this.recipes.slice(); // create new array  which is the exact copy
	}

	getRecipes(index: number) {
		return this.recipes[index];
	}

	addIngredientToShoppingList(ingredients: Ingredient[]) {
		this.shoppingListService.addIngredientss(ingredients);
	}
}
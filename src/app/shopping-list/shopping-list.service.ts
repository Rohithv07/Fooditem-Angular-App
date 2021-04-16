import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	ingredientsChanged = new EventEmitter<Ingredient[]>();
	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 18)
	];

	getIncredients() {
		return this.ingredients.slice();
	}

	addIngredients(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.emit(this.ingredients.slice());
	}

	addIngredientss(ingredients: Ingredient[]) {
		// for (let ingredient of ingredients) {
		// 	this.addIngredients(ingredient);
		// }
		this.ingredients.push(...ingredients); // spread operator - ...
		this.ingredientsChanged.emit(this.ingredients.slice());
	}
}
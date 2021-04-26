// import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

import { Subject } from 'rxjs';

export class ShoppingListService {
	ingredientsChanged = new Subject<Ingredient[]>();
	startedEditing = new Subject<number>();
	private ingredients: Ingredient[] = [
		new Ingredient('Apples', 5),
		new Ingredient('Tomatoes', 18)
	];

	getIncredients() {
		return this.ingredients.slice();
	}

	getIncredient(index: number) {
		return this.ingredients[index];
	}

	addIngredients(ingredient: Ingredient) {
		this.ingredients.push(ingredient);
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	addIngredientss(ingredients: Ingredient[]) {
		// for (let ingredient of ingredients) {
		// 	this.addIngredients(ingredient);
		// }
		this.ingredients.push(...ingredients); // spread operator - ...
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	updateIngredient(index: number, newIngredient: Ingredient) {
		this.ingredients[index] = newIngredient;
		this.ingredientsChanged.next(this.ingredients.slice());
	}

	deleteIngredient(index: number) {
		this.ingredients.splice(index, 1);
		this.ingredientsChanged.next(this.ingredients.slice());
	}
}
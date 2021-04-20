import { Component, OnInit, Input, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';



@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

	@Input() recipe!: Recipe;  // ! is added to disable the --strictPropertyInitialization
	@Input() index!: number	
	

	ngOnInit(): void {
	}

	// onSelected() {
	// 	this.recipeService.recipeSelected.emit(this.recipe);
	// }

}

import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('Biriyani', 'Delicious', 'https://www.thespruceeats.com/thmb/ZunmTodJtTh5qOfWJfxiksmO0MI=/1885x1414/smart/filters:no_upscale()/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg'),
		new Recipe('Biriyani', 'Delicious', 'https://www.thespruceeats.com/thmb/ZunmTodJtTh5qOfWJfxiksmO0MI=/1885x1414/smart/filters:no_upscale()/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg')
	];

  constructor() { }

  ngOnInit(): void {
  }

}

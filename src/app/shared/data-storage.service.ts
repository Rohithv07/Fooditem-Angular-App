import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from "../auth/auth.service";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";


@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {
    }

    storeRecipes() {
        const recipes = this.recipeService.getRecipe();
        this.http.put('https://fooditem-a1855-default-rtdb.firebaseio.com/recipes.json', 
        recipes)
        .subscribe(response => {
            console.log(response);
        });
    }

    fetchRecipes() {
        return this.authService.user.pipe(
            take(1), exhaustMap(user => {
            return this.http.get<Recipe[]>(
                'https://fooditem-a1855-default-rtdb.firebaseio.com/recipes.json?auth=' + user?.token
                );
        }), 
        map(recipes => {
            return recipes.map(recipe => {
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
            }); // array method map
        }), 
        tap(recipes => {
            this.recipeService.setRecipe(recipes);
        })
        );
    }
}
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Ham',
                   'The best!',
                   'https://www.simplyrecipes.com/wp-content/uploads/2015/12/cranberry-glazed-ham-horiz-a-1600.jpg',
                   [
                       new Ingredient('Meat', 2),
                       new Ingredient('French Fries', 20)
                   ]),
                   new Recipe('Lasagna',
                   'What else you need to say?',
            // tslint:disable-next-line:max-line-length
                   'https://lh3.googleusercontent.com/P9C0wWQFyiVaXgK1hF_nf2nL0EU0twy7GscrL_tYxibI4yC05ajW1dEgBU1M1BmCLVdDg9kix4E_q7A28gaOc_7iZf26HZ1SMVjOaCo=w600-l68',
                   [
                       new Ingredient('Buns', 2),
                       new Ingredient('Meat', 1)
                   ])
    ];

    constructor(private slService: ShoppingListService) {
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}

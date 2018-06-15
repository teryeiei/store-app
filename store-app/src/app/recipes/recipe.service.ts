import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingerdient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Ham',
                   'The best!',
                   'https://www.simplyrecipes.com/wp-content/uploads/2015/12/cranberry-glazed-ham-horiz-a-1600.jpg',
                   [
                       new Ingerdient('Meat', 2),
                       new Ingerdient('French Fries', 20)
                   ]),
                   new Recipe('Lasagna',
                   'What else you need to say?',
            // tslint:disable-next-line:max-line-length
                   'https://lh3.googleusercontent.com/P9C0wWQFyiVaXgK1hF_nf2nL0EU0twy7GscrL_tYxibI4yC05ajW1dEgBU1M1BmCLVdDg9kix4E_q7A28gaOc_7iZf26HZ1SMVjOaCo=w600-l68',
                   [
                       new Ingerdient('Buns', 2),
                       new Ingerdient('Meat', 1)
                   ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}

import { Ingerdient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientChanged = new EventEmitter<Ingerdient[]>();
    private ingredients: Ingerdient[] = [
        new Ingerdient('Apple', 1),
        new Ingerdient('Tomato', 2)
      ];

      getIngredients() {
          return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingerdient) {
          this.ingredients.push(ingredient);
          this.ingredientChanged.emit(this.ingredients.slice());
      }
}

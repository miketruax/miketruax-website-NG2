import {Injectable} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Recipe}  from '../models/recipe.model'
import * as fromActions from './actions'
import * as fromReducers from './reducers'
import * as fromSelectors from './selectors'

@Injectable({providedIn: 'root'})

export class RootStoreFacade{
  recipes$ = this.store.pipe(select(fromSelectors.getRecipes));
  category$ = this.store.pipe(select(fromSelectors.getCategory));
  activeRecipe$ = this.store.pipe(select(fromSelectors.getActiveRecipe));
  constructor(private store: Store<fromReducers.RootState>){
  }

  selectCategory(category: number){
    this.store.dispatch(new fromActions.SelectCategory(category))
  }

  selectActiveRecipe(recipe: Recipe){
    this.store.dispatch(new fromActions.SelectActiveRecipe(recipe))
  }

  addRecipes(recipes: Recipe[]){
    this.store.dispatch(new fromActions.AddRecipes(recipes))
  }

  createRecipes(recipe: Recipe){
    this.store.dispatch(new fromActions.CreateRecipe(recipe))
  }

  updateRecipe(recipe: Recipe){
      this.store.dispatch(new fromActions.UpdateRecipe(recipe))
  }


  deleteRecipe(id: number){
    this.store.dispatch(new fromActions.DeleteRecipe(id))
  }
  
}
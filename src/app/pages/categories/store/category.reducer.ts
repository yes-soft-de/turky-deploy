import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Category } from '../model/category.model';
import * as CategoryActions from './category.actions';

export const categoriesFeatureKey = 'categories';

export interface CategoryState extends EntityState<Category> {
  // additional entities state properties
  Data: Category[];
  category: Category;
  error: string;
}

export const adapter: EntityAdapter<Category> = createEntityAdapter<Category>();

export const initialState: CategoryState = adapter.getInitialState({
  // additional entity state properties
  Data: undefined,
  category: undefined,
  error: undefined
});


export const reducer = createReducer(
  initialState,
  on(CategoryActions.loadCategoriesSuccess,
    (state, action) => adapter.setAll(action.Data, state)
  ),
  on(CategoryActions.loadCategoriesFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(CategoryActions.loadCategorySuccess,
    (state, action) => {
      return {
        ...state,
        category: action.Data
      };
    }
  ),
  on(CategoryActions.loadCategoryFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(CategoryActions.addCategory,
    (state, action) => adapter.addOne(action.category, state)
  ),
  on(CategoryActions.addCategoryFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(CategoryActions.deleteCategorySuccess,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(CategoryActions.deleteCategoryFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
  on(CategoryActions.updateCategorySuccess,
    (state, action) => adapter.updateOne(action.category, state)
  ),
  on(CategoryActions.updateCategoryFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error
      };
    }
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Category } from '../model/category.model';

export const loadCategories = createAction(
  '[Category/API] Load Categories'
);

export const loadCategoriesSuccess = createAction(
  '[Category/API] Load Categories Success', 
  props<{ Data: Category[] }>()
);

export const loadCategoriesFailure = createAction(
  '[Category/API] Load Categories Failure', 
  props<{ error: string }>()
);

export const loadCategory = createAction(
  '[Category/API] Load Category',
  props<{ id: string }>()
);

export const loadCategorySuccess = createAction(
  '[Category/API] Load Category Success', 
  props<{ Data: Category }>()
);

export const loadCategoryFailure = createAction(
  '[Category/API] Load Category Failure', 
  props<{ error: string }>()
);

export const addCategory = createAction(
  '[Category/API] Add Category',
  props<{ category: Category }>()
);

export const addCategorySuccess = createAction(
  '[Category/API] Add Category Success'
);

export const addCategoryFailure = createAction(
  '[Category/API] Add Category Failure',
  props<{ error: string }>()
);

export const deleteCategory = createAction(
  '[Category/API] Delete Category',
  props<{ id: string }>()
);

export const deleteCategorySuccess = createAction(
  '[Category/API] Delete Category Success',
  props<{ id: string }>()
);

export const deleteCategoryFailure = createAction(
  '[Category/API] Delete Category Failure',
  props<{ error: string }>()
);

export const updateCategory = createAction(
  '[Category/API] Update Category',
  props<{ category: Category }>()
);

export const updateCategorySuccess = createAction(
  '[Category/API] Update Category Success',
  props<{ category: Update<Category> }>()
);

export const updateCategoryFailure = createAction(
  '[Category/API] Update Category Failure',
  props<{ error: string }>()
);

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { categoriesFeatureKey, CategoryState, selectAll } from "./category.reducer";

const categoriesFeatureState = createFeatureSelector(categoriesFeatureKey);

export const getAllCategoriesSelector = createSelector(categoriesFeatureState, selectAll);

export const getCategorySelector = createSelector(categoriesFeatureState, (state: CategoryState) => state.category);

export const categoriesErrorSelector = createSelector(categoriesFeatureState, (state: CategoryState) => state.error);
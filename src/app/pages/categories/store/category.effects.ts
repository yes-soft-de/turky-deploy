import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, switchMap } from 'rxjs/operators';
import { Category } from '../model/category.model';
import { CategoriesService } from '../services/categories.service';
import * as categoryActions from './category.actions';


@Injectable()
export class CategoryEffects {

  constructor(private actions$: Actions,
              private categoryService: CategoriesService,
              private toaster: ToastrService,
              private router: Router) {}

  loadCategories$ = createEffect(() => this.actions$.pipe(
    ofType(categoryActions.loadCategories),
    switchMap(() => this.categoryService.getCategories()
      .pipe(
        map(response => {
          // console.log('effect load all :', response);
          return categoryActions.loadCategoriesSuccess(response);
        }),
        catchError(error => of(categoryActions.loadCategoriesFailure({error})))
      ))
  ));

  
  loadCategory$ = createEffect(() => this.actions$.pipe(
    ofType(categoryActions.loadCategory),
    switchMap(action => this.categoryService.getCategory(action.id)
      .pipe(
        map(response => {
          // console.log('effect load one :', response);
          return categoryActions.loadCategorySuccess(response);
        }),
        catchError(error => of(categoryActions.loadCategoryFailure({error})))
      ))
  ));


  newCategory$ = createEffect(() => this.actions$.pipe(
    ofType(categoryActions.addCategory),
    exhaustMap(action => this.categoryService.newCategory(action.category)
      .pipe(
        map((response: any) => {
          this.toaster.success(response.msg);
          return categoryActions.addCategorySuccess();
        }),
        catchError(error => {
          console.log('add error : ', error);
          return of(categoryActions.addCategoryFailure({error}));
        })
      ))
  ));

  
  updateCategory$ = createEffect(() => this.actions$.pipe(
    ofType(categoryActions.updateCategory),
    exhaustMap(action => this.categoryService.updateCategory(action.category)
      .pipe(
        map((response: any) => {
          this.toaster.success(response.msg);
          const updateCategory: Update<Category> = {
            id: action.category.id,
            changes: {
              ...action.category
            }
          };
          return categoryActions.updateCategorySuccess({category: updateCategory});
        }),
        catchError(error => {
          console.log('update error : ', error);
          return of(categoryActions.updateCategoryFailure({error}));
        })
      ))
  ));


  redirectAfterAddCategory$ = createEffect(() => this.actions$.pipe(
    ofType(...[categoryActions.addCategorySuccess, categoryActions.updateCategorySuccess]),
    map(() => this.router.navigate(['categories']))
  ), { dispatch: false });


  deleteCategory$ = createEffect(() => this.actions$.pipe(
    ofType(categoryActions.deleteCategory),
    exhaustMap(action => this.categoryService.deleteCategory(action.id)
      .pipe(
        map((response: any) => {
          this.toaster.success(response.msg);
          return categoryActions.deleteCategorySuccess({id: action.id});
        }),
        catchError(error => {
          console.log('delete error : ', error);
          return of(categoryActions.deleteCategoryFailure({error}));
        })
      ))
  ));
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { StoreModule } from '@ngrx/store';
import * as fromCategory from './store/category.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CategoryEffects } from './store/category.effects';
import { ThemeModule } from 'src/app/@theme/theme.module';


@NgModule({
  declarations: [AllCategoriesComponent, AddCategoryComponent, UpdateCategoryComponent],
  imports: [
    ThemeModule,
    CategoriesRoutingModule,
    StoreModule.forFeature(fromCategory.categoriesFeatureKey, fromCategory.reducer),
    EffectsModule.forFeature([CategoryEffects])
  ]
})
export class CategoriesModule { }

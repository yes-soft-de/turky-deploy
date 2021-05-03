import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';


const routes: Routes = [
  { path: '', component: AllCategoriesComponent },
  { path: 'add', component: AddCategoryComponent },
  { path: ':id', component: UpdateCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }

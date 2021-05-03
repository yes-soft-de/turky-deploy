import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Category } from '../../model/category.model';
import * as categoryActions from '../../store/category.actions';
import { CategoryState } from '../../store/category.reducer';
import { categoriesErrorSelector, getAllCategoriesSelector } from '../../store/category.selector';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.scss']
})
export class AllCategoriesComponent implements OnInit {
  categories: Category[];
  categoriesList: Category[] = [];
  error$: Observable<string>;
  isDeleted = false;
  config: any;                                          // Config Variable For Pagination Configuration
  name: string;

  constructor(private store: Store<CategoryState>) { }

  ngOnInit(): void {
    this.store.dispatch(categoryActions.loadCategories());
    this.getCategories();
    
    this.store.select(categoriesErrorSelector).subscribe(
      error => console.log('error', error)
    );
  }

  getCategories() {
    this.store.select(getAllCategoriesSelector).subscribe(
      data => {
        if (data) {
          this.categories = data;
          this.categoriesList = data;

          this.config = {
            itemsPerPage: 5,
            currentPage: 1,
            totalItems: this.categoriesList.length
          };
        }
      }
    );
  }

  // Fetch The Page Number On Page Change
  pageChanged(event) {
    this.config.currentPage = event;
  }

  // Delete The Category
  delete(categoryId: string) {
    if (confirm('Are You Sure You Want To Delete This Category')) {
      this.store.dispatch(categoryActions.deleteCategory({id: categoryId}));
    }
  }


  applyFilter() {
    // if the search input value is empty
    if (!this.name) {
      this.categoriesList = [...this.categories];
    } else {
      this.categoriesList = [];
      this.categoriesList = this.categories.filter(res => {
        if (res.name) {
          const name = res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (name) {
            // display the Name Column
            return name;
          }
        }
        if (res.description) {
          const description = res.description.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
          if (description) {
            // display the Name Column
            return description;
          }
        }
      });
    }
  }

}

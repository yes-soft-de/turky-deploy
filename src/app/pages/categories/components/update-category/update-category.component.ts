import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CategoryState } from '../../store/category.reducer';
import * as categoryActions from '../../store/category.actions';
import { ActivatedRoute } from '@angular/router';
import { getCategorySelector } from '../../store/category.selector';
import { Category } from '../../model/category.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  categoryData: Category;
  addCategoryForm: FormGroup;

  constructor(private store: Store<CategoryState>,
              private activatedRouter: ActivatedRoute,
              private toaster: ToastrService) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params => {      
      this.store.dispatch(categoryActions.loadCategory({id: params.get('id')}));
    });
    this.addCategoryForm = new FormGroup({
      lang: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
    this.getCategory();
  }

  getCategory() {
    this.store.select(getCategorySelector).subscribe(
      data => {
        if (data) {
          this.fillForm(data);
        }
      }
    );
  }

  fillForm(data: Category) {
    this.addCategoryForm = new FormGroup({
      id: new FormControl(data.id),
      lang: new FormControl(data.lang, Validators.required),
      name: new FormControl(data.name, Validators.required),
      description: new FormControl(data.description),
    });
  }

  onSubmit() {
    if (!this.addCategoryForm.valid) {
      this.toaster.error('Form not valid, please try again');
      return;
    } else {
      const formObject = this.addCategoryForm.getRawValue();
      console.log(formObject);
      this.store.dispatch(categoryActions.updateCategory({category: formObject}));
    }
  }

}

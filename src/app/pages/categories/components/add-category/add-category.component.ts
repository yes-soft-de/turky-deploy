import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Category } from '../../model/category.model';
import * as categoryActions from '../../store/category.actions';
import { CategoryState } from '../../store/category.reducer';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  addCategoryForm: FormGroup;

  constructor(private store: Store<CategoryState>,
              private toaster: ToastrService) { }

  ngOnInit(): void {
    this.addCategoryForm = new FormGroup({
      lang: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
  }

  onSubmit() {
    if (!this.addCategoryForm.valid) {
      this.toaster.error('Form not valid, please try again');
      return;
    } else {
      const formObject = this.addCategoryForm.getRawValue();
      console.log(formObject);
      this.store.dispatch(categoryActions.addCategory({category: formObject}));
    }
  }

}

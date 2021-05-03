import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminConfig } from '../../AdminConfig';
import { CategoriesResponse } from '../model/categories-response';
import { CategoryResponse } from '../model/category-response';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<CategoriesResponse> {
    return this.httpClient.get<CategoriesResponse>(AdminConfig.categoriesAPI);
  }
  
  getCategory(categoryId: string): Observable<CategoryResponse> {
    return this.httpClient.get<CategoryResponse>(`${AdminConfig.categoryAPI}/${categoryId}`);
  }
 
  newCategory(data): Observable<CategoryResponse> {
    return this.httpClient.post<CategoryResponse>(AdminConfig.categoryAPI, JSON.stringify(data));
  }
  
  updateCategory(data): Observable<any> {
    return this.httpClient.put<any>(AdminConfig.categoryAPI, JSON.stringify(data));
  }

  deleteCategory(categoryId: string): Observable<any> {
    return this.httpClient.delete<any>(`${AdminConfig.categoryAPI}/${categoryId}`);
  }
}
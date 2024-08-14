import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Điều chỉnh đường dẫn theo cấu trúc dự án của bạn

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(private http: HttpClient) { }
  getCategories() {
    return this.http.get('https://665aef83003609eda45f4d1a.mockapi.io/categories');
  }

}
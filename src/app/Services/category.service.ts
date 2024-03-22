import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  httpClient: HttpClient = inject(HttpClient)
  //get
  getCategories() {
    return this.httpClient.get('http://baomoi.test/categories');
  }
  getCategory(slug: string) {
    return this.httpClient.get('http://baomoi.test/category/'+slug);
  }
}

import {Component, inject, OnInit} from '@angular/core';
import {CategoryService} from "../../Services/category.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  categoryService: CategoryService = inject(CategoryService);

  categories: Observable<any>;
  constructor() {
    this.categories = this.categoryService.getCategories();
  }

  receiver(event){
      console.log(event)
  }

  ngOnInit() {

  }
}

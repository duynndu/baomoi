import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "../../Services/post.service";
import {Observable} from "rxjs";
import {CategoryService} from "../../Services/category.service";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit,OnDestroy{
    popularPosts: Observable<any>;
    trendingPosts: Observable<any>;
    posts: Observable<any>;
    categories: Observable<any>;
    constructor(
        private postService: PostService,
        private categoryService: CategoryService
    ) { }

    ngOnInit() {
        this.trendingPosts = this.postService.getTrendingPost(10);
        this.popularPosts = this.postService.getPopularPosts(10);
        this.posts = this.postService.getPosts(10);


        this.categories = this.categoryService.getCategories();
    }
    ngOnDestroy() {
    }
}

import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {PostService} from "../../Services/post.service";

@Component({
  selector: 'app-trending-post',
  templateUrl: './trending-post.component.html',
  styleUrl: './trending-post.component.css'
})
export class TrendingPostComponent implements OnInit{
  trendingPosts: Observable<any>;
  constructor(
      private postService: PostService
  ) {
    this.trendingPosts = this.postService.getPosts(6);
  }

  ngOnInit() {

  }

}

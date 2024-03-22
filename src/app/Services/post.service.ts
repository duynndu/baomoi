import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  httpClient: HttpClient = inject(HttpClient)

  // filter
  getPostByKeyword(keyword: string) {
    return this.httpClient.get('http://baomoi.test/getPostByKeyword/'+keyword);
  }

  getPostByCategory(keyword: string) {
    return this.httpClient.get('http://baomoi.test/getPostByCategory/'+keyword);
  }

  //get
  getPosts(limit: any = '') {
    return this.httpClient.get('http://baomoi.test/posts/'+limit);
  }

  getPost(slug: string) {
    return this.httpClient.get('http://baomoi.test/post/'+slug);
  }
  getTrendingPost(limit: any = ''){
    return this.httpClient.get('http://baomoi.test/trendingPosts/'+limit)
  }
    getPopularPosts(limit: any = ''){
    return this.httpClient.get('http://baomoi.test/popularPosts/'+limit)
  }
}

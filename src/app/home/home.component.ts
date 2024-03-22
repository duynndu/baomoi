import {Component, OnInit} from '@angular/core';
import {PostService} from "../Services/post.service";
import {Observable} from "rxjs";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    _6LatestPosts$: Observable<any>;
    newPost: any

    constructor(private postService: PostService) {
        this._6LatestPosts$ = this.postService.getPosts(6)
    }


    ngOnInit() {
        this._6LatestPosts$.subscribe(posts=>{
            this.newPost = posts[0];
        })
    }

}

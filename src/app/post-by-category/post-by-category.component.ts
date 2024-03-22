import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../Services/post.service";

@Component({
    selector: 'app-post-by-category',
    templateUrl: './post-by-category.component.html',
    styleUrl: './post-by-category.component.scss'
})
export class PostByCategoryComponent implements OnInit {
    categoryName: string
    postResult: any;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService
    ) {
        this.route.params.subscribe(params => {
            this.postService.getPostByCategory(params['slug'])
                .subscribe(posts => {
                    this.postResult = posts
                });
            this.categoryName = params['slug']

        });
    }

    ngOnInit() {

    }
}

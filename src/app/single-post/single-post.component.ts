import {Component, EventEmitter, inject, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../Services/post.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-single-post',
    templateUrl: './single-post.component.html',
    styleUrl: './single-post.component.css'
})
export class SinglePostComponent implements OnInit, OnDestroy {
    post: any;
    id: number;
    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
    ) {
        this.route.params
            .pipe(takeUntilDestroyed())
            .subscribe(params=>{
            this.postService.getPost(params['slug']).subscribe(post=>{
                this.post = post;
                this.id = post['id'];
            });
        });
    }

    ngOnInit() {

    }

    ngOnDestroy() {

    }
}

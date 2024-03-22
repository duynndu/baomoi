import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "../Services/post.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrl: './search-result.component.scss'
})
export class SearchResultComponent implements OnInit,OnDestroy{
    postResult: Observable<any>;
    constructor(
        private postService: PostService,
        private route: ActivatedRoute
    ) {
    }
    ngOnInit() {
        this.route.params.subscribe((params)=>{
            this.postResult = this.postService.getPostByKeyword(params['keyword']);
        })
    }
    ngOnDestroy() {

    }
}

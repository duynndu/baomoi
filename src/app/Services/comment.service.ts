import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CommentService {
    constructor(
        private httpClient: HttpClient,
    ) { }
    getCommentOfThePost(slug: string): Observable<any> {
        return this.httpClient.get('http://baomoi.test/getCommentsOfThePost/' + slug);
    }

    postComment(data: object): Observable<any> {
        return this.httpClient.post('http://baomoi.test/postComment', data)
    }
}

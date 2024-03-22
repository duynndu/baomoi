import {Component, Input, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {catchError, retry, throwError} from "rxjs";
import {CommentService} from "../../Services/comment.service";
import {WebsocketService} from "../../Services/websocket.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrl: './comment.component.scss',
})
export class CommentComponent implements OnInit, OnDestroy {
    private _id: any;

    @Input()
    set id(value: any) {
        this._id = value;
        this.ws.send({
            article_id: this.id,
            action: 'subscribe'
        });
    }

    get id(): any {
        return this._id;
    }

    comments: any;
    formGroup: FormGroup;
    emailValue: string;
    emailHidden: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private commentService: CommentService,
        private ws: WebsocketService,
        private fb: FormBuilder
    ) {
        this.ws.webSocket$.pipe(
            catchError(err => throwError(err)),
            retry({delay: 5000}),
            takeUntilDestroyed()
        ).subscribe((data: any) => {
            console.log('onMessage', data);
            if (data?.email) {
                this.comments.unshift(data);
            }
        });

        if (localStorage.getItem('email')) {
            this.emailValue = localStorage.getItem('email');
            this.emailHidden = true;
        } else {
            this.emailValue = '';
            this.emailHidden = false;
        }
    }

    onSubmit() {
        if (this.formGroup.valid) {
            this.ws.send({
                article_id: this.id,
                email: this.emailValue,
                message: this.message.value,
                action: 'postComment'
            })
            localStorage.setItem('email', this.email.value);
            this.emailHidden = true;
            this.formGroup.reset({email: this.emailValue})
        }
    }

    ngOnInit() {
        this.commentService.getCommentOfThePost(this.id)
            .subscribe((comments) => {
                this.comments = comments
                console.log(comments)
            });

        this.formGroup = this.fb.group({
            email: [this.emailValue, [Validators.required, Validators.email]],
            message: ['', Validators.required]
        })

    }

    ngOnDestroy() {
    }

    get email() {
        return this.formGroup.get('email')
    }

    get message() {
        return this.formGroup.get('message');
    }
}

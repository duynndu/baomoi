import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {SinglePostComponent} from "./single-post/single-post.component";
import {SearchResultComponent} from "./search-result/search-result.component";
import {PostByCategoryComponent} from "./post-by-category/post-by-category.component";
import {authGuard} from "./guards/auth.guard";
import {NotfoundComponent} from "./notfound/notfound.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'singlePost/:slug', component: SinglePostComponent},
            {path: 'search/:keyword',component: SearchResultComponent},
            {path: 'category/:slug',component: PostByCategoryComponent},

            {path: 'admin',
                children: [
                    {path: 'login',component: PostByCategoryComponent},
                    {path: 'category',component: PostByCategoryComponent, canActivate: [authGuard]},
                ],
            },
            {path: '**',component: NotfoundComponent},
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

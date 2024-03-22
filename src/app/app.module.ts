import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {TimeAgoPipe} from "./Pipes/time-ago.pipe";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AvatarModule} from "primeng/avatar";
import {AvatarGroupModule} from "primeng/avatargroup";
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {HeaderComponent} from "./components/header/header.component";
import {HomeComponent} from "./home/home.component";
import {SinglePostComponent} from "./single-post/single-post.component";
import {TrendingPostComponent} from "./components/trending-post/trending-post.component";
import {StringToColorPipe} from "./Pipes/string-to-color.pipe";
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FooterComponent} from './components/footer/footer.component';
import {ChunkArrayPipe} from "./Pipes/chunk-array.pipe";
import {CommentComponent} from './components/comment/comment.component';
import {SearchComponent} from './components/search/search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchResultComponent } from './search-result/search-result.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostByCategoryComponent } from './post-by-category/post-by-category.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {JWT_OPTIONS, JwtHelperService} from "@auth0/angular-jwt";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        SinglePostComponent,
        TrendingPostComponent,
        StringToColorPipe,
        TimeAgoPipe,
        ChunkArrayPipe,
        CommentComponent,
        SearchComponent,
        SearchResultComponent,
        SidebarComponent,
        PostByCategoryComponent,
        NotfoundComponent,
    ],
    imports: [
        RouterModule,
        BrowserModule,
        BrowserAnimationsModule,
        AvatarModule,
        AvatarGroupModule,
        AppRoutingModule,
        HttpClientModule,
        AutoCompleteModule,
        ReactiveFormsModule,
        CommonModule,
        FormsModule
    ],
    providers: [
        { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
        JwtHelperService
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}

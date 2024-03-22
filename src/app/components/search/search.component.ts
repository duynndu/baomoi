import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AutoCompleteCompleteEvent} from "primeng/autocomplete";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
    activeSearchBar: boolean = false;
    keywords: any[] | undefined;
    formGroup: FormGroup | undefined;
    filteredKeywords: any[] | undefined;
    constructor(
        private router: Router,
    ) {
    }
    ngOnInit() {
        this.keywords = ['bóng đá','sức khoẻ','làm đẹp','giải trí','khoa học','du lịch'];
        this.formGroup = new FormGroup({
            selectedKeyword: new FormControl<object | null>(null)
        });
    }
    filterKeyword(event: AutoCompleteCompleteEvent) {
        let filtered: any[] = [];
        let query = event.query;

        for (let i = 0; i < (this.keywords as any[]).length; i++) {
            let keyword = (this.keywords as any[])[i];
            if (keyword.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(keyword);
            }
        }

        this.filteredKeywords = filtered;
    }

    onSubmit(){
        this.router.navigate(['/search',this.formGroup.value.selectedKeyword]);
    }

}

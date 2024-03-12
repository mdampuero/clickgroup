import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/api/categories.service';
declare var $: any;
@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
    public data: any = {};
    constructor(
        public cateogoriesService: CategoriesService
    ) {


    }
    ngOnInit(): void {
        this.getResult();
    }
    getResult() {
        this.cateogoriesService.home().subscribe(
            (data: any) => {
                this.data = data;
            },
            (error) => console.log(""),
            () => console.log("")
        );
    }
    
}

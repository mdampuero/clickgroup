import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/api/categories.service';
import { EventService } from 'src/app/services/api/events.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent {
    public items: any = {};
    public filterCategory: string = '';
    public filters: any = {
        categories:[]
    };
    constructor(
        public eventService: EventService,
        public categoriesService: CategoriesService
    ) {

    }
    ngOnInit(): void {
        this.eventService.getAll().subscribe(
            (data: any) => {
                this.items = data;
            }
        );
        this.categoriesService.get().subscribe(
            (data: any) => {
                this.filters.categories = data.data;
            }
        );
    }
}

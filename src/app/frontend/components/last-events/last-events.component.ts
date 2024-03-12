import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { EventService } from 'src/app/services/api/events.service';
declare var $: any;

@Component({
    selector: 'app-last-events',
    templateUrl: './last-events.component.html',
    styleUrls: ['./last-events.component.css']
})

export class LastEventsComponent {
    public data: any = {};
    constructor(
        public eventService: EventService
    ) {

    }
    ngOnInit(): void {
        this.getResult();
    }
    getResult() {
        this.eventService.last().subscribe(
            (data: any) => {
                this.data = data;
            }
        );
    }
}

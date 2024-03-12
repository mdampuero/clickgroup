import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date-from-to',
  templateUrl: './date-from-to.component.html',
  styleUrls: ['./date-from-to.component.css']
})
export class DateFromToComponent {
  @Input() item = {
    start_date: "",
    start_time: "",
    end_date: "",
    end_time: "",
  };
}

import { Component, Input } from '@angular/core';
import { FavoriteService } from 'src/app/services/favortites.service';

@Component({
  selector: 'app-single-card-event',
  templateUrl: './single-card-event.component.html',
  styleUrls: ['./single-card-event.component.css']
})
export class SingleCardEventComponent {
  @Input() item: any;
  constructor(
		public favoriteService: FavoriteService
	) {
	}
  ngOnInit(): void {
    this.item.id = (this.item.id)?this.item.id:this.item._id
  }
}

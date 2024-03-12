import { Component } from '@angular/core';
import { EventService } from 'src/app/services/api/events.service';
import { FavoriteService } from 'src/app/services/favortites.service';

@Component({
	selector: 'app-favorites',
	templateUrl: './favorites.component.html',
	styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
	public items: any = {};
    constructor(
        public favoriteService: FavoriteService,
        public eventService: EventService
    ) {

    }
    ngOnInit(): void {
        this.getResult();
    }

    emptyFavorites(){
        this.favoriteService.removeAllFavorites();
        this.getResult();
    }

    getResult() {
        this.items = this.favoriteService.favorites;
    }
}

import { Injectable } from '@angular/core';
import { } from 'angular-webstorage-service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class FavoriteService {
	favorites: { id: string, name: string }[] = [];

	constructor(private toastr: ToastrService) {
		this.getFavorites();
	}

	addToFavorites(item: { id: string, name: string }) {
		const existingFavorite = this.favorites.find(fav => fav.id === item.id);
		if (!existingFavorite) {
			this.favorites.push(item);
			this.saveFavorites();
			this.toastr.success('Añadido a favoritos');
		}
	}

	removeFavorite(id: string) {
		const index = this.favorites.findIndex(fav => fav.id === id);
		if (index !== -1) {
			this.favorites.splice(index, 1);
			this.saveFavorites();
		}
	}

	removeAllFavorites() {
		this.favorites = [];
		this.saveFavorites();
	}

	isInFavorites(item: { id: string, name: string }): boolean {
		return this.favorites.some(fav => fav.id === item.id);
	}

	saveFavorites() {
		localStorage.setItem('favorites', JSON.stringify(this.favorites));
	}

	getFavorites() {
		const favoritesString = localStorage.getItem('favorites');
		if (favoritesString) {
			this.favorites = JSON.parse(favoritesString);
		}
		return this.favorites;
	}
}
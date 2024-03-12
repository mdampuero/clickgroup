import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription, lastValueFrom } from 'rxjs';
import { EventService } from 'src/app/services/api/events.service';
import { FavoriteService } from 'src/app/services/favortites.service';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})
export class DetailComponent {
	public id: any;
	public currentId: any;
	public data: any;
	private routeSubscription: Subscription | undefined;
	constructor(
		// private elRef: ElementRef,
		private activatedRoute: ActivatedRoute,
		public eventService: EventService,
		private toastr: ToastrService,
		public favoriteService: FavoriteService
	) {
	}

	ngOnInit(): void {
		this.currentId = this.activatedRoute.snapshot.paramMap.get('id');
		this.routeSubscription = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
			this.id = params.get('id');
			if(this.id != this.currentId)
				location.reload()
			this.getData();
		})
	}
	ngOnDestroy() {
		if (this.routeSubscription) {
			this.routeSubscription.unsubscribe();
		}
	}
	
	addFavorite(){
		this.toastr.success('Evento agregado', 'Favoritos');
	}

	async getData() {
		/** MOVE SCROLL */
		// this.elRef.nativeElement.ownerDocument.defaultView.scrollTo({
		// 	top: 0,
		// 	behavior: 'smooth'
		// });
		this.data = await lastValueFrom(this.eventService.getOne(this.id));
	}
}

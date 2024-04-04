import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
		public favoriteService: FavoriteService,
		private spinner: NgxSpinnerService
	) {
	}

	ngOnInit(): void {
		this.currentId = this.activatedRoute.snapshot.paramMap.get('id');
		this.routeSubscription = this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
			this.id = params.get('id');
			if (this.id != this.currentId)
				location.reload()
			this.getData();
		})
	}
	mostrarLoading(): void {
		console.log(this.spinner);
		this.spinner.show('miDiv'); // Mostrar el loading en el div con id "miDiv"
		// Realiza tu lógica aquí, por ejemplo, una llamada HTTP
		setTimeout(() => {
		  this.spinner.hide('miDiv'); // Ocultar el loading en el div con id "miDiv"
		}, 3000); // Simulación de una tarea que toma 3 segundos
	  }
	ngOnDestroy() {
		if (this.routeSubscription) {
			this.routeSubscription.unsubscribe();
		}
	}

	addFavorite() {
		this.toastr.success('Evento agregado', 'Favoritos');
	}

	async getData() {
		/** MOVE SCROLL */
		// this.elRef.nativeElement.ownerDocument.defaultView.scrollTo({
		// 	top: 0,
		// 	behavior: 'smooth'
		// });
		this.spinner.show();
		this.data = await lastValueFrom(this.eventService.getOne(this.id));
		this.spinner.hide();
	}
}

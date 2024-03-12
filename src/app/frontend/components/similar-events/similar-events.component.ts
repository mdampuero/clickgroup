import { Component, Input, SimpleChanges } from '@angular/core';
import { EventService } from 'src/app/services/api/events.service';

@Component({
	selector: 'app-similar-events',
	templateUrl: './similar-events.component.html',
	styleUrls: ['./similar-events.component.css']
})
export class SimilarEventsComponent {
	@Input() id: any;
	public data: any = {};
	constructor(
		public eventService: EventService
	) {

	}
	ngOnChanges(changes: SimpleChanges) {
		// this.id = changes['id'].currentValue;
		// this.getResult();
		// Aquí puedes detectar y reaccionar a los cambios en los @Input()
		// if (changes.miInput) {
		//   const nuevoValor = changes.miInput.currentValue;
		//   const valorAnterior = changes.miInput.previousValue;
		//   console.log('Valor actual del Input:', nuevoValor);
		//   console.log('Valor anterior del Input:', valorAnterior);

		//   // Puedes realizar acciones adicionales aquí, como suscribirte a cambios, etc.
		// }
	}
	ngOnInit(): void {
		this.getResult();
	}
	getResult() {
		this.eventService.similar(this.id).subscribe(
			(data: any) => {
				this.data = data;
			}
		);
	}
}

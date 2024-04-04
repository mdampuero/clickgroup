import { Component, Input } from '@angular/core';
@Component({
	selector: 'app-cards-slider',
	templateUrl: './cards-slider.component.html',
	styleUrls: ['./cards-slider.component.css']
})
export class CardsSliderComponent {
	@Input() items: any;
	@Input() more: boolean = false;
	@Input() sliderClassSelector: string = '';
}

import { Component, Input, SimpleChanges } from '@angular/core';
declare var $: any;
@Component({
	selector: 'app-cards-slider',
	templateUrl: './cards-slider.component.html',
	styleUrls: ['./cards-slider.component.css']
})
export class CardsSliderComponent {
	@Input() items: any;
	@Input() sliderClassSelector: string = '';
	ready: Boolean = false;

	ngOnChanges(changes: SimpleChanges) {
		setTimeout(() => {
			console.log(this.sliderClassSelector);
			var movieSlider = $('.' + this.sliderClassSelector);
		}, 700)
		//this.initSlick();
		// Aquí puedes detectar y reaccionar a los cambios en los @Input()
		// if (changes.miInput) {
		//   const nuevoValor = changes.miInput.currentValue;
		//   const valorAnterior = changes.miInput.previousValue;
		//   console.log('Valor actual del Input:', nuevoValor);
		//   console.log('Valor anterior del Input:', valorAnterior);

		//   // Puedes realizar acciones adicionales aquí, como suscribirte a cambios, etc.
		// }
	}
	ngOnInit() {
		setTimeout(() => {
			this.initSlick();
			this.ready = true;
		}, 700)
	}

	initSlick() {
		var movieSlider = $('.' + this.sliderClassSelector);
		movieSlider.slick({
			dots: false,
			infinite: true,
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: false,
			centerMode: false,
			prevArrow: '<button type="button" class="slick-prev"><i class="zmdi zmdi-chevron-left"></i> </button>',
			nextArrow: '<button type="button" class="slick-next"><i class="zmdi zmdi-chevron-right"></i></button>',
			responsive: [
				{
					breakpoint: 1365,
					settings: {
						slidesToShow: 5,
					}
				},
				{
					breakpoint: 1199,
					settings: {
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 479,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}
}

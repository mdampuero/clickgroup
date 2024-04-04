import { Component, ElementRef, ViewChild } from '@angular/core';
import { EventService } from 'src/app/services/api/events.service';
declare var $: any;
@Component({
	selector: 'app-slider-home',
	templateUrl: './slider-home.component.html',
	styleUrls: ['./slider-home.component.css']
})
export class SliderHomeComponent {
	public data: any = {};
	public containerLoading: boolean = true;
	@ViewChild('slick') slick: ElementRef | any;
	constructor(
		public eventService: EventService
	) {

	}
	ngOnInit(): void {
		this.getResult();
	}
	getResult() {
		this.eventService.home().subscribe(
			(data: any) => {
				this.data = data;
				for(let i=0; i<this.data.data.length; i++){
					
					this.data.data[i].pictureBackground = (this.data.data[i].pictureBackground)?this.data.data[i].pictureBackground:'../../../../assets/images/product/default_full.jpg'
				}
				this.containerLoading = false; 
				this.initSlick();
			}
		);
	}
	initSlick() {
		$(document).ready(() => {
			var heroSlider2 = $('.hero-slider-four , .series-slider-active ');
			heroSlider2.slick({
				arrows: true,
				autoplay: false,
				autoplaySpeed: 5000,
				dots: false,
				pauseOnFocus: false,
				pauseOnHover: false,
				fade: true,
				infinite: true,
				slidesToShow: 1,
				prevArrow: '<button type="button" class="slick-prev"><i class="zmdi zmdi-chevron-left"></i></button>',
				nextArrow: '<button type="button" class="slick-next"><i class="zmdi zmdi-chevron-right"></i></button>',
				responsive: [
					{
						breakpoint: 767,
						settings: {
							dots: false,
						}
					}
				]
			});
		});
	}
}

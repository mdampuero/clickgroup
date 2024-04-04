import { Component, Input, SimpleChanges } from '@angular/core';
import { EventService } from 'src/app/services/api/events.service';
declare var $: any;

@Component({
	selector: 'app-similar-events',
	templateUrl: './similar-events.component.html',
	styleUrls: ['./similar-events.component.css']
})
export class SimilarEventsComponent {
	@Input() id: any;
	@Input() public category: any;
	public data: any = {};
	public containerLoading: boolean = true;
	constructor(
		public eventService: EventService
	) {

	}
	
	ngOnInit(): void {
		this.getResult();
	}

	getResult() {
		this.eventService.similar(this.id).subscribe(
			(data: any) => {
				this.data = data;
				this.initSlick();
			}
		);
	}

	initSlick() {
		setTimeout(() => {
			var similarEvents = $('.similarEvents');
			similarEvents.slick({
				dots: false,
				infinite: false,
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
            this.containerLoading = false;
		}, 100)
	}
}

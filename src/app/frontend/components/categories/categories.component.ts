import { Component } from '@angular/core';
import { CategoriesService } from 'src/app/services/api/categories.service';
declare var $: any;
@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
    public data: any = {};
    public containerLoading: boolean = true;
    constructor(
        public cateogoriesService: CategoriesService
    ) { }

    ngOnInit(): void {
        this.getResult();
    }
    getResult() {
        this.cateogoriesService.home().subscribe(
            (data: any) => {
                this.data = data;
                setTimeout(() => {
                    var categoriesSliders = $('.sliderCategories');
                    categoriesSliders.slick({
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
                }, 50)
            }
        );
    }


}

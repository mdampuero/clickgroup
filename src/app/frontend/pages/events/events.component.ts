import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from 'src/app/services/api/categories.service';
import { EventService } from 'src/app/services/api/events.service';
import mapboxgl from 'mapbox-gl';
import { environment } from "src/environments/environment";


@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent {
    public items: any = {};
    public filterCategory: String = '';
    public containerLoading: boolean = true;
    public filters: any = {
        categories: []
    };
    public view: string = 'list';
    public map: any;

    constructor(
        private activatedRoute: ActivatedRoute,
        public eventService: EventService,
        public categoriesService: CategoriesService
    ) {
        this.activatedRoute.queryParams.subscribe(params => {
            // Acceder a los parámetros de consulta
            const category = params['category'];
            if (category) {
                this.filterCategory = category;
            }
        });
    }
    ngOnInit(): void {
        this.eventService.getAll().subscribe(
            (data: any) => {
                this.items = data;

                this.containerLoading = false;
            }
        );
        this.categoriesService.get().subscribe(
            (data: any) => {
                this.filters.categories = data.data;
            }
        );
    }

    onSelectChange(event: any) {
        if(this.view == "map"){
            this.loadMapBox()
        }
    }

    loadMapBox() {
        setTimeout(() => {
            mapboxgl.accessToken = environment.mapBox.apiKey;
            this.map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                fadeDuration: 0
            });

            const bounds = new mapboxgl.LngLatBounds();
            let events: any[] = [];
            if (!this.filterCategory) {
                this.items.data.forEach((marker: any) => {
                    if (marker.lat && marker.lng) {
                        events.push(marker);
                    }
                })
            } else {
                this.items.data.forEach((marker: any) => {
                    if (this.filterCategory == marker.category._id && marker.lat && marker.lng) {
                        events.push(marker);
                    }
                });
            }
            if (events.length > 1) {
                events.forEach((marker: { lng: any; lat: any; }) => {
                    if (marker.lat && marker.lng) {
                        bounds.extend([marker.lng, marker.lat]);
                    }
                });
                this.map.fitBounds(bounds, {
                    padding: { top: 150, bottom: 150, left: 150, right: 150 }, animate: false
                });
            } else if (events.length == 1) {
                this.map.setZoom(environment.mapBox.defaultZoom);
                this.map.setCenter([events[0].lng, events[0].lat])
            }
            events.forEach((marker: { lat: any; lng: any; name: any; id: any }) => {
                let mar = new mapboxgl.Marker()
                    .setLngLat([marker.lng, marker.lat])
                    .setPopup(new mapboxgl.Popup().setHTML(`<h5>${marker.name}</h5><p><div class="movie-btn">
                            <a href="/eventos/${marker.id}"  class="btn-style-hm4-2 animated">Ver más</a>
                        </div></p>`))
                    .addTo(this.map);
                if(events.length == 1){
                    mar.togglePopup();
                }
            });
        }, 100)
    }

    changeView(type: string) {
        this.view = type;
        if (type == 'map') {
            this.loadMapBox()
        }
    }
}

import { Component, Input } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from "src/environments/environment";

// import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
@Component({
	selector: 'app-mapbox',
	templateUrl: './mapbox.component.html',
	styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent {
	@Input() inputLat: any;
	@Input() inputLng: any;
	@Input() inputZoom: any;
	@Input() inputTitle: any;

	public lat = 0;
	public lng = 0;
	public zoom = 0;
	public title = 0;

	public map: any;
	public marker: any;

	constructor() {
	}

	ngOnInit(): void {

		this.lat = (this.inputLat) ? (this.inputLat) : environment.mapBox.defaultLat;
		this.lng = (this.inputLng) ? (this.inputLng) : environment.mapBox.defaultLng;
		this.zoom = (this.inputZoom) ? (this.inputZoom) : environment.mapBox.defaultZoom;
		this.title = (this.inputTitle) ? (this.inputTitle) : '';
		// Configurar Mapbox
		mapboxgl.accessToken = environment.mapBox.apiKey;

		// Crear un nuevo mapa
		this.map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [this.lng, this.lat],
			zoom: this.zoom,
			scrollZoom: false
		});

		this.map.addControl(new mapboxgl.NavigationControl());

		this.marker = new mapboxgl.Marker({
			draggable: false
		})
			.setLngLat([this.lng, this.lat])
			.addTo(this.map);

		if (this.title) {
			var popupContent = "<h5>" + this.title + "</h5>";
			var popup = new mapboxgl.Popup({ offset: 25 })
				.setHTML(popupContent);
			// this.marker.setPopup(popup).togglePopup();
			this.marker.setPopup(popup);
		}
	}
}


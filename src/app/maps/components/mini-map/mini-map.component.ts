import { AfterViewInit, Component, ElementRef, input, viewChild } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import mapboxgl from "mapbox-gl"

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-mini-map',
  imports: [],
  templateUrl: './mini-map.component.html',
  styles: `
    div {
      width: 100%;
      height: 260px;
    }
  `
})
export class MiniMapComponent implements AfterViewInit {

  divElement = viewChild<ElementRef>("map");
  lngLat = input.required<{lng: number, lat: number}>()
  zoom = input<number>(14)

    async ngAfterViewInit() {
      if (!this.divElement()?.nativeElement) return;
      const element = this.divElement()!.nativeElement;

      const map = new mapboxgl.Map({
        container: element, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: this.lngLat(), // starting position [lng, lat]
        zoom: this.zoom(),
        interactive: false,
        pitch: 30, // starting zoom
      });

      new mapboxgl.Marker().setLngLat(this.lngLat()).addTo(map);

    }


}

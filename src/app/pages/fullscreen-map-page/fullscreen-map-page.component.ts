import { AfterViewInit, Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment.development';
import { DecimalPipe, JsonPipe } from '@angular/common';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-fullscreen-map-page',
  imports: [DecimalPipe, JsonPipe],
  templateUrl: './fullscreen-map-page.component.html',
  styleUrl: 'fullscreen-map-page.component.css'
})
export class FullscreenMapPageComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>("map");
  map = signal<mapboxgl.Map | null>(null);

  zoom = signal(14);

  coordinates = signal ({
    lng: -74.5,
    lat: 40,
  });

  zoomEffect = effect(() => {
    if (!this.map()) return;
    this.map()?.zoomTo(this.zoom());
  });

  async ngAfterViewInit() {
    if (!this.divElement()?.nativeElement) return;
    const element = this.divElement()!.nativeElement;
    const { lat, lng } = this.coordinates();

    const map = new mapboxgl.Map({
      container: element,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: this.zoom(),
    });

    this.mapListeners(map);
  };

  mapListeners(map: mapboxgl.Map) {
    map.on('zoomend', (event) => {
      const newZoom = event.target.getZoom();
      this.zoom.set(newZoom);
    });

    map.on('moveend', () => {
      const center = map.getCenter();
      this.coordinates.set(center);
    });

    map.on("load", () => {
      console.log("Map loaded");
    });

    map.addControl(new mapboxgl.FullscreenControl());
    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new mapboxgl.ScaleControl());

    // Ejemplo para ocultar controles en fullscreen:
    map.on('fullscreenchange', () => {
      const isFullscreen = document.fullscreenElement !== null || (document as any).webkitFullscreenElement !== null;
      const controls = document.getElementById('controls');
      if (controls) {
        controls.style.display = isFullscreen ? 'none' : '';
      }
    });

    this.map.set(map);
  }
}

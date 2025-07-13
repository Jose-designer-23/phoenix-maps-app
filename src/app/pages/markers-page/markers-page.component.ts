import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl, {LngLatLike} from "mapbox-gl";
import { environment } from '../../../environments/environment.development';
import { v4 as UUIDV4 } from "uuid";
import { JsonPipe } from '@angular/common';

mapboxgl.accessToken = environment.mapboxKey;

interface Marker {
  id: string;
  mapboxMarker: mapboxgl.Marker;
  address: string;
}

@Component({
  selector: 'app-markers-page',
  imports: [JsonPipe],
  templateUrl: './markers-page.component.html',
  styleUrl: 'markers-page.component.css'


})
export class MarkersPageComponent implements AfterViewInit {

    divElement = viewChild<ElementRef>("map");
    map = signal<mapboxgl.Map | null>(null);
    markers = signal <Marker[]>([]);

    async ngAfterViewInit() {
      if (!this.divElement()?.nativeElement) return;
      const element = this.divElement()!.nativeElement;

      const map = new mapboxgl.Map({
        container: element,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-3.705722, 40.419494],
        zoom: 14,
      });

      this.mapListeners(map);
    }

    mapListeners(map: mapboxgl.Map) {
      map.on("click", async (event) => await this.mapClick(event));
      this.map.set(map);
    }

    async getAddressFromCoords(lng: number, lat: number): Promise<string> {
      const accessToken = environment.mapboxKey;
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${accessToken}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data.features[0]?.place_name || 'Dirección no encontrada';
      } catch (e) {
        return 'Dirección no encontrada';
      }
    }

    // Solo abre el popup del marcador seleccionado
    openOnlyThisPopup(marker: mapboxgl.Marker) {
      this.markers().forEach(m => m.mapboxMarker.getPopup()?.remove());
      marker.togglePopup();
    }

    async mapClick(event: mapboxgl.MapMouseEvent){
      if(!this.map()) return;

      const map = this.map()!;
      const coords = event.lngLat;
      const color = '#xxxxxx'.replace(/x/g, (y) =>
        ((Math.random() * 16) | 0).toString(16)
      );

      const address = await this.getAddressFromCoords(coords.lng, coords.lat);

      // Usa HTML para personalizar el color de letra del popup
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<span style="color: #111827; font-weight: bold;">${address}</span>`);

      const mapboxMarker = new mapboxgl.Marker({
        color: color,
      })
      .setLngLat(coords)
      .setPopup(popup)
      .addTo(map);

      // No abrir popup directamente aquí

      // Listener: solo muestra el popup de este marcador, cierra los demás
      mapboxMarker.getElement().addEventListener('click', (e) => {
        // Evita que el click se propague al mapa y cree otro marcador
        e.stopPropagation();
        this.openOnlyThisPopup(mapboxMarker);
      });

      const newMarker: Marker = {
        id: UUIDV4(),
        mapboxMarker: mapboxMarker,
        address: address,
      };

      this.markers.update((markers) => [newMarker, ...markers]);
    }

    flyToMarker(lngLat: LngLatLike, marker: Marker) {
      if (!this.map()) return;
      this.map()?.flyTo({ center: lngLat });
      // Abrir solo el popup correspondiente
      this.openOnlyThisPopup(marker.mapboxMarker);
    }

    deleteMarker(marker: Marker){
      if (!this.map()) return;

      marker.mapboxMarker.remove();
      this.markers.set(this.markers().filter((m) => m.id !== marker.id));
    }

};

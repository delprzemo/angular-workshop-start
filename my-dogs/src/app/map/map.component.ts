import { Component, OnInit } from '@angular/core';

interface Marker {
  lng: number;
  lat: number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit {

  zoom: number;
  markers: Array<Marker>;
  lng = 21.011854;
  lat = 52.231250;

  constructor() {
    this.markers = [
      { lng: 21.011854, lat: 52.230250 },
      { lng: 21.012854, lat: 52.231250 },
      { lng: 21.009854, lat: 52.230250 }
    ];

    this.zoom = 9;
  }

  addMarker() {
    this.markers.push({ lng: this.lng, lat: this.lat });
  }

  zoomIn() {
    this.zoom++;
  }

  zoomOut() {
    this.zoom--;
  }

  ngOnInit() {

  }

}

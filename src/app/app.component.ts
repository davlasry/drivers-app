import { Component, OnInit } from '@angular/core';
import { GoogleMapService } from './services/google-map.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  initialLocation = { location: { lat: 51.678418, lng: 7.809007 }, tasks: [] };

  constructor(private googleMapsService: GoogleMapService) {}

  ngOnInit(): void {
    this.googleMapsService.setDriverOnMap(this.initialLocation);
  }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GoogleMapService } from 'src/app/services/google-map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title = 'My first AGM project';
  currentLocation: any;

  constructor(private googleMapsService: GoogleMapService) {}

  ngOnInit() {
    this.currentLocation = this.googleMapsService.currentLocation$;
    // this.currentLocation.subscribe(currentLocation => {
    //   console.log('currentLocation:', currentLocation);
    // });
  }
}

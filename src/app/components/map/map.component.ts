import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GoogleMapService } from 'src/app/services/google-map.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title = 'My first AGM project';
  currentLocation: Observable<any>;
  currentTasks: Observable<any[]>;

  constructor(private googleMapsService: GoogleMapService) {}

  ngOnInit() {
    this.currentLocation = this.googleMapsService.currentLocation$;
    this.currentTasks = this.googleMapsService.currentTasks$;

    this.currentTasks.subscribe(currentTasks => {
      console.log('currentTasks:', currentTasks);
    });
    // this.currentLocation.subscribe(currentLocation => {
    //   console.log('currentLocation:', currentLocation);
    // });
  }
}

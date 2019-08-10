import { Component, OnInit } from '@angular/core';
import { GoogleMapService } from 'src/app/services/google-map.service';
import { Observable } from 'rxjs';
import { ILocation } from 'src/app/interfaces/location';
import { ITask } from 'src/app/interfaces/task';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  currentLocation: Observable<ILocation>;
  currentTasks: Observable<ITask[]>;

  constructor(private googleMapsService: GoogleMapService) {}

  ngOnInit(): void {
    // Set current driver's location
    this.currentLocation = this.googleMapsService.currentLocation$;
    // Set current driver's tasks
    this.currentTasks = this.googleMapsService.currentTasks$;
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { Observable, Subscription } from 'rxjs';
import { GoogleMapService } from 'src/app/services/google-map.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit, OnDestroy {
  drivers$: Observable<any[]>;
  selectedDriverId: string;
  driversSubscription: Subscription;

  constructor(
    private driversService: DriversService,
    private googleMapsService: GoogleMapService
  ) {}

  ngOnInit() {
    this.drivers$ = this.driversService.getDrivers();

    // Subscribe to the drivers Observable
    this.driversSubscription = this.drivers$.subscribe(drivers => {
      // Set the first driver as the default one
      this.setDriverLocation(drivers[0]);
    });
  }

  ngOnDestroy() {
    this.driversSubscription.unsubscribe();
  }

  setDriverLocation(driver) {
    // console.log('driver:', driver);
    this.googleMapsService.setDriverOnMap(driver);
    this.selectedDriverId = driver.id;
    // console.log('this.selectedDriverId:', this.selectedDriverId);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { Observable, Subscription } from 'rxjs';
import { GoogleMapService } from 'src/app/services/google-map.service';
import { IDriver } from 'src/app/interfaces/driver';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit {
  drivers$: Observable<IDriver[]>;
  selectedDriverId: string;
  driversSubscription: Subscription;
  isAlreadyLoaded = false;

  constructor(
    private driversService: DriversService,
    private googleMapsService: GoogleMapService
  ) {}

  ngOnInit() {
    // Get drivers list
    this.drivers$ = this.driversService.drivers$.pipe(
      tap(drivers => {
        if (drivers.length > 0 && !this.isAlreadyLoaded) {
          this.setDriverLocation(drivers[0]);
          this.isAlreadyLoaded = true;
        }
      })
    );
  }

  setDriverLocation(driver: IDriver): void {
    // Set selected driver location
    this.googleMapsService.setDriverOnMap(driver);
    // Set selected driver
    this.selectedDriverId = driver.id;
  }
}

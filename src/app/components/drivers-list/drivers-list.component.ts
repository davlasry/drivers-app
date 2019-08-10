import { Component, OnInit, OnDestroy } from '@angular/core';
import { DriversService } from 'src/app/services/drivers.service';
import { Observable, Subscription } from 'rxjs';
import { GoogleMapService } from 'src/app/services/google-map.service';
import { IDriver } from 'src/app/interfaces/driver';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.scss']
})
export class DriversListComponent implements OnInit, OnDestroy {
  drivers$: Observable<IDriver[]>;
  selectedDriverId: string;
  driversSubscription: Subscription;
  isAlreadyLoaded = false;

  constructor(
    private driversService: DriversService,
    private googleMapsService: GoogleMapService
  ) {}

  ngOnInit() {
    this.isAlreadyLoaded = true;

    // Get drivers list
    this.drivers$ = this.driversService.drivers$;

    // Subscribe to the drivers Observable
    this.driversSubscription = this.driversService.drivers$.subscribe(
      drivers => {
        // Set the first driver as the default one
        if (drivers.length > 0 && !this.isAlreadyLoaded) {
          this.setDriverLocation(drivers[0]);
        }
      }
    );
  }

  ngOnDestroy() {
    this.driversSubscription.unsubscribe();
  }

  setDriverLocation(driver: IDriver): void {
    // Set selected driver location
    this.googleMapsService.setDriverOnMap(driver);
    // Set selected driver
    this.selectedDriverId = driver.id;
  }
}

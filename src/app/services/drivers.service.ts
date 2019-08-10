import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IDriver } from '../interfaces/driver';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  driversSource = new BehaviorSubject<IDriver[]>([]);
  drivers$ = this.driversSource.asObservable();

  constructor(private http: HttpClient) {
    this.getDrivers();
  }

  getDrivers(): void {
    this.http.get('./assets/drivers.json').subscribe((drivers: IDriver[]) => {
      this.driversSource.next(drivers);
    });
  }

  editDriver(newDriverData): void {
    const newDriversData = this.driversSource.value;
    newDriversData.forEach((driver: IDriver, index) => {
      if (newDriverData.id === driver.id) {
        newDriversData[index] = newDriverData;
      }
    });
    this.driversSource.next(newDriversData);
  }

  deleteDriver(driverId): void {
    const newDriversData = this.driversSource.value.filter(
      (driver: IDriver) => driver.id !== driverId
    );

    this.driversSource.next(newDriversData);
  }
}

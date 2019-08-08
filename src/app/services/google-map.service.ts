import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapService {
  currentLocation = new BehaviorSubject<any>({});
  currentLocation$ = this.currentLocation.asObservable();

  constructor() {}

  setDriverOnMap(driver) {
    console.log('driver:', driver);
    this.currentLocation.next(driver.location);
  }
}

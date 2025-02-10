import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  map,
  of,
  switchMap,
} from 'rxjs';
import { VEHICLES } from './vehicle.constants';
import { VehicleListItem } from './vehicle.model';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private searchTermSubject = new BehaviorSubject('');
  public searchTerm$ = this.searchTermSubject.asObservable();

  public vehicles$ = this.searchTerm$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    switchMap((searchTerm) =>
      of(VEHICLES).pipe(
        map((vehicles) =>
          vehicles
            .filter((v) =>
              [
                v.name,
                v.manufacturer,
                v.model,
                v.year.toString(),
                v.type,
                v.fuelType,
                v.licensePlate,
              ].some((field) =>
                field.toLowerCase().includes(searchTerm.toLowerCase())
              )
            )
            .map(({ mileage, price, color, ...rest }): VehicleListItem => rest)
        )
      )
    )
  );

  public filterVehicles(searchTerm: string) {
    this.searchTermSubject.next(searchTerm);
  }
}

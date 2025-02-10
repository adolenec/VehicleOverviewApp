import { Component, inject } from '@angular/core';
import { VehicleService } from './vehicle.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent {
  protected readonly vehicleService = inject(VehicleService);

  public onSearch(event: Event) {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.vehicleService.filterVehicles(searchTerm);
  }
}

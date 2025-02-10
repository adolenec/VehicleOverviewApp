import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vehicleName',
})
export class VehicleNamePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('##')[0].trim();
  }
}

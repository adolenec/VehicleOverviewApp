import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleService } from './core/vehicle/vehicle.service';
import { VehiclesComponent } from './core/vehicle/vehicles.component';
import { HeaderComponent } from './core/header/header.component';
import { TableModule } from 'primeng/table';
import { VehicleNamePipe } from './core/vehicle/vehicle-name.pipe';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    HeaderComponent,
    VehicleNamePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, TableModule, InputTextModule],
  providers: [VehicleService],
  bootstrap: [AppComponent],
})
export class AppModule {}

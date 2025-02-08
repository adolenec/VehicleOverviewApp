import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleService } from './core/vehicle/vehicle.service';
import { VehiclesComponent } from './core/vehicle/vehicles.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [AppComponent, VehiclesComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [VehicleService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './core/vehicle/vehicles.component';

export enum AppRouteTokens {
  AUTH = 'auth',
  VEHICLES = 'vehicles',
}

const routes: Routes = [
  { path: '', redirectTo: AppRouteTokens.AUTH, pathMatch: 'full' },
  {
    path: AppRouteTokens.AUTH,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: AppRouteTokens.VEHICLES, component: VehiclesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

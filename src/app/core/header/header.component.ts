import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppRouteTokens } from 'src/app/app-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private readonly router = inject(Router);

  public signOut() {
    this.router.navigateByUrl(AppRouteTokens.AUTH);
  }
}

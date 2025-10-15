import { Component, signal } from '@angular/core';
import { StorageService } from './auth/services/storage/storage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',

})
export class App {
  protected readonly title = signal('hotel-client');

  isCustomerLoggedIn: boolean = StorageService.isCustomerLoggedIn();
  isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.isCustomerLoggedIn = StorageService.isCustomerLoggedIn();
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
      }
    })
  }

  logout() {
    StorageService.signOut();
    this.router.navigateByUrl('/')
  }
}

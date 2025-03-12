import { Component } from '@angular/core';
//import { AuthService } from '../auth.service'; // Adjust the path if your AuthService is in a different location
import { AuthServiceService } from '../auth-service.service';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthServiceService) { }

  logout() {
    this.authService.logout();
  }
}
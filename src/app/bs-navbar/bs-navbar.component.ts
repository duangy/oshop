import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  constructor(private authService: AuthService) { 
  }
}

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  username: string;
  constructor(private auth: AuthService) { 
    if(this.auth.currentUser){
      this.username = this.auth.currentUser.username;
    } 
  }
}

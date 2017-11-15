import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;
  constructor(private service: AuthService, private router: Router) { }

  login(credentials) {
    console.log(credentials);
    this.service.login(credentials)
    .subscribe(result => {
      if (result)
        this.router.navigate(['/']);
      else
        this.invalidLogin = true;
    });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  private headers = new HttpHeaders(
    {'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }
  );

  constructor(private http: HttpClient) { }
  
  login(credentials) {
    
    return this.http.post('api/auth/token', 
    credentials,
  )
    .map(response => {
      if(response && response['token']){
        localStorage.setItem('token', response['token']);
        return true;
      }
      return false;
    });
  }

  logout() {
    localStorage.removeItem('token');
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if(!token){
      return null;
    }
    return new JwtHelper().decodeToken(token);
  }

  get isLoggedIn() {
    return tokenNotExpired();
    // let jwtHelper = new JwtHelper();
    // let token = localStorage.getItem('token');
    // if(!token){
    //   return false;
    // }
    
    // let isExpired = jwtHelper.isTokenExpired(token);
    // return !isExpired;
  }
}

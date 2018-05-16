import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  private SERVICE_URL = 'http://localhost:8080/login/authenticate';

  constructor(private http: Http) { }

  login(username: string, password: string) {
    let headers = new Headers({'Content-Type':'application/json', 'X-Requested-With': 'XMLHttpRequest'});
    let body = JSON.stringify({ username: username, password: password});
    return this.http.post(this.SERVICE_URL, body, { headers: headers } )
               .map((response: Response) => {
                 let user = response.json();
                 if (user && user.token) {
                   localStorage.setItem('currentUser', JSON.stringify(user));
                 }
               });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  formLogin(username: string, password: string) {
    let headers = new Headers({'Content-Type':'application/x-www-form-url-encoded', 'X-Requested-With': 'XMLHttpRequest'});
    let body = `username=${username}&password=${password}`;
    return this.http.post(this.SERVICE_URL, body, { headers: headers })
               .map((response: Response) => {
                 let data = response.json();
                 if (data.success) {

                 } else if (data.error) {

                 }
               });
  }
}

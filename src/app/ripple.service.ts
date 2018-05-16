import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class User {
  constructor(public username: string) { }
}

export class Ripple {
  constructor(
    public id: number,
    public message: string,
    public publishDate: Date,
    public user: string) {

  }
}

@Injectable()
export class RippleService {

  private ripplrUrl = 'http://localhost:8080/api/ripples';

  constructor(private http: Http) {  }

  getRipplesOld(): Array<Ripple> {
    return ripples.map(r => new Ripple(r.id, r.message, new Date(r.publishDate), r.user));
  }

  getRipples(): Promise<Ripple[]> {
    return this.http.get(this.ripplrUrl)
               .toPromise()
               .then(response => response.json() as Ripple[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.log("An error has occurred: " + error);
    return Promise.reject(error.message || error);
  }

}

var ripples = [
  {
    "id": 1,
    "message": "This is my first ripple",
    "publishDate": "2016-06-18T12:17:00+00:00",
    "user": "klaus"
  },
  {
    "id": 2,
    "message": "This is another ripple",
    "publishDate": "2016-06-18T14:43:00+00:00",
    "user": "krampus"
  }
];
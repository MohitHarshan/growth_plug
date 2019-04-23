import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Social } from './listings/listings.component';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor(private http: HttpClient) { }

  getFacebookPage() {
    return this.http.get('http://localhost:8000/facebook/info/');
  }

  postFacebookData(social:Social) {
    return this.http.post(`http://localhost:8000/facebook/info/`, social);
  }
}

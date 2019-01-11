import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemodbService {
  uri = 'http://localhost/backend/';
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.uri}`+"getusers.php");
  }
}

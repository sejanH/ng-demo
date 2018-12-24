import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getPost(id){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id)
  }
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getDetails(id){
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts(): Observable<Object>{
    const specification = {
      Chassis: ["Chassis1", "Chassis2","Chassis3","Chassis4"],
      processor: ["processor1", "processor2","processor3","processor4"],
        RAID: ["RAID1", "RAID2","RAID3","RAID4"]
    };

    return of(specification)
    //return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export class Item {
  Chassis: string;
  Processor: string;
  RAID: string;
  PSU: string;
  Memeory: string;
  Rails:string;
  HardDrive:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  _itemList: Item[] = [];

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
      Processor: ["processor1", "processor2","processor3","processor4"],
      RAID: ["RAID1", "RAID2","RAID3","RAID4"],
      PSU: ["PSU1", "PSU2","PSU3","PSU4"],
      Memeory: ["Memeory1", "Memeory2","Memeory3","Memeory4"],
      HardDrive: ["HardDrive1", "HardDrive2","HardDrive3","HardDrive4"],
      Rails: ["Rail1", "Rail2","Rail3","Rail4"]
    };

    return of(specification)
    //return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }


  addContact(it: Item) {
    //it.ID= this._contactList.length + 1;
    this._itemList.push(it);
  }

  editContact(it: Item) {
    //const index = this._contactList.findIndex(c => c.ID === contact.ID);
    this._itemList[0] = it;
  }

  deleteContact(id: number) {
    //const item = this._contactList.findIndex(c => c.ID === id);
    //this._itemList.splice(contact, 1);
  }

  getAllContacts() {
    return this._itemList;
  }
}

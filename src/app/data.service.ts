import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  GetData() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  addPushSubscriner(sub: any) {
    // return this.http.post("/api/notifications", sub);
    return this.http.post("https://inventory-40f4c-default-rtdb.firebaseio.com/notification.json", sub);
  }
  send() {
   // return this.http.post("/api/newsletter", sub);
   return this.http.post("https://inventory-40f4c-default-rtdb.firebaseio.com/newsletter.json", null);
  }
}

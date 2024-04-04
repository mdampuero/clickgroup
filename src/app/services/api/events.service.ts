import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EventService {
  public limit = 50;
  public offset = 0;
  public sort = "createdAt";
  public direction = "DESC";

  constructor(private http: HttpClient) {

  }

  get(query: string) {

    return this.http.get(`${environment.baseBEUrl}/api/events/all?search=${query}&offset=${this.offset}&limit=${this.limit}&sort=${this.sort}&direction=${this.direction}`);
  }
  home() {
    return this.http.get(`${environment.baseBEUrl}/api/events/sliderHome`);
  }
  similar(id:string) {
    return this.http.get(`${environment.baseBEUrl}/api/events/similar/${id}`);
  }
  last() {
    return this.http.get(`${environment.baseBEUrl}/api/events/last`);
  }
  stats() {
    // return this.http.get(`${environment.baseBEUrl}/api/events/stats/get`,this.login.createAuthorizationHeader());
    return this.http.get(`${environment.baseBEUrl}/api/events/stats/get`);
  }
  getOne(id: string) {
    // return this.http.get(`${environment.baseBEUrl}/api/events/${id}`,this.login.createAuthorizationHeader());
    return this.http.get(`${environment.baseBEUrl}/api/events/${id}`);
  }
  getAll() {
    // return this.http.get(`${environment.baseBEUrl}/api/events?search%5Bvalue%5D=&start=0&length=-1&sort=name&direction=ASC`,this.login.createAuthorizationHeader());
    return this.http.get(`${environment.baseBEUrl}/api/events/all`);
  }

}

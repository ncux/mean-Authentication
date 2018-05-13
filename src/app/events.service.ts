import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class EventsService {

  private eventsURL = '/events';
  private specialURL = '/special';


  constructor(private http: HttpClient) { }

  fetchEvents() {
    return this.http.get<any>(this.eventsURL);

  }

  fetchSpecialEvents() {
    return this.http.get<any>(this.specialURL);

  }

}

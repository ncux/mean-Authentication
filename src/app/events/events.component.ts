import { Component, OnInit } from '@angular/core';
import {EventsService} from '../events.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  Events = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.fetchEvents().subscribe(res => this.Events = res);
  }

}

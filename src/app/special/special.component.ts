import { Component, OnInit } from '@angular/core';
import {EventsService} from '../events.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  specialEvents = [];

  constructor(private eventsService: EventsService, private router: Router) { }

  ngOnInit() {
    this.getSpecialEvents();
  }

  getSpecialEvents() {
    this.eventsService.fetchSpecialEvents().subscribe(res => this.specialEvents = res, err => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.router.navigate(['/login']);

        }
      }
    });
  }

}

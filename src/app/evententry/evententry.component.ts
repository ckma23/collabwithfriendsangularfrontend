import { Component, OnInit, Input } from '@angular/core';
// import { Event } from '../event';
// import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-evententry',
  templateUrl: './evententry.component.html',
  styleUrls: ['./evententry.component.css']
})

export class EvententryComponent implements OnInit {

  @Input() event;

  constructor() { }

  ngOnInit() {
    console.log(this.event);
    // this.getEvents();
  }

  // getEvents(): void {
  //   this.dashboardService.getEvents()
  //     .subscribe(events => this.events = events);
  // }

}
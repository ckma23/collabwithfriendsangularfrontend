import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { Event } from '../event';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-evententry',
  templateUrl: './evententry.component.html',
  styleUrls: ['./evententry.component.css']
})

export class EvententryComponent implements OnInit {

  @Input() eventEntry;
  @Output() eventClick: EventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.eventEntry);
    // this.getEvents();
  }

  deleteEntry(event, eventEntry) {
    console.log('event', event, eventEntry)
    this.eventClick.emit(eventEntry);
  }

  // getEvents(): void {
  //   this.dashboardService.getEvents()
  //     .subscribe(events => this.events = events);
  // }

}
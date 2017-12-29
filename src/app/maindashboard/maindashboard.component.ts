import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})
export class MaindashboardComponent implements OnInit {

  events: Event[];

  constructor(private dashboardService: DashboardService){ }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.dashboardService.getEvents()
      .subscribe(events => this.events = events);
  }

  deleteEvents(eventEntry): void {
    this.events = this.events.filter(e=>e !== eventEntry);
    // console.log(this.events.filter(e=>e !== eventEntry))
    this.dashboardService.deleteEvent(eventEntry).subscribe();
  }
}

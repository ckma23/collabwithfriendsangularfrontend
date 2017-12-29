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

  deleteEvents(event: Event): void {
    this.events = this.events.filter(h=>h !== event);
    console.log(this.events.filter(h=>h !== event))
    this.dashboardService.deleteEvent(event).subscribe();
  }
}

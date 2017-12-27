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
}

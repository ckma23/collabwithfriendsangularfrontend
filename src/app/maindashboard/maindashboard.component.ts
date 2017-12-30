import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../event';
import { DashboardService } from '../dashboard.service';
import { EventcreatorComponent } from '../eventcreator/eventcreator.component';

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})

export class MaindashboardComponent implements OnInit {

  events: Event[];

  constructor(
        private route: ActivatedRoute,
        private dashboardService: DashboardService){ }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    // console.log(id)
    this.dashboardService.getEvents(id)
      .subscribe(events => this.events = events);
  }

  deleteEvents(eventEntry): void {
    this.events = this.events.filter(e=>e !== eventEntry);
    console.log(this.events)
    // console.log(this.events.filter(e=>e !== eventEntry))
    this.dashboardService.deleteEvent(eventEntry).subscribe();
  }

  datefinder(date) {
    this.getEvents();
  // console.log(date)
  }
}

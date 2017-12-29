import { Component, OnInit } from '@angular/core';
import { Event } from '../event';

import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-eventcreator',
  templateUrl: './eventcreator.component.html',
  styleUrls: ['./eventcreator.component.css']
})
export class EventcreatorComponent implements OnInit {
  // events: Event[];
  events: Array<Event>;
  constructor(private dashboardService: DashboardService) {
    this.events = [];

  }

  ngOnInit() {
  }

  add(name,address,date,time): void{
    let event = new Event(name,address,date,time);
    console.log(event)
    this.dashboardService.addEvent(event)
      .subscribe(event =>{
        this.events.push(event);
      });
  }
  
  refresh(): void{
    window.location.reload();
  }
}

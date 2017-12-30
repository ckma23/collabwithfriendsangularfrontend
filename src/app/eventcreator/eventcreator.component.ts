import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService) {
    this.events = [];
  }

  ngOnInit() {
  }

  add(name,address,date,time): void{
    console.log("Hitting the Post")
    const trip_id = +this.route.snapshot.paramMap.get('id');
    console.log(trip_id)
    let event = new Event(name,address,date,time,trip_id);
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

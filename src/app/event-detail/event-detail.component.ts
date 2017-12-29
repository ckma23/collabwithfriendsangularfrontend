import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Event } from '../event';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})

export class EventDetailComponent implements OnInit {
  @Input() event: Event;

  constructor(
    private route: ActivatedRoute,
    private DashboardService: DashboardService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.DashboardService.getEvent(id)
      .subscribe(event => this.event = event);
  }

  goBack(): void{
    this.location.back();
  }
}

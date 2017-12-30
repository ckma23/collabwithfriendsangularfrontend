import { Component, OnInit } from '@angular/core';
import { Trip } from '../trip';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-tripsboard',
  templateUrl: './tripsboard.component.html',
  styleUrls: ['./tripsboard.component.css']
})

export class TripsboardComponent implements OnInit {

  trips : Trip[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getTrip();
    console.log("This is hit")
  }

  getTrip(): void {
    this.dashboardService.getTrips()
      .subscribe(trips => this.trips = trips);
  }
}

import { Component, OnInit} from '@angular/core';
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

  }

  getTrip(): void {
    this.dashboardService.getTrips()
      .subscribe(trips => this.trips = trips);
  }

  addTrip(id,name,start,end): void {
    let trip = new Trip(id,name,start,end);
    this.dashboardService.addTrips(trip)
      .subscribe(trips => this.trips = trips);
  }

  deleteT(trip:Trip): void {
    this.trips = this.trips.filter(h=>h !== trip);
    this.dashboardService.deleteTrip(trip).subscribe();
  }
}

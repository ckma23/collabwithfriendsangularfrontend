import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../event';
import { Trip } from '../trip';
import { DashboardService } from '../dashboard.service';
import { EventcreatorComponent } from '../eventcreator/eventcreator.component';


var dayone= "";
var daytwo= "";
var daythree= "";

@Component({
  selector: 'app-maindashboard',
  templateUrl: './maindashboard.component.html',
  styleUrls: ['./maindashboard.component.css']
})

export class MaindashboardComponent implements OnInit {
  trips: Trip[];
  events: Event[];
  eventsDayOne : Array<any>;
  eventsDayTwo : Array<any>;
  eventsDayThree : Array<any>;

  constructor(
        private route: ActivatedRoute,
        private dashboardService: DashboardService){
          this.eventsDayOne = [];
          this.eventsDayTwo = [];
          this.eventsDayThree = [];
        }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dashboardService.getTrips().subscribe((trips) => {
      this.trips = trips;
      let daystart = "";
      // this function is to clean up the date strings for data manipulation
      for (let i = 0; i < this.trips.length; i+=1){
        if (this.trips[i].trip_id === id.toString()) {
          daystart = this.trips[i].date_start.substr(0,10);
          var dateString  = daystart;
          var year        = dateString.substring(0,4);
          var month       = dateString.substring(5,7);
          var day         = dateString.substring(8,10);
          dayone = (new Date(parseInt(year), parseInt(month)-1, parseInt(day))).toISOString().substr(0,10);
          daytwo = (new Date(parseInt(year), parseInt(month)-1, parseInt(day)+1)).toISOString().substr(0,10);
          daythree = (new Date(parseInt(year), parseInt(month)-1, parseInt(day)+2)).toISOString().substr(0,10);
        }
      }
    });

    this.dashboardService.getEvents(id)
      .subscribe((events) => {
        this.events = events;
        for (let i =0; i < this.events.length; i+=1) {
          let date = this.events[i].date.substr(0,10);
          if (this.events[i].date.substr(0,10) === dayone) {
            this.eventsDayOne.push(this.events[i]);
          }
          else if (this.events[i].date.substr(0,10) === daytwo) {
            this.eventsDayTwo.push(this.events[i]);
          }
          else if (this.events[i].date.substr(0,10) === daythree) {
            this.eventsDayThree.push(this.events[i]);
          }
          else {
            console.log("EMPTY")
          }
        }
        this.eventsDayOne.sort(function(a,b) {return a.time.localeCompare(b.time);})
        this.eventsDayTwo.sort(function(a,b) {return a.time.localeCompare(b.time);})
        this.eventsDayThree.sort(function(a,b) {return a.time.localeCompare(b.time);})
      });
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

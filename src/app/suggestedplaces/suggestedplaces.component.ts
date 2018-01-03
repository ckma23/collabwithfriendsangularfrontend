import { Component, OnInit } from '@angular/core';
import { Suggestion } from  '../suggestion';
import { DashboardService } from '../dashboard.service';
import { ActivatedRoute } from '@angular/router';
import { Trip } from '../trip';

var yelpsearchstring= "";

@Component({
  selector: 'app-suggestedplaces',
  templateUrl: './suggestedplaces.component.html',
  styleUrls: ['./suggestedplaces.component.css']
})


export class SuggestedplacesComponent implements OnInit {
  trips: Trip[];
  suggestions: Suggestion[];

  constructor(
      private route: ActivatedRoute,
      private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getSuggestions();
  }


  getSuggestions():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.dashboardService.getTrips().subscribe((trips) => {
      this.trips = trips;
      // this function is to clean up the date strings for data manipulation
      for (let i = 0; i < this.trips.length; i+=1){
        if (this.trips[i].trip_id === id.toString()) {
          yelpsearchstring = this.trips[i].trip_name;
        }
      }
      this.dashboardService.getyelpSuggestions(yelpsearchstring)
        .subscribe(suggestions => this.suggestions = suggestions.slice(6,10))
    });

      // .subscribe(suggestions => this.suggestions = suggestions.slice(Math.floor((Math.random() * 5)+1), Math.floor((Math.random() * 10)+1)))
  }
}

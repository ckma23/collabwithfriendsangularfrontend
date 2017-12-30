import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { TripsboardComponent } from './tripsboard/tripsboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/tripdashboard', pathMatch: 'full' },
  { path: 'tripdashboard', component: TripsboardComponent },
  // { path: 'maindashboard', component: MaindashboardComponent },
  { path: 'maindashboard/:id', component: MaindashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { }

// this imports the NgModule needed from angular core
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
//Forms module provides the two-way data-binding,parasing, and validation for form controls
import { FormsModule }    from '@angular/forms';
//imports http module from angular core.
import { HttpClientModule } from '@angular/common/http';

//imports the complete app to start with
import { AppComponent } from './app.component';

import { DashboardService } from './dashboard.service';
//importing the Dashboard Component into app.module.
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { EventcreatorComponent } from './eventcreator/eventcreator.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { AppRoutingModule } from './/app-routing.module';

// defines a module that contains components, directives, pipes, and providers
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MaindashboardComponent,
    EventcreatorComponent,
    EventDetailComponent
  ],
  // list of module to import into this module from everything form the imported modules
  providers: [ DashboardService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

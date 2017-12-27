import { Injectable } from '@angular/core';
//importing the Http Client for this service to be used.
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Event } from './event';
// import { EVENTS } from './mock-events';

@Injectable()
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  // private baseUrl = 'https://still-ocean-16122.herokuapp.com/api';
  private baseUrl = 'http://localhost:4000/api';
  getEvents (): Observable<Event[]>{
    let event$ = this.http.get(`${this.baseUrl}`);
    return this.http.get<Event[]>(this.baseUrl)
    .pipe(
      catchError(this.handleError('getEvents',[]))
    );
  }
  //this works
  // getEvents (): Observable<Event[]>{
  //   // let event$ = this.http.get(`${this.baseUrl}`);
  //   // return this.http.get<Event[]>(this.baseUrl)
  //   // .pipe(
  //   //   catchError(this.handleError('getEvents',[]))
  //   this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {console.log(data);});
  //   );
  // }

  private handleError<T> (operation = 'operation', result?:T){
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}

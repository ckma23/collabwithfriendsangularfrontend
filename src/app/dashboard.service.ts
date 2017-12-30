import { Injectable } from '@angular/core';
//importing the Http Client for this service to be used.
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Event } from './event';
import { Trip } from './trip';
// import { EVENTS } from './mock-events';

@Injectable()
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  // private baseUrl = 'https://still-ocean-16122.herokuapp.com/api';
  private baseUrl = 'http://localhost:4000/api';
  private basetripUrl = 'http://localhost:4000/trips';

  getEvents (id): Observable<Event[]>{
    return this.http.get<Event[]>(`${this.basetripUrl}/${id}`)
    .pipe(
      catchError(this.handleError('getEvents',[]))
    );
  }

  addEvent (event): Observable<Event>{
    console.log("POST hit")
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    return this.http.post<Event>(`${this.baseUrl}`,event, httpOptions)
    .pipe(
      catchError(this.handleError<any>('addEvent'))
    );
  }

  // getEvent(id:number): Observable<Event>{
  //   const url = `${this.baseUrl}/${id}`;
  //   console.log(url)
  //   return this.http.get<Event>(url)
  //   .pipe(
  //     catchError(this.handleError<Event>(`getHero id=${id}`))
  //   );
  // }

  deleteEvent (event: Event): Observable<Event>{
    console.log("Delete hit")
    const id=event.id
    console.log(id)
    const deleteurl =`${this.baseUrl}/${id}`
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    };
    let body = JSON.stringify(id)
    return this.http.delete<Event>(deleteurl,httpOptions)

  }

  getTrips (): Observable<Trip[]>{
    let trip$ = this.http.get(`${this.basetripUrl}`);
    return this.http.get<Trip[]>(this.basetripUrl)
    .pipe(
      catchError(this.handleError('getTrips',[]))
    );
  }

  private handleError<T> (operation = 'operation', result?:T){
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}

export class Trip {
  id: number;
  trip_id: string;
  trip_name: string;
  date_start: string;
  date_end: string;

  constructor(id,name,start,end){
    this.trip_id = id;
    this.trip_name = name;
    this.date_start = start;
    this.date_end = end;
  }
}

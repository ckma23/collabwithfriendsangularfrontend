export class Event {
  id: number;
  date: string;
  time: string;
  name: string;
  address: string;
  trip_id: number;

  constructor(name,address,date,time,trip_id){
    this.name = name;
    this.address = address;
    this.date = date;
    this.time = time;
    this.trip_id = trip_id;
  }
}

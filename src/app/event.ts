export class Event {
  id: number;
  date: string;
  time: string;
  name: string;
  address: string;

  constructor(name,address,date,time){
    this.name = name;
    this.address = address;
    this.date = date;
    this.time = time;
  }
}

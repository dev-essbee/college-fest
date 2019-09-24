import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { events } from './data/events-data';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

 getEvent(id: number): Observable<Event> {
    return of(events.find(event => event.id === id.toString()));
 }
}

import {Component, OnInit} from '@angular/core';
import {Event} from '../event';
import {events} from '../data/events-data';
import {FirebaseDatabaseService} from '../firebase-database.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = events;


  constructor(private dbService: FirebaseDatabaseService) {
  }

  ngOnInit() {
  }

  onClickRegister(event) {
    this.dbService.savePartEvents({participatingEvents: [event.id]});
  }

  onClickMore(event) {

  }
}

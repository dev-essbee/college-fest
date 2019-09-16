import {Component, OnInit} from '@angular/core';
import {Event} from '../event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = [{
    id: 1,
    name: 'First',
    pic: 'http://via.placeholder.com/640x360',
    shortDes: 'This is short description of the event',
    longDes: 'This is long description of the event',
    startTime: '12:12',
    endTime: '18:18'
  }, {
    id: 2,
    name: 'Second',
    pic: 'http://via.placeholder.com/640x360',
    shortDes: 'This is short description of the event',
    longDes: 'This is long description of the event',
    startTime: '12:12',
    endTime: '18:18'
  }
  ];

  onClickRegister(event: Event): void {
    alert(event.name);
  }

  onClickMore(event: Event): void {
    alert(event.name);
  }

  constructor() {
  }

  ngOnInit() {
  }

}

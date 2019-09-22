import {Component, OnInit} from '@angular/core';
import {UserAuthService} from '../user-auth.service';
import {FirebaseDatabaseService} from '../firebase-database.service';
import { events } from '../data/events-data';
import { User } from '../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  eventsData = events;
  participatedEvents=[];
  userData: User ={}
  constructor(public auth: UserAuthService,
              public dbService: FirebaseDatabaseService) {
  }
  getEvents() {
    let pEvent = [];
    const data = this.userData.participatingEvents;
    console.log(data);
    for(var key in data){
      if (data[key]){
        pEvent.push(this.eventsData[key].name);
      }
    }
    return pEvent;
  }

  ngOnInit() {
    this.userData=this.dbService.loggedInUserData;
    this.participatedEvents = this.getEvents();
  }

}

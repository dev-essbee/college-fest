import {Component, OnInit} from '@angular/core';
import {UserAuthService} from '../user-auth.service';
import {FirebaseDatabaseService} from '../firebase-database.service';
import {events} from '../data/events-data';
import {User} from '../user';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  eventsData = events;
  participatedEvents = [];
  userData: User = {};

  constructor(public auth: UserAuthService,
              public dbService: FirebaseDatabaseService,
              private router:Router) {
  }

  getEvents() {
    const pEvent = [];
    const data = this.userData.participatingEvents;
    console.log(data);
    for (const key in data) {
      if (data[key]) {
        if (this.eventsData.hasOwnProperty(key)) {
          pEvent.push(this.eventsData[key].name);
        }
      }
    }
    return pEvent;
  }
  editUserDetails(){
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    this.userData = this.dbService.loggedInUserData;
    this.participatedEvents = this.getEvents();
  }

}

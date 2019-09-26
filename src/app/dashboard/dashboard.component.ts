import {Component, OnInit} from '@angular/core';
import {UserAuthService} from '../user-auth.service';
import {FirebaseDatabaseService} from '../firebase-database.service';
import {events} from '../data/events-data';
import {User} from '../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  eventsData = events;
  registeredEvents = [];
  userData: User = {};
  basePath = '../../assets/img/avatars/';
  avatars = [{fileName: 'avatar-1.png', tooltip: 'tooltip text'},
    {fileName: 'avatar-2.png', tooltip: 'tooltip text'},
    {fileName: 'avatar-3.png', tooltip: 'tooltip text'},
    {fileName: 'avatar-4.png', tooltip: 'tooltip text'},
    {fileName: 'avatar-5.png', tooltip: 'tooltip text'},
    {fileName: 'avatar-6.png', tooltip: 'tooltip text'},
    {fileName: 'avatar-7.png', tooltip: 'tooltip text'},
    {fileName: 'avatar-8.png', tooltip: 'tooltip text'},
    {fileName: 'avatar-9.png', tooltip: 'tooltip text'},
    {fileName: 'avatar-10.png', tooltip: 'tooltip text'}];
  randomNo = Math.round(Math.random());

  path: string;
  toolTipAvatar: string;

  constructor(public auth: UserAuthService,
              public dbService: FirebaseDatabaseService,
              private router: Router) {
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

  editUserDetails() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    console.log(this.randomNo);
    this.path = this.basePath + this.avatars[this.randomNo].fileName;
    this.toolTipAvatar = this.avatars[this.randomNo].tooltip;
    this.userData = this.dbService.loggedInUserData;
    this.registeredEvents = this.getEvents();
  }

  navigateToEvents() {
    this.router.navigate(['/events']);
  }
}

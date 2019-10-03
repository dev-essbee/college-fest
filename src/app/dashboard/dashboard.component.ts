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
  basePath = '../../assets/minimg/avatars/avatar-';
  tooltips = ['Hello there! You naughty Little Devil', 'We all live down here.'
    , 'Come, You do not keep The Devil waiting.', 'Born in Hell, forged in Fire!', 'The Red Floating Guy.',
    'RIP', 'I cut HUMANS for FUN', 'I am all Stitched Up', 'Meowmpire', 'Let me take your Soul', 'WOOoooooooo'];
  randomNo = Math.round(Math.random() * 10);

  path: string;
  tooltipAvatar: string;
  eventStatusValue: string;

  constructor(public auth: UserAuthService,
              public dbService: FirebaseDatabaseService,
              private router: Router) {
  }

  getEvents() {
    const pEvent = [];
    const data = this.userData.participatingEvents;
    // console.log(data);
    for (const key in data) {
      if (data[key] !== false) {
        pEvent.push(key);
      }
    }
    return pEvent;
  }

  onCreateTeam(key: string) {
    this.router.navigate(['/team-register/' + key]);
  }

  editUserDetails() {
    this.router.navigate(['/register']);
  }

  ngOnInit() {
    // console.log(this.randomNo);
    this.path = this.basePath + this.randomNo + '.png';
    this.tooltipAvatar = this.tooltips[this.randomNo];
    this.userData = this.dbService.loggedInUserData;
    this.registeredEvents = this.getEvents();
  }

  navigateToEvents() {
    this.router.navigate(['/events']);
  }

  eventStatus(key) {
    if (this.eventsData[key].team) {
      status = this.userData.participatingEvents[key];
      if (status as any === true) {
        return 'Create Team';
      } else {
        return ('Team Name:' + status);
      }
    } else {
      return null;
    }
  }
}

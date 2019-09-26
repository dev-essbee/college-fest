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
  avatars = [{fileName: 'The-Devil.png', tooltip: 'Hello there! You naughty Little Devil'},
    {fileName: 'Clown.png', tooltip: 'We all live down here.'},
    {fileName: 'Grim-Reaper.png', tooltip: 'It is Time.'},
    {fileName: 'HellBoy.png', tooltip: 'Born in Hell, forged in Fire!'},
    {fileName: 'Red-Skull.png', tooltip: 'The Red Floating Guy.'},
    {fileName: 'Skull.png', tooltip: 'RIP'},
    {fileName: 'Slasher.png', tooltip: 'Slash! Slash! Cut.'},
    {fileName: 'Stiches.png', tooltip: 'Face of thread, lol.'},
    {fileName: 'Vampire-cat.png', tooltip: 'I need Blood.'},
    {fileName: 'Werewolf.png', tooltip: 'Aarrroooooooo'}];
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

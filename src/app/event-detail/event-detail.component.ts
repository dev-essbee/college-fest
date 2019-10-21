import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../event';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../event.service';
import {Location} from '@angular/common';
import {FirebaseDatabaseService} from '../firebase-database.service';
import {UserAuthService} from '../user-auth.service';
import {SnackbarService} from '../snackbar.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event;
  codextremeRegistration = ['Register for the event by pressing Register button below',
    'For online round participants need to register on HackerEarth here: <a href="https://www.hackerearth.com/challenges/college/codextreme2019/">CodeXtreme</a>',
    'Participants need to fill following form to claim prizes: <a href="https://forms.gle/2QTorXT8xACgs6UJ8">CodeXtreme: Username Form</a>'];

  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private location: Location,
              private dbService: FirebaseDatabaseService,
              private authService: UserAuthService,
              private snackbarService: SnackbarService,
  ) {
  }

  ngOnInit() {
    this.getEvent();

  }

  getEvent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id)
      .subscribe(event => this.event = event);
  }

  goBack(): void {
    this.location.back();
  }

  onClickRegister(event: Event) {
    // console.log(event.id);
    const id = event.id;
    const data = {
      participatingEvents: {
        [id]: true
      }
    };
    if (this.dbService.loggedInUserData) {
      this.dbService.registerEvent(data, event.team);
    } else {
      const loginSnackbarRef = this.snackbarService.showSnackBar('Please Login to continue', 'LOGIN', 5);
      loginSnackbarRef.onAction().subscribe(() => {
        loginSnackbarRef.dismiss();
        this.authService.googleSignIn();
      });
    }
  }

  getBgLoc(e) {
    const loc = 'url(' + e.smallImg + ')';
    // console.log(loc);
    return loc;
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../event';
import {ActivatedRoute} from '@angular/router';
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

  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private location: Location,
              private dbService: FirebaseDatabaseService,
              private authService: UserAuthService,
              private snackbarService: SnackbarService
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
      const loginSnackbarRef = this.snackbarService.showSnackBar('Please Login to continue', 'LOGIN', 0);
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

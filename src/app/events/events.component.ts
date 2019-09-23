import {Component, OnInit} from '@angular/core';
import {Event} from '../event';
import {events} from '../data/events-data';
import {FirebaseDatabaseService} from '../firebase-database.service';
import {UserAuthService} from '../user-auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = events;


  constructor(private dbService: FirebaseDatabaseService,
              private authService: UserAuthService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  showLoginSnackBar() {
    return this.snackBar.open('Please Login to continue', 'LOGIN', {
      panelClass: ['snackbar-login']
    });
  }

  onClickRegister(event: Event) {
    console.log(event.id);
    const id = event.id;
    const data = {
      participatingEvents: {
        [id]: true
      }
    };
    if (this.dbService.loggedInUserData) {
      this.dbService.savePartEvents(data);
    } else {
      const loginSnackbarRef = this.showLoginSnackBar();
      loginSnackbarRef.onAction().subscribe(() => {
        loginSnackbarRef.dismiss();
        this.authService.googleSignIn();
      });
    }
  }

  onClickMore(event) {

  }
}

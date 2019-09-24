import {Component, OnInit} from '@angular/core';
import {Event} from '../event';
import {events} from '../data/events-data';
import {FirebaseDatabaseService} from '../firebase-database.service';
import {UserAuthService} from '../user-auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = events;


  constructor(private dbService: FirebaseDatabaseService,
              private authService: UserAuthService,
              private snackBar: MatSnackBar,
              private router: Router) {
  }

  ngOnInit() {
  }
  onClickMore(event: Event) {
    this.router.navigate(['/events/' + event.id]);
  }
}

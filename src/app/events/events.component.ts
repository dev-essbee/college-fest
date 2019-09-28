import {AfterViewInit, Component, OnInit, ViewChildren} from '@angular/core';
import {Event} from '../event';
import {categories, events} from '../data/events-data';
import {FirebaseDatabaseService} from '../firebase-database.service';
import {UserAuthService} from '../user-auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit, AfterViewInit {
  events = events;
  categories = categories;
  cEle;
  tEle;
  mEle;
  dEle;

  constructor(private dbService: FirebaseDatabaseService,
              private authService: UserAuthService,
              private snackBar: MatSnackBar,
              private router: Router) {

  }

  ngOnInit() {
    console.log();
    // todo implement scroll to previous position
    window.scrollTo(0, 0);
  }

  onClickMore(event: Event) {
    this.router.navigate(['/events/' + event.id]);
  }

  ngAfterViewInit(): void {
    this.cEle = document.getElementById('c0');
    this.tEle = document.getElementById('t0');
    this.mEle = document.getElementById('m0');
    this.dEle = document.getElementById('d0');
  }

  scrollToEvent(cat) {
    if (cat === 'c0') {
      this.cEle.scrollIntoView({behavior: 'smooth'});
    } else if (cat === 'd0') {
      this.dEle.scrollIntoView({behavior: 'smooth'});
    } else if (cat === 't0') {
      this.tEle.scrollIntoView({behavior: 'smooth'});
    } else if (cat === 'm0') {
      this.mEle.scrollIntoView({behavior: 'smooth'});
    }
  }

// todo: sticky bookmarks bar
}

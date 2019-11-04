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
 /* codextremeRegistration = ['Register for the event by pressing Register button below',
    'For online round participants need to register on HackerEarth here: ' +
    '<a href="https://www.hackerearth.com/challenges/college/codextreme2019/">CodeXtreme</a>',
    'Participants need to fill following form to claim prizes:' +
    ' <a href="https://forms.gle/2QTorXT8xACgs6UJ8">CodeXtreme: Username Form</a>'];*/
  talentxRounds = [
    'First Round:',
    '1. You have to submit a video of you performing one of your pieces, the video may be even'
    ,
    'recorded with mobile. Please make sure that the sound is clear.'
    ,
    '2. If a video isn’t possible, you may record a voice clip and submit. Written content won’t be'
    ,
    'accepted.'
    ,
    '3. Use of any kind of special effects is STRICTLY prohibited and will lead to direct disqualification.'
    ,
    '4. Video must be submitted using Google Form by uploading YouTube video link in the form.'
    ,
    '5. Top performers will be selected for the second round. If you are among the top selected performers you will ' +
    'listen back from us through the mail.'
    ,
    'Second Round:'
    ,
    '1. The Top selected performers will be able to perform on the event date in the main stage.'
    ,
    '2. Participants are to recite their piece in front of a live audience, either from memory or reading from a paper.'
    ,
    '3. Since the participants are called upon in a random order, each is required to be present at least 5 minutes prior to the start.'
    ,
    '4. Organisers will not be responsible if you are unable to show up on time and miss your slot.'
    ,
    '5. Time Limit: 3-4 Minutes.'];

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

import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';
import {EventService} from '../event.service';
import {Event} from '../event';
import {
  AbstractControl,
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {EventTeam, TeamMember} from '../event-team';
import {FirebaseDatabaseService} from '../firebase-database.service';
import {User} from '../user';
import {CustomSnackbarService} from '../custom-snackbar.service';
import {Observable, of} from 'rxjs';
import {max} from 'rxjs/operators';
import {TeamNameValidator} from '../validators/team-name.validator';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-team-register',
  templateUrl: './team-register.component.html',
  styleUrls: ['./team-register.component.css']
})
export class TeamRegisterComponent implements OnInit {
  teamForm: FormGroup;
  event: Event;
  eventId: number;
  teamMemberValidMsg = {
    teamName: [{type: 'required', message: 'Enter Team Name'}],
    email: [{type: 'required', message: 'Enter registered email id'},
      {type: 'email', message: 'Enter valid email id'},
      {type: 'noAccount', message: 'User not registered for Sabrang 2k19'},
      {type: 'teamAlready', message: 'User already part of a team'},
      {type: 'notRegistered', message: 'User not registered for this event.'},
      {type: 'invalidId', message: 'Enter valid registered email id.'},
      {type: 'duplicate', message: 'Duplicate members not allowed.'}]
  };


  constructor(private route: ActivatedRoute,
              private eventService: EventService,
              private fb: FormBuilder,
              private dbService: FirebaseDatabaseService,
              private customSnackBar: CustomSnackbarService,
              private teamNameValidator: TeamNameValidator,
              private afs: AngularFirestore
  ) {
  }


  ngOnInit() {
    this.getEvent();
    this.createTeamForm();
  }

  createTeamForm() {
    this.teamForm = this.fb.group({
      teamName: ['', Validators.required],
      teamMembers: this.fb.array([this.initTeamMember()]),
    });
  }

  initTeamMember() {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email], [(this.userValidator.bind(this))]],
      name: [''],
      memberId: ['']
    });
  }


  getEvent(): void {
    this.eventId = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(this.eventId)
      .subscribe(event => this.event = event);
  }


  addTeamMember() {
    if (this.maxMembers()) {
      this.customSnackBar.showSnackBar('Maximum team size reached', '', 3);
    } else {
      const control = this.teamForm.controls.teamMembers as FormArray;
      control.push(this.initTeamMember());
    }
  }

  deleteTeamMember(index: number) {
    const control = this.teamForm.controls.teamMembers as FormArray;
    control.removeAt(index);
  }


  save() {
    // console.log(this.teamMembers.value);
    if (this.teamForm.value.teamMembers.length > this.event.minTeamMembers) {
      console.log('save');
    } else {
      this.customSnackBar.showSnackBar('Minimum ' + this.event.minTeamMembers +
        ' team members required', '', 5);
    }
  }

  updateName() {

  }

  get teamName() {
    return this.teamForm.get('teamName');
  }

  get teamMembers() {
    return this.teamForm.get('teamMembers') as FormArray;
  }

  userValidator(control: AbstractControl): Observable<any> {
    const email = control.value.toString().trim().toLowerCase();
    let userDet;
    if (/@gmail\.com$/.test(email)) {
      for (const key in this.teamForm.value.teamMembers) {
        if (this.teamForm.value.teamMembers.hasOwnProperty(key)) {
          if (this.teamForm.value.teamMembers[key].email === email) {
            console.log('duplicate');
            return of({duplicate: true});
          }
        }
      }
      this.dbService.findUser(email).subscribe(user => {
        // console.log('in');
        userDet = user[0];
        return this.extractData(userDet);
      });
    } else {
      return of({invalidId: true});
    }
  }

  extractData(userDet: User) {
    if (userDet) {
      console.log('user exists');
      // console.log(userDet.name);
      const eventStatus = userDet.participatingEvents[this.eventId];
      if (eventStatus === false) {
        console.log(' user has not registered for the event');
        return of({notRegistered: true});
      } else if (eventStatus === true) {
        return of(null);
      } else {
        console.log('user already part of a team');
        return of({teamAlready: true});
      }
    } else {
      console.log('down');
      console.log(userDet);
      return of({noAccount: true});
    }
  }

  maxMembers() {
    // console.log(this.teamForm.value.teamMembers.length);
    const maxMem = this.event.maxTeamMembers;
    // console.log(maxMem);
    const size = this.teamForm.value.teamMembers.length;
    // console.log(size);
    if (maxMem === size) {
      return true;
    } else {
      return false;
    }

  }
}

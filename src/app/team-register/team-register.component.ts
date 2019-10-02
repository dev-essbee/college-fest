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
import {combineLatest, Observable, of} from 'rxjs';
import {debounceTime, map, max, take} from 'rxjs/operators';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

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
    email: [{type: 'required', message: 'Enter email id of a team member'},
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
              private afs: AngularFirestore
  ) {
  }

  ngOnInit() {
    this.getEvent();
    this.createTeamForm();

  }

  get teamName() {
    return this.teamForm.get('teamName');
  }

  get teamMembers() {
    return this.teamForm.get('teamMembers') as FormArray;
  }

  getEvent(): void {
    this.eventId = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(this.eventId)
      .subscribe(event => this.event = event);
  }

  createTeamForm() {
    this.teamForm = this.fb.group({
      teamName: ['', Validators.required],
      teamMembers: this.fb.array([this.initTeamMember()]),
    });
  }

  initTeamMember() {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email], [this.checkDuplicate.bind(this),
        this.checkUser.bind(this)]],
      name: ['']
    });
  }

  checkUser(control: AbstractControl) {
    let userDet;
    return new Promise(res => {
      this.dbService.findUser(control.value.toString().trim().toLowerCase()).subscribe(user => {
        userDet = user[0];
        console.log(userDet);
        control.parent.controls['name'].setValue('');
        if (userDet) {
          const eventStatus = userDet.participatingEvents[this.eventId];
          console.log(eventStatus);
          if (eventStatus === false) {
            console.log(' user has not registered for the event');
            res({notRegistered: true});
          } else if (eventStatus === true) {
            control.parent.controls['name'].setValue(userDet.name);
            res(null);
          } else {
            console.log('user already part of a team');
            res({teamAlready: true});
          }
        } else {

          res({noAccount: true});
        }
      });
    });
    return of({invalidId: true});
  }


  checkDuplicate(control: AbstractControl) {
    const email = control.value.toString().trim().toLowerCase();
    for (const key in this.teamForm.value.teamMembers) {
      if (this.teamForm.value.teamMembers[key].email === email) {
        return of({duplicate: true});
      }
    }
    return of(null);
  }

  addTeamMember() {
    if (this.maxMembers()) {
      this.customSnackBar.showSnackBar('Maximum team size reached', '', 3);
    } else {
      const control = this.teamForm.controls.teamMembers as FormArray;
      control.push(this.initTeamMember());
    }
  }

  deleteTeamMember(index: number
  ) {
    const control = this.teamForm.controls.teamMembers as FormArray;
    control.removeAt(index);
  }

  maxMembers() {
    console.log(this.teamForm.value.teamMembers.length);
    const maxMem = this.event.maxTeamMembers;
    console.log(maxMem);
    const size = this.teamForm.value.teamMembers.length;
    console.log(size);
    if (maxMem === size) {
      return true;
    } else {
      return false;
    }

  }

  saveMethod() {
    // console.log(this.teamMembers.value);
    if (this.teamForm.value.teamMembers.length >= this.event.minTeamMembers) {
      console.log('save');
      console.log(this.teamForm.value.teamMembers);
      console.log(this.teamForm);
      const team = this.teamForm.value.teamName.toString().trim();
      for (const key in this.teamForm.value.teamMembers) {
        this.dbService.findUser(this.teamForm.value.teamMembers[key].email).subscribe(user => {
          this.dbService.teamRegister(user.id, this.eventId);
        });
      }
    } else {
      console.log('called');
      this.customSnackBar.showSnackBar('Minimum ' + this.event.minTeamMembers +
        ' team members required', '', 5);
    }
  }

  disableName() {
    return true;
  }
}

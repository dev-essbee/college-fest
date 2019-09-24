import {Component, OnInit} from '@angular/core';
import {FirebaseDatabaseService} from '../firebase-database.service';
import {User} from '../user';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {toTitleCase} from 'codelyzer/util/utils';
import {SnackbarService} from '../snackbar.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

// todo: fix error messages, autofill state and city from pincode
export class RegisterComponent implements OnInit {
  userDetailsForm: FormGroup;
  genders = [{id: 'f', value: 'Female'}, {id: 'm', value: 'Male'}, {id: 'o', value: 'Other'}];
  userDetailsValidMsg = {
    name: [{type: 'required', message: 'Please enter your full name'},
      {type: 'pattern', message: 'Should not start with space and special Characters not allowed'}],
    phoneNo: [{type: 'required', message: 'Please enter your mobile number'},
      {type: 'pattern', message: 'Enter valid mobile number'}],
    pinCode: [{type: 'required', message: 'Please enter your pincode'},
      {type: 'pattern', message: 'Enter valid pincode'}],
    gender: [{type: 'required', message: 'Please select a gender'}],
    city: [{type: 'required', message: 'Please enter your city name'},
      {type: 'pattern', message: 'Special Characters not allowed'}],
    state: [{type: 'required', message: 'Please enter your state name'},
      {type: 'pattern', message: 'Special Characters not allowed'}],
    college: [{type: 'required', message: 'Please enter your College/University name'},
      {type: 'pattern', message: 'Special Characters not allowed'}],
    address: [{type: 'required', message: 'Please enter your address'},
      {type: 'pattern', message: 'Special Characters not allowed'}]
  };


  constructor(private databaseService: FirebaseDatabaseService,
              private snackBarService: SnackbarService,
              private location: Location
  ) {
    this.userDetailsForm = this.createFormGroup();
  }

  ngOnInit() {
    console.log('subscribed');
    this.city.valueChanges
      .subscribe((city) => {
        console.log(this.transport);
        if (city.toString().trim().toLowerCase() === 'jaipur') {
          this.transport.enable();
        } else {
          this.transport.disable();
        }
      });

  }


  createFormGroup() {
    const data = this.getData();
    return new FormGroup({
      name: new FormControl(toTitleCase(data.name), [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\\s.]*')]),
      phoneNo: new FormControl(data.phoneNo, [Validators.required, Validators.pattern('[9876][0-9]{9}')]),
      pinCode: new FormControl(data.pinCode, [Validators.required, Validators.pattern('[0-9]{6}')]),
      gender: new FormControl(data.gender, [Validators.required]),
      city: new FormControl(toTitleCase(data.city), [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\\s.]*')]),
      state: new FormControl(toTitleCase(data.state), [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\\s.]*')]),
      college: new FormControl(toTitleCase(data.college), [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\\s.]*')]),
      address: new FormControl(toTitleCase(data.address), [Validators.required, Validators.pattern('[a-zA-Z0-9][a-zA-Z0-9\\s.,/()]*')]),
      transport: new FormControl({
          value: this.transStringToBool(data.transport),
          disabled: this.disableStringToBool(data.transport)
        },
      )
    });
  }

  disableStringToBool(transport) {
    return transport.value === '-1';
  }

  transStringToBool(trans) {
    return trans === '1';
  }

  transBoolToString(trans) {
    if (trans.value) {
      return '1';
    } else if (trans.enabled) {
      return '0';
    } else {
      return '-1';
    }
  }


  getData() {
    return this.databaseService.loggedInUserData;

  }

  get name() {
    return this.userDetailsForm.get('name');
  }

  get phoneNo() {
    return this.userDetailsForm.get('phoneNo');
  }

  get pinCode() {
    return this.userDetailsForm.get('pinCode');
  }

  get gender() {
    return this.userDetailsForm.get('gender');
  }

  get city() {
    return this.userDetailsForm.get('city');
  }

  get state() {
    return this.userDetailsForm.get('state');
  }

  get college() {
    return this.userDetailsForm.get('college');
  }

  get address() {
    return this.userDetailsForm.get('address');
  }

  get transport() {
    console.log('trans');
    console.log(this.userDetailsForm.get('transport'));
    return this.userDetailsForm.get('transport');
  }

  onSubmit() {
    const data = {
      name: this.name.value.toString().trim(),
      gender: this.gender.value,
      phoneNo: this.phoneNo.value,
      pinCode: this.pinCode.value,
      city: this.city.value.toString().trim(),
      state: this.state.value.toString().trim(),
      college: this.college.value.toString().trim(),
      address: this.address.value.toString().trim(),
      transport: this.transBoolToString(this.transport),
      newUser: false
    };
    console.log(this.transport.value);
    console.log(this.databaseService.updateData(data));
    this.snackBarService.showSnackBar('Data Updated Successfully', '', 2);
    this.location.back();
  }


}

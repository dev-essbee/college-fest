import {Component, OnInit} from '@angular/core';
import {FirebaseDatabaseService} from '../firebase-database.service';
import {User} from '../user';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userDetailsForm: FormGroup;
  userDetailsValidMsg = {
    name: [{type: 'required', message: 'Please enter your full name'}],
    phoneNo: [{type: 'required', message: 'Please enter your mobile number'}],
    pinCode: [{type: 'required', message: 'Please enter your pincode'}],
    gender: [{type: 'required', message: 'Please select a gender'}],
    city: [{type: 'required', message: 'Please enter your city name'}],
    state: [{type: 'required', message: 'Please enter your state name'}],
    college: [{type: 'required', message: 'Please enter your College/University name'}],
    address: [{type: 'required', message: 'Please enter your address'}]
  };

  constructor(public databaseService: FirebaseDatabaseService) {
    this.userDetailsForm = this.createFormGroup();
  }

  ngOnInit() {


  }


  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [Validators.required]),
      phoneNo: new FormControl('', [Validators.required]),
      pinCode: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      college: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required])
    });
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

  onSubmit() {

  }
}

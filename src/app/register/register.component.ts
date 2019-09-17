import {Component, OnInit} from '@angular/core';
import {FirebaseDatabaseService} from '../firebase-database.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(databaseService: FirebaseDatabaseService) {
  }

  ngOnInit() {

  }

}

import {Component, OnInit} from '@angular/core';
import {UserAuthService} from '../user-auth.service';
import {FirebaseDatabaseService} from '../firebase-database.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public auth: UserAuthService,
              public db: FirebaseDatabaseService) {
  }

  ngOnInit() {
  }

}

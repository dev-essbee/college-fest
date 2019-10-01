import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-register',
  templateUrl: './team-register.component.html',
  styleUrls: ['./team-register.component.css']
})
export class TeamRegisterComponent implements OnInit {
  @Input('eventDet') eventDet: any;

  constructor() {
  }

  ngOnInit() {
    console.log(this.eventDet);
  }

}

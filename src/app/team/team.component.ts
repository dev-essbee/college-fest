import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  emailSb = 'mailto:dev.sb18@gmail.com?cc=kumarrohitbindal@gmail.com&subject=Regarding sabrang website&body=Hi';
  emailRb = 'mailto:kumarrohitbindal@gmail.com?cc=dev.sb18@gmail.com&subject=Regarding sabrang website&body=Hi';

  faculty = [{name: 'Dr. Lokanath Mishra', contact: '9999558286'}, {
    name: 'Mr. Sami Ur Rehman',
    contact: '9982226747'
  }];
  students = [{name: 'Vishnu Agarwal', contact: '+91-8085194808'}, {
    name: 'Somesh Sharma',
    contact: '+91-9509703636'
  }, {name: 'Payal Sharma', contact: '+91-8112288381'}, {
    name: 'Ashish Kumar',
    contact: ''
  }, {name: 'Karan Sharma', contact: ''}, {
    name: 'Sonakshi Jhawar',
    contact: ''
  }, {name: 'Saransh Gupta', contact: ''}];
  web = [{
    name: 'Shubham Bhandari',
    mail: 'dev.sb18@gmail.com',
    profile: 'https://www.linkedin.com/in/this-is-sb/',
    mailTo: this.emailSb
  },
    {
      name: 'Rohit Kumar Bindal',
      mail: 'kumarrohitbindal@gmail.com',
      profile: 'https://www.linkedin.com/in/bindal-rohit/',
      mailTo: this.emailRb
    }];

  constructor() {
  }

  ngOnInit() {
  }

}

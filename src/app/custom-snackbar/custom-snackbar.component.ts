import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.css']
})
export class CustomSnackbarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {
    console.log(data);
  }

  ngOnInit() {
  }

  getIcon(type) {
    if (type === 'left') {
      return '../../assets/minimg/avatar-snackbar/grim-reaper-right.png';
    } else {
      return '../../assets/minimg/avatar-snackbar/grim-reaper-left.png';
    }
  }
}

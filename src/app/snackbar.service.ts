import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {
  }

  showSnackBar(message: string, action: string, dur: number) {
    if (dur !== 0) {
      return this.snackBar.open(message, action, {
        duration: dur * 1000,
        panelClass: ['snackbar-login']
      });
    } else {
      return this.snackBar.open(message, action, {
        panelClass: ['snackbar-login']
      });
    }
  }
}

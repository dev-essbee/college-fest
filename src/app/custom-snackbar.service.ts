import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackbarService} from './snackbar.service';
import {CustomSnackbarComponent} from './custom-snackbar/custom-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class CustomSnackbarService {

  constructor(private snackBar: MatSnackBar) {
  }

  public showSnackBar(message: string, action: string, duration: number) {
    this.snackBar.openFromComponent(CustomSnackbarComponent, {
      duration: duration * 1000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      data: {message}
    });
  }
}

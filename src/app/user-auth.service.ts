import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {first, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {FirebaseDatabaseService} from './firebase-database.service';
import {User} from './user';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {


  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private dbService: FirebaseDatabaseService,
    private snackBar: MatSnackBar
  ) {

  }

  async googleSignIn() {
    const route = this.router.url;
    console.log(route);
    const provider = new auth.GoogleAuthProvider();
    let credential;
    try {
      credential = await this.afAuth.auth.signInWithPopup(provider);
      console.log(this.dbService.loggedInUserData);
      this.showSnackBar('Login Successful', '', 3);
      return this.dbService.userSignedIn(credential.user, route);
    } catch (error) {
      const retrySnackbarRef = this.showSnackBar('Login Unsuccessful', 'RETRY', 5);
      retrySnackbarRef.onAction().subscribe(() => {
        retrySnackbarRef.dismiss();
        this.googleSignIn();
      });
    }

  }

  async signOut() {
    let route = this.router.url;
    await this.afAuth.auth.signOut();
    if (route === '/dashboard') {
      route = '/';
    }
    this.showSnackBar('Logout Successful', '', 3);
    this.router.navigate([route]);
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

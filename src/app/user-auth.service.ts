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
import {SnackbarService} from './snackbar.service';
import {CustomSnackbarService} from './custom-snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {


  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private dbService: FirebaseDatabaseService,
    private snackBar: SnackbarService,
    private customSnackBar: CustomSnackbarService
  ) {

  }

  async googleSignIn() {
    const route = this.router.url;
    // console.log(route);
    const provider = new auth.GoogleAuthProvider();
    let credential;
    try {
      credential = await this.afAuth.auth.signInWithPopup(provider);
      // console.log(this.dbService.loggedInUserData);
      this.customSnackBar.showSnackBar('Login Successful', '', 3);
      return this.dbService.userSignedIn(credential.user, route);
    } catch (error) {
      const retrySnackbarRef = this.snackBar.showSnackBar('Login Unsuccessful, maybe popups are disabled', 'RETRY', 5);
      retrySnackbarRef.onAction().subscribe(() => {
        retrySnackbarRef.dismiss();
        this.googleSignIn();
      });
      return false;
    }

  }

  async signOut() {
    let route = this.router.url;
    await this.afAuth.auth.signOut();
    if (route === '/dashboard') {
      route = '/';
    }
    this.customSnackBar.showSnackBar('Logout Successful', '', 3);
    this.router.navigate([route]);
  }


}

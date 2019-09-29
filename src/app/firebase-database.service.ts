import {Injectable} from '@angular/core';
import {User} from './user';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {first, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackbarService} from './snackbar.service';
import {CustomSnackbarService} from "./custom-snackbar.service";


@Injectable({
  providedIn: 'root'
})

export class FirebaseDatabaseService {
  loggedInUserData: User;

  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth,
              private router: Router,
              private snackBar: SnackbarService,
              private customSnackbar: CustomSnackbarService
  ) {
    console.log('read data called-user-db');
    this.readData().subscribe((userData) => {
      this.loggedInUserData = userData;
    });
  }

  createUserData(userRef, user) {
    const data = {
      id: user.uid,
      name: user.displayName,
      email: user.email,
      newUser: true,
      phoneNo: '',
      pinCode: '',
      gender: '',
      city: '',
      state: '',
      college: '',
      address: '',
      transport: '-1',
      participatingEvents: {
        0: false, 1: false, 2: false, 3: false, 4: false, 5: false,
        6: false, 7: false, 8: false, 9: false, 10: false, 11: false, 12: false, 13: false, 14: false, 15: false,
        16: false, 17: false, 18: false, 19: false, 20: false, 21: false, 22: false
      }

    };
    this.customSnackbar.showSnackBar('Hi ' + user.displayName + ', Welcome Onboard!', '', 3);
    return userRef.set(data, {merge: true});
  }

  readData(): Observable<User> {
    console.log('read data called');
    return this.afAuth.authState.pipe(
      switchMap(user => {
          if (user) {
            return this.afs.collection('users').doc(`${user.uid}`).valueChanges();
          } else {
            return of(null);
          }
        }
      )
    );
  }

  updateData(data) {
    return this.afs.collection('users').doc(this.loggedInUserData.id).set(data, {merge: true});
  }

  registerEvent(data) {
    if (this.loggedInUserData.participatingEvents[Object.keys(data.participatingEvents)[0]]) {
      this.customSnackbar.showSnackBar('You have already registered for this event', '', 3);
    } else {
      this.updateData(data);
      if (this.loggedInUserData.newUser) {
        this.router.navigate(['/register']);
      } else {
        this.customSnackbar.showSnackBar('You have successfully registered for the event.', '', 5);
      }
    }
  }

  userSignedIn(user, route) {
    const userRef: AngularFirestoreDocument<User> = this.afs.collection('users').doc(`${user.uid}`);
    console.log('create user data');
    userRef.ref.get().then((snapshot) => {
      if (!snapshot.exists) {
        console.log('in');
        console.log(snapshot.exists);
        return this.createUserData(userRef, user);
      }
    });
    // this.router.navigate([route]);

  }
}

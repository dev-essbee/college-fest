import {Injectable} from '@angular/core';
import {User, UserNew} from './user';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {first, switchMap} from 'rxjs/operators';
import {Observable, of} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class FirebaseDatabaseService {
  loggedInUserData: Observable<UserNew>;

  constructor(private aFSs: AngularFirestore,
              public aFAuth: AngularFireAuth) {
    this.loggedInUserData = this.aFAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.aFSs.collection('users').doc<UserNew>(`${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  /*

    createUser(user: User) {
      this.aFSs.collection('users').add({
        name: user.name,
        phoneNo: user.phoneNo,
        email: user.email,
        college: user.college,
        address: user.address,
        pinCode: user.pinCode,
        participatingEvents: user.participatingEvents,
        transportation: user.transportation
      }).then(() => {
        console.log('User Added');
      }).catch(error => {
        console.error('Error ', error);
      });
    }
  */

  readUser() {
    return new Promise<any>((resolve, reject) =>
      this.aFSs.collection('users').doc(this.user.uid).snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        }));
  }

  updateUser(value: User) {
    return this.aFSs.collection('users').doc(this.user.uid).set(value);
  }

  findNewUser(): Observable<User> {
    this.loggedInUserData = this.aFAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.aFSs.collection('users').doc<UserNew>(`${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    return of(null);
  }

}

import {Injectable} from '@angular/core';
import {User} from './user';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {first} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class FirebaseDatabaseService {
  user: any;

  constructor(private aFSs: AngularFirestore,
              public aFAuth: AngularFireAuth) {
    this.aFAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      }
    });
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
}

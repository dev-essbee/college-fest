import {Injectable} from '@angular/core';
import {User} from './user';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {first, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class FirebaseDatabaseService {
  loggedInUserData: User;

  constructor(private afs: AngularFirestore,
              private afAuth: AngularFireAuth,
              private router: Router,
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
      transport: '-1'

    };
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

  userSignedIn(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.collection('users').doc(`${user.uid}`);
    console.log('create user data');
    userRef.ref.get().then((snapshot) => {
      if (!snapshot.exists) {
        console.log('in');
        console.log(snapshot.exists);
        return this.createUserData(userRef, user);
      }
    });
    this.router.navigate(['/events']);

  }
}

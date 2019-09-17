import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDatabaseService {
  constructor(private db: AngularFireDatabase) {
  }

  // createUser(user: User) {
  //   this.db.collection('users').add({
  //     firName: user.firName,
  //     lastName: user.lastName,
  //     phoneNo: user.phoneNo,
  //     email: user.email,
  //     college: user.college,
  //     address: user.address,
  //     pinCode: user.pinCode,
  //     participatingEvents: user.participatingEvents,
  //     transportation: user.transportation
  //   }).then(() => {
  //     console.log('User Added');
  //   }).catch(error => {
  //     console.error('Error ', error);
  //   });
  // }

}

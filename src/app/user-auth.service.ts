import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {first, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {FirebaseDatabaseService} from './firebase-database.service';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {


  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private dbService: FirebaseDatabaseService
  ) {

  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    console.log(this.dbService.loggedInUserData);
    return this.dbService.userSignedIn(credential.user);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}

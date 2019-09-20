import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserNew} from './user';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {first, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {FirebaseDatabaseService} from './firebase-database.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  loggedInUser: any;

  constructor(private aFAuth: AngularFireAuth,
              private aFSs: AngularFirestore,
              private router: Router,
              private db: FirebaseDatabaseService
  ) {
    this.aFAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.loggedInUser = user;
      }
    });
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credentials = await this.aFAuth.auth.signInWithPopup(provider);
    return this.createUser(credentials.user);
  }

  private createUser(user) {
    const userRef: AngularFirestoreDocument<UserNew> = this.aFSs.collection('users').doc(`${user.uid}`);
    if (this.checkNewUser(userRef)) {
      const data: UserNew = {
          id: user.uid,
          email: user.email,
          name: user.displayName,
          newUser: true,
        }
      ;
      this.router.navigate(['/registration']);
      return userRef.set(data, {merge: true});
    } else {
      this.router.navigate(['/events']);
    }
  }

  async signOut() {
    await this.aFAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  checkNewUser(userRef) {
    FirebaseDatabaseService.findNewUser()
    return false;
  }

}

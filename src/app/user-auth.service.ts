import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {UserNew} from './user';
import {auth} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  loggedInUser: Observable<UserNew>;

  constructor(private aFAuth: AngularFireAuth,
              private aFSs: AngularFirestore,
              private router: Router
  ) {
    this.loggedInUser = this.aFAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.aFSs.collection('users').doc<UserNew>(`${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credentials = await this.aFAuth.auth.signInWithPopup(provider);
    return this.createUser(credentials.user);
  }

  private createUser(user) {
    const userRef: AngularFirestoreDocument<UserNew> = this.aFSs.collection('users').doc(`${user.uid}`);
    const data: UserNew = {
        id: user.uid,
        email: user.email,
        name: user.displayName,
      }
    ;
    this.router.navigate(['/events']);
    return userRef.set(data, {merge: true});
  }

  async signOut() {
    await this.aFAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}

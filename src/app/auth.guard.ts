import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserAuthService} from './user-auth.service';
import {map, take, tap} from 'rxjs/operators';
import {FirebaseDatabaseService} from './firebase-database.service';
import {SnackbarService} from "./snackbar.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: UserAuthService,
              private router: Router,
              private dbService: FirebaseDatabaseService,
              private snackBarService: SnackbarService,
              private authService: UserAuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.dbService.readData().pipe(
      // take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          // this.router.navigate(['/login']);
          // this.auth.googleSignIn();
          const loginSnackbarRef = this.snackBarService.showSnackBar('Please Login to continue', 'LOGIN', 0);
          loginSnackbarRef.onAction().subscribe(() => {
            loginSnackbarRef.dismiss();
            const res = this.authService.googleSignIn();
          });
        }
      })
    );
  }


}

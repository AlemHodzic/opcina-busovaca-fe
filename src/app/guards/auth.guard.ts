import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { validateCallback } from '@firebase/util';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})



export class AuthGuard implements CanActivate {
  public isLoggedIn() {
    return this.authService.authState.pipe().toPromise();
}
  test: any;
  constructor(private router: Router, private authService: AngularFireAuth) { }
  canActivate(): Observable<boolean> {
    return this.authService.authState.pipe(map((res) => {
      if (res){
        this.authService.updateCurrentUser
        return true;
      }else{ 
        this.router.navigate(['/'])
        return false;
       
      }
       
   
      
   }))

    /*this.authService.authState.subscribe(res => this.test = res.email)
    const isAuthenticated = await this.test ? true : false;
    if (!isAuthenticated) {
      alert('You must be authenticated in order to access this page');
    }
    return isAuthenticated; */


    
 
  }

}



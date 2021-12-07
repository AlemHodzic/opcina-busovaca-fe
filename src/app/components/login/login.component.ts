import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(private router: Router, public auth: AngularFireAuth) { }
  emailTest: string = '';
  password: string = '';
  admin: any;
  async ngOnInit() {
    this.auth.signOut()
  }

  login(email, password){
   
   this.auth.signInWithEmailAndPassword(email, password).then(
     res=> {
      this.router.navigateByUrl('admin/admin-panel')
     }
     
   )
  }



}

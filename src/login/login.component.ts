import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService, TokenPayload} from '../app/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: TokenPayload = {
    PRN: 0,
    UserName: '',
    Pass: '',
    Email: '',
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    console.log("In login Component");
    
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/register');
      },
      err => {
        console.error(err);
      }
    );
  }
}

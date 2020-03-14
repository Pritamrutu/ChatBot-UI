import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService , TokenPayload} from '../app/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  credentials: TokenPayload = {
    PRN: 0,
    UserName: '',
    Pass: '',
    Email: '',
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  register() {
    this.auth.register(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/login');
      },
      err => {
        console.error(err);
      }
    );
  }
}


import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StudentChatbot';
  constructor(private router: Router, public auth: AuthenticationService) {}

  public submit(): void {
    this.router.navigate(['/login']);
  }
  public submit2(): void {
    this.router.navigate(['/login']);
  }
}

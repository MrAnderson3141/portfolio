import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portfolio');
  otherOpen = false;

  constructor(private router: Router) {}

  goToWelcome() {
    this.router.navigate(['/welcome']);
  }

  toggleOther() {
    this.otherOpen = !this.otherOpen;
  }
}
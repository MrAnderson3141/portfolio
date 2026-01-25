import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private router = inject(Router);
  protected readonly title = signal('portfolio');

  public goToWelcome(){this.router.navigate(['/welcome']);}
  public goToProjects(){this.router.navigate(['/project']);}
  public goToExperiences(){this.router.navigate(['/experience']);}
  public goToHobbies(){this.router.navigate(['/hobbies']);}
}

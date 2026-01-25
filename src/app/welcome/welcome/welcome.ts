import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Carousel } from './carousel/carousel';

@Component({
  selector: 'app-welcome',
  imports: [Carousel],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  private router = inject(Router);

  constructor(){}

  public goToProj(){this.router.navigate(['/project']);}
  public goToIntern(){this.router.navigate(['/experience']);}
  public goToHobb(){this.router.navigate(['/hobbies']);}
}

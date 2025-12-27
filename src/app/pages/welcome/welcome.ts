import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carousel } from '../../carousel/carousel';

@Component({
  selector: 'app-welcome',
  imports: [Carousel],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {
  constructor(private router: Router) {}

  goToProj() {
    this.router.navigate(['/projects']);
  }

  goToIntern() {
    this.router.navigate(['/internships']);
  }

  goToHobb() {
    this.router.navigate(['/hobbies']);
  }

  goToCivil() {
    this.router.navigate(['/civil-engagement']);
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {

  french : boolean=true;
  english: boolean=false;

  public suiv(){
    this.french=!this.french;
    this.english=!this.english;
  }

  public open(pdf: string) {
    window.open(pdf, '_blank');
  }
}

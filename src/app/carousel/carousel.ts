import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  index = 0;

  pdfs = [
    { img: 'CV.png', pdf: 'CV.pdf', alt: 'CV Français',language:"French" },
    { img: 'CV.png', pdf: 'CV.pdf', alt: 'CV Anglais', language:"English" }
  ];

  next() {
    this.index = (this.index + 1) % this.pdfs.length;
  }

  prev() {
    this.index = (this.index - 1 + this.pdfs.length) % this.pdfs.length;
  }

  open(pdf: string) {
    window.open(pdf, '_blank');
  }

}

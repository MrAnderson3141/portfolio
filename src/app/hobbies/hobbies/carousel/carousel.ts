import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  isOpen:boolean=false;
  index:number=0;
  photos = ['Photo1.jpg','Photo2.jpg','Photo3.jpg',
    'Photo4.jpg','Photo5.jpg','Photo6.jpg','Photo7.jpg'];

  next(){
    this.index=(this.index+1)%this.photos.length;
  }

  prev(){
    this.index = (this.index-1+this.photos.length)%this.photos.length;
  }

  open(){
    this.isOpen=!this.isOpen;
  }
}

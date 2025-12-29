import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-photo',
  templateUrl: './carousel-photo.html',
  styleUrls: ['./carousel-photo.css'],
})
export class CarouselPhoto {
  index = 0;
  lightboxOpen = false;
  currentPhoto: { img: string; alt: string } | null = null;

  photos = [
    { img: 'Photo1.jpg', alt: 'Photo 1' },
    { img: 'Photo2.jpg', alt: 'Photo 2' },
    { img: 'Photo3.jpg', alt: 'Photo 3' },
    { img: 'Photo4.jpg', alt: 'Photo 4' },
    { img: 'Photo5.jpg', alt: 'Photo 5' },
    { img: 'Photo6.jpg', alt: 'Photo 6' },
    { img: 'Photo7.jpg', alt: 'Photo 7' },
  ];

  next() {
    this.index = (this.index + 1) % this.photos.length;
  }

  prev() {
    this.index = (this.index - 1 + this.photos.length) % this.photos.length;
  }

 
  open(photo: { img: string; alt: string }) {
    this.currentPhoto = photo;
    this.lightboxOpen = true;
  }

  close() {
    this.lightboxOpen = false;
    this.currentPhoto = null;
  }
}

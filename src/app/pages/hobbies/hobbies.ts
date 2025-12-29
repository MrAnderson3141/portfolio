import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselPhoto } from '../../carousel-photo/carousel-photo';

@Component({
  selector: 'app-hobbies',
  imports: [CarouselPhoto],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Hobbies {

}

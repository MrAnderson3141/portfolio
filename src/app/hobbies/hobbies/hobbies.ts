import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Carousel } from './carousel/carousel';

@Component({
  selector: 'app-hobbies',
  imports: [Carousel],
  templateUrl: './hobbies.html',
  styleUrl: './hobbies.css',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Hobbies {

}

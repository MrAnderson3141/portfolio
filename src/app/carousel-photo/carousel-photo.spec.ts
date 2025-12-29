import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPhoto } from './carousel-photo';

describe('CarouselPhoto', () => {
  let component: CarouselPhoto;
  let fixture: ComponentFixture<CarouselPhoto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselPhoto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPhoto);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

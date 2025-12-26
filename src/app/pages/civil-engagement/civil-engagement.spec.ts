import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilEngagement } from './civil-engagement';

describe('CivilEngagement', () => {
  let component: CivilEngagement;
  let fixture: ComponentFixture<CivilEngagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CivilEngagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CivilEngagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

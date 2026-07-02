import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Drums } from './drums';

describe('Drums', () => {
  let component: Drums;
  let fixture: ComponentFixture<Drums>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Drums],
    }).compileComponents();

    fixture = TestBed.createComponent(Drums);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

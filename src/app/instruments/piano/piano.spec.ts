import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Piano } from './piano';

describe('Piano', () => {
  let component: Piano;
  let fixture: ComponentFixture<Piano>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Piano],
    }).compileComponents();

    fixture = TestBed.createComponent(Piano);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

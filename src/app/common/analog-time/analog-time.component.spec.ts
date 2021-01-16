import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogTimeComponent } from './analog-time.component';

describe('AnalogTimeComponent', () => {
  let component: AnalogTimeComponent;
  let fixture: ComponentFixture<AnalogTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalogTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalogTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

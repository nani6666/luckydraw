import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckydrawpageComponent } from './luckydrawpage.component';

describe('LuckydrawpageComponent', () => {
  let component: LuckydrawpageComponent;
  let fixture: ComponentFixture<LuckydrawpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckydrawpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckydrawpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

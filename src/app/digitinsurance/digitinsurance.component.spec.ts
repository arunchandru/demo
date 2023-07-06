import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitinsuranceComponent } from './digitinsurance.component';

describe('DigitinsuranceComponent', () => {
  let component: DigitinsuranceComponent;
  let fixture: ComponentFixture<DigitinsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitinsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitinsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NPSTComponent } from './npst.component';

describe('NPSTComponent', () => {
  let component: NPSTComponent;
  let fixture: ComponentFixture<NPSTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NPSTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NPSTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

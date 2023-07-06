import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChennaiinterviewComponent } from './chennaiinterview.component';

describe('ChennaiinterviewComponent', () => {
  let component: ChennaiinterviewComponent;
  let fixture: ComponentFixture<ChennaiinterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChennaiinterviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChennaiinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

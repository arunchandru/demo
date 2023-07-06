import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TibilsolutionsComponent } from './tibilsolutions.component';

describe('TibilsolutionsComponent', () => {
  let component: TibilsolutionsComponent;
  let fixture: ComponentFixture<TibilsolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TibilsolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TibilsolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

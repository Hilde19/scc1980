import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummeComponent } from './summe.component';

describe('SummeComponent', () => {
  let component: SummeComponent;
  let fixture: ComponentFixture<SummeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

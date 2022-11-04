import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BowleComponent } from './bowle.component';

describe('BowleComponent', () => {
  let component: BowleComponent;
  let fixture: ComponentFixture<BowleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BowleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BowleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

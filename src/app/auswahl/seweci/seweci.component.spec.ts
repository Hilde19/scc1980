import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeweciComponent } from './seweci.component';

describe('SeweciComponent', () => {
  let component: SeweciComponent;
  let fixture: ComponentFixture<SeweciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeweciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeweciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

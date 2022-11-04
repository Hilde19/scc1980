import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BockwurstComponent } from './bockwurst.component';

describe('BockwurstComponent', () => {
  let component: BockwurstComponent;
  let fixture: ComponentFixture<BockwurstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BockwurstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BockwurstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarzahlComponent } from './barzahl.component';

describe('BarzahlComponent', () => {
  let component: BarzahlComponent;
  let fixture: ComponentFixture<BarzahlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarzahlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarzahlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

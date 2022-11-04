import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MischeOEisComponent } from './mische-o-eis.component';

describe('MischeOEisComponent', () => {
  let component: MischeOEisComponent;
  let fixture: ComponentFixture<MischeOEisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MischeOEisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MischeOEisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

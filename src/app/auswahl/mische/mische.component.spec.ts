import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MischeComponent } from './mische.component';

describe('MischeComponent', () => {
  let component: MischeComponent;
  let fixture: ComponentFixture<MischeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MischeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MischeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

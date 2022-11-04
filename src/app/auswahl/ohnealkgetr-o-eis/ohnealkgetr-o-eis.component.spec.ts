import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhnealkgetrOEisComponent } from './ohnealkgetr-o-eis.component';

describe('OhnealkgetrOEisComponent', () => {
  let component: OhnealkgetrOEisComponent;
  let fixture: ComponentFixture<OhnealkgetrOEisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhnealkgetrOEisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhnealkgetrOEisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

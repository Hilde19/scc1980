import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OhnealkgetrComponent } from './ohnealkgetr.component';

describe('OhnealkgetrComponent', () => {
  let component: OhnealkgetrComponent;
  let fixture: ComponentFixture<OhnealkgetrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OhnealkgetrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OhnealkgetrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

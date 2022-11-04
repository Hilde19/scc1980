import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetraenkComponent } from './getraenk.component';

describe('GetraenkComponent', () => {
  let component: GetraenkComponent;
  let fixture: ComponentFixture<GetraenkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetraenkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetraenkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

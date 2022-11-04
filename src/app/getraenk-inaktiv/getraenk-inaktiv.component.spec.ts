import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetraenkInaktivComponent } from './getraenk-inaktiv.component';

describe('GetraenkInaktivComponent', () => {
  let component: GetraenkInaktivComponent;
  let fixture: ComponentFixture<GetraenkInaktivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetraenkInaktivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetraenkInaktivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

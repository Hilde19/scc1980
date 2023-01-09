import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mischer01AusgabeComponent } from './mischer01-ausgabe.component';

describe('Mischer01AusgabeComponent', () => {
  let component: Mischer01AusgabeComponent;
  let fixture: ComponentFixture<Mischer01AusgabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mischer01AusgabeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mischer01AusgabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

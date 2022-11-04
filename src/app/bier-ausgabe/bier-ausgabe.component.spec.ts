import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BierAusgabeComponent } from './bier-ausgabe.component';

describe('BierAusgabeComponent', () => {
  let component: BierAusgabeComponent;
  let fixture: ComponentFixture<BierAusgabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BierAusgabeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BierAusgabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

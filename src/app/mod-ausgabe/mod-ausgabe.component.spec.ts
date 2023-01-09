import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModAusgabeComponent } from './mod-ausgabe.component';

describe('ModAusgabeComponent', () => {
  let component: ModAusgabeComponent;
  let fixture: ComponentFixture<ModAusgabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModAusgabeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModAusgabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

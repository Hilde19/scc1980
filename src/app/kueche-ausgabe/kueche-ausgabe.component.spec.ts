import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KuecheAusgabeComponent } from './kueche-ausgabe.component';

describe('KuecheAusgabeComponent', () => {
  let component: KuecheAusgabeComponent;
  let fixture: ComponentFixture<KuecheAusgabeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KuecheAusgabeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KuecheAusgabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

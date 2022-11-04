import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcGeraetComponent } from './ec-geraet.component';

describe('EcGeraetComponent', () => {
  let component: EcGeraetComponent;
  let fixture: ComponentFixture<EcGeraetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcGeraetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcGeraetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

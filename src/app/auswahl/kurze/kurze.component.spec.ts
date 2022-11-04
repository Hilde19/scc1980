import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KurzeComponent } from './kurze.component';

describe('KurzeComponent', () => {
  let component: KurzeComponent;
  let fixture: ComponentFixture<KurzeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KurzeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KurzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
